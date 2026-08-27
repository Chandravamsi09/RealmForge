import { Router, Response } from 'express';
import { defaultMatchRepository } from './MatchRepository';
import { defaultStatsRepository } from './StatsRepository';
import { defaultLeaderboardRepository } from './LeaderboardRepository';
import { authenticateJwt, AuthenticatedRequest } from '../auth/auth.middleware';
import { LeaderboardCategory } from '@realmforge/shared';

export const persistenceRouter = Router();

// Matches History & Details
persistenceRouter.get('/matches/history', authenticateJwt, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string, 10) || 20;
    const offset = parseInt(req.query.offset as string, 10) || 0;
    const history = await defaultMatchRepository.getUserMatchHistory(req.user!.userId, limit, offset);
    res.status(200).json({ history });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

persistenceRouter.get('/matches/:matchId', async (req, res) => {
  try {
    const match = await defaultMatchRepository.getMatchById(req.params.matchId);
    if (!match) {
      res.status(404).json({ error: 'Match not found' });
      return;
    }
    res.status(200).json({ match });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Player Stats
persistenceRouter.get('/stats/me', authenticateJwt, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const stats = await defaultStatsRepository.getPlayerStats(req.user!.userId);
    res.status(200).json({ stats });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

persistenceRouter.get('/stats/user/:userId', async (req, res) => {
  try {
    const stats = await defaultStatsRepository.getPlayerStats(req.params.userId);
    if (!stats) {
      res.status(404).json({ error: 'Player stats not found' });
      return;
    }
    res.status(200).json({ stats });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Leaderboards
persistenceRouter.get('/leaderboard', async (req, res) => {
  try {
    const category = (req.query.category as LeaderboardCategory) || LeaderboardCategory.ELO;
    const limit = parseInt(req.query.limit as string, 10) || 50;
    const offset = parseInt(req.query.offset as string, 10) || 0;

    const leaderboard = await defaultLeaderboardRepository.getTopPlayers(category, limit, offset);
    res.status(200).json({ category, leaderboard });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});
