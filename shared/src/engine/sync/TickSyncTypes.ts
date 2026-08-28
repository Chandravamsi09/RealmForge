import { TowerType, TargetPriority } from '../ecs/Components';

export enum ActionType {
  PLACE_TOWER = 'PLACE_TOWER',
  UPGRADE_TOWER = 'UPGRADE_TOWER',
  SELL_TOWER = 'SELL_TOWER',
  SET_TARGET_PRIORITY = 'SET_TARGET_PRIORITY',
  TRIGGER_SPECIAL_ABILITY = 'TRIGGER_SPECIAL_ABILITY',
  VOTE_START_WAVE = 'VOTE_START_WAVE',
  SEND_PVP_CREEP = 'SEND_PVP_CREEP',
  SEND_CHAT = 'SEND_CHAT',
  SEND_PING = 'SEND_PING',
  TOGGLE_PAUSE = 'TOGGLE_PAUSE',
}

export enum SpecialAbilityType {
  METEOR_STRIKE = 'METEOR_STRIKE',
  GLACIAL_BLIZZARD = 'GLACIAL_BLIZZARD',
  OVERCHARGE_GRID = 'OVERCHARGE_GRID',
  EMERGENCY_REPAIR = 'EMERGENCY_REPAIR',
}

export interface SpecialAbilityConfig {
  id: SpecialAbilityType;
  name: string;
  key: string;
  cost: number;
  cooldownMs: number;
  description: string;
}

export const SPECIAL_ABILITIES: Record<SpecialAbilityType, SpecialAbilityConfig> = {
  [SpecialAbilityType.METEOR_STRIKE]: {
    id: SpecialAbilityType.METEOR_STRIKE,
    name: 'Meteor Strike',
    key: 'Q',
    cost: 100,
    cooldownMs: 45000,
    description: 'Calls down a flaming meteor dealing 400 Fire Magic Damage in 120px AoE with 1.5s Stun.',
  },
  [SpecialAbilityType.GLACIAL_BLIZZARD]: {
    id: SpecialAbilityType.GLACIAL_BLIZZARD,
    name: 'Glacial Blizzard',
    key: 'W',
    cost: 125,
    cooldownMs: 60000,
    description: 'Freezes the entire battlefield, applying 80% Slow to all active creeps for 6.0 seconds.',
  },
  [SpecialAbilityType.OVERCHARGE_GRID]: {
    id: SpecialAbilityType.OVERCHARGE_GRID,
    name: 'Overcharge Grid',
    key: 'E',
    cost: 150,
    cooldownMs: 75000,
    description: 'Electrifies towers, granting +50% Attack Speed and +25% Bonus Damage for 8.0 seconds.',
  },
  [SpecialAbilityType.EMERGENCY_REPAIR]: {
    id: SpecialAbilityType.EMERGENCY_REPAIR,
    name: 'Emergency Repair',
    key: 'R',
    cost: 200,
    cooldownMs: 120000,
    description: 'Restores +25 HP to your Nexus Base (capped at 100 HP max).',
  },
};

export interface BasePlayerAction {
  actionId: string;
  playerId: string;
  type: ActionType;
  clientTimestamp: number;
}

export interface PlaceTowerAction extends BasePlayerAction {
  type: ActionType.PLACE_TOWER;
  towerType: TowerType;
  gridX: number;
  gridY: number;
}

export interface UpgradeTowerAction extends BasePlayerAction {
  type: ActionType.UPGRADE_TOWER;
  entityId: number;
  upgradePathIndex?: number; // 1 for Branch A, 2 for Branch B
}

export interface SellTowerAction extends BasePlayerAction {
  type: ActionType.SELL_TOWER;
  entityId: number;
}

export interface SetTargetPriorityAction extends BasePlayerAction {
  type: ActionType.SET_TARGET_PRIORITY;
  entityId: number;
  priority: TargetPriority;
}

export interface TriggerSpecialAbilityAction extends BasePlayerAction {
  type: ActionType.TRIGGER_SPECIAL_ABILITY;
  abilityId: SpecialAbilityType | string;
  targetX?: number;
  targetY?: number;
}

export interface VoteStartWaveAction extends BasePlayerAction {
  type: ActionType.VOTE_START_WAVE;
  waveIndex?: number;
}

export interface SendPvpCreepAction extends BasePlayerAction {
  type: ActionType.SEND_PVP_CREEP;
  creepType: 'SWARM' | 'ORC_BRUTE' | 'WYVERN_FLYER' | 'ARMOURED_KNIGHT';
}

export interface SendChatAction extends BasePlayerAction {
  type: ActionType.SEND_CHAT;
  message: string;
}

export interface SendPingAction extends BasePlayerAction {
  type: ActionType.SEND_PING;
  gridX: number;
  gridY: number;
  pingType: 'ATTACK' | 'DEFEND' | 'ALERT';
}

export interface TogglePauseAction extends BasePlayerAction {
  type: ActionType.TOGGLE_PAUSE;
  isPaused?: boolean;
}

export type PlayerAction =
  | PlaceTowerAction
  | UpgradeTowerAction
  | SellTowerAction
  | SetTargetPriorityAction
  | TriggerSpecialAbilityAction
  | VoteStartWaveAction
  | SendPvpCreepAction
  | SendChatAction
  | SendPingAction
  | TogglePauseAction;

export interface TickInputBatch {
  tick: number;
  actions: PlayerAction[];
}

export interface SerializedEntitySnapshot {
  id: number;
  mask: number;
  transform?: { x: number; y: number; rotation: number };
  velocity?: { vx: number; vy: number };
  health?: { current: number; max: number; shield: number };
  tower?: {
    type: TowerType;
    tier: number;
    level: number;
    range: number;
    damage: number;
    targetId: number | null;
    targetPriority: TargetPriority;
    branch?: 'A' | 'B';
    totalInvestedGold: number;
  };
  enemy?: { type: string; wave: number; armor: number; magicResist?: number; speed?: number; isFlying?: boolean };
  player?: { playerId: string; gold: number; health: number; score: number };
}

export interface AuthoritativeTickSnapshot {
  tick: number;
  timestamp: number;
  stateChecksum: number;
  entities: SerializedEntitySnapshot[];
  events: Array<{ type: string; payload: any }>;
  wave?: number;
  waveTimerRemainingMs?: number;
  cooldowns?: Record<string, number>;
  isPaused?: boolean;
}
