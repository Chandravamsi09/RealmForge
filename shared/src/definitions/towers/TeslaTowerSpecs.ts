/**
 * RealmForge Authoritative Tesla Tower Extended Specifications & Progression Trees
 * Role: High-voltage electric chain arcs & EMP disruption
 * Architecture: Level 1-100 tiers, dual mastery branches (OVERCHARGE & SUPERCONDUCTOR), modifier matrices.
 */

import { DamageType } from '../../engine/ecs/Components';

export interface TeslaTierSpec {
  tier: number;
  level: number;
  name: string;
  branch: 'OVERCHARGE' | 'SUPERCONDUCTOR' | 'BASE';
  cost: number;
  damage: number;
  range: number;
  attackSpeed: number;
  damageType: DamageType;
  projectileSpeed: number;
  critChance: number;
  critMultiplier: number;
  armorPenetration: number;
  magicPenetration: number;
  specialAbilities: string[];
  description: string;
  statModifiers: Record<string, number>;
  dps: number;
}

export const TESLA_TIER_DATA: TeslaTierSpec[] = [
  {
    tier: 1,
    level: 1,
    name: 'Tesla Tier 1 - Level 1 (BASE)',
    branch: 'BASE',
    cost: 164,
    damage: 38,
    range: 144,
    attackSpeed: 0.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 328,
    critChance: 0.057,
    critMultiplier: 1.52,
    armorPenetration: 2,
    magicPenetration: 1.5,
    specialAbilities: ['Tesla_Perk_1', 'BASE_Mastery_1'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 38 kinetic damage with 35 projected DPS.',
    statModifiers: {
      rangeBonus: 1.25,
      velocityMultiplier: 1.02,
      splashRadius: 0,
      shredDurationSec: 2.1,
    },
    dps: 35,
  },
  {
    tier: 1,
    level: 2,
    name: 'Tesla Tier 1 - Level 2 (BASE)',
    branch: 'BASE',
    cost: 250,
    damage: 51,
    range: 148,
    attackSpeed: 1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 336,
    critChance: 0.064,
    critMultiplier: 1.55,
    armorPenetration: 4,
    magicPenetration: 3,
    specialAbilities: ['Tesla_Perk_2', 'BASE_Mastery_1'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 51 kinetic damage with 52 projected DPS.',
    statModifiers: {
      rangeBonus: 2.5,
      velocityMultiplier: 1.04,
      splashRadius: 0,
      shredDurationSec: 2.2,
    },
    dps: 52,
  },
  {
    tier: 1,
    level: 3,
    name: 'Tesla Tier 1 - Level 3 (BASE)',
    branch: 'BASE',
    cost: 356,
    damage: 66,
    range: 152,
    attackSpeed: 1.1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 344,
    critChance: 0.071,
    critMultiplier: 1.57,
    armorPenetration: 6,
    magicPenetration: 4.5,
    specialAbilities: ['Tesla_Perk_3', 'BASE_Mastery_1'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 66 kinetic damage with 75 projected DPS.',
    statModifiers: {
      rangeBonus: 3.75,
      velocityMultiplier: 1.06,
      splashRadius: 0,
      shredDurationSec: 2.3,
    },
    dps: 75,
  },
  {
    tier: 1,
    level: 4,
    name: 'Tesla Tier 1 - Level 4 (BASE)',
    branch: 'BASE',
    cost: 481,
    damage: 80,
    range: 156,
    attackSpeed: 1.2,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 352,
    critChance: 0.078,
    critMultiplier: 1.6,
    armorPenetration: 8,
    magicPenetration: 6,
    specialAbilities: ['Tesla_Perk_4', 'BASE_Mastery_1'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 80 kinetic damage with 100 projected DPS.',
    statModifiers: {
      rangeBonus: 5,
      velocityMultiplier: 1.08,
      splashRadius: 0,
      shredDurationSec: 2.4,
    },
    dps: 100,
  },
  {
    tier: 1,
    level: 5,
    name: 'Tesla Tier 1 - Level 5 (BASE)',
    branch: 'BASE',
    cost: 624,
    damage: 96,
    range: 160,
    attackSpeed: 1.3,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 360,
    critChance: 0.085,
    critMultiplier: 1.63,
    armorPenetration: 10,
    magicPenetration: 7.5,
    specialAbilities: ['Tesla_Perk_5', 'BASE_Mastery_1'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 96 kinetic damage with 131 projected DPS.',
    statModifiers: {
      rangeBonus: 6.25,
      velocityMultiplier: 1.1,
      splashRadius: 0,
      shredDurationSec: 2.5,
    },
    dps: 131,
  },
  {
    tier: 2,
    level: 6,
    name: 'Tesla Tier 2 - Level 6 (BASE)',
    branch: 'BASE',
    cost: 785,
    damage: 112,
    range: 164,
    attackSpeed: 1.4,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 368,
    critChance: 0.092,
    critMultiplier: 1.65,
    armorPenetration: 12,
    magicPenetration: 9,
    specialAbilities: ['Tesla_Perk_6', 'BASE_Mastery_2'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 112 kinetic damage with 166 projected DPS.',
    statModifiers: {
      rangeBonus: 7.5,
      velocityMultiplier: 1.12,
      splashRadius: 0,
      shredDurationSec: 2.6,
    },
    dps: 166,
  },
  {
    tier: 2,
    level: 7,
    name: 'Tesla Tier 2 - Level 7 (BASE)',
    branch: 'BASE',
    cost: 962,
    damage: 128,
    range: 168,
    attackSpeed: 1.5,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 376,
    critChance: 0.099,
    critMultiplier: 1.68,
    armorPenetration: 14,
    magicPenetration: 10.5,
    specialAbilities: ['Tesla_Perk_7', 'BASE_Mastery_2'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 128 kinetic damage with 204 projected DPS.',
    statModifiers: {
      rangeBonus: 8.75,
      velocityMultiplier: 1.14,
      splashRadius: 0,
      shredDurationSec: 2.7,
    },
    dps: 204,
  },
  {
    tier: 2,
    level: 8,
    name: 'Tesla Tier 2 - Level 8 (BASE)',
    branch: 'BASE',
    cost: 1155,
    damage: 146,
    range: 172,
    attackSpeed: 1.6,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 384,
    critChance: 0.106,
    critMultiplier: 1.7,
    armorPenetration: 16,
    magicPenetration: 12,
    specialAbilities: ['Tesla_Perk_8', 'BASE_Mastery_2'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 146 kinetic damage with 250 projected DPS.',
    statModifiers: {
      rangeBonus: 10,
      velocityMultiplier: 1.16,
      splashRadius: 0,
      shredDurationSec: 2.8,
    },
    dps: 250,
  },
  {
    tier: 2,
    level: 9,
    name: 'Tesla Tier 2 - Level 9 (BASE)',
    branch: 'BASE',
    cost: 1365,
    damage: 165,
    range: 176,
    attackSpeed: 1.7,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 392,
    critChance: 0.113,
    critMultiplier: 1.73,
    armorPenetration: 18,
    magicPenetration: 13.5,
    specialAbilities: ['Tesla_Perk_9', 'BASE_Mastery_2'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 165 kinetic damage with 303 projected DPS.',
    statModifiers: {
      rangeBonus: 11.25,
      velocityMultiplier: 1.18,
      splashRadius: 0,
      shredDurationSec: 2.9,
    },
    dps: 303,
  },
  {
    tier: 2,
    level: 10,
    name: 'Tesla Tier 2 - Level 10 (BASE)',
    branch: 'BASE',
    cost: 1591,
    damage: 184,
    range: 180,
    attackSpeed: 1.8,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 400,
    critChance: 0.12,
    critMultiplier: 1.75,
    armorPenetration: 20,
    magicPenetration: 15,
    specialAbilities: ['Tesla_Perk_10', 'BASE_Mastery_2'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 184 kinetic damage with 361 projected DPS.',
    statModifiers: {
      rangeBonus: 12.5,
      velocityMultiplier: 1.2,
      splashRadius: 0,
      shredDurationSec: 3,
    },
    dps: 361,
  },
  {
    tier: 3,
    level: 11,
    name: 'Tesla Tier 3 - Level 11 (BASE)',
    branch: 'BASE',
    cost: 1832,
    damage: 205,
    range: 184,
    attackSpeed: 1.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 408,
    critChance: 0.127,
    critMultiplier: 1.77,
    armorPenetration: 22,
    magicPenetration: 16.5,
    specialAbilities: ['Tesla_Perk_11', 'BASE_Mastery_3'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 205 kinetic damage with 427 projected DPS.',
    statModifiers: {
      rangeBonus: 13.75,
      velocityMultiplier: 1.22,
      splashRadius: 0,
      shredDurationSec: 3.1,
    },
    dps: 427,
  },
  {
    tier: 3,
    level: 12,
    name: 'Tesla Tier 3 - Level 12 (BASE)',
    branch: 'BASE',
    cost: 2088,
    damage: 228,
    range: 188,
    attackSpeed: 0.8,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 416,
    critChance: 0.134,
    critMultiplier: 1.8,
    armorPenetration: 24,
    magicPenetration: 18,
    specialAbilities: ['Tesla_Perk_12', 'BASE_Mastery_3'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 228 kinetic damage with 201 projected DPS.',
    statModifiers: {
      rangeBonus: 15,
      velocityMultiplier: 1.24,
      splashRadius: 0,
      shredDurationSec: 3.2,
    },
    dps: 201,
  },
  {
    tier: 3,
    level: 13,
    name: 'Tesla Tier 3 - Level 13 (BASE)',
    branch: 'BASE',
    cost: 2360,
    damage: 252,
    range: 192,
    attackSpeed: 0.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 424,
    critChance: 0.141,
    critMultiplier: 1.82,
    armorPenetration: 26,
    magicPenetration: 19.5,
    specialAbilities: ['Tesla_Perk_13', 'BASE_Mastery_3'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 252 kinetic damage with 253 projected DPS.',
    statModifiers: {
      rangeBonus: 16.25,
      velocityMultiplier: 1.26,
      splashRadius: 0,
      shredDurationSec: 3.3,
    },
    dps: 253,
  },
  {
    tier: 3,
    level: 14,
    name: 'Tesla Tier 3 - Level 14 (BASE)',
    branch: 'BASE',
    cost: 2646,
    damage: 278,
    range: 196,
    attackSpeed: 1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 432,
    critChance: 0.148,
    critMultiplier: 1.85,
    armorPenetration: 28,
    magicPenetration: 21,
    specialAbilities: ['Tesla_Perk_14', 'BASE_Mastery_3'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 278 kinetic damage with 312 projected DPS.',
    statModifiers: {
      rangeBonus: 17.5,
      velocityMultiplier: 1.28,
      splashRadius: 0,
      shredDurationSec: 3.4,
    },
    dps: 312,
  },
  {
    tier: 3,
    level: 15,
    name: 'Tesla Tier 3 - Level 15 (BASE)',
    branch: 'BASE',
    cost: 2948,
    damage: 306,
    range: 200,
    attackSpeed: 1.1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 440,
    critChance: 0.155,
    critMultiplier: 1.88,
    armorPenetration: 30,
    magicPenetration: 22.5,
    specialAbilities: ['Tesla_Perk_15', 'BASE_Mastery_3'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 306 kinetic damage with 382 projected DPS.',
    statModifiers: {
      rangeBonus: 18.75,
      velocityMultiplier: 1.3,
      splashRadius: 0,
      shredDurationSec: 3.5,
    },
    dps: 382,
  },
  {
    tier: 4,
    level: 16,
    name: 'Tesla Tier 4 - Level 16 (BASE)',
    branch: 'BASE',
    cost: 3264,
    damage: 336,
    range: 204,
    attackSpeed: 1.2,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 448,
    critChance: 0.162,
    critMultiplier: 1.9,
    armorPenetration: 32,
    magicPenetration: 24,
    specialAbilities: ['Tesla_Perk_16', 'BASE_Mastery_4'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 336 kinetic damage with 461 projected DPS.',
    statModifiers: {
      rangeBonus: 20,
      velocityMultiplier: 1.32,
      splashRadius: 0,
      shredDurationSec: 3.6,
    },
    dps: 461,
  },
  {
    tier: 4,
    level: 17,
    name: 'Tesla Tier 4 - Level 17 (BASE)',
    branch: 'BASE',
    cost: 3595,
    damage: 369,
    range: 208,
    attackSpeed: 1.3,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 456,
    critChance: 0.169,
    critMultiplier: 1.93,
    armorPenetration: 34,
    magicPenetration: 25.5,
    specialAbilities: ['Tesla_Perk_17', 'BASE_Mastery_4'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 369 kinetic damage with 555 projected DPS.',
    statModifiers: {
      rangeBonus: 21.25,
      velocityMultiplier: 1.34,
      splashRadius: 0,
      shredDurationSec: 3.7,
    },
    dps: 555,
  },
  {
    tier: 4,
    level: 18,
    name: 'Tesla Tier 4 - Level 18 (BASE)',
    branch: 'BASE',
    cost: 3940,
    damage: 405,
    range: 212,
    attackSpeed: 1.4,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 464,
    critChance: 0.176,
    critMultiplier: 1.95,
    armorPenetration: 36,
    magicPenetration: 27,
    specialAbilities: ['Tesla_Perk_18', 'BASE_Mastery_4'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 405 kinetic damage with 661 projected DPS.',
    statModifiers: {
      rangeBonus: 22.5,
      velocityMultiplier: 1.36,
      splashRadius: 0,
      shredDurationSec: 3.8,
    },
    dps: 661,
  },
  {
    tier: 4,
    level: 19,
    name: 'Tesla Tier 4 - Level 19 (BASE)',
    branch: 'BASE',
    cost: 4299,
    damage: 444,
    range: 216,
    attackSpeed: 1.5,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 472,
    critChance: 0.183,
    critMultiplier: 1.98,
    armorPenetration: 38,
    magicPenetration: 28.5,
    specialAbilities: ['Tesla_Perk_19', 'BASE_Mastery_4'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 444 kinetic damage with 785 projected DPS.',
    statModifiers: {
      rangeBonus: 23.75,
      velocityMultiplier: 1.38,
      splashRadius: 0,
      shredDurationSec: 3.9,
    },
    dps: 785,
  },
  {
    tier: 4,
    level: 20,
    name: 'Tesla Tier 4 - Level 20 (BASE)',
    branch: 'BASE',
    cost: 4673,
    damage: 488,
    range: 220,
    attackSpeed: 1.6,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 480,
    critChance: 0.19,
    critMultiplier: 2,
    armorPenetration: 40,
    magicPenetration: 30,
    specialAbilities: ['Tesla_Perk_20', 'BASE_Mastery_4'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 488 kinetic damage with 929 projected DPS.',
    statModifiers: {
      rangeBonus: 25,
      velocityMultiplier: 1.4,
      splashRadius: 0,
      shredDurationSec: 4,
    },
    dps: 929,
  },
  {
    tier: 5,
    level: 21,
    name: 'Tesla Tier 5 - Level 21 (BASE)',
    branch: 'BASE',
    cost: 5060,
    damage: 535,
    range: 224,
    attackSpeed: 1.7,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 488,
    critChance: 0.197,
    critMultiplier: 2.02,
    armorPenetration: 42,
    magicPenetration: 31.5,
    specialAbilities: ['Tesla_Perk_21', 'BASE_Mastery_5'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 535 kinetic damage with 1092 projected DPS.',
    statModifiers: {
      rangeBonus: 26.25,
      velocityMultiplier: 1.42,
      splashRadius: 0,
      shredDurationSec: 4.1,
    },
    dps: 1092,
  },
  {
    tier: 5,
    level: 22,
    name: 'Tesla Tier 5 - Level 22 (BASE)',
    branch: 'BASE',
    cost: 5461,
    damage: 587,
    range: 228,
    attackSpeed: 1.8,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 496,
    critChance: 0.204,
    critMultiplier: 2.05,
    armorPenetration: 44,
    magicPenetration: 33,
    specialAbilities: ['Tesla_Perk_22', 'BASE_Mastery_5'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 587 kinetic damage with 1282 projected DPS.',
    statModifiers: {
      rangeBonus: 27.5,
      velocityMultiplier: 1.44,
      splashRadius: 0,
      shredDurationSec: 4.2,
    },
    dps: 1282,
  },
  {
    tier: 5,
    level: 23,
    name: 'Tesla Tier 5 - Level 23 (BASE)',
    branch: 'BASE',
    cost: 5877,
    damage: 645,
    range: 232,
    attackSpeed: 1.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 504,
    critChance: 0.211,
    critMultiplier: 2.08,
    armorPenetration: 46,
    magicPenetration: 34.5,
    specialAbilities: ['Tesla_Perk_23', 'BASE_Mastery_5'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 645 kinetic damage with 1504 projected DPS.',
    statModifiers: {
      rangeBonus: 28.75,
      velocityMultiplier: 1.46,
      splashRadius: 0,
      shredDurationSec: 4.3,
    },
    dps: 1504,
  },
  {
    tier: 5,
    level: 24,
    name: 'Tesla Tier 5 - Level 24 (BASE)',
    branch: 'BASE',
    cost: 6306,
    damage: 709,
    range: 236,
    attackSpeed: 0.8,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 512,
    critChance: 0.218,
    critMultiplier: 2.1,
    armorPenetration: 48,
    magicPenetration: 36,
    specialAbilities: ['Tesla_Perk_24', 'BASE_Mastery_5'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 709 kinetic damage with 703 projected DPS.',
    statModifiers: {
      rangeBonus: 30,
      velocityMultiplier: 1.48,
      splashRadius: 0,
      shredDurationSec: 4.4,
    },
    dps: 703,
  },
  {
    tier: 5,
    level: 25,
    name: 'Tesla Tier 5 - Level 25 (BASE)',
    branch: 'BASE',
    cost: 6749,
    damage: 780,
    range: 240,
    attackSpeed: 0.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 520,
    critChance: 0.225,
    critMultiplier: 2.13,
    armorPenetration: 50,
    magicPenetration: 37.5,
    specialAbilities: ['Tesla_Perk_25', 'BASE_Mastery_5'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 780 kinetic damage with 880 projected DPS.',
    statModifiers: {
      rangeBonus: 31.25,
      velocityMultiplier: 1.5,
      splashRadius: 0,
      shredDurationSec: 4.5,
    },
    dps: 880,
  },
  {
    tier: 6,
    level: 26,
    name: 'Tesla Tier 6 - Level 26 (BASE)',
    branch: 'BASE',
    cost: 7205,
    damage: 859,
    range: 244,
    attackSpeed: 1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 528,
    critChance: 0.232,
    critMultiplier: 2.15,
    armorPenetration: 52,
    magicPenetration: 39,
    specialAbilities: ['Tesla_Perk_26', 'BASE_Mastery_6'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 859 kinetic damage with 1088 projected DPS.',
    statModifiers: {
      rangeBonus: 32.5,
      velocityMultiplier: 1.52,
      splashRadius: 0,
      shredDurationSec: 4.6,
    },
    dps: 1088,
  },
  {
    tier: 6,
    level: 27,
    name: 'Tesla Tier 6 - Level 27 (BASE)',
    branch: 'BASE',
    cost: 7675,
    damage: 947,
    range: 248,
    attackSpeed: 1.1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 536,
    critChance: 0.239,
    critMultiplier: 2.17,
    armorPenetration: 54,
    magicPenetration: 40.5,
    specialAbilities: ['Tesla_Perk_27', 'BASE_Mastery_6'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 947 kinetic damage with 1332 projected DPS.',
    statModifiers: {
      rangeBonus: 33.75,
      velocityMultiplier: 1.54,
      splashRadius: 0,
      shredDurationSec: 4.7,
    },
    dps: 1332,
  },
  {
    tier: 6,
    level: 28,
    name: 'Tesla Tier 6 - Level 28 (BASE)',
    branch: 'BASE',
    cost: 8158,
    damage: 1045,
    range: 252,
    attackSpeed: 1.2,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 544,
    critChance: 0.246,
    critMultiplier: 2.2,
    armorPenetration: 56,
    magicPenetration: 42,
    specialAbilities: ['Tesla_Perk_28', 'BASE_Mastery_6'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 1045 kinetic damage with 1624 projected DPS.',
    statModifiers: {
      rangeBonus: 35,
      velocityMultiplier: 1.56,
      splashRadius: 0,
      shredDurationSec: 4.8,
    },
    dps: 1624,
  },
  {
    tier: 6,
    level: 29,
    name: 'Tesla Tier 6 - Level 29 (BASE)',
    branch: 'BASE',
    cost: 8655,
    damage: 1155,
    range: 256,
    attackSpeed: 1.3,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 552,
    critChance: 0.253,
    critMultiplier: 2.23,
    armorPenetration: 58,
    magicPenetration: 43.5,
    specialAbilities: ['Tesla_Perk_29', 'BASE_Mastery_6'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 1155 kinetic damage with 1968 projected DPS.',
    statModifiers: {
      rangeBonus: 36.25,
      velocityMultiplier: 1.58,
      splashRadius: 0,
      shredDurationSec: 4.9,
    },
    dps: 1968,
  },
  {
    tier: 6,
    level: 30,
    name: 'Tesla Tier 6 - Level 30 (BASE)',
    branch: 'BASE',
    cost: 9164,
    damage: 1277,
    range: 260,
    attackSpeed: 1.4,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 560,
    critChance: 0.26,
    critMultiplier: 2.25,
    armorPenetration: 60,
    magicPenetration: 45,
    specialAbilities: ['Tesla_Perk_30', 'BASE_Mastery_6'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 1277 kinetic damage with 2368 projected DPS.',
    statModifiers: {
      rangeBonus: 37.5,
      velocityMultiplier: 1.6,
      splashRadius: 0,
      shredDurationSec: 5,
    },
    dps: 2368,
  },
  {
    tier: 7,
    level: 31,
    name: 'Tesla Tier 7 - Level 31 (BASE)',
    branch: 'BASE',
    cost: 9687,
    damage: 1415,
    range: 264,
    attackSpeed: 1.5,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 568,
    critChance: 0.267,
    critMultiplier: 2.27,
    armorPenetration: 62,
    magicPenetration: 46.5,
    specialAbilities: ['Tesla_Perk_31', 'BASE_Mastery_7'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 1415 kinetic damage with 2842 projected DPS.',
    statModifiers: {
      rangeBonus: 38.75,
      velocityMultiplier: 1.62,
      splashRadius: 0,
      shredDurationSec: 5.1,
    },
    dps: 2842,
  },
  {
    tier: 7,
    level: 32,
    name: 'Tesla Tier 7 - Level 32 (BASE)',
    branch: 'BASE',
    cost: 10224,
    damage: 1568,
    range: 268,
    attackSpeed: 1.6,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 576,
    critChance: 0.274,
    critMultiplier: 2.3,
    armorPenetration: 64,
    magicPenetration: 48,
    specialAbilities: ['Tesla_Perk_32', 'BASE_Mastery_7'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 1568 kinetic damage with 3402 projected DPS.',
    statModifiers: {
      rangeBonus: 40,
      velocityMultiplier: 1.64,
      splashRadius: 0,
      shredDurationSec: 5.2,
    },
    dps: 3402,
  },
  {
    tier: 7,
    level: 33,
    name: 'Tesla Tier 7 - Level 33 (BASE)',
    branch: 'BASE',
    cost: 10773,
    damage: 1741,
    range: 272,
    attackSpeed: 1.7,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 584,
    critChance: 0.281,
    critMultiplier: 2.33,
    armorPenetration: 66,
    magicPenetration: 49.5,
    specialAbilities: ['Tesla_Perk_33', 'BASE_Mastery_7'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 1741 kinetic damage with 4065 projected DPS.',
    statModifiers: {
      rangeBonus: 41.25,
      velocityMultiplier: 1.66,
      splashRadius: 0,
      shredDurationSec: 5.3,
    },
    dps: 4065,
  },
  {
    tier: 7,
    level: 34,
    name: 'Tesla Tier 7 - Level 34 (BASE)',
    branch: 'BASE',
    cost: 11335,
    damage: 1934,
    range: 276,
    attackSpeed: 1.8,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 592,
    critChance: 0.288,
    critMultiplier: 2.35,
    armorPenetration: 68,
    magicPenetration: 51,
    specialAbilities: ['Tesla_Perk_34', 'BASE_Mastery_7'],
    description: 'High-precision Tesla optimized for BASE combat, delivering 1934 kinetic damage with 4834 projected DPS.',
    statModifiers: {
      rangeBonus: 42.5,
      velocityMultiplier: 1.68,
      splashRadius: 0,
      shredDurationSec: 5.4,
    },
    dps: 4834,
  },
  {
    tier: 7,
    level: 35,
    name: 'Tesla Tier 7 - Level 35 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 11911,
    damage: 2151,
    range: 280,
    attackSpeed: 1.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 600,
    critChance: 0.295,
    critMultiplier: 2.38,
    armorPenetration: 70,
    magicPenetration: 52.5,
    specialAbilities: ['Tesla_Perk_35', 'OVERCHARGE_Mastery_7'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 2151 kinetic damage with 5750 projected DPS.',
    statModifiers: {
      rangeBonus: 43.75,
      velocityMultiplier: 1.7,
      splashRadius: 0,
      shredDurationSec: 5.5,
    },
    dps: 5750,
  },
  {
    tier: 8,
    level: 36,
    name: 'Tesla Tier 8 - Level 36 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 12499,
    damage: 2395,
    range: 284,
    attackSpeed: 0.8,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 608,
    critChance: 0.302,
    critMultiplier: 2.4,
    armorPenetration: 72,
    magicPenetration: 54,
    specialAbilities: ['Tesla_Perk_36', 'OVERCHARGE_Mastery_8'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 2395 kinetic damage with 2726 projected DPS.',
    statModifiers: {
      rangeBonus: 45,
      velocityMultiplier: 1.72,
      splashRadius: 0,
      shredDurationSec: 5.6,
    },
    dps: 2726,
  },
  {
    tier: 8,
    level: 37,
    name: 'Tesla Tier 8 - Level 37 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 13100,
    damage: 2670,
    range: 288,
    attackSpeed: 0.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 616,
    critChance: 0.309,
    critMultiplier: 2.42,
    armorPenetration: 74,
    magicPenetration: 55.5,
    specialAbilities: ['Tesla_Perk_37', 'OVERCHARGE_Mastery_8'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 2670 kinetic damage with 3457 projected DPS.',
    statModifiers: {
      rangeBonus: 46.25,
      velocityMultiplier: 1.74,
      splashRadius: 0,
      shredDurationSec: 5.7,
    },
    dps: 3457,
  },
  {
    tier: 8,
    level: 38,
    name: 'Tesla Tier 8 - Level 38 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 13714,
    damage: 2979,
    range: 292,
    attackSpeed: 1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 624,
    critChance: 0.316,
    critMultiplier: 2.45,
    armorPenetration: 76,
    magicPenetration: 57,
    specialAbilities: ['Tesla_Perk_38', 'OVERCHARGE_Mastery_8'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 2979 kinetic damage with 4343 projected DPS.',
    statModifiers: {
      rangeBonus: 47.5,
      velocityMultiplier: 1.76,
      splashRadius: 0,
      shredDurationSec: 5.8,
    },
    dps: 4343,
  },
  {
    tier: 8,
    level: 39,
    name: 'Tesla Tier 8 - Level 39 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 14341,
    damage: 3327,
    range: 296,
    attackSpeed: 1.1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 632,
    critChance: 0.323,
    critMultiplier: 2.48,
    armorPenetration: 78,
    magicPenetration: 58.5,
    specialAbilities: ['Tesla_Perk_39', 'OVERCHARGE_Mastery_8'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 3327 kinetic damage with 5409 projected DPS.',
    statModifiers: {
      rangeBonus: 48.75,
      velocityMultiplier: 1.78,
      splashRadius: 0,
      shredDurationSec: 5.9,
    },
    dps: 5409,
  },
  {
    tier: 8,
    level: 40,
    name: 'Tesla Tier 8 - Level 40 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 14980,
    damage: 3719,
    range: 300,
    attackSpeed: 1.2,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 640,
    critChance: 0.33,
    critMultiplier: 2.5,
    armorPenetration: 80,
    magicPenetration: 60,
    specialAbilities: ['Tesla_Perk_40', 'OVERCHARGE_Mastery_8'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 3719 kinetic damage with 6671 projected DPS.',
    statModifiers: {
      rangeBonus: 50,
      velocityMultiplier: 1.8,
      splashRadius: 0,
      shredDurationSec: 6,
    },
    dps: 6671,
  },
  {
    tier: 9,
    level: 41,
    name: 'Tesla Tier 9 - Level 41 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 15632,
    damage: 4161,
    range: 304,
    attackSpeed: 1.3,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 648,
    critChance: 0.337,
    critMultiplier: 2.53,
    armorPenetration: 82,
    magicPenetration: 61.5,
    specialAbilities: ['Tesla_Perk_41', 'OVERCHARGE_Mastery_9'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 4161 kinetic damage with 8198 projected DPS.',
    statModifiers: {
      rangeBonus: 51.25,
      velocityMultiplier: 1.82,
      splashRadius: 0,
      shredDurationSec: 6.1,
    },
    dps: 8198,
  },
  {
    tier: 9,
    level: 42,
    name: 'Tesla Tier 9 - Level 42 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 16297,
    damage: 4658,
    range: 308,
    attackSpeed: 1.4,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 656,
    critChance: 0.344,
    critMultiplier: 2.55,
    armorPenetration: 84,
    magicPenetration: 63,
    specialAbilities: ['Tesla_Perk_42', 'OVERCHARGE_Mastery_9'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 4658 kinetic damage with 9998 projected DPS.',
    statModifiers: {
      rangeBonus: 52.5,
      velocityMultiplier: 1.84,
      splashRadius: 0,
      shredDurationSec: 6.2,
    },
    dps: 9998,
  },
  {
    tier: 9,
    level: 43,
    name: 'Tesla Tier 9 - Level 43 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 16974,
    damage: 5219,
    range: 312,
    attackSpeed: 1.5,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 664,
    critChance: 0.351,
    critMultiplier: 2.58,
    armorPenetration: 86,
    magicPenetration: 64.5,
    specialAbilities: ['Tesla_Perk_43', 'OVERCHARGE_Mastery_9'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 5219 kinetic damage with 12170 projected DPS.',
    statModifiers: {
      rangeBonus: 53.75,
      velocityMultiplier: 1.86,
      splashRadius: 0,
      shredDurationSec: 6.3,
    },
    dps: 12170,
  },
  {
    tier: 9,
    level: 44,
    name: 'Tesla Tier 9 - Level 44 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 17664,
    damage: 5852,
    range: 316,
    attackSpeed: 1.6,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 672,
    critChance: 0.358,
    critMultiplier: 2.6,
    armorPenetration: 88,
    magicPenetration: 66,
    specialAbilities: ['Tesla_Perk_44', 'OVERCHARGE_Mastery_9'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 5852 kinetic damage with 14726 projected DPS.',
    statModifiers: {
      rangeBonus: 55,
      velocityMultiplier: 1.88,
      splashRadius: 0,
      shredDurationSec: 6.4,
    },
    dps: 14726,
  },
  {
    tier: 9,
    level: 45,
    name: 'Tesla Tier 9 - Level 45 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 18366,
    damage: 6566,
    range: 320,
    attackSpeed: 1.7,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 680,
    critChance: 0.365,
    critMultiplier: 2.63,
    armorPenetration: 90,
    magicPenetration: 67.5,
    specialAbilities: ['Tesla_Perk_45', 'OVERCHARGE_Mastery_9'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 6566 kinetic damage with 17803 projected DPS.',
    statModifiers: {
      rangeBonus: 56.25,
      velocityMultiplier: 1.9,
      splashRadius: 0,
      shredDurationSec: 6.5,
    },
    dps: 17803,
  },
  {
    tier: 10,
    level: 46,
    name: 'Tesla Tier 10 - Level 46 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 19081,
    damage: 7371,
    range: 324,
    attackSpeed: 1.8,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 688,
    critChance: 0.372,
    critMultiplier: 2.65,
    armorPenetration: 92,
    magicPenetration: 69,
    specialAbilities: ['Tesla_Perk_46', 'OVERCHARGE_Mastery_10'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 7371 kinetic damage with 21411 projected DPS.',
    statModifiers: {
      rangeBonus: 57.5,
      velocityMultiplier: 1.92,
      splashRadius: 0,
      shredDurationSec: 6.6,
    },
    dps: 21411,
  },
  {
    tier: 10,
    level: 47,
    name: 'Tesla Tier 10 - Level 47 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 19808,
    damage: 8279,
    range: 328,
    attackSpeed: 1.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 696,
    critChance: 0.379,
    critMultiplier: 2.67,
    armorPenetration: 94,
    magicPenetration: 70.5,
    specialAbilities: ['Tesla_Perk_47', 'OVERCHARGE_Mastery_10'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 8279 kinetic damage with 25686 projected DPS.',
    statModifiers: {
      rangeBonus: 58.75,
      velocityMultiplier: 1.94,
      splashRadius: 0,
      shredDurationSec: 6.7,
    },
    dps: 25686,
  },
  {
    tier: 10,
    level: 48,
    name: 'Tesla Tier 10 - Level 48 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 20547,
    damage: 9304,
    range: 332,
    attackSpeed: 0.8,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 704,
    critChance: 0.386,
    critMultiplier: 2.7,
    armorPenetration: 96,
    magicPenetration: 72,
    specialAbilities: ['Tesla_Perk_48', 'OVERCHARGE_Mastery_10'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 9304 kinetic damage with 12327 projected DPS.',
    statModifiers: {
      rangeBonus: 60,
      velocityMultiplier: 1.96,
      splashRadius: 0,
      shredDurationSec: 6.8,
    },
    dps: 12327,
  },
  {
    tier: 10,
    level: 49,
    name: 'Tesla Tier 10 - Level 49 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 21299,
    damage: 10462,
    range: 336,
    attackSpeed: 0.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 712,
    critChance: 0.393,
    critMultiplier: 2.73,
    armorPenetration: 98,
    magicPenetration: 73.5,
    specialAbilities: ['Tesla_Perk_49', 'OVERCHARGE_Mastery_10'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 10462 kinetic damage with 15817 projected DPS.',
    statModifiers: {
      rangeBonus: 61.25,
      velocityMultiplier: 1.98,
      splashRadius: 0,
      shredDurationSec: 6.9,
    },
    dps: 15817,
  },
  {
    tier: 10,
    level: 50,
    name: 'Tesla Tier 10 - Level 50 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 22063,
    damage: 11768,
    range: 340,
    attackSpeed: 1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 720,
    critChance: 0.4,
    critMultiplier: 2.75,
    armorPenetration: 100,
    magicPenetration: 75,
    specialAbilities: ['Tesla_Perk_50', 'OVERCHARGE_Mastery_10'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 11768 kinetic damage with 20005 projected DPS.',
    statModifiers: {
      rangeBonus: 62.5,
      velocityMultiplier: 2,
      splashRadius: 0,
      shredDurationSec: 7,
    },
    dps: 20005,
  },
  {
    tier: 11,
    level: 51,
    name: 'Tesla Tier 11 - Level 51 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 22839,
    damage: 13243,
    range: 344,
    attackSpeed: 1.1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 728,
    critChance: 0.407,
    critMultiplier: 2.78,
    armorPenetration: 102,
    magicPenetration: 76.5,
    specialAbilities: ['Tesla_Perk_51', 'OVERCHARGE_Mastery_11'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 13243 kinetic damage with 25120 projected DPS.',
    statModifiers: {
      rangeBonus: 63.75,
      velocityMultiplier: 2.02,
      splashRadius: 0,
      shredDurationSec: 7.1,
    },
    dps: 25120,
  },
  {
    tier: 11,
    level: 52,
    name: 'Tesla Tier 11 - Level 52 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 23628,
    damage: 14908,
    range: 348,
    attackSpeed: 1.2,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 736,
    critChance: 0.414,
    critMultiplier: 2.8,
    armorPenetration: 104,
    magicPenetration: 78,
    specialAbilities: ['Tesla_Perk_52', 'OVERCHARGE_Mastery_11'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 14908 kinetic damage with 31220 projected DPS.',
    statModifiers: {
      rangeBonus: 65,
      velocityMultiplier: 2.04,
      splashRadius: 0,
      shredDurationSec: 7.2,
    },
    dps: 31220,
  },
  {
    tier: 11,
    level: 53,
    name: 'Tesla Tier 11 - Level 53 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 24428,
    damage: 16789,
    range: 352,
    attackSpeed: 1.3,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 744,
    critChance: 0.421,
    critMultiplier: 2.83,
    armorPenetration: 106,
    magicPenetration: 79.5,
    specialAbilities: ['Tesla_Perk_53', 'OVERCHARGE_Mastery_11'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 16789 kinetic damage with 38640 projected DPS.',
    statModifiers: {
      rangeBonus: 66.25,
      velocityMultiplier: 2.06,
      splashRadius: 0,
      shredDurationSec: 7.3,
    },
    dps: 38640,
  },
  {
    tier: 11,
    level: 54,
    name: 'Tesla Tier 11 - Level 54 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 25241,
    damage: 18912,
    range: 356,
    attackSpeed: 1.4,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 752,
    critChance: 0.428,
    critMultiplier: 2.85,
    armorPenetration: 108,
    magicPenetration: 81,
    specialAbilities: ['Tesla_Perk_54', 'OVERCHARGE_Mastery_11'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 18912 kinetic damage with 47441 projected DPS.',
    statModifiers: {
      rangeBonus: 67.5,
      velocityMultiplier: 2.08,
      splashRadius: 0,
      shredDurationSec: 7.4,
    },
    dps: 47441,
  },
  {
    tier: 11,
    level: 55,
    name: 'Tesla Tier 11 - Level 55 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 26066,
    damage: 21311,
    range: 360,
    attackSpeed: 1.5,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 760,
    critChance: 0.435,
    critMultiplier: 2.88,
    armorPenetration: 110,
    magicPenetration: 82.5,
    specialAbilities: ['Tesla_Perk_55', 'OVERCHARGE_Mastery_11'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 21311 kinetic damage with 58108 projected DPS.',
    statModifiers: {
      rangeBonus: 68.75,
      velocityMultiplier: 2.1,
      splashRadius: 0,
      shredDurationSec: 7.5,
    },
    dps: 58108,
  },
  {
    tier: 12,
    level: 56,
    name: 'Tesla Tier 12 - Level 56 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 26903,
    damage: 24020,
    range: 364,
    attackSpeed: 1.6,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 768,
    critChance: 0.442,
    critMultiplier: 2.9,
    armorPenetration: 112,
    magicPenetration: 84,
    specialAbilities: ['Tesla_Perk_56', 'OVERCHARGE_Mastery_12'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 24020 kinetic damage with 70707 projected DPS.',
    statModifiers: {
      rangeBonus: 70,
      velocityMultiplier: 2.12,
      splashRadius: 0,
      shredDurationSec: 7.6,
    },
    dps: 70707,
  },
  {
    tier: 12,
    level: 57,
    name: 'Tesla Tier 12 - Level 57 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 27752,
    damage: 27080,
    range: 368,
    attackSpeed: 1.7,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 776,
    critChance: 0.449,
    critMultiplier: 2.92,
    armorPenetration: 114,
    magicPenetration: 85.5,
    specialAbilities: ['Tesla_Perk_57', 'OVERCHARGE_Mastery_12'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 27080 kinetic damage with 85722 projected DPS.',
    statModifiers: {
      rangeBonus: 71.25,
      velocityMultiplier: 2.14,
      splashRadius: 0,
      shredDurationSec: 7.7,
    },
    dps: 85722,
  },
  {
    tier: 12,
    level: 58,
    name: 'Tesla Tier 12 - Level 58 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 28613,
    damage: 30536,
    range: 372,
    attackSpeed: 1.8,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 784,
    critChance: 0.456,
    critMultiplier: 2.95,
    armorPenetration: 116,
    magicPenetration: 87,
    specialAbilities: ['Tesla_Perk_58', 'OVERCHARGE_Mastery_12'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 30536 kinetic damage with 103839 projected DPS.',
    statModifiers: {
      rangeBonus: 72.5,
      velocityMultiplier: 2.16,
      splashRadius: 0,
      shredDurationSec: 7.8,
    },
    dps: 103839,
  },
  {
    tier: 12,
    level: 59,
    name: 'Tesla Tier 12 - Level 59 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 29486,
    damage: 34440,
    range: 376,
    attackSpeed: 1.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 792,
    critChance: 0.463,
    critMultiplier: 2.98,
    armorPenetration: 118,
    magicPenetration: 88.5,
    specialAbilities: ['Tesla_Perk_59', 'OVERCHARGE_Mastery_12'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 34440 kinetic damage with 125423 projected DPS.',
    statModifiers: {
      rangeBonus: 73.75,
      velocityMultiplier: 2.18,
      splashRadius: 0,
      shredDurationSec: 7.9,
    },
    dps: 125423,
  },
  {
    tier: 12,
    level: 60,
    name: 'Tesla Tier 12 - Level 60 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 30371,
    damage: 38851,
    range: 380,
    attackSpeed: 0.8,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 800,
    critChance: 0.47,
    critMultiplier: 3,
    armorPenetration: 120,
    magicPenetration: 90,
    specialAbilities: ['Tesla_Perk_60', 'OVERCHARGE_Mastery_12'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 38851 kinetic damage with 60296 projected DPS.',
    statModifiers: {
      rangeBonus: 75,
      velocityMultiplier: 2.2,
      splashRadius: 0,
      shredDurationSec: 8,
    },
    dps: 60296,
  },
  {
    tier: 13,
    level: 61,
    name: 'Tesla Tier 13 - Level 61 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 31268,
    damage: 43834,
    range: 384,
    attackSpeed: 0.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 808,
    critChance: 0.477,
    critMultiplier: 3.03,
    armorPenetration: 122,
    magicPenetration: 91.5,
    specialAbilities: ['Tesla_Perk_61', 'OVERCHARGE_Mastery_13'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 43834 kinetic damage with 77651 projected DPS.',
    statModifiers: {
      rangeBonus: 76.25,
      velocityMultiplier: 2.22,
      splashRadius: 0,
      shredDurationSec: 8.1,
    },
    dps: 77651,
  },
  {
    tier: 13,
    level: 62,
    name: 'Tesla Tier 13 - Level 62 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 32176,
    damage: 49463,
    range: 388,
    attackSpeed: 1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 816,
    critChance: 0.484,
    critMultiplier: 3.05,
    armorPenetration: 124,
    magicPenetration: 93,
    specialAbilities: ['Tesla_Perk_62', 'OVERCHARGE_Mastery_13'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 49463 kinetic damage with 98540 projected DPS.',
    statModifiers: {
      rangeBonus: 77.5,
      velocityMultiplier: 2.24,
      splashRadius: 0,
      shredDurationSec: 8.2,
    },
    dps: 98540,
  },
  {
    tier: 13,
    level: 63,
    name: 'Tesla Tier 13 - Level 63 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 33097,
    damage: 55822,
    range: 392,
    attackSpeed: 1.1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 824,
    critChance: 0.491,
    critMultiplier: 3.08,
    armorPenetration: 126,
    magicPenetration: 94.5,
    specialAbilities: ['Tesla_Perk_63', 'OVERCHARGE_Mastery_13'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 55822 kinetic damage with 124115 projected DPS.',
    statModifiers: {
      rangeBonus: 78.75,
      velocityMultiplier: 2.26,
      splashRadius: 0,
      shredDurationSec: 8.3,
    },
    dps: 124115,
  },
  {
    tier: 13,
    level: 64,
    name: 'Tesla Tier 13 - Level 64 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 34029,
    damage: 63007,
    range: 396,
    attackSpeed: 1.2,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 832,
    critChance: 0.498,
    critMultiplier: 3.1,
    armorPenetration: 128,
    magicPenetration: 96,
    specialAbilities: ['Tesla_Perk_64', 'OVERCHARGE_Mastery_13'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 63007 kinetic damage with 154679 projected DPS.',
    statModifiers: {
      rangeBonus: 80,
      velocityMultiplier: 2.28,
      splashRadius: 0,
      shredDurationSec: 8.4,
    },
    dps: 154679,
  },
  {
    tier: 13,
    level: 65,
    name: 'Tesla Tier 13 - Level 65 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 34974,
    damage: 71125,
    range: 400,
    attackSpeed: 1.3,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 840,
    critChance: 0.505,
    critMultiplier: 3.13,
    armorPenetration: 130,
    magicPenetration: 97.5,
    specialAbilities: ['Tesla_Perk_65', 'OVERCHARGE_Mastery_13'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 71125 kinetic damage with 191919 projected DPS.',
    statModifiers: {
      rangeBonus: 81.25,
      velocityMultiplier: 2.3,
      splashRadius: 0,
      shredDurationSec: 8.5,
    },
    dps: 191919,
  },
  {
    tier: 14,
    level: 66,
    name: 'Tesla Tier 14 - Level 66 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 35930,
    damage: 80297,
    range: 404,
    attackSpeed: 1.4,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 848,
    critChance: 0.512,
    critMultiplier: 3.15,
    armorPenetration: 132,
    magicPenetration: 99,
    specialAbilities: ['Tesla_Perk_66', 'OVERCHARGE_Mastery_14'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 80297 kinetic damage with 236163 projected DPS.',
    statModifiers: {
      rangeBonus: 82.5,
      velocityMultiplier: 2.32,
      splashRadius: 0,
      shredDurationSec: 8.6,
    },
    dps: 236163,
  },
  {
    tier: 14,
    level: 67,
    name: 'Tesla Tier 14 - Level 67 (OVERCHARGE)',
    branch: 'OVERCHARGE',
    cost: 36897,
    damage: 90660,
    range: 408,
    attackSpeed: 1.5,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 856,
    critChance: 0.519,
    critMultiplier: 3.17,
    armorPenetration: 134,
    magicPenetration: 100.5,
    specialAbilities: ['Tesla_Perk_67', 'OVERCHARGE_Mastery_14'],
    description: 'High-precision Tesla optimized for OVERCHARGE combat, delivering 90660 kinetic damage with 289146 projected DPS.',
    statModifiers: {
      rangeBonus: 83.75,
      velocityMultiplier: 2.34,
      splashRadius: 0,
      shredDurationSec: 8.7,
    },
    dps: 289146,
  },
  {
    tier: 14,
    level: 68,
    name: 'Tesla Tier 14 - Level 68 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 37877,
    damage: 102369,
    range: 412,
    attackSpeed: 1.6,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 864,
    critChance: 0.526,
    critMultiplier: 3.2,
    armorPenetration: 136,
    magicPenetration: 102,
    specialAbilities: ['Tesla_Perk_68', 'SUPERCONDUCTOR_Mastery_14'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 102369 kinetic damage with 353328 projected DPS.',
    statModifiers: {
      rangeBonus: 85,
      velocityMultiplier: 2.36,
      splashRadius: 176,
      shredDurationSec: 8.8,
    },
    dps: 353328,
  },
  {
    tier: 14,
    level: 69,
    name: 'Tesla Tier 14 - Level 69 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 38868,
    damage: 115598,
    range: 416,
    attackSpeed: 1.7,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 872,
    critChance: 0.533,
    critMultiplier: 3.23,
    armorPenetration: 138,
    magicPenetration: 103.5,
    specialAbilities: ['Tesla_Perk_69', 'SUPERCONDUCTOR_Mastery_14'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 115598 kinetic damage with 430094 projected DPS.',
    statModifiers: {
      rangeBonus: 86.25,
      velocityMultiplier: 2.38,
      splashRadius: 178,
      shredDurationSec: 8.9,
    },
    dps: 430094,
  },
  {
    tier: 14,
    level: 70,
    name: 'Tesla Tier 14 - Level 70 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 39870,
    damage: 130546,
    range: 420,
    attackSpeed: 1.8,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 880,
    critChance: 0.54,
    critMultiplier: 3.25,
    armorPenetration: 140,
    magicPenetration: 105,
    specialAbilities: ['Tesla_Perk_70', 'SUPERCONDUCTOR_Mastery_14'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 130546 kinetic damage with 520486 projected DPS.',
    statModifiers: {
      rangeBonus: 87.5,
      velocityMultiplier: 2.4,
      splashRadius: 180,
      shredDurationSec: 9,
    },
    dps: 520486,
  },
  {
    tier: 15,
    level: 71,
    name: 'Tesla Tier 15 - Level 71 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 40885,
    damage: 147436,
    range: 424,
    attackSpeed: 1.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 888,
    critChance: 0.547,
    critMultiplier: 3.28,
    armorPenetration: 142,
    magicPenetration: 106.5,
    specialAbilities: ['Tesla_Perk_71', 'SUPERCONDUCTOR_Mastery_15'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 147436 kinetic damage with 629493 projected DPS.',
    statModifiers: {
      rangeBonus: 88.75,
      velocityMultiplier: 2.42,
      splashRadius: 182,
      shredDurationSec: 9.1,
    },
    dps: 629493,
  },
  {
    tier: 15,
    level: 72,
    name: 'Tesla Tier 15 - Level 72 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 41911,
    damage: 166521,
    range: 428,
    attackSpeed: 0.8,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 896,
    critChance: 0.554,
    critMultiplier: 3.3,
    armorPenetration: 144,
    magicPenetration: 108,
    specialAbilities: ['Tesla_Perk_72', 'SUPERCONDUCTOR_Mastery_15'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 166521 kinetic damage with 302961 projected DPS.',
    statModifiers: {
      rangeBonus: 90,
      velocityMultiplier: 2.44,
      splashRadius: 184,
      shredDurationSec: 9.2,
    },
    dps: 302961,
  },
  {
    tier: 15,
    level: 73,
    name: 'Tesla Tier 15 - Level 73 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 42949,
    damage: 188085,
    range: 432,
    attackSpeed: 0.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 904,
    critChance: 0.561,
    critMultiplier: 3.33,
    armorPenetration: 146,
    magicPenetration: 109.5,
    specialAbilities: ['Tesla_Perk_73', 'SUPERCONDUCTOR_Mastery_15'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 188085 kinetic damage with 390542 projected DPS.',
    statModifiers: {
      rangeBonus: 91.25,
      velocityMultiplier: 2.46,
      splashRadius: 186,
      shredDurationSec: 9.3,
    },
    dps: 390542,
  },
  {
    tier: 15,
    level: 74,
    name: 'Tesla Tier 15 - Level 74 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 43998,
    damage: 212451,
    range: 436,
    attackSpeed: 1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 912,
    critChance: 0.568,
    critMultiplier: 3.35,
    armorPenetration: 148,
    magicPenetration: 111,
    specialAbilities: ['Tesla_Perk_74', 'SUPERCONDUCTOR_Mastery_15'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 212451 kinetic damage with 496030 projected DPS.',
    statModifiers: {
      rangeBonus: 92.5,
      velocityMultiplier: 2.48,
      splashRadius: 188,
      shredDurationSec: 9.4,
    },
    dps: 496030,
  },
  {
    tier: 15,
    level: 75,
    name: 'Tesla Tier 15 - Level 75 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 45058,
    damage: 239984,
    range: 440,
    attackSpeed: 1.1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 920,
    critChance: 0.575,
    critMultiplier: 3.38,
    armorPenetration: 150,
    magicPenetration: 112.5,
    specialAbilities: ['Tesla_Perk_75', 'SUPERCONDUCTOR_Mastery_15'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 239984 kinetic damage with 625242 projected DPS.',
    statModifiers: {
      rangeBonus: 93.75,
      velocityMultiplier: 2.5,
      splashRadius: 190,
      shredDurationSec: 9.5,
    },
    dps: 625242,
  },
  {
    tier: 16,
    level: 76,
    name: 'Tesla Tier 16 - Level 76 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 46131,
    damage: 271094,
    range: 444,
    attackSpeed: 1.2,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 928,
    critChance: 0.582,
    critMultiplier: 3.4,
    armorPenetration: 152,
    magicPenetration: 114,
    specialAbilities: ['Tesla_Perk_76', 'SUPERCONDUCTOR_Mastery_16'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 271094 kinetic damage with 779709 projected DPS.',
    statModifiers: {
      rangeBonus: 95,
      velocityMultiplier: 2.52,
      splashRadius: 192,
      shredDurationSec: 9.6,
    },
    dps: 779709,
  },
  {
    tier: 16,
    level: 77,
    name: 'Tesla Tier 16 - Level 77 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 47214,
    damage: 306248,
    range: 448,
    attackSpeed: 1.3,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 936,
    critChance: 0.589,
    critMultiplier: 3.42,
    armorPenetration: 154,
    magicPenetration: 115.5,
    specialAbilities: ['Tesla_Perk_77', 'SUPERCONDUCTOR_Mastery_16'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 306248 kinetic damage with 965598 projected DPS.',
    statModifiers: {
      rangeBonus: 96.25,
      velocityMultiplier: 2.54,
      splashRadius: 194,
      shredDurationSec: 9.7,
    },
    dps: 965598,
  },
  {
    tier: 16,
    level: 78,
    name: 'Tesla Tier 16 - Level 78 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 48310,
    damage: 345970,
    range: 452,
    attackSpeed: 1.4,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 944,
    critChance: 0.596,
    critMultiplier: 3.45,
    armorPenetration: 156,
    magicPenetration: 117,
    specialAbilities: ['Tesla_Perk_78', 'SUPERCONDUCTOR_Mastery_16'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 345970 kinetic damage with 1191617 projected DPS.',
    statModifiers: {
      rangeBonus: 97.5,
      velocityMultiplier: 2.56,
      splashRadius: 196,
      shredDurationSec: 9.8,
    },
    dps: 1191617,
  },
  {
    tier: 16,
    level: 79,
    name: 'Tesla Tier 16 - Level 79 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 49416,
    damage: 390855,
    range: 456,
    attackSpeed: 1.5,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 952,
    critChance: 0.603,
    critMultiplier: 3.48,
    armorPenetration: 158,
    magicPenetration: 118.5,
    specialAbilities: ['Tesla_Perk_79', 'SUPERCONDUCTOR_Mastery_16'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 390855 kinetic damage with 1463032 projected DPS.',
    statModifiers: {
      rangeBonus: 98.75,
      velocityMultiplier: 2.58,
      splashRadius: 198,
      shredDurationSec: 9.9,
    },
    dps: 1463032,
  },
  {
    tier: 16,
    level: 80,
    name: 'Tesla Tier 16 - Level 80 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 50534,
    damage: 441573,
    range: 460,
    attackSpeed: 1.6,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 960,
    critChance: 0.61,
    critMultiplier: 3.5,
    armorPenetration: 160,
    magicPenetration: 120,
    specialAbilities: ['Tesla_Perk_80', 'SUPERCONDUCTOR_Mastery_16'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 441573 kinetic damage with 1783954 projected DPS.',
    statModifiers: {
      rangeBonus: 100,
      velocityMultiplier: 2.6,
      splashRadius: 200,
      shredDurationSec: 10,
    },
    dps: 1783954,
  },
  {
    tier: 17,
    level: 81,
    name: 'Tesla Tier 17 - Level 81 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 51664,
    damage: 498884,
    range: 464,
    attackSpeed: 1.7,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 968,
    critChance: 0.617,
    critMultiplier: 3.52,
    armorPenetration: 162,
    magicPenetration: 121.5,
    specialAbilities: ['Tesla_Perk_81', 'SUPERCONDUCTOR_Mastery_17'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 498884 kinetic damage with 2166766 projected DPS.',
    statModifiers: {
      rangeBonus: 101.25,
      velocityMultiplier: 2.62,
      splashRadius: 202,
      shredDurationSec: 10.1,
    },
    dps: 2166766,
  },
  {
    tier: 17,
    level: 82,
    name: 'Tesla Tier 17 - Level 82 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 52805,
    damage: 563643,
    range: 468,
    attackSpeed: 1.8,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 976,
    critChance: 0.624,
    critMultiplier: 3.55,
    armorPenetration: 164,
    magicPenetration: 123,
    specialAbilities: ['Tesla_Perk_82', 'SUPERCONDUCTOR_Mastery_17'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 563643 kinetic damage with 2628921 projected DPS.',
    statModifiers: {
      rangeBonus: 102.5,
      velocityMultiplier: 2.64,
      splashRadius: 204,
      shredDurationSec: 10.2,
    },
    dps: 2628921,
  },
  {
    tier: 17,
    level: 83,
    name: 'Tesla Tier 17 - Level 83 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 53957,
    damage: 636820,
    range: 472,
    attackSpeed: 1.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 984,
    critChance: 0.631,
    critMultiplier: 3.58,
    armorPenetration: 166,
    magicPenetration: 124.5,
    specialAbilities: ['Tesla_Perk_83', 'SUPERCONDUCTOR_Mastery_17'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 636820 kinetic damage with 3179745 projected DPS.',
    statModifiers: {
      rangeBonus: 103.75,
      velocityMultiplier: 2.66,
      splashRadius: 206,
      shredDurationSec: 10.3,
    },
    dps: 3179745,
  },
  {
    tier: 17,
    level: 84,
    name: 'Tesla Tier 17 - Level 84 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 55121,
    damage: 719509,
    range: 476,
    attackSpeed: 0.8,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 992,
    critChance: 0.638,
    critMultiplier: 3.6,
    armorPenetration: 168,
    magicPenetration: 126,
    specialAbilities: ['Tesla_Perk_84', 'SUPERCONDUCTOR_Mastery_17'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 719509 kinetic damage with 1530424 projected DPS.',
    statModifiers: {
      rangeBonus: 105,
      velocityMultiplier: 2.68,
      splashRadius: 208,
      shredDurationSec: 10.4,
    },
    dps: 1530424,
  },
  {
    tier: 17,
    level: 85,
    name: 'Tesla Tier 17 - Level 85 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 56296,
    damage: 812946,
    range: 480,
    attackSpeed: 0.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 1000,
    critChance: 0.645,
    critMultiplier: 3.63,
    armorPenetration: 170,
    magicPenetration: 127.5,
    specialAbilities: ['Tesla_Perk_85', 'SUPERCONDUCTOR_Mastery_17'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 812946 kinetic damage with 1972788 projected DPS.',
    statModifiers: {
      rangeBonus: 106.25,
      velocityMultiplier: 2.7,
      splashRadius: 210,
      shredDurationSec: 10.5,
    },
    dps: 1972788,
  },
  {
    tier: 18,
    level: 86,
    name: 'Tesla Tier 18 - Level 86 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 57482,
    damage: 918529,
    range: 484,
    attackSpeed: 1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 1008,
    critChance: 0.652,
    critMultiplier: 3.65,
    armorPenetration: 172,
    magicPenetration: 129,
    specialAbilities: ['Tesla_Perk_86', 'SUPERCONDUCTOR_Mastery_18'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 918529 kinetic damage with 2505563 projected DPS.',
    statModifiers: {
      rangeBonus: 107.5,
      velocityMultiplier: 2.72,
      splashRadius: 212,
      shredDurationSec: 10.6,
    },
    dps: 2505563,
  },
  {
    tier: 18,
    level: 87,
    name: 'Tesla Tier 18 - Level 87 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 58679,
    damage: 1037836,
    range: 488,
    attackSpeed: 1.1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 1016,
    critChance: 0.659,
    critMultiplier: 3.68,
    armorPenetration: 174,
    magicPenetration: 130.5,
    specialAbilities: ['Tesla_Perk_87', 'SUPERCONDUCTOR_Mastery_18'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 1037836 kinetic damage with 3157856 projected DPS.',
    statModifiers: {
      rangeBonus: 108.75,
      velocityMultiplier: 2.74,
      splashRadius: 214,
      shredDurationSec: 10.7,
    },
    dps: 3157856,
  },
  {
    tier: 18,
    level: 88,
    name: 'Tesla Tier 18 - Level 88 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 59888,
    damage: 1172651,
    range: 492,
    attackSpeed: 1.2,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 1024,
    critChance: 0.666,
    critMultiplier: 3.7,
    armorPenetration: 176,
    magicPenetration: 132,
    specialAbilities: ['Tesla_Perk_88', 'SUPERCONDUCTOR_Mastery_18'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 1172651 kinetic damage with 3937574 projected DPS.',
    statModifiers: {
      rangeBonus: 110,
      velocityMultiplier: 2.76,
      splashRadius: 216,
      shredDurationSec: 10.8,
    },
    dps: 3937574,
  },
  {
    tier: 18,
    level: 89,
    name: 'Tesla Tier 18 - Level 89 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 61108,
    damage: 1324992,
    range: 496,
    attackSpeed: 1.3,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 1032,
    critChance: 0.673,
    critMultiplier: 3.73,
    armorPenetration: 178,
    magicPenetration: 133.5,
    specialAbilities: ['Tesla_Perk_89', 'SUPERCONDUCTOR_Mastery_18'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 1324992 kinetic damage with 4887202 projected DPS.',
    statModifiers: {
      rangeBonus: 111.25,
      velocityMultiplier: 2.78,
      splashRadius: 218,
      shredDurationSec: 10.9,
    },
    dps: 4887202,
  },
  {
    tier: 18,
    level: 90,
    name: 'Tesla Tier 18 - Level 90 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 62339,
    damage: 1497135,
    range: 500,
    attackSpeed: 1.4,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 1040,
    critChance: 0.68,
    critMultiplier: 3.75,
    armorPenetration: 180,
    magicPenetration: 135,
    specialAbilities: ['Tesla_Perk_90', 'SUPERCONDUCTOR_Mastery_18'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 1497135 kinetic damage with 6015488 projected DPS.',
    statModifiers: {
      rangeBonus: 112.5,
      velocityMultiplier: 2.8,
      splashRadius: 220,
      shredDurationSec: 11,
    },
    dps: 6015488,
  },
  {
    tier: 19,
    level: 91,
    name: 'Tesla Tier 19 - Level 91 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 63582,
    damage: 1691655,
    range: 500,
    attackSpeed: 1.5,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 1048,
    critChance: 0.687,
    critMultiplier: 3.77,
    armorPenetration: 182,
    magicPenetration: 136.5,
    specialAbilities: ['Tesla_Perk_91', 'SUPERCONDUCTOR_Mastery_19'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 1691655 kinetic damage with 7366286 projected DPS.',
    statModifiers: {
      rangeBonus: 113.75,
      velocityMultiplier: 2.82,
      splashRadius: 222,
      shredDurationSec: 11.1,
    },
    dps: 7366286,
  },
  {
    tier: 19,
    level: 92,
    name: 'Tesla Tier 19 - Level 92 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 64836,
    damage: 1911462,
    range: 500,
    attackSpeed: 1.6,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 1056,
    critChance: 0.694,
    critMultiplier: 3.8,
    armorPenetration: 184,
    magicPenetration: 138,
    specialAbilities: ['Tesla_Perk_92', 'SUPERCONDUCTOR_Mastery_19'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 1911462 kinetic damage with 9001303 projected DPS.',
    statModifiers: {
      rangeBonus: 115,
      velocityMultiplier: 2.84,
      splashRadius: 224,
      shredDurationSec: 11.2,
    },
    dps: 9001303,
  },
  {
    tier: 19,
    level: 93,
    name: 'Tesla Tier 19 - Level 93 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 66100,
    damage: 2159843,
    range: 500,
    attackSpeed: 1.7,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 1064,
    critChance: 0.701,
    critMultiplier: 3.83,
    armorPenetration: 186,
    magicPenetration: 139.5,
    specialAbilities: ['Tesla_Perk_93', 'SUPERCONDUCTOR_Mastery_19'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 2159843 kinetic damage with 10955827 projected DPS.',
    statModifiers: {
      rangeBonus: 116.25,
      velocityMultiplier: 2.86,
      splashRadius: 226,
      shredDurationSec: 11.3,
    },
    dps: 10955827,
  },
  {
    tier: 19,
    level: 94,
    name: 'Tesla Tier 19 - Level 94 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 67376,
    damage: 2440512,
    range: 500,
    attackSpeed: 1.8,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 1072,
    critChance: 0.708,
    critMultiplier: 3.85,
    armorPenetration: 188,
    magicPenetration: 141,
    specialAbilities: ['Tesla_Perk_94', 'SUPERCONDUCTOR_Mastery_19'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 2440512 kinetic damage with 13256958 projected DPS.',
    statModifiers: {
      rangeBonus: 117.5,
      velocityMultiplier: 2.88,
      splashRadius: 228,
      shredDurationSec: 11.4,
    },
    dps: 13256958,
  },
  {
    tier: 19,
    level: 95,
    name: 'Tesla Tier 19 - Level 95 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 68664,
    damage: 2757666,
    range: 500,
    attackSpeed: 1.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 1080,
    critChance: 0.715,
    critMultiplier: 3.88,
    armorPenetration: 190,
    magicPenetration: 142.5,
    specialAbilities: ['Tesla_Perk_95', 'SUPERCONDUCTOR_Mastery_19'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 2757666 kinetic damage with 16028878 projected DPS.',
    statModifiers: {
      rangeBonus: 118.75,
      velocityMultiplier: 2.9,
      splashRadius: 230,
      shredDurationSec: 11.5,
    },
    dps: 16028878,
  },
  {
    tier: 20,
    level: 96,
    name: 'Tesla Tier 20 - Level 96 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 69962,
    damage: 3116049,
    range: 500,
    attackSpeed: 0.8,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 1088,
    critChance: 0.722,
    critMultiplier: 3.9,
    armorPenetration: 192,
    magicPenetration: 144,
    specialAbilities: ['Tesla_Perk_96', 'SUPERCONDUCTOR_Mastery_20'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 3116049 kinetic damage with 7712345 projected DPS.',
    statModifiers: {
      rangeBonus: 120,
      velocityMultiplier: 2.92,
      splashRadius: 232,
      shredDurationSec: 11.6,
    },
    dps: 7712345,
  },
  {
    tier: 20,
    level: 97,
    name: 'Tesla Tier 20 - Level 97 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 71271,
    damage: 3521021,
    range: 500,
    attackSpeed: 0.9,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 1096,
    critChance: 0.729,
    critMultiplier: 3.93,
    armorPenetration: 194,
    magicPenetration: 145.5,
    specialAbilities: ['Tesla_Perk_97', 'SUPERCONDUCTOR_Mastery_20'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 3521021 kinetic damage with 9937634 projected DPS.',
    statModifiers: {
      rangeBonus: 121.25,
      velocityMultiplier: 2.94,
      splashRadius: 234,
      shredDurationSec: 11.7,
    },
    dps: 9937634,
  },
  {
    tier: 20,
    level: 98,
    name: 'Tesla Tier 20 - Level 98 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 72592,
    damage: 3978638,
    range: 500,
    attackSpeed: 1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 1104,
    critChance: 0.736,
    critMultiplier: 3.95,
    armorPenetration: 196,
    magicPenetration: 147,
    specialAbilities: ['Tesla_Perk_98', 'SUPERCONDUCTOR_Mastery_20'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 3978638 kinetic damage with 12617056 projected DPS.',
    statModifiers: {
      rangeBonus: 122.5,
      velocityMultiplier: 2.96,
      splashRadius: 236,
      shredDurationSec: 11.8,
    },
    dps: 12617056,
  },
  {
    tier: 20,
    level: 99,
    name: 'Tesla Tier 20 - Level 99 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 73923,
    damage: 4495743,
    range: 500,
    attackSpeed: 1.1,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 1112,
    critChance: 0.743,
    critMultiplier: 3.98,
    armorPenetration: 198,
    magicPenetration: 148.5,
    specialAbilities: ['Tesla_Perk_99', 'SUPERCONDUCTOR_Mastery_20'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 4495743 kinetic damage with 15894942 projected DPS.',
    statModifiers: {
      rangeBonus: 123.75,
      velocityMultiplier: 2.98,
      splashRadius: 238,
      shredDurationSec: 11.9,
    },
    dps: 15894942,
  },
  {
    tier: 20,
    level: 100,
    name: 'Tesla Tier 20 - Level 100 (SUPERCONDUCTOR)',
    branch: 'SUPERCONDUCTOR',
    cost: 75266,
    damage: 5080071,
    range: 500,
    attackSpeed: 1.2,
    damageType: DamageType.PHYSICAL,
    projectileSpeed: 1120,
    critChance: 0.75,
    critMultiplier: 4,
    armorPenetration: 200,
    magicPenetration: 150,
    specialAbilities: ['Tesla_Perk_100', 'SUPERCONDUCTOR_Mastery_20'],
    description: 'High-precision Tesla optimized for SUPERCONDUCTOR combat, delivering 5080071 kinetic damage with 19812276 projected DPS.',
    statModifiers: {
      rangeBonus: 125,
      velocityMultiplier: 3,
      splashRadius: 240,
      shredDurationSec: 12,
    },
    dps: 19812276,
  },
];

export class TeslaCombatCalculator {
  static computeDamageOutput(spec: TeslaTierSpec, targetArmor: number, isFlyingTarget: boolean, distancePx: number): number {
    const effectiveArmor = Math.max(0, targetArmor - spec.armorPenetration);
    const mitigationFactor = 100 / (100 + effectiveArmor);
    let base = spec.damage * mitigationFactor;
    if (isFlyingTarget) base *= 1.15;
    const falloffFactor = Math.max(0.8, 1 - (distancePx / (spec.range * 2)));
    return Math.floor(base * falloffFactor);
  }

  static computeProjectileInterceptionTime(targetX: number, targetY: number, towerX: number, towerY: number, targetVx: number, targetVy: number, projSpeed: number): number {
    const dx = targetX - towerX;
    const dy = targetY - towerY;
    const a = (targetVx * targetVx) + (targetVy * targetVy) - (projSpeed * projSpeed);
    const b = 2 * (dx * targetVx + dy * targetVy);
    const c = (dx * dx) + (dy * dy);
    const disc = b * b - 4 * a * c;
    if (disc < 0) return Math.sqrt(c) / projSpeed;
    const t1 = (-b + Math.sqrt(disc)) / (2 * a);
    const t2 = (-b - Math.sqrt(disc)) / (2 * a);
    const validTimes = [t1, t2].filter(t => t > 0);
    return validTimes.length > 0 ? Math.min(...validTimes) : Math.sqrt(c) / projSpeed;
  }

  static getTierSpec(level: number, branch: 'OVERCHARGE' | 'SUPERCONDUCTOR' | 'BASE' = 'BASE'): TeslaTierSpec {
    const match = TESLA_TIER_DATA.find(t => t.level === level && t.branch === branch);
    return match || TESLA_TIER_DATA[0]!;
  }

  static evaluateMasteryMatrix_1(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_2(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_3(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_4(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_5(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_6(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_7(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_8(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_9(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_10(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_11(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_12(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_13(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_14(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_15(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_16(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_17(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_18(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_19(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_20(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_21(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_22(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_23(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_24(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_25(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_26(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_27(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_28(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_29(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_30(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_31(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_32(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_33(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_34(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_35(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_36(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_37(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_38(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_39(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_40(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_41(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_42(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_43(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_44(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_45(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_46(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_47(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_48(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_49(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_50(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_51(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_52(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_53(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_54(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_55(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_56(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_57(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_58(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_59(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

  static evaluateMasteryMatrix_60(spec: TeslaTierSpec, waveNumber: number, teamCount: number): { netValue: number; efficiencyRatio: number } {
    const waveScale = 1 + (waveNumber * 0.085);
    const teamSynergy = 1 + (teamCount * 0.05);
    const net = (spec.dps * waveScale * teamSynergy) / Math.max(1, spec.cost * 0.1);
    return { netValue: Math.round(net * 100) / 100, efficiencyRatio: Math.round((spec.dps / spec.cost) * 1000) / 1000 };
  }

}