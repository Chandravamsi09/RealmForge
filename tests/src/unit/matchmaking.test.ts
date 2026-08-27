import { Matchmaker } from '@realmforge/server/matchmaking/Matchmaker';
import { InMemoryRedisClient } from '@realmforge/server/matchmaking/RedisClient';
import { RoomManager } from '@realmforge/server/game/RoomManager';
import { GameMode } from '@realmforge/shared';

describe('Matchmaking Service Unit Tests', () => {
  let redis: InMemoryRedisClient;
  let roomManager: RoomManager;
  let matchmaker: Matchmaker;

  beforeEach(() => {
    redis = new InMemoryRedisClient();
    roomManager = new RoomManager();
    matchmaker = new Matchmaker(redis, roomManager);
  });

  afterEach(() => {
    matchmaker.stopWorker();
    roomManager.clear();
    redis.clear();
  });

  it('should enqueue and dequeue players in matchmaking queue', async () => {
    await matchmaker.enqueue({
      userId: 'user-1',
      username: 'Player1',
      socketId: 'sock-1',
      mode: GameMode.COOP_2P,
      eloRating: 1200,
      joinedAt: Date.now(),
    });

    const size = await matchmaker.getQueueSize(GameMode.COOP_2P);
    expect(size).toBe(1);

    const ticket = await matchmaker.getTicket('user-1');
    expect(ticket?.username).toBe('Player1');
    expect(ticket?.eloRating).toBe(1200);

    // Dequeue
    await matchmaker.dequeue('user-1', GameMode.COOP_2P);
    const sizeAfter = await matchmaker.getQueueSize(GameMode.COOP_2P);
    expect(sizeAfter).toBe(0);
  });

  it('should pair two players with close ELO ratings into a 2P Co-op match', async () => {
    const now = Date.now();

    await matchmaker.enqueue({
      userId: 'user-a',
      username: 'DefenderAlpha',
      socketId: 'sock-a',
      mode: GameMode.COOP_2P,
      eloRating: 1100,
      joinedAt: now,
    });

    await matchmaker.enqueue({
      userId: 'user-b',
      username: 'DefenderBeta',
      socketId: 'sock-b',
      mode: GameMode.COOP_2P,
      eloRating: 1120, // Within ±50
      joinedAt: now,
    });

    const matches = await matchmaker.processModeQueue(GameMode.COOP_2P);
    expect(matches.length).toBe(1);

    const match = matches[0]!;
    expect(match.players.length).toBe(2);
    expect(match.mode).toBe(GameMode.COOP_2P);
    expect(match.players.some(p => p.userId === 'user-a')).toBe(true);
    expect(match.players.some(p => p.userId === 'user-b')).toBe(true);

    // Queue should now be empty
    const size = await matchmaker.getQueueSize(GameMode.COOP_2P);
    expect(size).toBe(0);
  });

  it('should not pair players with large ELO discrepancy until window expands', async () => {
    const now = Date.now();

    // High ELO player joined just now
    await matchmaker.enqueue({
      userId: 'pro-user',
      username: 'ProPlayer',
      socketId: 'sock-pro',
      mode: GameMode.PVP_1V1,
      eloRating: 2000,
      joinedAt: now,
    });

    // Beginner player joined just now
    await matchmaker.enqueue({
      userId: 'novice-user',
      username: 'NovicePlayer',
      socketId: 'sock-novice',
      mode: GameMode.PVP_1V1,
      eloRating: 1000,
      joinedAt: now,
    });

    // Immediate scan: delta is 1000, max range is 50 -> no match
    const initialMatches = await matchmaker.processModeQueue(GameMode.PVP_1V1);
    expect(initialMatches.length).toBe(0);

    // Simulate 35 seconds elapsed for pro player ticket
    const oldTicket = await matchmaker.getTicket('pro-user');
    oldTicket!.joinedAt = now - 35000;
    await redis.set(`matchmaking:ticket:pro-user`, JSON.stringify(oldTicket));

    // Now window has expanded to 1000 -> match forms!
    const expandedMatches = await matchmaker.processModeQueue(GameMode.PVP_1V1);
    expect(expandedMatches.length).toBe(1);
  });
});
