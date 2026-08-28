/**
 * RealmForge Dynamic Battlefield Event Director & Adaptive Pacing Engine
 * Dynamically modulates wave intervals, sudden death boss surges, gold bounty bounties, and tactical air drops.
 */

export interface DynamicBattlefieldEvent {
  id: string;
  name: string;
  triggerTick: number;
  durationTicks: number;
  eventType: 'GOLD_RUSH' | 'METEOR_SHOWER' | 'BLOOD_MOON' | 'MANA_SURGE' | 'AIR_DROP';
  goldMultiplier: number;
  creepSpeedMultiplier: number;
  description: string;
}

export const BATTLEFIELD_EVENTS: DynamicBattlefieldEvent[] = [
  {
    id: 'event_director_1',
    name: 'Dynamic Nexus Event #1: METEOR_SHOWER',
    triggerTick: 300,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_2',
    name: 'Dynamic Nexus Event #2: BLOOD_MOON',
    triggerTick: 600,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_3',
    name: 'Dynamic Nexus Event #3: MANA_SURGE',
    triggerTick: 900,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_4',
    name: 'Dynamic Nexus Event #4: AIR_DROP',
    triggerTick: 1200,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_5',
    name: 'Dynamic Nexus Event #5: GOLD_RUSH',
    triggerTick: 1500,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_6',
    name: 'Dynamic Nexus Event #6: METEOR_SHOWER',
    triggerTick: 1800,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_7',
    name: 'Dynamic Nexus Event #7: BLOOD_MOON',
    triggerTick: 2100,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_8',
    name: 'Dynamic Nexus Event #8: MANA_SURGE',
    triggerTick: 2400,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_9',
    name: 'Dynamic Nexus Event #9: AIR_DROP',
    triggerTick: 2700,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_10',
    name: 'Dynamic Nexus Event #10: GOLD_RUSH',
    triggerTick: 3000,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_11',
    name: 'Dynamic Nexus Event #11: METEOR_SHOWER',
    triggerTick: 3300,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_12',
    name: 'Dynamic Nexus Event #12: BLOOD_MOON',
    triggerTick: 3600,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_13',
    name: 'Dynamic Nexus Event #13: MANA_SURGE',
    triggerTick: 3900,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_14',
    name: 'Dynamic Nexus Event #14: AIR_DROP',
    triggerTick: 4200,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_15',
    name: 'Dynamic Nexus Event #15: GOLD_RUSH',
    triggerTick: 4500,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_16',
    name: 'Dynamic Nexus Event #16: METEOR_SHOWER',
    triggerTick: 4800,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_17',
    name: 'Dynamic Nexus Event #17: BLOOD_MOON',
    triggerTick: 5100,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_18',
    name: 'Dynamic Nexus Event #18: MANA_SURGE',
    triggerTick: 5400,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_19',
    name: 'Dynamic Nexus Event #19: AIR_DROP',
    triggerTick: 5700,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_20',
    name: 'Dynamic Nexus Event #20: GOLD_RUSH',
    triggerTick: 6000,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_21',
    name: 'Dynamic Nexus Event #21: METEOR_SHOWER',
    triggerTick: 6300,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_22',
    name: 'Dynamic Nexus Event #22: BLOOD_MOON',
    triggerTick: 6600,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_23',
    name: 'Dynamic Nexus Event #23: MANA_SURGE',
    triggerTick: 6900,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_24',
    name: 'Dynamic Nexus Event #24: AIR_DROP',
    triggerTick: 7200,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_25',
    name: 'Dynamic Nexus Event #25: GOLD_RUSH',
    triggerTick: 7500,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_26',
    name: 'Dynamic Nexus Event #26: METEOR_SHOWER',
    triggerTick: 7800,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_27',
    name: 'Dynamic Nexus Event #27: BLOOD_MOON',
    triggerTick: 8100,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_28',
    name: 'Dynamic Nexus Event #28: MANA_SURGE',
    triggerTick: 8400,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_29',
    name: 'Dynamic Nexus Event #29: AIR_DROP',
    triggerTick: 8700,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_30',
    name: 'Dynamic Nexus Event #30: GOLD_RUSH',
    triggerTick: 9000,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_31',
    name: 'Dynamic Nexus Event #31: METEOR_SHOWER',
    triggerTick: 9300,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_32',
    name: 'Dynamic Nexus Event #32: BLOOD_MOON',
    triggerTick: 9600,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_33',
    name: 'Dynamic Nexus Event #33: MANA_SURGE',
    triggerTick: 9900,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_34',
    name: 'Dynamic Nexus Event #34: AIR_DROP',
    triggerTick: 10200,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_35',
    name: 'Dynamic Nexus Event #35: GOLD_RUSH',
    triggerTick: 10500,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_36',
    name: 'Dynamic Nexus Event #36: METEOR_SHOWER',
    triggerTick: 10800,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_37',
    name: 'Dynamic Nexus Event #37: BLOOD_MOON',
    triggerTick: 11100,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_38',
    name: 'Dynamic Nexus Event #38: MANA_SURGE',
    triggerTick: 11400,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_39',
    name: 'Dynamic Nexus Event #39: AIR_DROP',
    triggerTick: 11700,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_40',
    name: 'Dynamic Nexus Event #40: GOLD_RUSH',
    triggerTick: 12000,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_41',
    name: 'Dynamic Nexus Event #41: METEOR_SHOWER',
    triggerTick: 12300,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_42',
    name: 'Dynamic Nexus Event #42: BLOOD_MOON',
    triggerTick: 12600,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_43',
    name: 'Dynamic Nexus Event #43: MANA_SURGE',
    triggerTick: 12900,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_44',
    name: 'Dynamic Nexus Event #44: AIR_DROP',
    triggerTick: 13200,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_45',
    name: 'Dynamic Nexus Event #45: GOLD_RUSH',
    triggerTick: 13500,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_46',
    name: 'Dynamic Nexus Event #46: METEOR_SHOWER',
    triggerTick: 13800,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_47',
    name: 'Dynamic Nexus Event #47: BLOOD_MOON',
    triggerTick: 14100,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_48',
    name: 'Dynamic Nexus Event #48: MANA_SURGE',
    triggerTick: 14400,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_49',
    name: 'Dynamic Nexus Event #49: AIR_DROP',
    triggerTick: 14700,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_50',
    name: 'Dynamic Nexus Event #50: GOLD_RUSH',
    triggerTick: 15000,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_51',
    name: 'Dynamic Nexus Event #51: METEOR_SHOWER',
    triggerTick: 15300,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_52',
    name: 'Dynamic Nexus Event #52: BLOOD_MOON',
    triggerTick: 15600,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_53',
    name: 'Dynamic Nexus Event #53: MANA_SURGE',
    triggerTick: 15900,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_54',
    name: 'Dynamic Nexus Event #54: AIR_DROP',
    triggerTick: 16200,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_55',
    name: 'Dynamic Nexus Event #55: GOLD_RUSH',
    triggerTick: 16500,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_56',
    name: 'Dynamic Nexus Event #56: METEOR_SHOWER',
    triggerTick: 16800,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_57',
    name: 'Dynamic Nexus Event #57: BLOOD_MOON',
    triggerTick: 17100,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_58',
    name: 'Dynamic Nexus Event #58: MANA_SURGE',
    triggerTick: 17400,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_59',
    name: 'Dynamic Nexus Event #59: AIR_DROP',
    triggerTick: 17700,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_60',
    name: 'Dynamic Nexus Event #60: GOLD_RUSH',
    triggerTick: 18000,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_61',
    name: 'Dynamic Nexus Event #61: METEOR_SHOWER',
    triggerTick: 18300,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_62',
    name: 'Dynamic Nexus Event #62: BLOOD_MOON',
    triggerTick: 18600,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_63',
    name: 'Dynamic Nexus Event #63: MANA_SURGE',
    triggerTick: 18900,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_64',
    name: 'Dynamic Nexus Event #64: AIR_DROP',
    triggerTick: 19200,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_65',
    name: 'Dynamic Nexus Event #65: GOLD_RUSH',
    triggerTick: 19500,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_66',
    name: 'Dynamic Nexus Event #66: METEOR_SHOWER',
    triggerTick: 19800,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_67',
    name: 'Dynamic Nexus Event #67: BLOOD_MOON',
    triggerTick: 20100,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_68',
    name: 'Dynamic Nexus Event #68: MANA_SURGE',
    triggerTick: 20400,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_69',
    name: 'Dynamic Nexus Event #69: AIR_DROP',
    triggerTick: 20700,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_70',
    name: 'Dynamic Nexus Event #70: GOLD_RUSH',
    triggerTick: 21000,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_71',
    name: 'Dynamic Nexus Event #71: METEOR_SHOWER',
    triggerTick: 21300,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_72',
    name: 'Dynamic Nexus Event #72: BLOOD_MOON',
    triggerTick: 21600,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_73',
    name: 'Dynamic Nexus Event #73: MANA_SURGE',
    triggerTick: 21900,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_74',
    name: 'Dynamic Nexus Event #74: AIR_DROP',
    triggerTick: 22200,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_75',
    name: 'Dynamic Nexus Event #75: GOLD_RUSH',
    triggerTick: 22500,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_76',
    name: 'Dynamic Nexus Event #76: METEOR_SHOWER',
    triggerTick: 22800,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_77',
    name: 'Dynamic Nexus Event #77: BLOOD_MOON',
    triggerTick: 23100,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_78',
    name: 'Dynamic Nexus Event #78: MANA_SURGE',
    triggerTick: 23400,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_79',
    name: 'Dynamic Nexus Event #79: AIR_DROP',
    triggerTick: 23700,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_80',
    name: 'Dynamic Nexus Event #80: GOLD_RUSH',
    triggerTick: 24000,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_81',
    name: 'Dynamic Nexus Event #81: METEOR_SHOWER',
    triggerTick: 24300,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_82',
    name: 'Dynamic Nexus Event #82: BLOOD_MOON',
    triggerTick: 24600,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_83',
    name: 'Dynamic Nexus Event #83: MANA_SURGE',
    triggerTick: 24900,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_84',
    name: 'Dynamic Nexus Event #84: AIR_DROP',
    triggerTick: 25200,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_85',
    name: 'Dynamic Nexus Event #85: GOLD_RUSH',
    triggerTick: 25500,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_86',
    name: 'Dynamic Nexus Event #86: METEOR_SHOWER',
    triggerTick: 25800,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_87',
    name: 'Dynamic Nexus Event #87: BLOOD_MOON',
    triggerTick: 26100,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_88',
    name: 'Dynamic Nexus Event #88: MANA_SURGE',
    triggerTick: 26400,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_89',
    name: 'Dynamic Nexus Event #89: AIR_DROP',
    triggerTick: 26700,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_90',
    name: 'Dynamic Nexus Event #90: GOLD_RUSH',
    triggerTick: 27000,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_91',
    name: 'Dynamic Nexus Event #91: METEOR_SHOWER',
    triggerTick: 27300,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_92',
    name: 'Dynamic Nexus Event #92: BLOOD_MOON',
    triggerTick: 27600,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_93',
    name: 'Dynamic Nexus Event #93: MANA_SURGE',
    triggerTick: 27900,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_94',
    name: 'Dynamic Nexus Event #94: AIR_DROP',
    triggerTick: 28200,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_95',
    name: 'Dynamic Nexus Event #95: GOLD_RUSH',
    triggerTick: 28500,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_96',
    name: 'Dynamic Nexus Event #96: METEOR_SHOWER',
    triggerTick: 28800,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_97',
    name: 'Dynamic Nexus Event #97: BLOOD_MOON',
    triggerTick: 29100,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_98',
    name: 'Dynamic Nexus Event #98: MANA_SURGE',
    triggerTick: 29400,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_99',
    name: 'Dynamic Nexus Event #99: AIR_DROP',
    triggerTick: 29700,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_100',
    name: 'Dynamic Nexus Event #100: GOLD_RUSH',
    triggerTick: 30000,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_101',
    name: 'Dynamic Nexus Event #101: METEOR_SHOWER',
    triggerTick: 30300,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_102',
    name: 'Dynamic Nexus Event #102: BLOOD_MOON',
    triggerTick: 30600,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_103',
    name: 'Dynamic Nexus Event #103: MANA_SURGE',
    triggerTick: 30900,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_104',
    name: 'Dynamic Nexus Event #104: AIR_DROP',
    triggerTick: 31200,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_105',
    name: 'Dynamic Nexus Event #105: GOLD_RUSH',
    triggerTick: 31500,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_106',
    name: 'Dynamic Nexus Event #106: METEOR_SHOWER',
    triggerTick: 31800,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_107',
    name: 'Dynamic Nexus Event #107: BLOOD_MOON',
    triggerTick: 32100,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_108',
    name: 'Dynamic Nexus Event #108: MANA_SURGE',
    triggerTick: 32400,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_109',
    name: 'Dynamic Nexus Event #109: AIR_DROP',
    triggerTick: 32700,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_110',
    name: 'Dynamic Nexus Event #110: GOLD_RUSH',
    triggerTick: 33000,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_111',
    name: 'Dynamic Nexus Event #111: METEOR_SHOWER',
    triggerTick: 33300,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_112',
    name: 'Dynamic Nexus Event #112: BLOOD_MOON',
    triggerTick: 33600,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_113',
    name: 'Dynamic Nexus Event #113: MANA_SURGE',
    triggerTick: 33900,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_114',
    name: 'Dynamic Nexus Event #114: AIR_DROP',
    triggerTick: 34200,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_115',
    name: 'Dynamic Nexus Event #115: GOLD_RUSH',
    triggerTick: 34500,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_116',
    name: 'Dynamic Nexus Event #116: METEOR_SHOWER',
    triggerTick: 34800,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_117',
    name: 'Dynamic Nexus Event #117: BLOOD_MOON',
    triggerTick: 35100,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_118',
    name: 'Dynamic Nexus Event #118: MANA_SURGE',
    triggerTick: 35400,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_119',
    name: 'Dynamic Nexus Event #119: AIR_DROP',
    triggerTick: 35700,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_120',
    name: 'Dynamic Nexus Event #120: GOLD_RUSH',
    triggerTick: 36000,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_121',
    name: 'Dynamic Nexus Event #121: METEOR_SHOWER',
    triggerTick: 36300,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_122',
    name: 'Dynamic Nexus Event #122: BLOOD_MOON',
    triggerTick: 36600,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_123',
    name: 'Dynamic Nexus Event #123: MANA_SURGE',
    triggerTick: 36900,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_124',
    name: 'Dynamic Nexus Event #124: AIR_DROP',
    triggerTick: 37200,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_125',
    name: 'Dynamic Nexus Event #125: GOLD_RUSH',
    triggerTick: 37500,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_126',
    name: 'Dynamic Nexus Event #126: METEOR_SHOWER',
    triggerTick: 37800,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_127',
    name: 'Dynamic Nexus Event #127: BLOOD_MOON',
    triggerTick: 38100,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_128',
    name: 'Dynamic Nexus Event #128: MANA_SURGE',
    triggerTick: 38400,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_129',
    name: 'Dynamic Nexus Event #129: AIR_DROP',
    triggerTick: 38700,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_130',
    name: 'Dynamic Nexus Event #130: GOLD_RUSH',
    triggerTick: 39000,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_131',
    name: 'Dynamic Nexus Event #131: METEOR_SHOWER',
    triggerTick: 39300,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_132',
    name: 'Dynamic Nexus Event #132: BLOOD_MOON',
    triggerTick: 39600,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_133',
    name: 'Dynamic Nexus Event #133: MANA_SURGE',
    triggerTick: 39900,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_134',
    name: 'Dynamic Nexus Event #134: AIR_DROP',
    triggerTick: 40200,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_135',
    name: 'Dynamic Nexus Event #135: GOLD_RUSH',
    triggerTick: 40500,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_136',
    name: 'Dynamic Nexus Event #136: METEOR_SHOWER',
    triggerTick: 40800,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_137',
    name: 'Dynamic Nexus Event #137: BLOOD_MOON',
    triggerTick: 41100,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_138',
    name: 'Dynamic Nexus Event #138: MANA_SURGE',
    triggerTick: 41400,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_139',
    name: 'Dynamic Nexus Event #139: AIR_DROP',
    triggerTick: 41700,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_140',
    name: 'Dynamic Nexus Event #140: GOLD_RUSH',
    triggerTick: 42000,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_141',
    name: 'Dynamic Nexus Event #141: METEOR_SHOWER',
    triggerTick: 42300,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_142',
    name: 'Dynamic Nexus Event #142: BLOOD_MOON',
    triggerTick: 42600,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_143',
    name: 'Dynamic Nexus Event #143: MANA_SURGE',
    triggerTick: 42900,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_144',
    name: 'Dynamic Nexus Event #144: AIR_DROP',
    triggerTick: 43200,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_145',
    name: 'Dynamic Nexus Event #145: GOLD_RUSH',
    triggerTick: 43500,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_146',
    name: 'Dynamic Nexus Event #146: METEOR_SHOWER',
    triggerTick: 43800,
    durationTicks: 200,
    eventType: 'METEOR_SHOWER',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_147',
    name: 'Dynamic Nexus Event #147: BLOOD_MOON',
    triggerTick: 44100,
    durationTicks: 200,
    eventType: 'BLOOD_MOON',
    goldMultiplier: 1.65,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_148',
    name: 'Dynamic Nexus Event #148: MANA_SURGE',
    triggerTick: 44400,
    durationTicks: 200,
    eventType: 'MANA_SURGE',
    goldMultiplier: 1.2,
    creepSpeedMultiplier: 1.1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_149',
    name: 'Dynamic Nexus Event #149: AIR_DROP',
    triggerTick: 44700,
    durationTicks: 200,
    eventType: 'AIR_DROP',
    goldMultiplier: 1.35,
    creepSpeedMultiplier: 1.2,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
  {
    id: 'event_director_150',
    name: 'Dynamic Nexus Event #150: GOLD_RUSH',
    triggerTick: 45000,
    durationTicks: 200,
    eventType: 'GOLD_RUSH',
    goldMultiplier: 1.5,
    creepSpeedMultiplier: 1,
    description: 'A global celestial perturbation affects all active combatants on the battlefield.',
  },
];

export class BattlefieldEventDirector {
  static getActiveEventsAtTick(tick: number): DynamicBattlefieldEvent[] {
    return BATTLEFIELD_EVENTS.filter(e => tick >= e.triggerTick && tick <= e.triggerTick + e.durationTicks);
  }

  static evaluateEventIntensityIndex_1(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_2(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_3(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_4(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_5(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_6(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_7(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_8(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_9(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_10(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_11(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_12(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_13(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_14(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_15(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_16(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_17(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_18(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_19(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_20(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_21(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_22(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_23(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_24(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_25(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_26(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_27(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_28(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_29(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_30(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_31(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_32(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_33(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_34(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_35(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_36(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_37(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_38(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_39(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_40(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_41(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_42(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_43(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_44(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_45(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_46(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_47(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_48(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_49(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_50(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_51(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_52(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_53(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_54(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_55(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_56(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_57(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_58(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_59(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_60(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_61(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_62(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_63(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_64(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_65(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_66(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_67(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_68(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_69(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_70(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_71(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_72(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_73(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_74(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_75(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_76(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_77(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_78(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_79(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

  static evaluateEventIntensityIndex_80(event: DynamicBattlefieldEvent, baseScore: number): number {
    return Math.floor(baseScore * event.goldMultiplier * event.creepSpeedMultiplier);
  }

}