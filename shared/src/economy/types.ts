import { TowerType } from '../engine/ecs/Components';

export enum CurrencyType {
  GOLD = 'GOLD', // In-game tactical match currency
  GEMS = 'GEMS', // Metagame cosmetic gems
  REALM_SHARDS = 'REALM_SHARDS', // Crafting shards
}

export enum ItemCategory {
  TOWER_SKIN = 'TOWER_SKIN',
  MAP_THEME = 'MAP_THEME',
  AVATAR_FRAME = 'AVATAR_FRAME',
  PROJECTILE_TRAIL = 'PROJECTILE_TRAIL',
  TITLE = 'TITLE',
}

export enum ItemRarity {
  COMMON = 'COMMON',
  RARE = 'RARE',
  EPIC = 'EPIC',
  LEGENDARY = 'LEGENDARY',
  MYTHIC = 'MYTHIC',
}

export interface CatalogItem {
  id: string;
  name: string;
  description: string;
  category: ItemCategory;
  rarity: ItemRarity;
  costGems: number;
  costShards: number;
  targetTowerType?: TowerType;
  previewAsset: string;
}

export interface UserInventoryItem {
  id: string;
  userId: string;
  itemId: string;
  category: ItemCategory;
  isEquipped: boolean;
  acquiredAt: string;
}

export interface UserLoadout {
  userId: string;
  towerSkins: Record<string, string>; // TowerType -> ItemId
  mapTheme: string;
  avatarFrame: string;
  projectileTrail: string;
}

export class EconomyCalculator {
  public static readonly BASE_INTEREST_RATE = 0.1; // 10% interest
  public static readonly MAX_INTEREST_CAP = 50; // Max 50 gold bonus per wave

  /**
   * Calculates wave interest reward based on unspent in-game tactical gold.
   */
  public static calculateWaveInterest(
    unspentGold: number,
    interestRate: number = this.BASE_INTEREST_RATE,
    maxInterest: number = this.MAX_INTEREST_CAP,
  ): number {
    if (unspentGold <= 0) return 0;
    const rawInterest = Math.floor(unspentGold * interestRate);
    return Math.min(maxInterest, rawInterest);
  }

  /**
   * Calculates streak gold income bonus (compensates struggling players or rewards win streaks).
   */
  public static calculateStreakBonus(streakLength: number): number {
    if (streakLength < 2) return 0;
    if (streakLength >= 5) return 30;
    if (streakLength >= 3) return 20;
    return 10;
  }

  /**
   * Calculates end of match metagame XP & Gem rewards based on waves cleared and placement.
   */
  public static calculateMatchEndRewards(
    wavesCleared: number,
    isVictory: boolean,
  ): { xp: number; gems: number; shards: number } {
    const baseXp = wavesCleared * 25 + (isVictory ? 150 : 50);
    const baseGems = Math.floor(wavesCleared / 2) + (isVictory ? 15 : 5);
    const baseShards = Math.floor(wavesCleared / 3) + (isVictory ? 10 : 2);

    return {
      xp: baseXp,
      gems: baseGems,
      shards: baseShards,
    };
  }
}

export const COSMETIC_CATALOG: CatalogItem[] = [
  {
    id: 'skin_archer_elven_sentinel',
    name: 'Elven Sentinel Archer',
    description: 'Ancient silver-leaf bows crafted in the high canopies of Loth-Elor.',
    category: ItemCategory.TOWER_SKIN,
    rarity: ItemRarity.RARE,
    costGems: 100,
    costShards: 50,
    targetTowerType: TowerType.ARCHER,
    previewAsset: 'archer_elven_preview',
  },
  {
    id: 'skin_mage_void_caller',
    name: 'Voidcaller Arcane Spire',
    description: 'Black cosmic nebula crystals replacing standard arcane focus.',
    category: ItemCategory.TOWER_SKIN,
    rarity: ItemRarity.EPIC,
    costGems: 250,
    costShards: 120,
    targetTowerType: TowerType.MAGE,
    previewAsset: 'mage_void_preview',
  },
  {
    id: 'skin_cannon_steampunk_dreadnought',
    name: 'Steampunk Siege Engine',
    description: 'Brass gears, steam vents, and clockwork pneumatic cylinders.',
    category: ItemCategory.TOWER_SKIN,
    rarity: ItemRarity.EPIC,
    costGems: 250,
    costShards: 120,
    targetTowerType: TowerType.CANNON,
    previewAsset: 'cannon_steam_preview',
  },
  {
    id: 'skin_tesla_plasma_storm',
    name: 'Plasma Arc Generator',
    description: 'Futuristic hyper-conductive rods discharging violet plasma.',
    category: ItemCategory.TOWER_SKIN,
    rarity: ItemRarity.LEGENDARY,
    costGems: 500,
    costShards: 250,
    targetTowerType: TowerType.TESLA,
    previewAsset: 'tesla_plasma_preview',
  },
  {
    id: 'frame_grandmaster_gold',
    name: 'Golden Vanguard Crest',
    description: 'Shimmering gilded dragon border displayed on player profile and HUD.',
    category: ItemCategory.AVATAR_FRAME,
    rarity: ItemRarity.LEGENDARY,
    costGems: 300,
    costShards: 150,
    previewAsset: 'frame_gold_vanguard',
  },
];
