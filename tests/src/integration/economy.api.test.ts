import request from 'supertest';
import { app } from '@realmforge/server';

describe('Economy API Integration Tests', () => {
  let authToken: string;

  beforeAll(async () => {
    const signupRes = await request(app)
      .post('/api/auth/signup')
      .send({
        username: 'ShopCustomer',
        email: 'shop@realmforge.gg',
        password: 'Password123!',
      });
    authToken = signupRes.body.tokens.accessToken;
  });

  it('should fetch cosmetic store catalog', async () => {
    const res = await request(app).get('/api/economy/catalog');

    expect(res.status).toBe(200);
    expect(res.body.catalog).toBeDefined();
    expect(res.body.catalog.length).toBeGreaterThan(0);
  });

  it('should fetch user loadout', async () => {
    const res = await request(app)
      .get('/api/economy/loadout')
      .set('Authorization', `Bearer ${authToken}`);

    expect(res.status).toBe(200);
    expect(res.body.loadout).toBeDefined();
    expect(res.body.loadout.towerSkins).toBeDefined();
  });
});
