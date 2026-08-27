import {
  UserInventoryItem,
  UserLoadout,
  CatalogItem,
  COSMETIC_CATALOG,
  ItemCategory,
} from '@realmforge/shared';
import { IUserRepository, defaultUserRepository } from '../auth/user.repository';
import crypto from 'crypto';

export interface IInventoryRepository {
  getInventory(userId: string): Promise<UserInventoryItem[]>;
  purchaseItem(userId: string, itemId: string): Promise<{ success: boolean; item: UserInventoryItem }>;
  equipItem(userId: string, itemId: string): Promise<UserLoadout>;
  getUserLoadout(userId: string): Promise<UserLoadout>;
  getCatalog(): Promise<CatalogItem[]>;
}

export class InMemoryInventoryRepository implements IInventoryRepository {
  private inventories: Map<string, UserInventoryItem[]> = new Map();
  private loadouts: Map<string, UserLoadout> = new Map();

  constructor(private userRepo: IUserRepository = defaultUserRepository) {}

  async getCatalog(): Promise<CatalogItem[]> {
    return [...COSMETIC_CATALOG];
  }

  async getInventory(userId: string): Promise<UserInventoryItem[]> {
    return this.inventories.get(userId) || [];
  }

  async getUserLoadout(userId: string): Promise<UserLoadout> {
    let loadout = this.loadouts.get(userId);
    if (!loadout) {
      loadout = {
        userId,
        towerSkins: {},
        mapTheme: 'default',
        avatarFrame: 'default',
        projectileTrail: 'default',
      };
      this.loadouts.set(userId, loadout);
    }
    return JSON.parse(JSON.stringify(loadout));
  }

  async purchaseItem(userId: string, itemId: string): Promise<{ success: boolean; item: UserInventoryItem }> {
    const catalogItem = COSMETIC_CATALOG.find(i => i.id === itemId);
    if (!catalogItem) {
      throw new Error(`Catalog item ${itemId} not found`);
    }

    const user = await this.userRepo.findById(userId);
    if (!user) {
      throw new Error(`User ${userId} not found`);
    }

    // Check if user already owns item
    let userItems = this.inventories.get(userId) || [];
    if (userItems.some(i => i.itemId === itemId)) {
      throw new Error('You already own this item');
    }

    // Check gems balance
    if (user.profile.gems < catalogItem.costGems) {
      throw new Error(`Insufficient gems. Requires ${catalogItem.costGems}, you have ${user.profile.gems}`);
    }

    // Deduct gems
    await this.userRepo.updateProfile(userId, {
      gems: user.profile.gems - catalogItem.costGems,
    });

    const newItem: UserInventoryItem = {
      id: crypto.randomUUID(),
      userId,
      itemId,
      category: catalogItem.category,
      isEquipped: false,
      acquiredAt: new Date().toISOString(),
    };

    userItems.push(newItem);
    this.inventories.set(userId, userItems);

    return { success: true, item: newItem };
  }

  async equipItem(userId: string, itemId: string): Promise<UserLoadout> {
    const userItems = this.inventories.get(userId) || [];
    const item = userItems.find(i => i.itemId === itemId);
    if (!item) {
      throw new Error('Item not found in your inventory');
    }

    const catalogItem = COSMETIC_CATALOG.find(i => i.id === itemId);
    if (!catalogItem) throw new Error('Catalog entry not found');

    const loadout = await this.getUserLoadout(userId);

    // Unequip previous items in category
    for (const inv of userItems) {
      if (inv.category === item.category) {
        if (item.category === ItemCategory.TOWER_SKIN) {
          const matchingSkin = COSMETIC_CATALOG.find(c => c.id === inv.itemId);
          if (matchingSkin?.targetTowerType === catalogItem.targetTowerType) {
            inv.isEquipped = false;
          }
        } else {
          inv.isEquipped = false;
        }
      }
    }

    item.isEquipped = true;

    if (item.category === ItemCategory.TOWER_SKIN && catalogItem.targetTowerType) {
      loadout.towerSkins[catalogItem.targetTowerType] = itemId;
    } else if (item.category === ItemCategory.AVATAR_FRAME) {
      loadout.avatarFrame = itemId;
    } else if (item.category === ItemCategory.MAP_THEME) {
      loadout.mapTheme = itemId;
    } else if (item.category === ItemCategory.PROJECTILE_TRAIL) {
      loadout.projectileTrail = itemId;
    }

    this.loadouts.set(userId, loadout);
    return JSON.parse(JSON.stringify(loadout));
  }

  clear(): void {
    this.inventories.clear();
    this.loadouts.clear();
  }
}

export const defaultInventoryRepository = new InMemoryInventoryRepository();
