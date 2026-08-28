/**
 * RealmForge Authoritative Aura Resonance & Proximity Buff System
 * Solves multi-tower overlapping aura fields, pulse frequencies, and team synergy multipliers.
 */

export interface AuraDefinition {
  id: string;
  name: string;
  type: 'BUFF_ALLIES' | 'DEBUFF_ENEMIES' | 'AMPLIFY_DAMAGE' | 'ACCELERATE_ATTACK_SPEED' | 'SHIELD_REGEN';
  radiusPx: number;
  pulseIntervalMs: number;
  potency: number;
  description: string;
}

export const AURA_DEFINITIONS: AuraDefinition[] = [
  {
    id: 'aura_resonance_1',
    name: 'Aura of Tactical Ascendancy #1',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 135,
    pulseIntervalMs: 1200,
    potency: 0.13,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_2',
    name: 'Aura of Tactical Ascendancy #2',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 150,
    pulseIntervalMs: 1400,
    potency: 0.16,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_3',
    name: 'Aura of Tactical Ascendancy #3',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 165,
    pulseIntervalMs: 1600,
    potency: 0.19,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_4',
    name: 'Aura of Tactical Ascendancy #4',
    type: 'SHIELD_REGEN',
    radiusPx: 180,
    pulseIntervalMs: 1800,
    potency: 0.22,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_5',
    name: 'Aura of Tactical Ascendancy #5',
    type: 'BUFF_ALLIES',
    radiusPx: 195,
    pulseIntervalMs: 1000,
    potency: 0.25,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_6',
    name: 'Aura of Tactical Ascendancy #6',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 210,
    pulseIntervalMs: 1200,
    potency: 0.28,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_7',
    name: 'Aura of Tactical Ascendancy #7',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 225,
    pulseIntervalMs: 1400,
    potency: 0.31,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_8',
    name: 'Aura of Tactical Ascendancy #8',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 120,
    pulseIntervalMs: 1600,
    potency: 0.34,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_9',
    name: 'Aura of Tactical Ascendancy #9',
    type: 'SHIELD_REGEN',
    radiusPx: 135,
    pulseIntervalMs: 1800,
    potency: 0.37,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_10',
    name: 'Aura of Tactical Ascendancy #10',
    type: 'BUFF_ALLIES',
    radiusPx: 150,
    pulseIntervalMs: 1000,
    potency: 0.1,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_11',
    name: 'Aura of Tactical Ascendancy #11',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 165,
    pulseIntervalMs: 1200,
    potency: 0.13,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_12',
    name: 'Aura of Tactical Ascendancy #12',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 180,
    pulseIntervalMs: 1400,
    potency: 0.16,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_13',
    name: 'Aura of Tactical Ascendancy #13',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 195,
    pulseIntervalMs: 1600,
    potency: 0.19,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_14',
    name: 'Aura of Tactical Ascendancy #14',
    type: 'SHIELD_REGEN',
    radiusPx: 210,
    pulseIntervalMs: 1800,
    potency: 0.22,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_15',
    name: 'Aura of Tactical Ascendancy #15',
    type: 'BUFF_ALLIES',
    radiusPx: 225,
    pulseIntervalMs: 1000,
    potency: 0.25,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_16',
    name: 'Aura of Tactical Ascendancy #16',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 120,
    pulseIntervalMs: 1200,
    potency: 0.28,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_17',
    name: 'Aura of Tactical Ascendancy #17',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 135,
    pulseIntervalMs: 1400,
    potency: 0.31,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_18',
    name: 'Aura of Tactical Ascendancy #18',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 150,
    pulseIntervalMs: 1600,
    potency: 0.34,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_19',
    name: 'Aura of Tactical Ascendancy #19',
    type: 'SHIELD_REGEN',
    radiusPx: 165,
    pulseIntervalMs: 1800,
    potency: 0.37,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_20',
    name: 'Aura of Tactical Ascendancy #20',
    type: 'BUFF_ALLIES',
    radiusPx: 180,
    pulseIntervalMs: 1000,
    potency: 0.1,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_21',
    name: 'Aura of Tactical Ascendancy #21',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 195,
    pulseIntervalMs: 1200,
    potency: 0.13,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_22',
    name: 'Aura of Tactical Ascendancy #22',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 210,
    pulseIntervalMs: 1400,
    potency: 0.16,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_23',
    name: 'Aura of Tactical Ascendancy #23',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 225,
    pulseIntervalMs: 1600,
    potency: 0.19,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_24',
    name: 'Aura of Tactical Ascendancy #24',
    type: 'SHIELD_REGEN',
    radiusPx: 120,
    pulseIntervalMs: 1800,
    potency: 0.22,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_25',
    name: 'Aura of Tactical Ascendancy #25',
    type: 'BUFF_ALLIES',
    radiusPx: 135,
    pulseIntervalMs: 1000,
    potency: 0.25,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_26',
    name: 'Aura of Tactical Ascendancy #26',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 150,
    pulseIntervalMs: 1200,
    potency: 0.28,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_27',
    name: 'Aura of Tactical Ascendancy #27',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 165,
    pulseIntervalMs: 1400,
    potency: 0.31,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_28',
    name: 'Aura of Tactical Ascendancy #28',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 180,
    pulseIntervalMs: 1600,
    potency: 0.34,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_29',
    name: 'Aura of Tactical Ascendancy #29',
    type: 'SHIELD_REGEN',
    radiusPx: 195,
    pulseIntervalMs: 1800,
    potency: 0.37,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_30',
    name: 'Aura of Tactical Ascendancy #30',
    type: 'BUFF_ALLIES',
    radiusPx: 210,
    pulseIntervalMs: 1000,
    potency: 0.1,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_31',
    name: 'Aura of Tactical Ascendancy #31',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 225,
    pulseIntervalMs: 1200,
    potency: 0.13,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_32',
    name: 'Aura of Tactical Ascendancy #32',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 120,
    pulseIntervalMs: 1400,
    potency: 0.16,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_33',
    name: 'Aura of Tactical Ascendancy #33',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 135,
    pulseIntervalMs: 1600,
    potency: 0.19,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_34',
    name: 'Aura of Tactical Ascendancy #34',
    type: 'SHIELD_REGEN',
    radiusPx: 150,
    pulseIntervalMs: 1800,
    potency: 0.22,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_35',
    name: 'Aura of Tactical Ascendancy #35',
    type: 'BUFF_ALLIES',
    radiusPx: 165,
    pulseIntervalMs: 1000,
    potency: 0.25,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_36',
    name: 'Aura of Tactical Ascendancy #36',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 180,
    pulseIntervalMs: 1200,
    potency: 0.28,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_37',
    name: 'Aura of Tactical Ascendancy #37',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 195,
    pulseIntervalMs: 1400,
    potency: 0.31,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_38',
    name: 'Aura of Tactical Ascendancy #38',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 210,
    pulseIntervalMs: 1600,
    potency: 0.34,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_39',
    name: 'Aura of Tactical Ascendancy #39',
    type: 'SHIELD_REGEN',
    radiusPx: 225,
    pulseIntervalMs: 1800,
    potency: 0.37,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_40',
    name: 'Aura of Tactical Ascendancy #40',
    type: 'BUFF_ALLIES',
    radiusPx: 120,
    pulseIntervalMs: 1000,
    potency: 0.1,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_41',
    name: 'Aura of Tactical Ascendancy #41',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 135,
    pulseIntervalMs: 1200,
    potency: 0.13,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_42',
    name: 'Aura of Tactical Ascendancy #42',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 150,
    pulseIntervalMs: 1400,
    potency: 0.16,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_43',
    name: 'Aura of Tactical Ascendancy #43',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 165,
    pulseIntervalMs: 1600,
    potency: 0.19,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_44',
    name: 'Aura of Tactical Ascendancy #44',
    type: 'SHIELD_REGEN',
    radiusPx: 180,
    pulseIntervalMs: 1800,
    potency: 0.22,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_45',
    name: 'Aura of Tactical Ascendancy #45',
    type: 'BUFF_ALLIES',
    radiusPx: 195,
    pulseIntervalMs: 1000,
    potency: 0.25,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_46',
    name: 'Aura of Tactical Ascendancy #46',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 210,
    pulseIntervalMs: 1200,
    potency: 0.28,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_47',
    name: 'Aura of Tactical Ascendancy #47',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 225,
    pulseIntervalMs: 1400,
    potency: 0.31,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_48',
    name: 'Aura of Tactical Ascendancy #48',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 120,
    pulseIntervalMs: 1600,
    potency: 0.34,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_49',
    name: 'Aura of Tactical Ascendancy #49',
    type: 'SHIELD_REGEN',
    radiusPx: 135,
    pulseIntervalMs: 1800,
    potency: 0.37,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_50',
    name: 'Aura of Tactical Ascendancy #50',
    type: 'BUFF_ALLIES',
    radiusPx: 150,
    pulseIntervalMs: 1000,
    potency: 0.1,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_51',
    name: 'Aura of Tactical Ascendancy #51',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 165,
    pulseIntervalMs: 1200,
    potency: 0.13,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_52',
    name: 'Aura of Tactical Ascendancy #52',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 180,
    pulseIntervalMs: 1400,
    potency: 0.16,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_53',
    name: 'Aura of Tactical Ascendancy #53',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 195,
    pulseIntervalMs: 1600,
    potency: 0.19,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_54',
    name: 'Aura of Tactical Ascendancy #54',
    type: 'SHIELD_REGEN',
    radiusPx: 210,
    pulseIntervalMs: 1800,
    potency: 0.22,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_55',
    name: 'Aura of Tactical Ascendancy #55',
    type: 'BUFF_ALLIES',
    radiusPx: 225,
    pulseIntervalMs: 1000,
    potency: 0.25,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_56',
    name: 'Aura of Tactical Ascendancy #56',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 120,
    pulseIntervalMs: 1200,
    potency: 0.28,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_57',
    name: 'Aura of Tactical Ascendancy #57',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 135,
    pulseIntervalMs: 1400,
    potency: 0.31,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_58',
    name: 'Aura of Tactical Ascendancy #58',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 150,
    pulseIntervalMs: 1600,
    potency: 0.34,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_59',
    name: 'Aura of Tactical Ascendancy #59',
    type: 'SHIELD_REGEN',
    radiusPx: 165,
    pulseIntervalMs: 1800,
    potency: 0.37,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_60',
    name: 'Aura of Tactical Ascendancy #60',
    type: 'BUFF_ALLIES',
    radiusPx: 180,
    pulseIntervalMs: 1000,
    potency: 0.1,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_61',
    name: 'Aura of Tactical Ascendancy #61',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 195,
    pulseIntervalMs: 1200,
    potency: 0.13,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_62',
    name: 'Aura of Tactical Ascendancy #62',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 210,
    pulseIntervalMs: 1400,
    potency: 0.16,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_63',
    name: 'Aura of Tactical Ascendancy #63',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 225,
    pulseIntervalMs: 1600,
    potency: 0.19,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_64',
    name: 'Aura of Tactical Ascendancy #64',
    type: 'SHIELD_REGEN',
    radiusPx: 120,
    pulseIntervalMs: 1800,
    potency: 0.22,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_65',
    name: 'Aura of Tactical Ascendancy #65',
    type: 'BUFF_ALLIES',
    radiusPx: 135,
    pulseIntervalMs: 1000,
    potency: 0.25,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_66',
    name: 'Aura of Tactical Ascendancy #66',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 150,
    pulseIntervalMs: 1200,
    potency: 0.28,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_67',
    name: 'Aura of Tactical Ascendancy #67',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 165,
    pulseIntervalMs: 1400,
    potency: 0.31,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_68',
    name: 'Aura of Tactical Ascendancy #68',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 180,
    pulseIntervalMs: 1600,
    potency: 0.34,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_69',
    name: 'Aura of Tactical Ascendancy #69',
    type: 'SHIELD_REGEN',
    radiusPx: 195,
    pulseIntervalMs: 1800,
    potency: 0.37,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_70',
    name: 'Aura of Tactical Ascendancy #70',
    type: 'BUFF_ALLIES',
    radiusPx: 210,
    pulseIntervalMs: 1000,
    potency: 0.1,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_71',
    name: 'Aura of Tactical Ascendancy #71',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 225,
    pulseIntervalMs: 1200,
    potency: 0.13,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_72',
    name: 'Aura of Tactical Ascendancy #72',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 120,
    pulseIntervalMs: 1400,
    potency: 0.16,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_73',
    name: 'Aura of Tactical Ascendancy #73',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 135,
    pulseIntervalMs: 1600,
    potency: 0.19,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_74',
    name: 'Aura of Tactical Ascendancy #74',
    type: 'SHIELD_REGEN',
    radiusPx: 150,
    pulseIntervalMs: 1800,
    potency: 0.22,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_75',
    name: 'Aura of Tactical Ascendancy #75',
    type: 'BUFF_ALLIES',
    radiusPx: 165,
    pulseIntervalMs: 1000,
    potency: 0.25,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_76',
    name: 'Aura of Tactical Ascendancy #76',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 180,
    pulseIntervalMs: 1200,
    potency: 0.28,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_77',
    name: 'Aura of Tactical Ascendancy #77',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 195,
    pulseIntervalMs: 1400,
    potency: 0.31,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_78',
    name: 'Aura of Tactical Ascendancy #78',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 210,
    pulseIntervalMs: 1600,
    potency: 0.34,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_79',
    name: 'Aura of Tactical Ascendancy #79',
    type: 'SHIELD_REGEN',
    radiusPx: 225,
    pulseIntervalMs: 1800,
    potency: 0.37,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_80',
    name: 'Aura of Tactical Ascendancy #80',
    type: 'BUFF_ALLIES',
    radiusPx: 120,
    pulseIntervalMs: 1000,
    potency: 0.1,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_81',
    name: 'Aura of Tactical Ascendancy #81',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 135,
    pulseIntervalMs: 1200,
    potency: 0.13,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_82',
    name: 'Aura of Tactical Ascendancy #82',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 150,
    pulseIntervalMs: 1400,
    potency: 0.16,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_83',
    name: 'Aura of Tactical Ascendancy #83',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 165,
    pulseIntervalMs: 1600,
    potency: 0.19,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_84',
    name: 'Aura of Tactical Ascendancy #84',
    type: 'SHIELD_REGEN',
    radiusPx: 180,
    pulseIntervalMs: 1800,
    potency: 0.22,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_85',
    name: 'Aura of Tactical Ascendancy #85',
    type: 'BUFF_ALLIES',
    radiusPx: 195,
    pulseIntervalMs: 1000,
    potency: 0.25,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_86',
    name: 'Aura of Tactical Ascendancy #86',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 210,
    pulseIntervalMs: 1200,
    potency: 0.28,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_87',
    name: 'Aura of Tactical Ascendancy #87',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 225,
    pulseIntervalMs: 1400,
    potency: 0.31,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_88',
    name: 'Aura of Tactical Ascendancy #88',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 120,
    pulseIntervalMs: 1600,
    potency: 0.34,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_89',
    name: 'Aura of Tactical Ascendancy #89',
    type: 'SHIELD_REGEN',
    radiusPx: 135,
    pulseIntervalMs: 1800,
    potency: 0.37,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_90',
    name: 'Aura of Tactical Ascendancy #90',
    type: 'BUFF_ALLIES',
    radiusPx: 150,
    pulseIntervalMs: 1000,
    potency: 0.1,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_91',
    name: 'Aura of Tactical Ascendancy #91',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 165,
    pulseIntervalMs: 1200,
    potency: 0.13,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_92',
    name: 'Aura of Tactical Ascendancy #92',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 180,
    pulseIntervalMs: 1400,
    potency: 0.16,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_93',
    name: 'Aura of Tactical Ascendancy #93',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 195,
    pulseIntervalMs: 1600,
    potency: 0.19,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_94',
    name: 'Aura of Tactical Ascendancy #94',
    type: 'SHIELD_REGEN',
    radiusPx: 210,
    pulseIntervalMs: 1800,
    potency: 0.22,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_95',
    name: 'Aura of Tactical Ascendancy #95',
    type: 'BUFF_ALLIES',
    radiusPx: 225,
    pulseIntervalMs: 1000,
    potency: 0.25,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_96',
    name: 'Aura of Tactical Ascendancy #96',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 120,
    pulseIntervalMs: 1200,
    potency: 0.28,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_97',
    name: 'Aura of Tactical Ascendancy #97',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 135,
    pulseIntervalMs: 1400,
    potency: 0.31,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_98',
    name: 'Aura of Tactical Ascendancy #98',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 150,
    pulseIntervalMs: 1600,
    potency: 0.34,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_99',
    name: 'Aura of Tactical Ascendancy #99',
    type: 'SHIELD_REGEN',
    radiusPx: 165,
    pulseIntervalMs: 1800,
    potency: 0.37,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_100',
    name: 'Aura of Tactical Ascendancy #100',
    type: 'BUFF_ALLIES',
    radiusPx: 180,
    pulseIntervalMs: 1000,
    potency: 0.1,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_101',
    name: 'Aura of Tactical Ascendancy #101',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 195,
    pulseIntervalMs: 1200,
    potency: 0.13,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_102',
    name: 'Aura of Tactical Ascendancy #102',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 210,
    pulseIntervalMs: 1400,
    potency: 0.16,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_103',
    name: 'Aura of Tactical Ascendancy #103',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 225,
    pulseIntervalMs: 1600,
    potency: 0.19,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_104',
    name: 'Aura of Tactical Ascendancy #104',
    type: 'SHIELD_REGEN',
    radiusPx: 120,
    pulseIntervalMs: 1800,
    potency: 0.22,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_105',
    name: 'Aura of Tactical Ascendancy #105',
    type: 'BUFF_ALLIES',
    radiusPx: 135,
    pulseIntervalMs: 1000,
    potency: 0.25,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_106',
    name: 'Aura of Tactical Ascendancy #106',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 150,
    pulseIntervalMs: 1200,
    potency: 0.28,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_107',
    name: 'Aura of Tactical Ascendancy #107',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 165,
    pulseIntervalMs: 1400,
    potency: 0.31,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_108',
    name: 'Aura of Tactical Ascendancy #108',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 180,
    pulseIntervalMs: 1600,
    potency: 0.34,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_109',
    name: 'Aura of Tactical Ascendancy #109',
    type: 'SHIELD_REGEN',
    radiusPx: 195,
    pulseIntervalMs: 1800,
    potency: 0.37,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_110',
    name: 'Aura of Tactical Ascendancy #110',
    type: 'BUFF_ALLIES',
    radiusPx: 210,
    pulseIntervalMs: 1000,
    potency: 0.1,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_111',
    name: 'Aura of Tactical Ascendancy #111',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 225,
    pulseIntervalMs: 1200,
    potency: 0.13,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_112',
    name: 'Aura of Tactical Ascendancy #112',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 120,
    pulseIntervalMs: 1400,
    potency: 0.16,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_113',
    name: 'Aura of Tactical Ascendancy #113',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 135,
    pulseIntervalMs: 1600,
    potency: 0.19,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_114',
    name: 'Aura of Tactical Ascendancy #114',
    type: 'SHIELD_REGEN',
    radiusPx: 150,
    pulseIntervalMs: 1800,
    potency: 0.22,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_115',
    name: 'Aura of Tactical Ascendancy #115',
    type: 'BUFF_ALLIES',
    radiusPx: 165,
    pulseIntervalMs: 1000,
    potency: 0.25,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_116',
    name: 'Aura of Tactical Ascendancy #116',
    type: 'DEBUFF_ENEMIES',
    radiusPx: 180,
    pulseIntervalMs: 1200,
    potency: 0.28,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_117',
    name: 'Aura of Tactical Ascendancy #117',
    type: 'AMPLIFY_DAMAGE',
    radiusPx: 195,
    pulseIntervalMs: 1400,
    potency: 0.31,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_118',
    name: 'Aura of Tactical Ascendancy #118',
    type: 'ACCELERATE_ATTACK_SPEED',
    radiusPx: 210,
    pulseIntervalMs: 1600,
    potency: 0.34,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_119',
    name: 'Aura of Tactical Ascendancy #119',
    type: 'SHIELD_REGEN',
    radiusPx: 225,
    pulseIntervalMs: 1800,
    potency: 0.37,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
  {
    id: 'aura_resonance_120',
    name: 'Aura of Tactical Ascendancy #120',
    type: 'BUFF_ALLIES',
    radiusPx: 120,
    pulseIntervalMs: 1000,
    potency: 0.1,
    description: 'Emits periodic pulses that enhance nearby allied structures and suppress encroaching hostiles.',
  },
];

export class AuraResonanceCalculator {
  static getAura(id: string): AuraDefinition | undefined {
    return AURA_DEFINITIONS.find(a => a.id === id);
  }

  static computeOverlappingAuraBoost_1(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_2(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_3(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_4(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_5(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_6(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_7(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_8(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_9(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_10(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_11(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_12(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_13(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_14(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_15(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_16(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_17(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_18(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_19(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_20(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_21(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_22(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_23(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_24(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_25(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_26(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_27(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_28(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_29(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_30(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_31(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_32(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_33(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_34(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_35(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_36(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_37(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_38(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_39(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_40(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_41(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_42(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_43(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_44(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_45(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_46(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_47(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_48(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_49(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_50(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_51(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_52(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_53(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_54(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_55(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_56(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_57(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_58(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_59(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_60(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_61(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_62(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_63(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_64(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_65(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_66(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_67(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_68(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_69(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_70(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_71(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_72(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_73(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_74(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_75(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_76(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_77(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_78(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_79(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

  static computeOverlappingAuraBoost_80(auras: AuraDefinition[], baseStat: number): number {
    let multiplier = 1.0;
    for (const a of auras) {
      multiplier += a.potency;
    }
    return Math.floor(baseStat * multiplier);
  }

}