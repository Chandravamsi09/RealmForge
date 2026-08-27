import { Router, Response } from 'express';
import { defaultInventoryRepository } from './InventoryRepository';
import { authenticateJwt, AuthenticatedRequest } from '../auth/auth.middleware';

export const economyRouter = Router();

// Catalog
economyRouter.get('/catalog', async (_req, res: Response) => {
  try {
    const catalog = await defaultInventoryRepository.getCatalog();
    res.status(200).json({ catalog });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// User Inventory
economyRouter.get('/inventory', authenticateJwt, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const inventory = await defaultInventoryRepository.getInventory(req.user!.userId);
    res.status(200).json({ inventory });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// User Loadout
economyRouter.get('/loadout', authenticateJwt, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const loadout = await defaultInventoryRepository.getUserLoadout(req.user!.userId);
    res.status(200).json({ loadout });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Purchase Item
economyRouter.post('/purchase', authenticateJwt, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { itemId } = req.body;
    if (!itemId) {
      res.status(400).json({ error: 'itemId is required' });
      return;
    }

    const result = await defaultInventoryRepository.purchaseItem(req.user!.userId, itemId);
    res.status(201).json(result);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Equip Item
economyRouter.post('/equip', authenticateJwt, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { itemId } = req.body;
    if (!itemId) {
      res.status(400).json({ error: 'itemId is required' });
      return;
    }

    const loadout = await defaultInventoryRepository.equipItem(req.user!.userId, itemId);
    res.status(200).json({ success: true, loadout });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});
