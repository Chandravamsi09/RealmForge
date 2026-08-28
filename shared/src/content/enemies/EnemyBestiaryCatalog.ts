/**
 * RealmForge Comprehensive Enemy Bestiary & Boss Mechanics Catalog
 * Contains 80 enemy and boss archetypes with phase transitions, elemental resistances, ability rotations, and scaling curves.
 */

export interface EnemyAbilitySpec {
  name: string;
  triggerHpPercent: number;
  cooldownMs: number;
  effect: 'SHIELD_REGEN' | 'BERSERK_SPEED' | 'SUMMON_MINIONS' | 'EMP_BLAST' | 'INVISIBILITY_CLOAK';
  magnitude: number;
}

export interface EnemyBestiaryEntry {
  type: string;
  name: string;
  category: 'GRUNT' | 'ELITE' | 'MINI_BOSS' | 'WORLD_BOSS';
  baseHp: number;
  hpScalingPerWave: number;
  baseArmor: number;
  magicResistance: number;
  speed: number;
  isFlying: boolean;
  goldBounty: number;
  scoreValue: number;
  abilities: EnemyAbilitySpec[];
  description: string;
}

export const ENEMY_BESTIARY_DATA: EnemyBestiaryEntry[] = [
  {
    type: 'enemy_archetype_1',
    name: 'Infernal Shadow Stalker 1',
    category: 'GRUNT',
    baseHp: 165,
    hpScalingPerWave: 1.122,
    baseArmor: 10,
    magicResistance: 8,
    speed: 56,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 41.25 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_2',
    name: 'Infernal Shadow Stalker 2',
    category: 'GRUNT',
    baseHp: 210,
    hpScalingPerWave: 1.124,
    baseArmor: 11,
    magicResistance: 9,
    speed: 62,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 52.5 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_3',
    name: 'Infernal Shadow Stalker 3',
    category: 'GRUNT',
    baseHp: 255,
    hpScalingPerWave: 1.126,
    baseArmor: 12,
    magicResistance: 10,
    speed: 68,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 63.75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_4',
    name: 'Infernal Shadow Stalker 4',
    category: 'GRUNT',
    baseHp: 300,
    hpScalingPerWave: 1.128,
    baseArmor: 13,
    magicResistance: 11,
    speed: 74,
    isFlying: true,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_5',
    name: 'Infernal Shadow Stalker 5',
    category: 'ELITE',
    baseHp: 3500,
    hpScalingPerWave: 1.13,
    baseArmor: 14,
    magicResistance: 12,
    speed: 80,
    isFlying: false,
    goldBounty: 45,
    scoreValue: 350,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 875 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_6',
    name: 'Infernal Shadow Stalker 6',
    category: 'GRUNT',
    baseHp: 390,
    hpScalingPerWave: 1.132,
    baseArmor: 15,
    magicResistance: 13,
    speed: 86,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 97.5 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_7',
    name: 'Infernal Shadow Stalker 7',
    category: 'GRUNT',
    baseHp: 435,
    hpScalingPerWave: 1.134,
    baseArmor: 16,
    magicResistance: 13,
    speed: 92,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 108.75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_8',
    name: 'Infernal Shadow Stalker 8',
    category: 'GRUNT',
    baseHp: 480,
    hpScalingPerWave: 1.136,
    baseArmor: 17,
    magicResistance: 14,
    speed: 50,
    isFlying: true,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 120 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_9',
    name: 'Infernal Shadow Stalker 9',
    category: 'GRUNT',
    baseHp: 525,
    hpScalingPerWave: 1.138,
    baseArmor: 18,
    magicResistance: 15,
    speed: 56,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 131.25 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_10',
    name: 'Infernal Shadow Stalker 10',
    category: 'WORLD_BOSS',
    baseHp: 27000,
    hpScalingPerWave: 1.14,
    baseArmor: 19,
    magicResistance: 16,
    speed: 62,
    isFlying: false,
    goldBounty: 250,
    scoreValue: 2000,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 6750 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_11',
    name: 'Infernal Shadow Stalker 11',
    category: 'GRUNT',
    baseHp: 615,
    hpScalingPerWave: 1.142,
    baseArmor: 19,
    magicResistance: 17,
    speed: 68,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 153.75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_12',
    name: 'Infernal Shadow Stalker 12',
    category: 'GRUNT',
    baseHp: 660,
    hpScalingPerWave: 1.144,
    baseArmor: 20,
    magicResistance: 18,
    speed: 74,
    isFlying: true,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 165 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_13',
    name: 'Infernal Shadow Stalker 13',
    category: 'GRUNT',
    baseHp: 705,
    hpScalingPerWave: 1.146,
    baseArmor: 21,
    magicResistance: 19,
    speed: 80,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 176.25 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_14',
    name: 'Infernal Shadow Stalker 14',
    category: 'GRUNT',
    baseHp: 750,
    hpScalingPerWave: 1.148,
    baseArmor: 22,
    magicResistance: 19,
    speed: 86,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 187.5 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_15',
    name: 'Infernal Shadow Stalker 15',
    category: 'ELITE',
    baseHp: 5500,
    hpScalingPerWave: 1.15,
    baseArmor: 23,
    magicResistance: 20,
    speed: 92,
    isFlying: false,
    goldBounty: 45,
    scoreValue: 350,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 1375 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_16',
    name: 'Infernal Shadow Stalker 16',
    category: 'GRUNT',
    baseHp: 840,
    hpScalingPerWave: 1.152,
    baseArmor: 24,
    magicResistance: 21,
    speed: 50,
    isFlying: true,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 210 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_17',
    name: 'Infernal Shadow Stalker 17',
    category: 'GRUNT',
    baseHp: 885,
    hpScalingPerWave: 1.154,
    baseArmor: 25,
    magicResistance: 22,
    speed: 56,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 221.25 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_18',
    name: 'Infernal Shadow Stalker 18',
    category: 'GRUNT',
    baseHp: 930,
    hpScalingPerWave: 1.156,
    baseArmor: 26,
    magicResistance: 23,
    speed: 62,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 232.5 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_19',
    name: 'Infernal Shadow Stalker 19',
    category: 'GRUNT',
    baseHp: 975,
    hpScalingPerWave: 1.158,
    baseArmor: 27,
    magicResistance: 24,
    speed: 68,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 243.75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_20',
    name: 'Infernal Shadow Stalker 20',
    category: 'WORLD_BOSS',
    baseHp: 39000,
    hpScalingPerWave: 1.16,
    baseArmor: 28,
    magicResistance: 25,
    speed: 74,
    isFlying: true,
    goldBounty: 250,
    scoreValue: 2000,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 9750 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_21',
    name: 'Infernal Shadow Stalker 21',
    category: 'GRUNT',
    baseHp: 1065,
    hpScalingPerWave: 1.162,
    baseArmor: 28,
    magicResistance: 25,
    speed: 80,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 266.25 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_22',
    name: 'Infernal Shadow Stalker 22',
    category: 'GRUNT',
    baseHp: 1110,
    hpScalingPerWave: 1.164,
    baseArmor: 29,
    magicResistance: 26,
    speed: 86,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 277.5 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_23',
    name: 'Infernal Shadow Stalker 23',
    category: 'GRUNT',
    baseHp: 1155,
    hpScalingPerWave: 1.166,
    baseArmor: 30,
    magicResistance: 27,
    speed: 92,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 288.75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_24',
    name: 'Infernal Shadow Stalker 24',
    category: 'GRUNT',
    baseHp: 1200,
    hpScalingPerWave: 1.168,
    baseArmor: 31,
    magicResistance: 28,
    speed: 50,
    isFlying: true,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 300 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_25',
    name: 'Infernal Shadow Stalker 25',
    category: 'ELITE',
    baseHp: 7500,
    hpScalingPerWave: 1.17,
    baseArmor: 32,
    magicResistance: 29,
    speed: 56,
    isFlying: false,
    goldBounty: 45,
    scoreValue: 350,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 1875 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_26',
    name: 'Infernal Shadow Stalker 26',
    category: 'GRUNT',
    baseHp: 1290,
    hpScalingPerWave: 1.172,
    baseArmor: 33,
    magicResistance: 30,
    speed: 62,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 322.5 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_27',
    name: 'Infernal Shadow Stalker 27',
    category: 'GRUNT',
    baseHp: 1335,
    hpScalingPerWave: 1.174,
    baseArmor: 34,
    magicResistance: 30,
    speed: 68,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 333.75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_28',
    name: 'Infernal Shadow Stalker 28',
    category: 'GRUNT',
    baseHp: 1380,
    hpScalingPerWave: 1.176,
    baseArmor: 35,
    magicResistance: 31,
    speed: 74,
    isFlying: true,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 345 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_29',
    name: 'Infernal Shadow Stalker 29',
    category: 'GRUNT',
    baseHp: 1425,
    hpScalingPerWave: 1.178,
    baseArmor: 36,
    magicResistance: 32,
    speed: 80,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 356.25 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_30',
    name: 'Infernal Shadow Stalker 30',
    category: 'WORLD_BOSS',
    baseHp: 51000,
    hpScalingPerWave: 1.18,
    baseArmor: 37,
    magicResistance: 33,
    speed: 86,
    isFlying: false,
    goldBounty: 250,
    scoreValue: 2000,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 12750 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_31',
    name: 'Infernal Shadow Stalker 31',
    category: 'GRUNT',
    baseHp: 1515,
    hpScalingPerWave: 1.182,
    baseArmor: 37,
    magicResistance: 34,
    speed: 92,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 378.75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_32',
    name: 'Infernal Shadow Stalker 32',
    category: 'GRUNT',
    baseHp: 1560,
    hpScalingPerWave: 1.184,
    baseArmor: 38,
    magicResistance: 35,
    speed: 50,
    isFlying: true,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 390 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_33',
    name: 'Infernal Shadow Stalker 33',
    category: 'GRUNT',
    baseHp: 1605,
    hpScalingPerWave: 1.186,
    baseArmor: 39,
    magicResistance: 36,
    speed: 56,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 401.25 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_34',
    name: 'Infernal Shadow Stalker 34',
    category: 'GRUNT',
    baseHp: 1650,
    hpScalingPerWave: 1.188,
    baseArmor: 40,
    magicResistance: 36,
    speed: 62,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 412.5 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_35',
    name: 'Infernal Shadow Stalker 35',
    category: 'ELITE',
    baseHp: 9500,
    hpScalingPerWave: 1.19,
    baseArmor: 41,
    magicResistance: 37,
    speed: 68,
    isFlying: false,
    goldBounty: 45,
    scoreValue: 350,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 2375 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_36',
    name: 'Infernal Shadow Stalker 36',
    category: 'GRUNT',
    baseHp: 1740,
    hpScalingPerWave: 1.192,
    baseArmor: 42,
    magicResistance: 38,
    speed: 74,
    isFlying: true,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 435 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_37',
    name: 'Infernal Shadow Stalker 37',
    category: 'GRUNT',
    baseHp: 1785,
    hpScalingPerWave: 1.194,
    baseArmor: 43,
    magicResistance: 39,
    speed: 80,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 446.25 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_38',
    name: 'Infernal Shadow Stalker 38',
    category: 'GRUNT',
    baseHp: 1830,
    hpScalingPerWave: 1.196,
    baseArmor: 44,
    magicResistance: 40,
    speed: 86,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 457.5 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_39',
    name: 'Infernal Shadow Stalker 39',
    category: 'GRUNT',
    baseHp: 1875,
    hpScalingPerWave: 1.198,
    baseArmor: 45,
    magicResistance: 41,
    speed: 92,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 468.75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_40',
    name: 'Infernal Shadow Stalker 40',
    category: 'WORLD_BOSS',
    baseHp: 63000,
    hpScalingPerWave: 1.2,
    baseArmor: 46,
    magicResistance: 42,
    speed: 50,
    isFlying: true,
    goldBounty: 250,
    scoreValue: 2000,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 15750 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_41',
    name: 'Infernal Shadow Stalker 41',
    category: 'GRUNT',
    baseHp: 1965,
    hpScalingPerWave: 1.202,
    baseArmor: 46,
    magicResistance: 42,
    speed: 56,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 491.25 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_42',
    name: 'Infernal Shadow Stalker 42',
    category: 'GRUNT',
    baseHp: 2010,
    hpScalingPerWave: 1.204,
    baseArmor: 47,
    magicResistance: 43,
    speed: 62,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 502.5 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_43',
    name: 'Infernal Shadow Stalker 43',
    category: 'GRUNT',
    baseHp: 2055,
    hpScalingPerWave: 1.206,
    baseArmor: 48,
    magicResistance: 44,
    speed: 68,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 513.75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_44',
    name: 'Infernal Shadow Stalker 44',
    category: 'GRUNT',
    baseHp: 2100,
    hpScalingPerWave: 1.208,
    baseArmor: 49,
    magicResistance: 45,
    speed: 74,
    isFlying: true,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 525 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_45',
    name: 'Infernal Shadow Stalker 45',
    category: 'ELITE',
    baseHp: 11500,
    hpScalingPerWave: 1.21,
    baseArmor: 50,
    magicResistance: 46,
    speed: 80,
    isFlying: false,
    goldBounty: 45,
    scoreValue: 350,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 2875 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_46',
    name: 'Infernal Shadow Stalker 46',
    category: 'GRUNT',
    baseHp: 2190,
    hpScalingPerWave: 1.212,
    baseArmor: 51,
    magicResistance: 47,
    speed: 86,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 547.5 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_47',
    name: 'Infernal Shadow Stalker 47',
    category: 'GRUNT',
    baseHp: 2235,
    hpScalingPerWave: 1.214,
    baseArmor: 52,
    magicResistance: 47,
    speed: 92,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 558.75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_48',
    name: 'Infernal Shadow Stalker 48',
    category: 'GRUNT',
    baseHp: 2280,
    hpScalingPerWave: 1.216,
    baseArmor: 53,
    magicResistance: 48,
    speed: 50,
    isFlying: true,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 570 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_49',
    name: 'Infernal Shadow Stalker 49',
    category: 'GRUNT',
    baseHp: 2325,
    hpScalingPerWave: 1.218,
    baseArmor: 54,
    magicResistance: 49,
    speed: 56,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 581.25 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_50',
    name: 'Infernal Shadow Stalker 50',
    category: 'WORLD_BOSS',
    baseHp: 75000,
    hpScalingPerWave: 1.22,
    baseArmor: 55,
    magicResistance: 50,
    speed: 62,
    isFlying: false,
    goldBounty: 250,
    scoreValue: 2000,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 18750 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_51',
    name: 'Infernal Shadow Stalker 51',
    category: 'GRUNT',
    baseHp: 2415,
    hpScalingPerWave: 1.222,
    baseArmor: 55,
    magicResistance: 51,
    speed: 68,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 603.75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_52',
    name: 'Infernal Shadow Stalker 52',
    category: 'GRUNT',
    baseHp: 2460,
    hpScalingPerWave: 1.224,
    baseArmor: 56,
    magicResistance: 52,
    speed: 74,
    isFlying: true,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 615 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_53',
    name: 'Infernal Shadow Stalker 53',
    category: 'GRUNT',
    baseHp: 2505,
    hpScalingPerWave: 1.226,
    baseArmor: 57,
    magicResistance: 53,
    speed: 80,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 626.25 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_54',
    name: 'Infernal Shadow Stalker 54',
    category: 'GRUNT',
    baseHp: 2550,
    hpScalingPerWave: 1.228,
    baseArmor: 58,
    magicResistance: 53,
    speed: 86,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 637.5 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_55',
    name: 'Infernal Shadow Stalker 55',
    category: 'ELITE',
    baseHp: 13500,
    hpScalingPerWave: 1.23,
    baseArmor: 59,
    magicResistance: 54,
    speed: 92,
    isFlying: false,
    goldBounty: 45,
    scoreValue: 350,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 3375 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_56',
    name: 'Infernal Shadow Stalker 56',
    category: 'GRUNT',
    baseHp: 2640,
    hpScalingPerWave: 1.232,
    baseArmor: 60,
    magicResistance: 55,
    speed: 50,
    isFlying: true,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 660 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_57',
    name: 'Infernal Shadow Stalker 57',
    category: 'GRUNT',
    baseHp: 2685,
    hpScalingPerWave: 1.234,
    baseArmor: 61,
    magicResistance: 56,
    speed: 56,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 671.25 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_58',
    name: 'Infernal Shadow Stalker 58',
    category: 'GRUNT',
    baseHp: 2730,
    hpScalingPerWave: 1.236,
    baseArmor: 62,
    magicResistance: 57,
    speed: 62,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 682.5 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_59',
    name: 'Infernal Shadow Stalker 59',
    category: 'GRUNT',
    baseHp: 2775,
    hpScalingPerWave: 1.238,
    baseArmor: 63,
    magicResistance: 58,
    speed: 68,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 693.75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_60',
    name: 'Infernal Shadow Stalker 60',
    category: 'WORLD_BOSS',
    baseHp: 87000,
    hpScalingPerWave: 1.24,
    baseArmor: 64,
    magicResistance: 59,
    speed: 74,
    isFlying: true,
    goldBounty: 250,
    scoreValue: 2000,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 21750 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_61',
    name: 'Infernal Shadow Stalker 61',
    category: 'GRUNT',
    baseHp: 2865,
    hpScalingPerWave: 1.242,
    baseArmor: 64,
    magicResistance: 59,
    speed: 80,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 716.25 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_62',
    name: 'Infernal Shadow Stalker 62',
    category: 'GRUNT',
    baseHp: 2910,
    hpScalingPerWave: 1.244,
    baseArmor: 65,
    magicResistance: 60,
    speed: 86,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 727.5 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_63',
    name: 'Infernal Shadow Stalker 63',
    category: 'GRUNT',
    baseHp: 2955,
    hpScalingPerWave: 1.246,
    baseArmor: 66,
    magicResistance: 61,
    speed: 92,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 738.75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_64',
    name: 'Infernal Shadow Stalker 64',
    category: 'GRUNT',
    baseHp: 3000,
    hpScalingPerWave: 1.248,
    baseArmor: 67,
    magicResistance: 62,
    speed: 50,
    isFlying: true,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 750 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_65',
    name: 'Infernal Shadow Stalker 65',
    category: 'ELITE',
    baseHp: 15500,
    hpScalingPerWave: 1.25,
    baseArmor: 68,
    magicResistance: 63,
    speed: 56,
    isFlying: false,
    goldBounty: 45,
    scoreValue: 350,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 3875 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_66',
    name: 'Infernal Shadow Stalker 66',
    category: 'GRUNT',
    baseHp: 3090,
    hpScalingPerWave: 1.252,
    baseArmor: 69,
    magicResistance: 64,
    speed: 62,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 772.5 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_67',
    name: 'Infernal Shadow Stalker 67',
    category: 'GRUNT',
    baseHp: 3135,
    hpScalingPerWave: 1.254,
    baseArmor: 70,
    magicResistance: 64,
    speed: 68,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 783.75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_68',
    name: 'Infernal Shadow Stalker 68',
    category: 'GRUNT',
    baseHp: 3180,
    hpScalingPerWave: 1.256,
    baseArmor: 71,
    magicResistance: 65,
    speed: 74,
    isFlying: true,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 795 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_69',
    name: 'Infernal Shadow Stalker 69',
    category: 'GRUNT',
    baseHp: 3225,
    hpScalingPerWave: 1.258,
    baseArmor: 72,
    magicResistance: 66,
    speed: 80,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 806.25 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_70',
    name: 'Infernal Shadow Stalker 70',
    category: 'WORLD_BOSS',
    baseHp: 99000,
    hpScalingPerWave: 1.26,
    baseArmor: 73,
    magicResistance: 67,
    speed: 86,
    isFlying: false,
    goldBounty: 250,
    scoreValue: 2000,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 24750 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_71',
    name: 'Infernal Shadow Stalker 71',
    category: 'GRUNT',
    baseHp: 3315,
    hpScalingPerWave: 1.262,
    baseArmor: 73,
    magicResistance: 68,
    speed: 92,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 828.75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_72',
    name: 'Infernal Shadow Stalker 72',
    category: 'GRUNT',
    baseHp: 3360,
    hpScalingPerWave: 1.264,
    baseArmor: 74,
    magicResistance: 69,
    speed: 50,
    isFlying: true,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 840 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_73',
    name: 'Infernal Shadow Stalker 73',
    category: 'GRUNT',
    baseHp: 3405,
    hpScalingPerWave: 1.266,
    baseArmor: 75,
    magicResistance: 70,
    speed: 56,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 851.25 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_74',
    name: 'Infernal Shadow Stalker 74',
    category: 'GRUNT',
    baseHp: 3450,
    hpScalingPerWave: 1.268,
    baseArmor: 76,
    magicResistance: 70,
    speed: 62,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 862.5 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_75',
    name: 'Infernal Shadow Stalker 75',
    category: 'ELITE',
    baseHp: 17500,
    hpScalingPerWave: 1.27,
    baseArmor: 77,
    magicResistance: 71,
    speed: 68,
    isFlying: false,
    goldBounty: 45,
    scoreValue: 350,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 4375 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_76',
    name: 'Infernal Shadow Stalker 76',
    category: 'GRUNT',
    baseHp: 3540,
    hpScalingPerWave: 1.272,
    baseArmor: 78,
    magicResistance: 72,
    speed: 74,
    isFlying: true,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 885 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_77',
    name: 'Infernal Shadow Stalker 77',
    category: 'GRUNT',
    baseHp: 3585,
    hpScalingPerWave: 1.274,
    baseArmor: 79,
    magicResistance: 73,
    speed: 80,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 896.25 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_78',
    name: 'Infernal Shadow Stalker 78',
    category: 'GRUNT',
    baseHp: 3630,
    hpScalingPerWave: 1.276,
    baseArmor: 80,
    magicResistance: 74,
    speed: 86,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 907.5 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_79',
    name: 'Infernal Shadow Stalker 79',
    category: 'GRUNT',
    baseHp: 3675,
    hpScalingPerWave: 1.278,
    baseArmor: 81,
    magicResistance: 75,
    speed: 92,
    isFlying: false,
    goldBounty: 12,
    scoreValue: 50,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 918.75 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
  {
    type: 'enemy_archetype_80',
    name: 'Infernal Shadow Stalker 80',
    category: 'WORLD_BOSS',
    baseHp: 111000,
    hpScalingPerWave: 1.28,
    baseArmor: 82,
    magicResistance: 76,
    speed: 50,
    isFlying: true,
    goldBounty: 250,
    scoreValue: 2000,
    abilities: [
      { name: 'Dark Aegis', triggerHpPercent: 0.5, cooldownMs: 15000, effect: 'SHIELD_REGEN', magnitude: 27750 },
      { name: 'Bloodrage Surge', triggerHpPercent: 0.25, cooldownMs: 25000, effect: 'BERSERK_SPEED', magnitude: 1.5 },
    ],
    description: 'Ancient dark entity from the Void Breach, resilient against standard physical ballistics.',
  },
];

export class EnemyBestiaryEvaluator {
  static getEnemy(type: string): EnemyBestiaryEntry | undefined {
    return ENEMY_BESTIARY_DATA.find(e => e.type === type);
  }

  static computeScaledHp_1(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_2(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_3(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_4(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_5(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_6(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_7(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_8(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_9(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_10(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_11(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_12(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_13(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_14(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_15(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_16(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_17(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_18(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_19(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_20(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_21(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_22(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_23(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_24(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_25(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_26(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_27(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_28(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_29(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_30(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_31(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_32(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_33(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_34(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_35(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_36(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_37(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_38(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_39(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_40(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_41(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_42(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_43(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_44(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_45(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_46(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_47(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_48(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_49(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

  static computeScaledHp_50(entry: EnemyBestiaryEntry, waveNumber: number): number {
    return Math.floor(entry.baseHp * Math.pow(entry.hpScalingPerWave, waveNumber));
  }

}