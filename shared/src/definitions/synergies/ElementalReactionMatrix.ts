/**
 * RealmForge Authoritative Elemental Reaction & Synergy Combination Matrix
 * Calculates cross-tower elemental interactions, thermal shock, superconductivity, and chain resonance.
 */

export interface ElementalReactionConfig {
  id: string;
  name: string;
  primaryElement: 'FIRE' | 'ICE' | 'LIGHTNING' | 'POISON' | 'ARCANE' | 'EARTH';
  secondaryElement: 'FIRE' | 'ICE' | 'LIGHTNING' | 'POISON' | 'ARCANE' | 'EARTH';
  comboDamageMultiplier: number;
  aoeRadiusPx: number;
  durationSec: number;
  description: string;
}

export const ELEMENTAL_REACTIONS: ElementalReactionConfig[] = [
  {
    id: 'reaction_fire_fire_1',
    name: 'FIRE + FIRE Resonance Matrix #1',
    primaryElement: 'FIRE',
    secondaryElement: 'FIRE',
    comboDamageMultiplier: 1.4,
    aoeRadiusPx: 100,
    durationSec: 3,
    description: 'Triggered when FIRE ability interacts with an enemy afflicted by FIRE status effect.',
  },
  {
    id: 'reaction_fire_ice_2',
    name: 'FIRE + ICE Resonance Matrix #2',
    primaryElement: 'FIRE',
    secondaryElement: 'ICE',
    comboDamageMultiplier: 1.55,
    aoeRadiusPx: 120,
    durationSec: 3.5,
    description: 'Triggered when FIRE ability interacts with an enemy afflicted by ICE status effect.',
  },
  {
    id: 'reaction_fire_lightning_3',
    name: 'FIRE + LIGHTNING Resonance Matrix #3',
    primaryElement: 'FIRE',
    secondaryElement: 'LIGHTNING',
    comboDamageMultiplier: 1.7,
    aoeRadiusPx: 140,
    durationSec: 4,
    description: 'Triggered when FIRE ability interacts with an enemy afflicted by LIGHTNING status effect.',
  },
  {
    id: 'reaction_fire_poison_4',
    name: 'FIRE + POISON Resonance Matrix #4',
    primaryElement: 'FIRE',
    secondaryElement: 'POISON',
    comboDamageMultiplier: 1.85,
    aoeRadiusPx: 160,
    durationSec: 4.5,
    description: 'Triggered when FIRE ability interacts with an enemy afflicted by POISON status effect.',
  },
  {
    id: 'reaction_fire_arcane_5',
    name: 'FIRE + ARCANE Resonance Matrix #5',
    primaryElement: 'FIRE',
    secondaryElement: 'ARCANE',
    comboDamageMultiplier: 2,
    aoeRadiusPx: 180,
    durationSec: 2.5,
    description: 'Triggered when FIRE ability interacts with an enemy afflicted by ARCANE status effect.',
  },
  {
    id: 'reaction_fire_earth_6',
    name: 'FIRE + EARTH Resonance Matrix #6',
    primaryElement: 'FIRE',
    secondaryElement: 'EARTH',
    comboDamageMultiplier: 2.15,
    aoeRadiusPx: 80,
    durationSec: 3,
    description: 'Triggered when FIRE ability interacts with an enemy afflicted by EARTH status effect.',
  },
  {
    id: 'reaction_ice_fire_7',
    name: 'ICE + FIRE Resonance Matrix #7',
    primaryElement: 'ICE',
    secondaryElement: 'FIRE',
    comboDamageMultiplier: 2.3,
    aoeRadiusPx: 100,
    durationSec: 3.5,
    description: 'Triggered when ICE ability interacts with an enemy afflicted by FIRE status effect.',
  },
  {
    id: 'reaction_ice_ice_8',
    name: 'ICE + ICE Resonance Matrix #8',
    primaryElement: 'ICE',
    secondaryElement: 'ICE',
    comboDamageMultiplier: 1.25,
    aoeRadiusPx: 120,
    durationSec: 4,
    description: 'Triggered when ICE ability interacts with an enemy afflicted by ICE status effect.',
  },
  {
    id: 'reaction_ice_lightning_9',
    name: 'ICE + LIGHTNING Resonance Matrix #9',
    primaryElement: 'ICE',
    secondaryElement: 'LIGHTNING',
    comboDamageMultiplier: 1.4,
    aoeRadiusPx: 140,
    durationSec: 4.5,
    description: 'Triggered when ICE ability interacts with an enemy afflicted by LIGHTNING status effect.',
  },
  {
    id: 'reaction_ice_poison_10',
    name: 'ICE + POISON Resonance Matrix #10',
    primaryElement: 'ICE',
    secondaryElement: 'POISON',
    comboDamageMultiplier: 1.55,
    aoeRadiusPx: 160,
    durationSec: 2.5,
    description: 'Triggered when ICE ability interacts with an enemy afflicted by POISON status effect.',
  },
  {
    id: 'reaction_ice_arcane_11',
    name: 'ICE + ARCANE Resonance Matrix #11',
    primaryElement: 'ICE',
    secondaryElement: 'ARCANE',
    comboDamageMultiplier: 1.7,
    aoeRadiusPx: 180,
    durationSec: 3,
    description: 'Triggered when ICE ability interacts with an enemy afflicted by ARCANE status effect.',
  },
  {
    id: 'reaction_ice_earth_12',
    name: 'ICE + EARTH Resonance Matrix #12',
    primaryElement: 'ICE',
    secondaryElement: 'EARTH',
    comboDamageMultiplier: 1.85,
    aoeRadiusPx: 80,
    durationSec: 3.5,
    description: 'Triggered when ICE ability interacts with an enemy afflicted by EARTH status effect.',
  },
  {
    id: 'reaction_lightning_fire_13',
    name: 'LIGHTNING + FIRE Resonance Matrix #13',
    primaryElement: 'LIGHTNING',
    secondaryElement: 'FIRE',
    comboDamageMultiplier: 2,
    aoeRadiusPx: 100,
    durationSec: 4,
    description: 'Triggered when LIGHTNING ability interacts with an enemy afflicted by FIRE status effect.',
  },
  {
    id: 'reaction_lightning_ice_14',
    name: 'LIGHTNING + ICE Resonance Matrix #14',
    primaryElement: 'LIGHTNING',
    secondaryElement: 'ICE',
    comboDamageMultiplier: 2.15,
    aoeRadiusPx: 120,
    durationSec: 4.5,
    description: 'Triggered when LIGHTNING ability interacts with an enemy afflicted by ICE status effect.',
  },
  {
    id: 'reaction_lightning_lightning_15',
    name: 'LIGHTNING + LIGHTNING Resonance Matrix #15',
    primaryElement: 'LIGHTNING',
    secondaryElement: 'LIGHTNING',
    comboDamageMultiplier: 2.3,
    aoeRadiusPx: 140,
    durationSec: 2.5,
    description: 'Triggered when LIGHTNING ability interacts with an enemy afflicted by LIGHTNING status effect.',
  },
  {
    id: 'reaction_lightning_poison_16',
    name: 'LIGHTNING + POISON Resonance Matrix #16',
    primaryElement: 'LIGHTNING',
    secondaryElement: 'POISON',
    comboDamageMultiplier: 1.25,
    aoeRadiusPx: 160,
    durationSec: 3,
    description: 'Triggered when LIGHTNING ability interacts with an enemy afflicted by POISON status effect.',
  },
  {
    id: 'reaction_lightning_arcane_17',
    name: 'LIGHTNING + ARCANE Resonance Matrix #17',
    primaryElement: 'LIGHTNING',
    secondaryElement: 'ARCANE',
    comboDamageMultiplier: 1.4,
    aoeRadiusPx: 180,
    durationSec: 3.5,
    description: 'Triggered when LIGHTNING ability interacts with an enemy afflicted by ARCANE status effect.',
  },
  {
    id: 'reaction_lightning_earth_18',
    name: 'LIGHTNING + EARTH Resonance Matrix #18',
    primaryElement: 'LIGHTNING',
    secondaryElement: 'EARTH',
    comboDamageMultiplier: 1.55,
    aoeRadiusPx: 80,
    durationSec: 4,
    description: 'Triggered when LIGHTNING ability interacts with an enemy afflicted by EARTH status effect.',
  },
  {
    id: 'reaction_poison_fire_19',
    name: 'POISON + FIRE Resonance Matrix #19',
    primaryElement: 'POISON',
    secondaryElement: 'FIRE',
    comboDamageMultiplier: 1.7,
    aoeRadiusPx: 100,
    durationSec: 4.5,
    description: 'Triggered when POISON ability interacts with an enemy afflicted by FIRE status effect.',
  },
  {
    id: 'reaction_poison_ice_20',
    name: 'POISON + ICE Resonance Matrix #20',
    primaryElement: 'POISON',
    secondaryElement: 'ICE',
    comboDamageMultiplier: 1.85,
    aoeRadiusPx: 120,
    durationSec: 2.5,
    description: 'Triggered when POISON ability interacts with an enemy afflicted by ICE status effect.',
  },
  {
    id: 'reaction_poison_lightning_21',
    name: 'POISON + LIGHTNING Resonance Matrix #21',
    primaryElement: 'POISON',
    secondaryElement: 'LIGHTNING',
    comboDamageMultiplier: 2,
    aoeRadiusPx: 140,
    durationSec: 3,
    description: 'Triggered when POISON ability interacts with an enemy afflicted by LIGHTNING status effect.',
  },
  {
    id: 'reaction_poison_poison_22',
    name: 'POISON + POISON Resonance Matrix #22',
    primaryElement: 'POISON',
    secondaryElement: 'POISON',
    comboDamageMultiplier: 2.15,
    aoeRadiusPx: 160,
    durationSec: 3.5,
    description: 'Triggered when POISON ability interacts with an enemy afflicted by POISON status effect.',
  },
  {
    id: 'reaction_poison_arcane_23',
    name: 'POISON + ARCANE Resonance Matrix #23',
    primaryElement: 'POISON',
    secondaryElement: 'ARCANE',
    comboDamageMultiplier: 2.3,
    aoeRadiusPx: 180,
    durationSec: 4,
    description: 'Triggered when POISON ability interacts with an enemy afflicted by ARCANE status effect.',
  },
  {
    id: 'reaction_poison_earth_24',
    name: 'POISON + EARTH Resonance Matrix #24',
    primaryElement: 'POISON',
    secondaryElement: 'EARTH',
    comboDamageMultiplier: 1.25,
    aoeRadiusPx: 80,
    durationSec: 4.5,
    description: 'Triggered when POISON ability interacts with an enemy afflicted by EARTH status effect.',
  },
  {
    id: 'reaction_arcane_fire_25',
    name: 'ARCANE + FIRE Resonance Matrix #25',
    primaryElement: 'ARCANE',
    secondaryElement: 'FIRE',
    comboDamageMultiplier: 1.4,
    aoeRadiusPx: 100,
    durationSec: 2.5,
    description: 'Triggered when ARCANE ability interacts with an enemy afflicted by FIRE status effect.',
  },
  {
    id: 'reaction_arcane_ice_26',
    name: 'ARCANE + ICE Resonance Matrix #26',
    primaryElement: 'ARCANE',
    secondaryElement: 'ICE',
    comboDamageMultiplier: 1.55,
    aoeRadiusPx: 120,
    durationSec: 3,
    description: 'Triggered when ARCANE ability interacts with an enemy afflicted by ICE status effect.',
  },
  {
    id: 'reaction_arcane_lightning_27',
    name: 'ARCANE + LIGHTNING Resonance Matrix #27',
    primaryElement: 'ARCANE',
    secondaryElement: 'LIGHTNING',
    comboDamageMultiplier: 1.7,
    aoeRadiusPx: 140,
    durationSec: 3.5,
    description: 'Triggered when ARCANE ability interacts with an enemy afflicted by LIGHTNING status effect.',
  },
  {
    id: 'reaction_arcane_poison_28',
    name: 'ARCANE + POISON Resonance Matrix #28',
    primaryElement: 'ARCANE',
    secondaryElement: 'POISON',
    comboDamageMultiplier: 1.85,
    aoeRadiusPx: 160,
    durationSec: 4,
    description: 'Triggered when ARCANE ability interacts with an enemy afflicted by POISON status effect.',
  },
  {
    id: 'reaction_arcane_arcane_29',
    name: 'ARCANE + ARCANE Resonance Matrix #29',
    primaryElement: 'ARCANE',
    secondaryElement: 'ARCANE',
    comboDamageMultiplier: 2,
    aoeRadiusPx: 180,
    durationSec: 4.5,
    description: 'Triggered when ARCANE ability interacts with an enemy afflicted by ARCANE status effect.',
  },
  {
    id: 'reaction_arcane_earth_30',
    name: 'ARCANE + EARTH Resonance Matrix #30',
    primaryElement: 'ARCANE',
    secondaryElement: 'EARTH',
    comboDamageMultiplier: 2.15,
    aoeRadiusPx: 80,
    durationSec: 2.5,
    description: 'Triggered when ARCANE ability interacts with an enemy afflicted by EARTH status effect.',
  },
  {
    id: 'reaction_earth_fire_31',
    name: 'EARTH + FIRE Resonance Matrix #31',
    primaryElement: 'EARTH',
    secondaryElement: 'FIRE',
    comboDamageMultiplier: 2.3,
    aoeRadiusPx: 100,
    durationSec: 3,
    description: 'Triggered when EARTH ability interacts with an enemy afflicted by FIRE status effect.',
  },
  {
    id: 'reaction_earth_ice_32',
    name: 'EARTH + ICE Resonance Matrix #32',
    primaryElement: 'EARTH',
    secondaryElement: 'ICE',
    comboDamageMultiplier: 1.25,
    aoeRadiusPx: 120,
    durationSec: 3.5,
    description: 'Triggered when EARTH ability interacts with an enemy afflicted by ICE status effect.',
  },
  {
    id: 'reaction_earth_lightning_33',
    name: 'EARTH + LIGHTNING Resonance Matrix #33',
    primaryElement: 'EARTH',
    secondaryElement: 'LIGHTNING',
    comboDamageMultiplier: 1.4,
    aoeRadiusPx: 140,
    durationSec: 4,
    description: 'Triggered when EARTH ability interacts with an enemy afflicted by LIGHTNING status effect.',
  },
  {
    id: 'reaction_earth_poison_34',
    name: 'EARTH + POISON Resonance Matrix #34',
    primaryElement: 'EARTH',
    secondaryElement: 'POISON',
    comboDamageMultiplier: 1.55,
    aoeRadiusPx: 160,
    durationSec: 4.5,
    description: 'Triggered when EARTH ability interacts with an enemy afflicted by POISON status effect.',
  },
  {
    id: 'reaction_earth_arcane_35',
    name: 'EARTH + ARCANE Resonance Matrix #35',
    primaryElement: 'EARTH',
    secondaryElement: 'ARCANE',
    comboDamageMultiplier: 1.7,
    aoeRadiusPx: 180,
    durationSec: 2.5,
    description: 'Triggered when EARTH ability interacts with an enemy afflicted by ARCANE status effect.',
  },
  {
    id: 'reaction_earth_earth_36',
    name: 'EARTH + EARTH Resonance Matrix #36',
    primaryElement: 'EARTH',
    secondaryElement: 'EARTH',
    comboDamageMultiplier: 1.85,
    aoeRadiusPx: 80,
    durationSec: 3,
    description: 'Triggered when EARTH ability interacts with an enemy afflicted by EARTH status effect.',
  },
];

export class ElementalReactionCalculator {
  static getReaction(el1: string, el2: string): ElementalReactionConfig | undefined {
    return ELEMENTAL_REACTIONS.find(r => r.primaryElement === el1 && r.secondaryElement === el2);
  }

  static computeComboResonance_1(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_2(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_3(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_4(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_5(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_6(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_7(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_8(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_9(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_10(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_11(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_12(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_13(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_14(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_15(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_16(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_17(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_18(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_19(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_20(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_21(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_22(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_23(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_24(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_25(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_26(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_27(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_28(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_29(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_30(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_31(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_32(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_33(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_34(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_35(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_36(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_37(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_38(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_39(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_40(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_41(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_42(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_43(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_44(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_45(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_46(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_47(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_48(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_49(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_50(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_51(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_52(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_53(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_54(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_55(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_56(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_57(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_58(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_59(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_60(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_61(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_62(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_63(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_64(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_65(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_66(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_67(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_68(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_69(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_70(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_71(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_72(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_73(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_74(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_75(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_76(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_77(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_78(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_79(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

  static computeComboResonance_80(baseDmg: number, comboConfig: ElementalReactionConfig, enemyResist: number): number {
    const net = baseDmg * comboConfig.comboDamageMultiplier * (100 / (100 + Math.max(0, enemyResist)));
    return Math.floor(net);
  }

}