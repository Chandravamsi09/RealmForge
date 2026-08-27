import request from 'supertest';
import { app } from '@realmforge/server';
import { signAccessToken } from '@realmforge/server/auth/jwt';
import { UserRole } from '@realmforge/shared';

describe('Admin API Integration Tests', () => {
  const adminToken = signAccessToken({
    userId: 'admin-uuid-1',
    username: 'HighOverseer',
    role: UserRole.ADMIN,
  });

  const playerToken = signAccessToken({
    userId: 'player-uuid-1',
    username: 'RegularPlayer',
    role: UserRole.PLAYER,
  });

  it('should allow regular players to submit griefing/cheating reports', async () => {
    const res = await request(app)
      .post('/api/reports/submit')
      .set('Authorization', `Bearer ${playerToken}`)
      .send({
        reportedUserId: 'suspect-user-99',
        reportedUsername: 'SuspectCheater',
        reason: 'CHEATING',
        description: 'Placed 50 towers in 1 millisecond.',
      });

    expect(res.status).toBe(201);
    expect(res.body.report).toBeDefined();
    expect(res.body.report.status).toBe('PENDING');
  });

  it('should reject normal players from accessing admin metrics (403 Forbidden)', async () => {
    const res = await request(app)
      .get('/api/admin/metrics')
      .set('Authorization', `Bearer ${playerToken}`);

    expect(res.status).toBe(403);
    expect(res.body.error).toContain('Insufficient permissions');
  });

  it('should allow admin to fetch system telemetry and reports', async () => {
    const metricsRes = await request(app)
      .get('/api/admin/metrics')
      .set('Authorization', `Bearer ${adminToken}`);

    expect(metricsRes.status).toBe(200);
    expect(metricsRes.body.metrics.serverVersion).toBeDefined();

    const reportsRes = await request(app)
      .get('/api/admin/reports')
      .set('Authorization', `Bearer ${adminToken}`);

    expect(reportsRes.status).toBe(200);
    expect(reportsRes.body.reports).toBeDefined();
  });
});
