/**
 * Unique Component Type Identifiers & Archetype Bitmasks
 */
export enum ComponentType {
  TRANSFORM = 1 << 0,
  VELOCITY = 1 << 1,
  HEALTH = 1 << 2,
  TOWER = 1 << 3,
  ENEMY = 1 << 4,
  PROJECTILE = 1 << 5,
  BUFF = 1 << 6,
  PATH_FOLLOWER = 1 << 7,
  PLAYER_STATE = 1 << 8,
}

export type EntityId = number;

export interface IComponent {
  readonly type: ComponentType;
}

export interface TransformComponent extends IComponent {
  type: ComponentType.TRANSFORM;
  x: number;
  y: number;
  rotation: number;
}

export interface VelocityComponent extends IComponent {
  type: ComponentType.VELOCITY;
  vx: number;
  vy: number;
  speed: number;
  maxSpeed: number;
}

export interface HealthComponent extends IComponent {
  type: ComponentType.HEALTH;
  current: number;
  max: number;
  shield: number;
  regenRate: number;
  isDead: boolean;
}

export enum DamageType {
  PHYSICAL = 'PHYSICAL',
  MAGIC = 'MAGIC',
  TRUE = 'TRUE',
  FROST = 'FROST',
  LIGHTNING = 'LIGHTNING',
}

export enum TowerType {
  ARCHER = 'ARCHER',
  MAGE = 'MAGE',
  CANNON = 'CANNON',
  TESLA = 'TESLA',
  FROST = 'FROST',
  BARRACKS = 'BARRACKS',
}

export enum TargetPriority {
  FIRST = 'FIRST',
  LAST = 'LAST',
  STRONGEST = 'STRONGEST',
  WEAKEST = 'WEAKEST',
  NEAREST = 'NEAREST',
  FASTEST = 'FASTEST',
}

export interface TowerComponent extends IComponent {
  type: ComponentType.TOWER;
  ownerId: string;
  towerType: TowerType;
  tier: number;
  level: number;
  range: number;
  damage: number;
  damageType: DamageType;
  fireRate: number; // Attacks per second
  attackCooldown: number; // Ms remaining until next attack
  targetPriority: TargetPriority;
  targetEntityId: EntityId | null;
  kills: number;
  totalDamageDealt: number;
  gridX: number;
  gridY: number;
  branch?: 'A' | 'B';
  totalInvestedGold: number;
  splashRadius: number;
  chainCount: number;
  chainDecay: number;
  effects: StatusEffect[];
}

export enum EnemyType {
  SWARM = 'SWARM',
  GOBLIN = 'GOBLIN',
  ORC_BRUTE = 'ORC_BRUTE',
  ARMOURED_KNIGHT = 'ARMOURED_KNIGHT',
  ARCANE_GOLEM = 'ARCANE_GOLEM',
  WYVERN_FLYER = 'WYVERN_FLYER',
  BOSS_TITAN = 'BOSS_TITAN',
}

export interface EnemyComponent extends IComponent {
  type: ComponentType.ENEMY;
  enemyType: EnemyType;
  waveNumber: number;
  armor: number; // Reduces physical damage
  magicResist: number; // Reduces magic damage (0 - 100%)
  bountyGold: number;
  bountyXp: number;
  damageToNexus: number;
  isFlying: boolean;
  isBoss: boolean;
  speed: number;
  reachedNexus: boolean;
}

export interface StatusEffect {
  id: string;
  type: 'SLOW' | 'BURN' | 'STUN' | 'ARMOR_SHRED' | 'ATTACK_BUFF';
  value: number; // e.g. 0.3 = 30% slow
  durationMs: number;
  remainingMs: number;
  tickIntervalMs?: number;
  tickTimerMs?: number;
  tickDamage?: number;
  tickDamageType?: DamageType;
}

export interface BuffComponent extends IComponent {
  type: ComponentType.BUFF;
  effects: StatusEffect[];
}

export interface Point2D {
  x: number;
  y: number;
}

export interface PathFollowerComponent extends IComponent {
  type: ComponentType.PATH_FOLLOWER;
  waypoints: Point2D[];
  currentWaypointIndex: number;
  reachedEnd: boolean;
}

export interface ProjectileComponent extends IComponent {
  type: ComponentType.PROJECTILE;
  sourceEntityId: EntityId;
  targetEntityId: EntityId | null;
  targetPosition: Point2D;
  speed: number;
  damage: number;
  damageType: DamageType;
  splashRadius: number;
  chainCount: number;
  chainDecay: number; // Multiplier per bounce (e.g. 0.75)
  chainsRemaining: number;
  pierceRemaining: number;
  effectsToApply: StatusEffect[];
}

export interface PlayerStateComponent extends IComponent {
  type: ComponentType.PLAYER_STATE;
  playerId: string;
  username: string;
  gold: number;
  health: number;
  maxHealth: number;
  score: number;
  wavesCleared: number;
  isAlive: boolean;
}
