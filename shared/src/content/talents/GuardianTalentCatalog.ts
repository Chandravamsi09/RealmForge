/**
 * RealmForge Guardian Mastery & Talent Trees
 * Contains 120 talent nodes across 6 Guardian classes (Commander, Elementalist, Artificer, Warlock, Tactician, Chronomancer).
 */

export interface TalentNode {
  id: string;
  guardianClass: 'COMMANDER' | 'ELEMENTALIST' | 'ARTIFICER' | 'WARLOCK' | 'TACTICIAN' | 'CHRONOMANCER';
  tier: number;
  name: string;
  maxRank: number;
  prerequisiteTalentId?: string;
  statModifiers: Record<string, number>;
  description: string;
}

export const GUARDIAN_TALENTS: TalentNode[] = [
  {
    id: 'talent_elementalist_1',
    guardianClass: 'ELEMENTALIST',
    tier: 1,
    name: 'ELEMENTALIST Mastery Node 1: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: undefined,
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 1,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_2',
    guardianClass: 'ARTIFICER',
    tier: 1,
    name: 'ARTIFICER Mastery Node 2: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: undefined,
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_3',
    guardianClass: 'WARLOCK',
    tier: 1,
    name: 'WARLOCK Mastery Node 3: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: undefined,
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 2,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_4',
    guardianClass: 'TACTICIAN',
    tier: 1,
    name: 'TACTICIAN Mastery Node 4: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: undefined,
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_5',
    guardianClass: 'CHRONOMANCER',
    tier: 1,
    name: 'CHRONOMANCER Mastery Node 5: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: undefined,
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_6',
    guardianClass: 'COMMANDER',
    tier: 1,
    name: 'COMMANDER Mastery Node 6: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: undefined,
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 1,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_7',
    guardianClass: 'ELEMENTALIST',
    tier: 1,
    name: 'ELEMENTALIST Mastery Node 7: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_1',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_8',
    guardianClass: 'ARTIFICER',
    tier: 1,
    name: 'ARTIFICER Mastery Node 8: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_2',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 2,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_9',
    guardianClass: 'WARLOCK',
    tier: 1,
    name: 'WARLOCK Mastery Node 9: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_3',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_10',
    guardianClass: 'TACTICIAN',
    tier: 1,
    name: 'TACTICIAN Mastery Node 10: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_4',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_11',
    guardianClass: 'CHRONOMANCER',
    tier: 1,
    name: 'CHRONOMANCER Mastery Node 11: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_5',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 1,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_12',
    guardianClass: 'COMMANDER',
    tier: 1,
    name: 'COMMANDER Mastery Node 12: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_6',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_13',
    guardianClass: 'ELEMENTALIST',
    tier: 2,
    name: 'ELEMENTALIST Mastery Node 13: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_7',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 2,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_14',
    guardianClass: 'ARTIFICER',
    tier: 2,
    name: 'ARTIFICER Mastery Node 14: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_8',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_15',
    guardianClass: 'WARLOCK',
    tier: 2,
    name: 'WARLOCK Mastery Node 15: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_9',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_16',
    guardianClass: 'TACTICIAN',
    tier: 2,
    name: 'TACTICIAN Mastery Node 16: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_10',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 1,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_17',
    guardianClass: 'CHRONOMANCER',
    tier: 2,
    name: 'CHRONOMANCER Mastery Node 17: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_11',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_18',
    guardianClass: 'COMMANDER',
    tier: 2,
    name: 'COMMANDER Mastery Node 18: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_12',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 2,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_19',
    guardianClass: 'ELEMENTALIST',
    tier: 2,
    name: 'ELEMENTALIST Mastery Node 19: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_13',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_20',
    guardianClass: 'ARTIFICER',
    tier: 2,
    name: 'ARTIFICER Mastery Node 20: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_14',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_21',
    guardianClass: 'WARLOCK',
    tier: 2,
    name: 'WARLOCK Mastery Node 21: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_15',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 1,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_22',
    guardianClass: 'TACTICIAN',
    tier: 2,
    name: 'TACTICIAN Mastery Node 22: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_16',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_23',
    guardianClass: 'CHRONOMANCER',
    tier: 2,
    name: 'CHRONOMANCER Mastery Node 23: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_17',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 2,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_24',
    guardianClass: 'COMMANDER',
    tier: 2,
    name: 'COMMANDER Mastery Node 24: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_18',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_25',
    guardianClass: 'ELEMENTALIST',
    tier: 3,
    name: 'ELEMENTALIST Mastery Node 25: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_19',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_26',
    guardianClass: 'ARTIFICER',
    tier: 3,
    name: 'ARTIFICER Mastery Node 26: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_20',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 1,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_27',
    guardianClass: 'WARLOCK',
    tier: 3,
    name: 'WARLOCK Mastery Node 27: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_21',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_28',
    guardianClass: 'TACTICIAN',
    tier: 3,
    name: 'TACTICIAN Mastery Node 28: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_22',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 2,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_29',
    guardianClass: 'CHRONOMANCER',
    tier: 3,
    name: 'CHRONOMANCER Mastery Node 29: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_23',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_30',
    guardianClass: 'COMMANDER',
    tier: 3,
    name: 'COMMANDER Mastery Node 30: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_24',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_31',
    guardianClass: 'ELEMENTALIST',
    tier: 3,
    name: 'ELEMENTALIST Mastery Node 31: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_25',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 1,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_32',
    guardianClass: 'ARTIFICER',
    tier: 3,
    name: 'ARTIFICER Mastery Node 32: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_26',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_33',
    guardianClass: 'WARLOCK',
    tier: 3,
    name: 'WARLOCK Mastery Node 33: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_27',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 2,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_34',
    guardianClass: 'TACTICIAN',
    tier: 3,
    name: 'TACTICIAN Mastery Node 34: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_28',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_35',
    guardianClass: 'CHRONOMANCER',
    tier: 3,
    name: 'CHRONOMANCER Mastery Node 35: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_29',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_36',
    guardianClass: 'COMMANDER',
    tier: 3,
    name: 'COMMANDER Mastery Node 36: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_30',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 1,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_37',
    guardianClass: 'ELEMENTALIST',
    tier: 4,
    name: 'ELEMENTALIST Mastery Node 37: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_31',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_38',
    guardianClass: 'ARTIFICER',
    tier: 4,
    name: 'ARTIFICER Mastery Node 38: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_32',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 2,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_39',
    guardianClass: 'WARLOCK',
    tier: 4,
    name: 'WARLOCK Mastery Node 39: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_33',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_40',
    guardianClass: 'TACTICIAN',
    tier: 4,
    name: 'TACTICIAN Mastery Node 40: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_34',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_41',
    guardianClass: 'CHRONOMANCER',
    tier: 4,
    name: 'CHRONOMANCER Mastery Node 41: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_35',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 1,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_42',
    guardianClass: 'COMMANDER',
    tier: 4,
    name: 'COMMANDER Mastery Node 42: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_36',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_43',
    guardianClass: 'ELEMENTALIST',
    tier: 4,
    name: 'ELEMENTALIST Mastery Node 43: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_37',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 2,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_44',
    guardianClass: 'ARTIFICER',
    tier: 4,
    name: 'ARTIFICER Mastery Node 44: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_38',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_45',
    guardianClass: 'WARLOCK',
    tier: 4,
    name: 'WARLOCK Mastery Node 45: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_39',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_46',
    guardianClass: 'TACTICIAN',
    tier: 4,
    name: 'TACTICIAN Mastery Node 46: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_40',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 1,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_47',
    guardianClass: 'CHRONOMANCER',
    tier: 4,
    name: 'CHRONOMANCER Mastery Node 47: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_41',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_48',
    guardianClass: 'COMMANDER',
    tier: 4,
    name: 'COMMANDER Mastery Node 48: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_42',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 2,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_49',
    guardianClass: 'ELEMENTALIST',
    tier: 5,
    name: 'ELEMENTALIST Mastery Node 49: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_43',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_50',
    guardianClass: 'ARTIFICER',
    tier: 5,
    name: 'ARTIFICER Mastery Node 50: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_44',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_51',
    guardianClass: 'WARLOCK',
    tier: 5,
    name: 'WARLOCK Mastery Node 51: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_45',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 1,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_52',
    guardianClass: 'TACTICIAN',
    tier: 5,
    name: 'TACTICIAN Mastery Node 52: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_46',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_53',
    guardianClass: 'CHRONOMANCER',
    tier: 5,
    name: 'CHRONOMANCER Mastery Node 53: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_47',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 2,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_54',
    guardianClass: 'COMMANDER',
    tier: 5,
    name: 'COMMANDER Mastery Node 54: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_48',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_55',
    guardianClass: 'ELEMENTALIST',
    tier: 5,
    name: 'ELEMENTALIST Mastery Node 55: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_49',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_56',
    guardianClass: 'ARTIFICER',
    tier: 5,
    name: 'ARTIFICER Mastery Node 56: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_50',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 1,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_57',
    guardianClass: 'WARLOCK',
    tier: 5,
    name: 'WARLOCK Mastery Node 57: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_51',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_58',
    guardianClass: 'TACTICIAN',
    tier: 5,
    name: 'TACTICIAN Mastery Node 58: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_52',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 2,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_59',
    guardianClass: 'CHRONOMANCER',
    tier: 5,
    name: 'CHRONOMANCER Mastery Node 59: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_53',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_60',
    guardianClass: 'COMMANDER',
    tier: 5,
    name: 'COMMANDER Mastery Node 60: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_54',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_61',
    guardianClass: 'ELEMENTALIST',
    tier: 6,
    name: 'ELEMENTALIST Mastery Node 61: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_55',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 1,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_62',
    guardianClass: 'ARTIFICER',
    tier: 6,
    name: 'ARTIFICER Mastery Node 62: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_56',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_63',
    guardianClass: 'WARLOCK',
    tier: 6,
    name: 'WARLOCK Mastery Node 63: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_57',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 2,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_64',
    guardianClass: 'TACTICIAN',
    tier: 6,
    name: 'TACTICIAN Mastery Node 64: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_58',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_65',
    guardianClass: 'CHRONOMANCER',
    tier: 6,
    name: 'CHRONOMANCER Mastery Node 65: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_59',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_66',
    guardianClass: 'COMMANDER',
    tier: 6,
    name: 'COMMANDER Mastery Node 66: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_60',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 1,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_67',
    guardianClass: 'ELEMENTALIST',
    tier: 6,
    name: 'ELEMENTALIST Mastery Node 67: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_61',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_68',
    guardianClass: 'ARTIFICER',
    tier: 6,
    name: 'ARTIFICER Mastery Node 68: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_62',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 2,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_69',
    guardianClass: 'WARLOCK',
    tier: 6,
    name: 'WARLOCK Mastery Node 69: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_63',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_70',
    guardianClass: 'TACTICIAN',
    tier: 6,
    name: 'TACTICIAN Mastery Node 70: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_64',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_71',
    guardianClass: 'CHRONOMANCER',
    tier: 6,
    name: 'CHRONOMANCER Mastery Node 71: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_65',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 1,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_72',
    guardianClass: 'COMMANDER',
    tier: 6,
    name: 'COMMANDER Mastery Node 72: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_66',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_73',
    guardianClass: 'ELEMENTALIST',
    tier: 7,
    name: 'ELEMENTALIST Mastery Node 73: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_67',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 2,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_74',
    guardianClass: 'ARTIFICER',
    tier: 7,
    name: 'ARTIFICER Mastery Node 74: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_68',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_75',
    guardianClass: 'WARLOCK',
    tier: 7,
    name: 'WARLOCK Mastery Node 75: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_69',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_76',
    guardianClass: 'TACTICIAN',
    tier: 7,
    name: 'TACTICIAN Mastery Node 76: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_70',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 1,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_77',
    guardianClass: 'CHRONOMANCER',
    tier: 7,
    name: 'CHRONOMANCER Mastery Node 77: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_71',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_78',
    guardianClass: 'COMMANDER',
    tier: 7,
    name: 'COMMANDER Mastery Node 78: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_72',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 2,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_79',
    guardianClass: 'ELEMENTALIST',
    tier: 7,
    name: 'ELEMENTALIST Mastery Node 79: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_73',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_80',
    guardianClass: 'ARTIFICER',
    tier: 7,
    name: 'ARTIFICER Mastery Node 80: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_74',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_81',
    guardianClass: 'WARLOCK',
    tier: 7,
    name: 'WARLOCK Mastery Node 81: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_75',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 1,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_82',
    guardianClass: 'TACTICIAN',
    tier: 7,
    name: 'TACTICIAN Mastery Node 82: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_76',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_83',
    guardianClass: 'CHRONOMANCER',
    tier: 7,
    name: 'CHRONOMANCER Mastery Node 83: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_77',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 2,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_84',
    guardianClass: 'COMMANDER',
    tier: 7,
    name: 'COMMANDER Mastery Node 84: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_78',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_85',
    guardianClass: 'ELEMENTALIST',
    tier: 8,
    name: 'ELEMENTALIST Mastery Node 85: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_79',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_86',
    guardianClass: 'ARTIFICER',
    tier: 8,
    name: 'ARTIFICER Mastery Node 86: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_80',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 1,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_87',
    guardianClass: 'WARLOCK',
    tier: 8,
    name: 'WARLOCK Mastery Node 87: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_81',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_88',
    guardianClass: 'TACTICIAN',
    tier: 8,
    name: 'TACTICIAN Mastery Node 88: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_82',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 2,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_89',
    guardianClass: 'CHRONOMANCER',
    tier: 8,
    name: 'CHRONOMANCER Mastery Node 89: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_83',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_90',
    guardianClass: 'COMMANDER',
    tier: 8,
    name: 'COMMANDER Mastery Node 90: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_84',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_91',
    guardianClass: 'ELEMENTALIST',
    tier: 8,
    name: 'ELEMENTALIST Mastery Node 91: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_85',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 1,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_92',
    guardianClass: 'ARTIFICER',
    tier: 8,
    name: 'ARTIFICER Mastery Node 92: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_86',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_93',
    guardianClass: 'WARLOCK',
    tier: 8,
    name: 'WARLOCK Mastery Node 93: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_87',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 2,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_94',
    guardianClass: 'TACTICIAN',
    tier: 8,
    name: 'TACTICIAN Mastery Node 94: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_88',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_95',
    guardianClass: 'CHRONOMANCER',
    tier: 8,
    name: 'CHRONOMANCER Mastery Node 95: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_89',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_96',
    guardianClass: 'COMMANDER',
    tier: 8,
    name: 'COMMANDER Mastery Node 96: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_90',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 1,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_97',
    guardianClass: 'ELEMENTALIST',
    tier: 9,
    name: 'ELEMENTALIST Mastery Node 97: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_91',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_98',
    guardianClass: 'ARTIFICER',
    tier: 9,
    name: 'ARTIFICER Mastery Node 98: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_92',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 2,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_99',
    guardianClass: 'WARLOCK',
    tier: 9,
    name: 'WARLOCK Mastery Node 99: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_93',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_100',
    guardianClass: 'TACTICIAN',
    tier: 9,
    name: 'TACTICIAN Mastery Node 100: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_94',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_101',
    guardianClass: 'CHRONOMANCER',
    tier: 9,
    name: 'CHRONOMANCER Mastery Node 101: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_95',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 1,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_102',
    guardianClass: 'COMMANDER',
    tier: 9,
    name: 'COMMANDER Mastery Node 102: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_96',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_103',
    guardianClass: 'ELEMENTALIST',
    tier: 9,
    name: 'ELEMENTALIST Mastery Node 103: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_97',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 2,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_104',
    guardianClass: 'ARTIFICER',
    tier: 9,
    name: 'ARTIFICER Mastery Node 104: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_98',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_105',
    guardianClass: 'WARLOCK',
    tier: 9,
    name: 'WARLOCK Mastery Node 105: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_99',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_106',
    guardianClass: 'TACTICIAN',
    tier: 9,
    name: 'TACTICIAN Mastery Node 106: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_100',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 1,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_107',
    guardianClass: 'CHRONOMANCER',
    tier: 9,
    name: 'CHRONOMANCER Mastery Node 107: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_101',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_108',
    guardianClass: 'COMMANDER',
    tier: 9,
    name: 'COMMANDER Mastery Node 108: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_102',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 2,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_109',
    guardianClass: 'ELEMENTALIST',
    tier: 10,
    name: 'ELEMENTALIST Mastery Node 109: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_103',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_110',
    guardianClass: 'ARTIFICER',
    tier: 10,
    name: 'ARTIFICER Mastery Node 110: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_104',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_111',
    guardianClass: 'WARLOCK',
    tier: 10,
    name: 'WARLOCK Mastery Node 111: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_105',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 1,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_112',
    guardianClass: 'TACTICIAN',
    tier: 10,
    name: 'TACTICIAN Mastery Node 112: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_106',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_113',
    guardianClass: 'CHRONOMANCER',
    tier: 10,
    name: 'CHRONOMANCER Mastery Node 113: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_107',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 2,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_114',
    guardianClass: 'COMMANDER',
    tier: 10,
    name: 'COMMANDER Mastery Node 114: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_108',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_elementalist_115',
    guardianClass: 'ELEMENTALIST',
    tier: 10,
    name: 'ELEMENTALIST Mastery Node 115: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_elementalist_109',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers ELEMENTALIST specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_artificer_116',
    guardianClass: 'ARTIFICER',
    tier: 10,
    name: 'ARTIFICER Mastery Node 116: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_artificer_110',
    statModifiers: {
      attackDamageMultiplier: 0.1,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 1,
    },
    description: 'Empowers ARTIFICER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_warlock_117',
    guardianClass: 'WARLOCK',
    tier: 10,
    name: 'WARLOCK Mastery Node 117: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_warlock_111',
    statModifiers: {
      attackDamageMultiplier: 0.15,
      rangeBonusPercent: 0.06,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 1.5,
    },
    description: 'Empowers WARLOCK specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_tactician_118',
    guardianClass: 'TACTICIAN',
    tier: 10,
    name: 'TACTICIAN Mastery Node 118: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_tactician_112',
    statModifiers: {
      attackDamageMultiplier: 0.2,
      rangeBonusPercent: 0.09,
      goldGenerationBonus: 0.04,
      cooldownReductionSec: 2,
    },
    description: 'Empowers TACTICIAN specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_chronomancer_119',
    guardianClass: 'CHRONOMANCER',
    tier: 10,
    name: 'CHRONOMANCER Mastery Node 119: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_chronomancer_113',
    statModifiers: {
      attackDamageMultiplier: 0.25,
      rangeBonusPercent: 0.12,
      goldGenerationBonus: 0.06,
      cooldownReductionSec: 2.5,
    },
    description: 'Empowers CHRONOMANCER specialization, amplifying core combat attributes and squad coordination.',
  },
  {
    id: 'talent_commander_120',
    guardianClass: 'COMMANDER',
    tier: 10,
    name: 'COMMANDER Mastery Node 120: Power Infusion',
    maxRank: 5,
    prerequisiteTalentId: 'talent_commander_114',
    statModifiers: {
      attackDamageMultiplier: 0.05,
      rangeBonusPercent: 0.03,
      goldGenerationBonus: 0.02,
      cooldownReductionSec: 0.5,
    },
    description: 'Empowers COMMANDER specialization, amplifying core combat attributes and squad coordination.',
  },
];

export class TalentTreeEvaluator {
  static getTalentsForClass(cls: string): TalentNode[] {
    return GUARDIAN_TALENTS.filter(t => t.guardianClass === cls);
  }

  static computeRankBonus_1(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_2(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_3(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_4(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_5(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_6(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_7(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_8(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_9(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_10(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_11(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_12(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_13(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_14(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_15(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_16(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_17(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_18(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_19(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_20(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_21(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_22(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_23(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_24(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_25(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_26(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_27(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_28(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_29(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_30(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_31(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_32(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_33(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_34(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_35(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_36(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_37(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_38(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_39(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

  static computeRankBonus_40(talent: TalentNode, rank: number): Record<string, number> {
    const out: Record<string, number> = {};
    for (const [key, val] of Object.entries(talent.statModifiers)) {
      out[key] = val * Math.min(rank, talent.maxRank);
    }
    return out;
  }

}