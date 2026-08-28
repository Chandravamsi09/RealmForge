import request from 'supertest';
import { app } from '@realmforge/server';
import { defaultMatchmaker } from '@realmforge/server/matchmaking/Matchmaker';
import { defaultRoomManager } from '@realmforge/server/game/RoomManager';
import { defaultMatchRepository } from '@realmforge/server/persistence/MatchRepository';
import { defaultStatsRepository } from '@realmforge/server/persistence/StatsRepository';
import {
  GameMode,
  ActionType,
  TowerType,
  PlaceTowerAction,
  LeaderboardCategory,
} from '@realmforge/shared';

describe('Complete Full-Stack Gameplay Journey (E2E Integration)', () => {
  let player1Token: string;
  let player1Id: string;
  let player2Id: string;
  const rand = Math.floor(Math.random() * 1000000);
  const p1Uname = `Vanguard_${rand}`;
  const p2Uname = `Arcane_${rand}`;

  beforeAll(async () => {
    // 1. Signup Player 1
    const p1Res = await request(app)
      .post('/api/auth/signup')
      .send({
        username: p1Uname,
        email: `vanguard_${rand}@realmforge.gg`,
        password: 'Password123!',
      });
    player1Token = p1Res.body.tokens.accessToken;
    player1Id = p1Res.body.user.id;

    // 2. Signup Player 2
    const p2Res = await request(app)
      .post('/api/auth/signup')
      .send({
        username: p2Uname,
        email: `arcane_${rand}@realmforge.gg`,
        password: 'Password123!',
      });
    player2Id = p2Res.body.user.id;
  });

  it('should execute full lifecycle: Matchmaking -> Simulation -> Persistence -> Leaderboard', async () => {
    // Step 1: Enqueue both players into 2P Co-op matchmaking
    const now = Date.now();
    await defaultMatchmaker.enqueue({
      userId: player1Id,
      username: p1Uname,
      socketId: 'sock_p1',
      mode: GameMode.COOP_2P,
      eloRating: 1000,
      joinedAt: now,
    });

    await defaultMatchmaker.enqueue({
      userId: player2Id,
      username: p2Uname,
      socketId: 'sock_p2',
      mode: GameMode.COOP_2P,
      eloRating: 1000,
      joinedAt: now,
    });

    // Step 2: Matchmaker finds match and creates GameRoom
    const matches = await defaultMatchmaker.processModeQueue(GameMode.COOP_2P);
    expect(matches.length).toBeGreaterThan(0);
    const matchEvent = matches[0]!;
    expect(matchEvent.players.length).toBe(2);

    const room = defaultRoomManager.getRoom(matchEvent.roomId)!;
    expect(room).toBeDefined();

    // Step 3: Simulation Gameplay Actions (Placing towers)
    const placeP1: PlaceTowerAction = {
      actionId: 'act_p1_1',
      playerId: player1Id,
      type: ActionType.PLACE_TOWER,
      clientTimestamp: Date.now(),
      towerType: TowerType.ARCHER,
      gridX: 1,
      gridY: 1,
    };
    const placeP2: PlaceTowerAction = {
      actionId: 'act_p2_1',
      playerId: player2Id,
      type: ActionType.PLACE_TOWER,
      clientTimestamp: Date.now(),
      towerType: TowerType.MAGE,
      gridX: 2,
      gridY: 1,
    };

    expect(room.processAction(placeP1)).toBe(true);
    expect(room.processAction(placeP2)).toBe(true);

    // Step 4: Finalize match and persist statistics
    const matchRecord = await defaultMatchRepository.createMatch(GameMode.COOP_2P, 'forest_crossing');
    const finalized = await defaultMatchRepository.finalizeMatch(matchRecord.id, {
      durationSeconds: 320,
      wavesSurvived: 15,
      winnerTeam: 1,
      participants: [
        {
          userId: player1Id,
          username: p1Uname,
          team: 1,
          damageDealt: 45000,
          towersPlaced: 8,
          enemiesKilled: 120,
          goldEarned: 3500,
          score: 2400,
          eloDelta: 25,
        },
        {
          userId: player2Id,
          username: p2Uname,
          team: 1,
          damageDealt: 38000,
          towersPlaced: 6,
          enemiesKilled: 95,
          goldEarned: 3100,
          score: 2100,
          eloDelta: 25,
        },
      ],
    });

    expect(finalized.status).toBe('COMPLETED');
    expect(finalized.participants.length).toBe(2);

    // Update Player Stats in DB
    await defaultStatsRepository.recordMatchStats(player1Id, {
      isWin: true,
      damageDealt: 45000,
      kills: 120,
      wavesSurvived: 15,
      eloDelta: 25,
    });

    // Step 5: Verify REST APIs return updated persistence and profile data
    const p1StatsRes = await request(app)
      .get(`/api/stats/user/${player1Id}`)
      .set('Authorization', `Bearer ${player1Token}`);

    expect(p1StatsRes.status).toBe(200);
    expect(p1StatsRes.body.stats.wins).toBe(1);
    expect(p1StatsRes.body.stats.eloRating).toBe(1025);

    // Step 6: Verify Leaderboard contains player
    const leaderRes = await request(app)
      .get('/api/leaderboard')
      .query({ category: LeaderboardCategory.ELO, limit: 10 });

    expect(leaderRes.status).toBe(200);
    expect(leaderRes.body.leaderboard.length).toBeGreaterThan(0);
  });
});
