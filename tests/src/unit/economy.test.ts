import {
  EconomyCalculator,
  TowerType,
} from '@realmforge/shared';
import { InMemoryInventoryRepository } from '@realmforge/server/economy/InventoryRepository';
import { InMemoryUserRepository } from '@realmforge/server/auth/user.repository';

describe('Economy & Inventory Unit Tests', () => {
  describe('In-Game Tactical Economy Math', () => {
    it('should calculate wave interest up to cap', () => {
      expect(EconomyCalculator.calculateWaveInterest(0)).toBe(0);
      expect(EconomyCalculator.calculateWaveInterest(150)).toBe(15); // 10%
      expect(EconomyCalculator.calculateWaveInterest(480)).toBe(48);
      expect(EconomyCalculator.calculateWaveInterest(800)).toBe(50); // Capped at 50
    });

    it('should calculate streak bonuses correctly', () => {
      expect(EconomyCalculator.calculateStreakBonus(0)).toBe(0);
      expect(EconomyCalculator.calculateStreakBonus(1)).toBe(0);
      expect(EconomyCalculator.calculateStreakBonus(2)).toBe(10);
      expect(EconomyCalculator.calculateStreakBonus(4)).toBe(20);
      expect(EconomyCalculator.calculateStreakBonus(6)).toBe(30);
    });

    it('should calculate post-match metagame rewards', () => {
      const victoryRewards = EconomyCalculator.calculateMatchEndRewards(15, true);
      expect(victoryRewards.xp).toBeGreaterThan(400);
      expect(victoryRewards.gems).toBeGreaterThan(15);
      expect(victoryRewards.shards).toBeGreaterThan(5);
    });
  });

  describe('Cosmetics & Inventory Management', () => {
    let userRepo: InMemoryUserRepository;
    let inventoryRepo: InMemoryInventoryRepository;
    let userId: string;

    beforeEach(async () => {
      userRepo = new InMemoryUserRepository();
      inventoryRepo = new InMemoryInventoryRepository(userRepo);

      const user = await userRepo.create({
        username: 'SkinCollector',
        email: 'skins@realmforge.gg',
        passwordHash: 'hash123',
      });
      userId = user.id;
    });

    it('should allow purchasing catalog item when user has sufficient gems', async () => {
      // Give user 500 gems
      await userRepo.updateProfile(userId, { gems: 500 });

      const purchaseRes = await inventoryRepo.purchaseItem(
        userId,
        'skin_archer_elven_sentinel', // Costs 100 gems
      );

      expect(purchaseRes.success).toBe(true);
      expect(purchaseRes.item.itemId).toBe('skin_archer_elven_sentinel');

      const updatedUser = await userRepo.findById(userId);
      expect(updatedUser?.profile.gems).toBe(400);

      const inventory = await inventoryRepo.getInventory(userId);
      expect(inventory.length).toBe(1);
    });

    it('should prevent purchasing item with insufficient gems', async () => {
      await userRepo.updateProfile(userId, { gems: 10 }); // Not enough

      await expect(
        inventoryRepo.purchaseItem(userId, 'skin_archer_elven_sentinel'),
      ).rejects.toThrow('Insufficient gems');
    });

    it('should equip purchased skin to user loadout', async () => {
      await userRepo.updateProfile(userId, { gems: 500 });
      await inventoryRepo.purchaseItem(userId, 'skin_archer_elven_sentinel');

      const loadout = await inventoryRepo.equipItem(userId, 'skin_archer_elven_sentinel');
      expect(loadout.towerSkins[TowerType.ARCHER]).toBe('skin_archer_elven_sentinel');

      const inventory = await inventoryRepo.getInventory(userId);
      const equippedItem = inventory.find(i => i.itemId === 'skin_archer_elven_sentinel');
      expect(equippedItem?.isEquipped).toBe(true);
    });
  });
});
