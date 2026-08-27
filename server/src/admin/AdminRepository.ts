import {
  PlayerReport,
  ReportStatus,
  ReportReason,
  AdminAuditLog,
  AdminActionType,
  SystemMetrics,
  REALMFORGE_VERSION,
} from '@realmforge/shared';
import { IUserRepository, defaultUserRepository } from '../auth/user.repository';
import { RoomManager, defaultRoomManager } from '../game/RoomManager';
import crypto from 'crypto';

export interface IAdminRepository {
  fileReport(report: {
    reporterUserId: string;
    reportedUserId: string;
    reportedUsername: string;
    reason: ReportReason;
    description: string;
    matchId?: string;
  }): Promise<PlayerReport>;
  getReports(status?: ReportStatus, limit?: number, offset?: number): Promise<PlayerReport[]>;
  resolveReport(reportId: string, status: ReportStatus, adminNotes: string, adminId: string): Promise<PlayerReport>;
  banUser(userId: string, reason: string, adminId: string): Promise<void>;
  unbanUser(userId: string, adminId: string): Promise<void>;
  adjustUserElo(userId: string, deltaElo: number, adminId: string): Promise<number>;
  grantCurrency(userId: string, gold: number, gems: number, adminId: string): Promise<void>;
  getAuditLogs(limit?: number, offset?: number): Promise<AdminAuditLog[]>;
  getSystemMetrics(): Promise<SystemMetrics>;
}

export class InMemoryAdminRepository implements IAdminRepository {
  private reports: Map<string, PlayerReport> = new Map();
  private auditLogs: AdminAuditLog[] = [];

  constructor(
    private userRepo: IUserRepository = defaultUserRepository,
    private roomManager: RoomManager = defaultRoomManager,
  ) {}

  async fileReport(report: {
    reporterUserId: string;
    reportedUserId: string;
    reportedUsername: string;
    reason: ReportReason;
    description: string;
    matchId?: string;
  }): Promise<PlayerReport> {
    const id = crypto.randomUUID();
    const newReport: PlayerReport = {
      id,
      ...report,
      status: ReportStatus.PENDING,
      createdAt: new Date().toISOString(),
    };
    this.reports.set(id, newReport);
    return { ...newReport };
  }

  async getReports(
    status?: ReportStatus,
    limit: number = 50,
    offset: number = 0,
  ): Promise<PlayerReport[]> {
    let list = Array.from(this.reports.values());
    if (status) {
      list = list.filter(r => r.status === status);
    }
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return list.slice(offset, offset + limit);
  }

  async resolveReport(
    reportId: string,
    status: ReportStatus,
    adminNotes: string,
    adminId: string,
  ): Promise<PlayerReport> {
    const report = this.reports.get(reportId);
    if (!report) throw new Error(`Report ${reportId} not found`);

    report.status = status;
    report.adminNotes = adminNotes;
    report.resolvedAt = new Date().toISOString();

    this.logAudit({
      adminUserId: adminId,
      targetUserId: report.reportedUserId,
      action: status === ReportStatus.RESOLVED ? AdminActionType.RESOLVE_REPORT : AdminActionType.DISMISS_REPORT,
      details: `Report ${reportId} ${status.toLowerCase()}: ${adminNotes}`,
    });

    return { ...report };
  }

  async banUser(userId: string, reason: string, adminId: string): Promise<void> {
    const user = await this.userRepo.findById(userId);
    if (!user) throw new Error(`User ${userId} not found`);

    await this.userRepo.setBanned(userId, true);

    this.logAudit({
      adminUserId: adminId,
      targetUserId: userId,
      action: AdminActionType.BAN_USER,
      details: `Banned user ${user.username} (${userId}): ${reason}`,
    });
  }

  async unbanUser(userId: string, adminId: string): Promise<void> {
    const user = await this.userRepo.findById(userId);
    if (!user) throw new Error(`User ${userId} not found`);

    await this.userRepo.setBanned(userId, false);

    this.logAudit({
      adminUserId: adminId,
      targetUserId: userId,
      action: AdminActionType.UNBAN_USER,
      details: `Unbanned user ${user.username} (${userId})`,
    });
  }

  async adjustUserElo(userId: string, deltaElo: number, adminId: string): Promise<number> {
    const user = await this.userRepo.findById(userId);
    if (!user) throw new Error(`User ${userId} not found`);

    const newElo = Math.max(100, user.eloRating + deltaElo);
    await this.userRepo.updateElo(userId, newElo);

    this.logAudit({
      adminUserId: adminId,
      targetUserId: userId,
      action: AdminActionType.ADJUST_ELO,
      details: `Adjusted ELO for ${user.username} by ${deltaElo} (New ELO: ${newElo})`,
    });

    return newElo;
  }

  async grantCurrency(userId: string, gold: number, gems: number, adminId: string): Promise<void> {
    const user = await this.userRepo.findById(userId);
    if (!user) throw new Error(`User ${userId} not found`);

    await this.userRepo.updateProfile(userId, {
      gold: user.profile.gold + gold,
      gems: user.profile.gems + gems,
    });

    this.logAudit({
      adminUserId: adminId,
      targetUserId: userId,
      action: AdminActionType.GRANT_CURRENCY,
      details: `Granted +${gold} gold and +${gems} gems to ${user.username}`,
    });
  }

  async getAuditLogs(limit: number = 50, offset: number = 0): Promise<AdminAuditLog[]> {
    const logs = [...this.auditLogs].reverse();
    return logs.slice(offset, offset + limit);
  }

  async getSystemMetrics(): Promise<SystemMetrics> {
    const memory = process.memoryUsage();
    return {
      activeRooms: this.roomManager.getActiveRoomCount(),
      connectedSockets: 0,
      totalUsers: 10,
      memoryUsageMb: Math.round(memory.heapUsed / 1024 / 1024),
      uptimeSeconds: Math.floor(process.uptime()),
      serverVersion: REALMFORGE_VERSION,
    };
  }

  private logAudit(entry: Omit<AdminAuditLog, 'id' | 'timestamp'>): void {
    this.auditLogs.push({
      id: crypto.randomUUID(),
      ...entry,
      timestamp: new Date().toISOString(),
    });
  }

  clear(): void {
    this.reports.clear();
    this.auditLogs = [];
  }
}

export const defaultAdminRepository = new InMemoryAdminRepository();
