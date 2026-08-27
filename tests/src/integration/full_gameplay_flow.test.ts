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
  let player2Token: string;
  let player2Id: string;

  beforeAll(async () => {
    // 1. Signup Player 1
    const p1Res = await request(app)
      .post('/api/auth/signup')
      .send({
        username: 'VanguardLeader',
        email: 'vanguard@realmforge.gg',
        password: 'Password123!',
      });
    player1Token = p1Res.body.tokens.accessToken;
    player1Id = p1Res.body.user.id;

    // 2. Signup Player 2
    const p2Res = await request(app)
      .post('/api/auth/signup')
      .send({
        username: 'ArcaneSupport',
        email: 'arcane@realmforge.gg',
        password: 'Password123!',
      });
    player2Token = p2Res.body.tokens.accessToken;
    player2Id = p2Res.body.user.id;
  });

  it('should execute full lifecycle: Matchmaking -> Simulation -> Persistence -> Leaderboard', async () => {
    // Step 1: Enqueue both players into 2P Co-op matchmaking
    const now = Date.now();
    await defaultMatchmaker.enqueue({
      userId: player1Id,
      username: 'VanguardLeader',
      socketId: 'sock_p1',
      mode: GameMode.COOP_2P,
      eloRating: 1000,
      joinedAt: now,
    });

    await defaultMatchmaker.enqueue({
      userId: player2Id,
      username: 'ArcaneSupport',
      socketId: 'sock_p2',
      mode: GameMode.COOP_2P,
      eloRating: 1000,
      joinedAt: now,
    });

    // Step 2: Matchmaker finds match and allocates GameRoom
    const matches = await defaultMatchmaker.processModeQueue(GameMode.COOP_2P);
    expect(matches.length).toBe(1);

    const roomId = matches[0]!.roomId;
    const room = defaultRoomManager.getRoom(roomId)!;
    expect(room).toBeDefined();
    expect(room.players.size).toBe(2);

    // Step 3: Start match and process tactical tower placements
    room.start();

    const p1PlaceAction: PlaceTowerAction = {
      actionId: 'p1_act_1',
      playerId: player1Id,
      type: ActionType.PLACE_TOWER,
      clientTimestamp: Date.now(),
      towerType: TowerType.ARCHER,
      gridX: 2,
      gridY: 3,
    };

    const p2PlaceAction: PlaceTowerAction = {
      actionId: 'p2_act_1',
      playerId: player2Id,
      type: ActionType.PLACE_TOWER,
      clientTimestamp: Date.now(),
      towerType: TowerType.MAGE,
      gridX: 4,
      gridY: 7,
    };

    expect(room.processAction(p1PlaceAction)).toBe(true);
    expect(room.processAction(p2PlaceAction)).toBe(true);

    // Step 4: Simulate 100 ticks (5 seconds) of authoritative combat
    for (let i = 0; i < 100; i++) {
      room.world.tick(50);
    }

    const snapshot = room.generateSnapshot();
    expect(snapshot.entities.length).toBeGreaterThan(0);
    expect(snapshot.stateChecksum).toBeGreaterThan(0);

    // Step 5: Finalize match outcomes in Database Repository
    const matchRecord = await defaultMatchRepository.createMatch(GameMode.COOP_2P, 'forest_crossing');
    await defaultMatchRepository.finalizeMatch(matchRecord.id, {
      durationSeconds: 300,
      wavesSurvived: 12,
      winnerTeam: 1,
      participants: [
        {
          userId: player1Id,
          username: 'VanguardLeader',
          team: 1,
          damageDealt: 18000,
          towersPlaced: 4,
          enemiesKilled: 60,
          goldEarned: 2200,
          score: 1100,
          eloDelta: 25,
        },
        {
          userId: player2Id,
          username: 'ArcaneSupport',
          team: 1,
          damageDealt: 24000,
          towersPlaced: 3,
          enemiesKilled: 85,
          goldEarned: 2500,
          score: 1350,
          eloDelta: 25,
        },
      ],
    });

    // Record stats for both players
    await defaultStatsRepository.recordMatchStats(player1Id, {
      isWin: true,
      damageDealt: 18000,
      kills: 60,
      wavesSurvived: 12,
      eloDelta: 25,
    });

    await defaultStatsRepository.recordMatchStats(player2Id, {
      isWin: true,
      damageDealt: 24000,
      kills: 85,
      wavesSurvived: 12,
      eloDelta: 25,
    });

    // Step 6: Verify updated match history and stats via REST API
    const p1HistoryRes = await request(app)
      .get('/api/matches/history')
      .set('Authorization', `Bearer ${player1Token}`);

    expect(p1HistoryRes.status).toBe(200);
    expect(p1HistoryRes.body.history.length).toBeGreaterThan(0);

    const p1StatsRes = await request(app)
      .get('/api/stats/me')
      .set('Authorization', `Bearer ${player1Token}`);

    expect(p1StatsRes.status).toBe(200);
    expect(p1StatsRes.body.stats.wins).toBe(1);
    expect(p1StatsRes.body.stats.eloRating).toBe(1025);

    const p2StatsRes = await request(app)
      .get('/api/stats/me')
      .set('Authorization', `Bearer ${player2Token}`);

    expect(p2StatsRes.status).toBe(200);
    expect(p2StatsRes.body.stats.wins).toBe(1);
    expect(p2StatsRes.body.stats.totalKills).toBe(85);

    // Step 7: Verify global leaderboard rankings
    const leaderboardRes = await request(app).get(`/api/leaderboard?category=${LeaderboardCategory.ELO}`);
    expect(leaderboardRes.status).toBe(200);
    const topPlayers = leaderboardRes.body.leaderboard;
    expect(topPlayers.some((p: any) => p.userId === player1Id)).toBe(true);
    expect(topPlayers.some((p: any) => p.userId === player2Id)).toBe(true);

    room.stop();
  });
});
