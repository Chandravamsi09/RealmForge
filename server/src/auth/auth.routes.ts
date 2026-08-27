import { Router, Response } from 'express';
import { authService } from './auth.service';
import { authenticateJwt, AuthenticatedRequest } from './auth.middleware';

export const authRouter = Router();

authRouter.post('/signup', async (req, res) => {
  try {
    const result = await authService.signup(req.body);
    res.status(201).json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

authRouter.post('/login', async (req, res) => {
  try {
    const result = await authService.login(req.body);
    res.status(200).json(result);
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
});

authRouter.post('/refresh', async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      res.status(400).json({ error: 'refreshToken is required' });
      return;
    }
    const result = await authService.refreshToken(refreshToken);
    res.status(200).json(result);
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
});

authRouter.get('/me', authenticateJwt, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = await authService.getMe(req.user!.userId);
    res.status(200).json({ user });
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
});
