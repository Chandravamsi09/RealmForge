import { Router } from 'express';
import { defaultMatchmaker } from './Matchmaker';
import { authenticateJwt, AuthenticatedRequest } from '../auth/auth.middleware';
import { GameMode } from '@realmforge/shared';

export const matchmakingRouter = Router();

matchmakingRouter.post('/enqueue', authenticateJwt, async (req: AuthenticatedRequest, res) => {
  try {
    const { mode, socketId } = req.body;
    const user = req.user!;

    if (!mode || !Object.values(GameMode).includes(mode)) {
      res.status(400).json({ error: 'Valid game mode is required' });
      return;
    }

    await defaultMatchmaker.enqueue({
      userId: user.userId,
      username: user.username,
      socketId: socketId || `sock_${user.userId}`,
      mode,
      eloRating: 1000,
      joinedAt: Date.now(),
    });

    res.status(200).json({
      success: true,
      message: 'Enqueued into matchmaking',
      mode,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

matchmakingRouter.post('/dequeue', authenticateJwt, async (req: AuthenticatedRequest, res) => {
  try {
    const { mode } = req.body;
    const user = req.user!;

    await defaultMatchmaker.dequeue(user.userId, mode || GameMode.COOP_2P);
    res.status(200).json({ success: true, message: 'Dequeued from matchmaking' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

matchmakingRouter.get('/status', async (req, res) => {
  try {
    const mode = (req.query.mode as GameMode) || GameMode.COOP_2P;
    const queueSize = await defaultMatchmaker.getQueueSize(mode);
    res.status(200).json({ mode, queueSize });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});
