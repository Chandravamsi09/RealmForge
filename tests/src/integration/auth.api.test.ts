import request from 'supertest';
import { app } from '@realmforge/server';

describe('Auth API Integration Tests', () => {
  it('should successfully sign up a new user and retrieve profile', async () => {
    const signupRes = await request(app)
      .post('/api/auth/signup')
      .send({
        username: 'ArcaneMage',
        email: 'mage@realmforge.gg',
        password: 'SpellsAndMagic123',
      });

    expect(signupRes.status).toBe(201);
    expect(signupRes.body.user).toBeDefined();
    expect(signupRes.body.user.username).toBe('ArcaneMage');
    expect(signupRes.body.tokens.accessToken).toBeDefined();

    const token = signupRes.body.tokens.accessToken;

    // Fetch user profile with JWT
    const meRes = await request(app)
      .get('/api/auth/me')
      .set('Authorization', `Bearer ${token}`);

    expect(meRes.status).toBe(200);
    expect(meRes.body.user.username).toBe('ArcaneMage');
    expect(meRes.body.user.profile.gold).toBe(500);
  });

  it('should reject unauthorized request to protected route', async () => {
    const res = await request(app).get('/api/auth/me');
    expect(res.status).toBe(401);
    expect(res.body.error).toBe('Authorization token required');
  });

  it('should log in an existing user and return tokens', async () => {
    // Signup first
    await request(app)
      .post('/api/auth/signup')
      .send({
        username: 'TowerDefender',
        email: 'defender@realmforge.gg',
        password: 'Password999',
      });

    // Login
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({
        usernameOrEmail: 'TowerDefender',
        password: 'Password999',
      });

    expect(loginRes.status).toBe(200);
    expect(loginRes.body.tokens.accessToken).toBeDefined();
    expect(loginRes.body.user.username).toBe('TowerDefender');
  });

  it('should refresh token successfully', async () => {
    const signupRes = await request(app)
      .post('/api/auth/signup')
      .send({
        username: 'RefresherUser',
        email: 'refresh@realmforge.gg',
        password: 'Password999',
      });

    const refreshToken = signupRes.body.tokens.refreshToken;

    const refreshRes = await request(app)
      .post('/api/auth/refresh')
      .send({ refreshToken });

    expect(refreshRes.status).toBe(200);
    expect(refreshRes.body.tokens.accessToken).toBeDefined();
    expect(refreshRes.body.user.username).toBe('RefresherUser');
  });
});
