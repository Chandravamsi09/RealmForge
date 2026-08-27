import { Router, Response } from 'express';
import { defaultAdminRepository } from './AdminRepository';
import { authenticateJwt, requireRole, AuthenticatedRequest } from '../auth/auth.middleware';
import { UserRole, ReportStatus } from '@realmforge/shared';

export const adminRouter = Router();

// Public Authenticated endpoint to file a report on another player
adminRouter.post('/reports/submit', authenticateJwt, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { reportedUserId, reportedUsername, reason, description, matchId } = req.body;
    if (!reportedUserId || !reason || !description) {
      res.status(400).json({ error: 'Missing required report fields' });
      return;
    }

    const report = await defaultAdminRepository.fileReport({
      reporterUserId: req.user!.userId,
      reportedUserId,
      reportedUsername: reportedUsername || 'Unknown',
      reason,
      description,
      matchId,
    });

    res.status(201).json({ success: true, report });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Gated Admin/Moderator routes
const adminGuard = [authenticateJwt, requireRole(UserRole.ADMIN, UserRole.MODERATOR)];

// System Telemetry & Metrics
adminRouter.get('/admin/metrics', ...adminGuard, async (_req, res: Response) => {
  try {
    const metrics = await defaultAdminRepository.getSystemMetrics();
    res.status(200).json({ metrics });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// View Reports
adminRouter.get('/admin/reports', ...adminGuard, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const status = req.query.status as ReportStatus | undefined;
    const limit = parseInt(req.query.limit as string, 10) || 50;
    const offset = parseInt(req.query.offset as string, 10) || 0;

    const reports = await defaultAdminRepository.getReports(status, limit, offset);
    res.status(200).json({ reports });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Resolve Report
adminRouter.post('/admin/reports/:reportId/resolve', ...adminGuard, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { status, adminNotes } = req.body;
    const resolved = await defaultAdminRepository.resolveReport(
      req.params.reportId!,
      status || ReportStatus.RESOLVED,
      adminNotes || 'Resolved by moderator',
      req.user!.userId,
    );
    res.status(200).json({ success: true, report: resolved });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Ban User
adminRouter.post('/admin/users/:userId/ban', ...adminGuard, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { reason } = req.body;
    await defaultAdminRepository.banUser(
      req.params.userId!,
      reason || 'Violation of Community Code of Conduct',
      req.user!.userId,
    );
    res.status(200).json({ success: true, message: `User ${req.params.userId} banned` });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Unban User
adminRouter.post('/admin/users/:userId/unban', ...adminGuard, async (req: AuthenticatedRequest, res: Response) => {
  try {
    await defaultAdminRepository.unbanUser(req.params.userId!, req.user!.userId);
    res.status(200).json({ success: true, message: `User ${req.params.userId} unbanned` });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Adjust ELO
adminRouter.post('/admin/users/:userId/adjust-elo', ...adminGuard, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { deltaElo } = req.body;
    const newElo = await defaultAdminRepository.adjustUserElo(
      req.params.userId!,
      parseInt(deltaElo, 10) || 0,
      req.user!.userId,
    );
    res.status(200).json({ success: true, newElo });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Grant Currency
adminRouter.post('/admin/users/:userId/grant-currency', ...adminGuard, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { gold, gems } = req.body;
    await defaultAdminRepository.grantCurrency(
      req.params.userId!,
      parseInt(gold, 10) || 0,
      parseInt(gems, 10) || 0,
      req.user!.userId,
    );
    res.status(200).json({ success: true, message: 'Currency granted' });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Audit Logs
adminRouter.get('/admin/audit-logs', ...adminGuard, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string, 10) || 50;
    const offset = parseInt(req.query.offset as string, 10) || 0;
    const logs = await defaultAdminRepository.getAuditLogs(limit, offset);
    res.status(200).json({ logs });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});
