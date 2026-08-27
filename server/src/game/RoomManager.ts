import { GameRoom } from './GameRoom';
import { GameMode, RoomStatus } from '@realmforge/shared';
import { Server as SocketIOServer } from 'socket.io';
import crypto from 'crypto';

export class RoomManager {
  private rooms: Map<string, GameRoom> = new Map();
  private io?: SocketIOServer;

  constructor(io?: SocketIOServer) {
    this.io = io;
  }

  setIo(io: SocketIOServer): void {
    this.io = io;
  }

  createRoom(mode: GameMode = GameMode.SOLO): GameRoom {
    const roomId = `room_${crypto.randomBytes(4).toString('hex')}`;
    const room = new GameRoom(roomId, mode, this.io);
    this.rooms.set(roomId, room);
    return room;
  }

  getRoom(roomId: string): GameRoom | null {
    return this.rooms.get(roomId) || null;
  }

  findAvailableRoom(mode: GameMode): GameRoom | null {
    for (const room of this.rooms.values()) {
      if (room.mode === mode && room.status === RoomStatus.LOBBY && room.players.size < 4) {
        return room;
      }
    }
    return null;
  }

  removeRoom(roomId: string): void {
    const room = this.rooms.get(roomId);
    if (room) {
      room.stop();
      this.rooms.delete(roomId);
    }
  }

  getActiveRoomCount(): number {
    return this.rooms.size;
  }

  clear(): void {
    for (const room of this.rooms.values()) {
      room.stop();
    }
    this.rooms.clear();
  }
}

export const defaultRoomManager = new RoomManager();
