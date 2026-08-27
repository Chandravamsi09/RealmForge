import { EnemyType } from '../engine/ecs/Components';

export interface EnemyStats {
  type: EnemyType;
  name: string;
  description: string;
  baseHealth: number;
  baseSpeed: number; // Pixels per second
  baseArmor: number;
  baseMagicResist: number;
  baseBountyGold: number;
  baseBountyXp: number;
  damageToNexus: number;
  isFlying: boolean;
}

export const ENEMY_DEFINITIONS: Record<EnemyType, EnemyStats> = {
  [EnemyType.SWARM]: {
    type: EnemyType.SWARM,
    name: 'Skittering Larva',
    description: 'Fast, fragile creatures that attack in massive waves.',
    baseHealth: 60,
    baseSpeed: 150,
    baseArmor: 0,
    baseMagicResist: 0,
    baseBountyGold: 8,
    baseBountyXp: 10,
    damageToNexus: 1,
    isFlying: false,
  },

  [EnemyType.GOBLIN]: {
    type: EnemyType.GOBLIN,
    name: 'Goblin Marauder',
    description: 'Standard infantry with balanced speed and health.',
    baseHealth: 120,
    baseSpeed: 110,
    baseArmor: 15,
    baseMagicResist: 10,
    baseBountyGold: 15,
    baseBountyXp: 18,
    damageToNexus: 1,
    isFlying: false,
  },

  [EnemyType.ORC_BRUTE]: {
    type: EnemyType.ORC_BRUTE,
    name: 'Orcish Juggernaut',
    description: 'Heavily armored bruiser capable of absorbing intense physical damage.',
    baseHealth: 350,
    baseSpeed: 70,
    baseArmor: 60,
    baseMagicResist: 15,
    baseBountyGold: 35,
    baseBountyXp: 45,
    damageToNexus: 2,
    isFlying: false,
  },

  [EnemyType.ARMOURED_KNIGHT]: {
    type: EnemyType.ARMOURED_KNIGHT,
    name: 'Dread Ironclad',
    description: 'Impenetrable fortress knight clad in reinforced steel plate.',
    baseHealth: 600,
    baseSpeed: 55,
    baseArmor: 120,
    baseMagicResist: 25,
    baseBountyGold: 55,
    baseBountyXp: 70,
    damageToNexus: 3,
    isFlying: false,
  },

  [EnemyType.ARCANE_GOLEM]: {
    type: EnemyType.ARCANE_GOLEM,
    name: 'Aetherial Construct',
    description: 'Magical stone entity boasting massive spell resistance.',
    baseHealth: 450,
    baseSpeed: 85,
    baseArmor: 20,
    baseMagicResist: 80,
    baseBountyGold: 45,
    baseBountyXp: 60,
    damageToNexus: 2,
    isFlying: false,
  },

  [EnemyType.WYVERN_FLYER]: {
    type: EnemyType.WYVERN_FLYER,
    name: 'Shadow Wyvern',
    description: 'Aerial predator that flies directly over maze walls and obstacles.',
    baseHealth: 200,
    baseSpeed: 135,
    baseArmor: 30,
    baseMagicResist: 30,
    baseBountyGold: 28,
    baseBountyXp: 35,
    damageToNexus: 2,
    isFlying: true,
  },

  [EnemyType.BOSS_TITAN]: {
    type: EnemyType.BOSS_TITAN,
    name: 'Gargantuan World-Eater',
    description: 'Catastrophic behemoth with monstrous health reserves and crushing power.',
    baseHealth: 3200,
    baseSpeed: 45,
    baseArmor: 140,
    baseMagicResist: 60,
    baseBountyGold: 300,
    baseBountyXp: 500,
    damageToNexus: 10,
    isFlying: false,
  },
};
