import request from 'supertest';
import { app } from '@realmforge/server';
import { defaultMatchRepository } from '@realmforge/server/persistence/MatchRepository';
import { defaultStatsRepository } from '@realmforge/server/persistence/StatsRepository';
import { GameMode } from '@realmforge/shared';

describe('Persistence API Integration Tests', () => {
  let authToken: string;
  let userId: string;

  beforeAll(async () => {
    const signupRes = await request(app)
      .post('/api/auth/signup')
      .send({
        username: 'StatsChampion',
        email: 'champs@realmforge.gg',
        password: 'Password123!',
      });
    authToken = signupRes.body.tokens.accessToken;
    userId = signupRes.body.user.id;

    // Seed a completed match for this user
    const match = await defaultMatchRepository.createMatch(GameMode.SOLO, 'forest_crossing');
    await defaultMatchRepository.finalizeMatch(match.id, {
      durationSeconds: 180,
      wavesSurvived: 10,
      winnerTeam: 1,
      participants: [
        {
          userId,
          username: 'StatsChampion',
          team: 1,
          damageDealt: 12000,
          towersPlaced: 6,
          enemiesKilled: 45,
          goldEarned: 1800,
          score: 850,
          eloDelta: 20,
        },
      ],
    });

    await defaultStatsRepository.recordMatchStats(userId, {
      isWin: true,
      damageDealt: 12000,
      kills: 45,
      wavesSurvived: 10,
      eloDelta: 20,
    });
  });

  it('should fetch user match history', async () => {
    const res = await request(app)
      .get('/api/matches/history')
      .set('Authorization', `Bearer ${authToken}`);

    expect(res.status).toBe(200);
    expect(res.body.history).toBeDefined();
    expect(res.body.history.length).toBeGreaterThan(0);
    expect(res.body.history[0].wavesSurvived).toBe(10);
  });

  it('should fetch user personal stats', async () => {
    const res = await request(app)
      .get('/api/stats/me')
      .set('Authorization', `Bearer ${authToken}`);

    expect(res.status).toBe(200);
    expect(res.body.stats.wins).toBe(1);
    expect(res.body.stats.totalKills).toBe(45);
  });

  it('should fetch global leaderboard rankings', async () => {
    const res = await request(app).get('/api/leaderboard?category=ELO');

    expect(res.status).toBe(200);
    expect(res.body.leaderboard).toBeDefined();
    expect(res.body.leaderboard.length).toBeGreaterThan(0);
  });
});
