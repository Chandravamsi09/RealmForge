import request from 'supertest';
import { app } from '@realmforge/server';

describe('Auth API Integration Tests', () => {
  const rand = Math.floor(Math.random() * 1000000);

  it('should successfully sign up a new user and retrieve profile', async () => {
    const uname = `ArcaneMage_${rand}`;
    const email = `mage_${rand}@realmforge.gg`;

    const signupRes = await request(app)
      .post('/api/auth/signup')
      .send({
        username: uname,
        email,
        password: 'SpellsAndMagic123',
      });

    expect(signupRes.status).toBe(201);
    expect(signupRes.body.user).toBeDefined();
    expect(signupRes.body.user.username).toBe(uname);
    expect(signupRes.body.tokens.accessToken).toBeDefined();

    const token = signupRes.body.tokens.accessToken;

    // Fetch user profile with JWT
    const meRes = await request(app)
      .get('/api/auth/me')
      .set('Authorization', `Bearer ${token}`);

    expect(meRes.status).toBe(200);
    expect(meRes.body.user.username).toBe(uname);
    expect(meRes.body.user.profile.gold).toBe(500);
  });

  it('should reject unauthorized request to protected route', async () => {
    const res = await request(app).get('/api/auth/me');
    expect(res.status).toBe(401);
    expect(res.body.error).toBe('Authorization token required');
  });

  it('should log in an existing user and return tokens', async () => {
    const uname = `Defender_${rand}`;
    const email = `defender_${rand}@realmforge.gg`;

    // Signup first
    await request(app)
      .post('/api/auth/signup')
      .send({
        username: uname,
        email,
        password: 'Password999',
      });

    // Login
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({
        usernameOrEmail: uname,
        password: 'Password999',
      });

    expect(loginRes.status).toBe(200);
    expect(loginRes.body.tokens.accessToken).toBeDefined();
    expect(loginRes.body.user.username).toBe(uname);
  });

  it('should refresh token successfully', async () => {
    const uname = `Refresher_${rand}`;
    const email = `refresh_${rand}@realmforge.gg`;

    const signupRes = await request(app)
      .post('/api/auth/signup')
      .send({
        username: uname,
        email,
        password: 'Password999',
      });

    const refreshToken = signupRes.body.tokens.refreshToken;

    const refreshRes = await request(app)
      .post('/api/auth/refresh')
      .send({ refreshToken });

    expect(refreshRes.status).toBe(200);
    expect(refreshRes.body.tokens.accessToken).toBeDefined();
    expect(refreshRes.body.user.username).toBe(uname);
  });
});
