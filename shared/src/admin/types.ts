export enum ReportReason {
  TOXICITY = 'TOXICITY',
  CHEATING = 'CHEATING',
  GRIEFING_PLACEMENT = 'GRIEFING_PLACEMENT',
  AFK_ABANDONMENT = 'AFK_ABANDONMENT',
  EXPLOIT_ABUSE = 'EXPLOIT_ABUSE',
}

export enum ReportStatus {
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED',
  DISMISSED = 'DISMISSED',
}

export interface PlayerReport {
  id: string;
  reporterUserId: string;
  reportedUserId: string;
  reportedUsername: string;
  reason: ReportReason;
  description: string;
  matchId?: string;
  status: ReportStatus;
  adminNotes?: string;
  createdAt: string;
  resolvedAt?: string;
}

export enum AdminActionType {
  BAN_USER = 'BAN_USER',
  UNBAN_USER = 'UNBAN_USER',
  ADJUST_ELO = 'ADJUST_ELO',
  GRANT_CURRENCY = 'GRANT_CURRENCY',
  RESOLVE_REPORT = 'RESOLVE_REPORT',
  DISMISS_REPORT = 'DISMISS_REPORT',
}

export interface AdminAuditLog {
  id: string;
  adminUserId: string;
  targetUserId?: string;
  action: AdminActionType;
  details: string;
  timestamp: string;
}

export interface SystemMetrics {
  activeRooms: number;
  connectedSockets: number;
  totalUsers: number;
  memoryUsageMb: number;
  uptimeSeconds: number;
  serverVersion: string;
}
