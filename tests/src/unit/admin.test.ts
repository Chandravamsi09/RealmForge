import { InMemoryAdminRepository } from '@realmforge/server/admin/AdminRepository';
import { InMemoryUserRepository } from '@realmforge/server/auth/user.repository';
import { ReportReason, ReportStatus, AdminActionType } from '@realmforge/shared';

describe('Admin & Moderation Unit Tests', () => {
  let userRepo: InMemoryUserRepository;
  let adminRepo: InMemoryAdminRepository;
  let targetUserId: string;

  beforeEach(async () => {
    userRepo = new InMemoryUserRepository();
    adminRepo = new InMemoryAdminRepository(userRepo);

    const user = await userRepo.create({
      username: 'GrieferTroll',
      email: 'troll@realmforge.gg',
      passwordHash: 'hash123',
    });
    targetUserId = user.id;
  });

  it('should file and retrieve moderation reports', async () => {
    const report = await adminRepo.fileReport({
      reporterUserId: 'victim-user-1',
      reportedUserId: targetUserId,
      reportedUsername: 'GrieferTroll',
      reason: ReportReason.GRIEFING_PLACEMENT,
      description: 'Purposely built bad towers to leak enemies into the nexus.',
    });

    expect(report.id).toBeDefined();
    expect(report.status).toBe(ReportStatus.PENDING);

    const pendingReports = await adminRepo.getReports(ReportStatus.PENDING);
    expect(pendingReports.length).toBe(1);
    expect(pendingReports[0]!.reportedUsername).toBe('GrieferTroll');
  });

  it('should ban a user, mark account as banned, and create audit log', async () => {
    await adminRepo.banUser(targetUserId, 'Blatant speed hack cheating', 'admin-id-1');

    const user = await userRepo.findById(targetUserId);
    expect(user?.isBanned).toBe(true);

    const auditLogs = await adminRepo.getAuditLogs();
    expect(auditLogs.length).toBe(1);
    expect(auditLogs[0]!.action).toBe(AdminActionType.BAN_USER);
    expect(auditLogs[0]!.targetUserId).toBe(targetUserId);
  });

  it('should grant currency and adjust user ELO', async () => {
    const newElo = await adminRepo.adjustUserElo(targetUserId, 150, 'admin-id-1');
    expect(newElo).toBe(1150);

    await adminRepo.grantCurrency(targetUserId, 1000, 200, 'admin-id-1');
    const user = await userRepo.findById(targetUserId);
    expect(user?.profile.gems).toBe(250); // 50 initial + 200
  });
});
