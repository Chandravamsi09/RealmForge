import { TowerType, TargetPriority } from '../ecs/Components';

export enum ActionType {
  PLACE_TOWER = 'PLACE_TOWER',
  UPGRADE_TOWER = 'UPGRADE_TOWER',
  SELL_TOWER = 'SELL_TOWER',
  SET_TARGET_PRIORITY = 'SET_TARGET_PRIORITY',
  TRIGGER_SPECIAL_ABILITY = 'TRIGGER_SPECIAL_ABILITY',
  VOTE_START_WAVE = 'VOTE_START_WAVE',
  SEND_CHAT = 'SEND_CHAT',
  SEND_PING = 'SEND_PING',
}

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
  upgradePathIndex?: number;
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
  abilityId: string;
  targetX?: number;
  targetY?: number;
}

export interface VoteStartWaveAction extends BasePlayerAction {
  type: ActionType.VOTE_START_WAVE;
  waveIndex: number;
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

export type PlayerAction =
  | PlaceTowerAction
  | UpgradeTowerAction
  | SellTowerAction
  | SetTargetPriorityAction
  | TriggerSpecialAbilityAction
  | VoteStartWaveAction
  | SendChatAction
  | SendPingAction;

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
  tower?: { type: TowerType; tier: number; level: number; range: number; targetId: number | null };
  enemy?: { type: string; wave: number; armor: number };
  player?: { playerId: string; gold: number; health: number; score: number };
}

export interface AuthoritativeTickSnapshot {
  tick: number;
  timestamp: number;
  stateChecksum: number;
  entities: SerializedEntitySnapshot[];
  events: Array<{ type: string; payload: any }>;
}
