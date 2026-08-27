import { GameMode, PlayerSession } from '@realmforge/shared';
import { IRedisClient, defaultRedisClient } from './RedisClient';
import { RoomManager, defaultRoomManager } from '../game/RoomManager';
import { Server as SocketIOServer } from 'socket.io';

export interface MatchTicket {
  userId: string;
  username: string;
  avatar?: string;
  socketId: string;
  mode: GameMode;
  eloRating: number;
  joinedAt: number;
}

export interface MatchFoundResult {
  roomId: string;
  mode: GameMode;
  players: PlayerSession[];
}

export class Matchmaker {
  private redis: IRedisClient;
  private roomManager: RoomManager;
  private io?: SocketIOServer;
  private intervalId: NodeJS.Timeout | null = null;
  private isProcessing: boolean = false;

  constructor(
    redis: IRedisClient = defaultRedisClient,
    roomManager: RoomManager = defaultRoomManager,
    io?: SocketIOServer,
  ) {
    this.redis = redis;
    this.roomManager = roomManager;
    this.io = io;
  }

  setIo(io: SocketIOServer): void {
    this.io = io;
  }

  private getQueueKey(mode: GameMode): string {
    return `matchmaking:queue:${mode}`;
  }

  private getTicketKey(userId: string): string {
    return `matchmaking:ticket:${userId}`;
  }

  async enqueue(ticket: MatchTicket): Promise<void> {
    const queueKey = this.getQueueKey(ticket.mode);
    const ticketKey = this.getTicketKey(ticket.userId);

    // Save ticket data and add to sorted set scored by ELO rating
    await this.redis.set(ticketKey, JSON.stringify(ticket));
    await this.redis.zadd(queueKey, ticket.eloRating, ticket.userId);
  }

  async dequeue(userId: string, mode: GameMode): Promise<void> {
    const queueKey = this.getQueueKey(mode);
    const ticketKey = this.getTicketKey(userId);

    await this.redis.zrem(queueKey, userId);
    await this.redis.del(ticketKey);
  }

  async getTicket(userId: string): Promise<MatchTicket | null> {
    const data = await this.redis.get(this.getTicketKey(userId));
    if (!data) return null;
    return JSON.parse(data);
  }

  async getQueueSize(mode: GameMode): Promise<number> {
    return this.redis.zcard(this.getQueueKey(mode));
  }

  /**
   * Scans the queue for a given mode and matches eligible players.
   */
  async processModeQueue(mode: GameMode): Promise<MatchFoundResult[]> {
    const queueKey = this.getQueueKey(mode);
    const candidateUserIds = await this.redis.zrangebyscore(queueKey, '-inf', '+inf');
    if (candidateUserIds.length === 0) return [];

    const requiredCount = mode === GameMode.COOP_4P ? 4 : mode === GameMode.SOLO ? 1 : 2;
    if (candidateUserIds.length < requiredCount) return [];

    // Fetch all tickets
    const tickets: MatchTicket[] = [];
    for (const userId of candidateUserIds) {
      const ticket = await this.getTicket(userId);
      if (ticket) {
        tickets.push(ticket);
      }
    }

    const now = Date.now();
    const matchedResults: MatchFoundResult[] = [];
    const usedUserIds = new Set<string>();

    for (let i = 0; i < tickets.length; i++) {
      const primary = tickets[i]!;
      if (usedUserIds.has(primary.userId)) continue;

      if (requiredCount === 1) {
        // Solo immediate match
        usedUserIds.add(primary.userId);
        const match = await this.createMatch([primary], mode);
        matchedResults.push(match);
        continue;
      }

      // Compute expanding ELO window based on wait time
      const waitTimeSec = (now - primary.joinedAt) / 1000;
      let eloRange = 50;
      if (waitTimeSec > 30) eloRange = 1000;
      else if (waitTimeSec > 15) eloRange = 300;
      else if (waitTimeSec > 5) eloRange = 150;

      const matchedGroup: MatchTicket[] = [primary];
      usedUserIds.add(primary.userId);

      for (let j = 0; j < tickets.length; j++) {
        if (matchedGroup.length >= requiredCount) break;
        const candidate = tickets[j]!;
        if (usedUserIds.has(candidate.userId)) continue;

        if (Math.abs(candidate.eloRating - primary.eloRating) <= eloRange) {
          matchedGroup.push(candidate);
          usedUserIds.add(candidate.userId);
        }
      }

      if (matchedGroup.length === requiredCount) {
        const match = await this.createMatch(matchedGroup, mode);
        matchedResults.push(match);
      } else {
        // Un-mark if group couldn't be completed
        for (const t of matchedGroup) {
          usedUserIds.delete(t.userId);
        }
      }
    }

    return matchedResults;
  }

  private async createMatch(
    tickets: MatchTicket[],
    mode: GameMode,
  ): Promise<MatchFoundResult> {
    const room = this.roomManager.createRoom(mode);

    const players: PlayerSession[] = [];
    for (let i = 0; i < tickets.length; i++) {
      const t = tickets[i]!;
      const session = room.addPlayer({
        userId: t.userId,
        socketId: t.socketId,
        username: t.username,
        avatar: t.avatar,
        isHost: i === 0,
      });
      players.push(session);

      // Clean from queue
      await this.dequeue(t.userId, mode);
    }

    const result: MatchFoundResult = {
      roomId: room.roomId,
      mode,
      players,
    };

    if (this.io) {
      for (const t of tickets) {
        this.io.to(t.socketId).emit('match_found', result);
      }
    }

    return result;
  }

  startWorker(intervalMs: number = 1000): void {
    if (this.intervalId) return;
    this.intervalId = setInterval(async () => {
      if (this.isProcessing) return;
      this.isProcessing = true;
      try {
        await this.processModeQueue(GameMode.SOLO);
        await this.processModeQueue(GameMode.COOP_2P);
        await this.processModeQueue(GameMode.PVP_1V1);
        await this.processModeQueue(GameMode.COOP_4P);
      } catch (err) {
        console.error('[Matchmaker] Error processing queue:', err);
      } finally {
        this.isProcessing = false;
      }
    }, intervalMs);
  }

  stopWorker(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

export const defaultMatchmaker = new Matchmaker();
