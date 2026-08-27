import request from 'supertest';
import { app } from '@realmforge/server';
import { GameMode } from '@realmforge/shared';

describe('Matchmaking API Integration Tests', () => {
  let authToken: string;

  beforeAll(async () => {
    const signupRes = await request(app)
      .post('/api/auth/signup')
      .send({
        username: 'QueueMaster',
        email: 'queuemaster@realmforge.gg',
        password: 'Password123',
      });
    authToken = signupRes.body.tokens.accessToken;
  });

  it('should enqueue authenticated user into matchmaking queue', async () => {
    const res = await request(app)
      .post('/api/matchmaking/enqueue')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        mode: GameMode.COOP_2P,
        socketId: 'test_socket_123',
      });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.mode).toBe(GameMode.COOP_2P);

    // Check status
    const statusRes = await request(app)
      .get('/api/matchmaking/status')
      .query({ mode: GameMode.COOP_2P });

    expect(statusRes.status).toBe(200);
    expect(statusRes.body.queueSize).toBeGreaterThan(0);
  });

  it('should dequeue user from matchmaking queue', async () => {
    const res = await request(app)
      .post('/api/matchmaking/dequeue')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        mode: GameMode.COOP_2P,
      });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
