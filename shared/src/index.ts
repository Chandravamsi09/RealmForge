/**
 * RealmForge Shared Core Library
 * Contains shared types, constants, ECS game loop, pathfinding, and combat mechanics.
 */

export const REALMFORGE_VERSION = '1.0.0';
export const DEFAULT_TICK_RATE = 20; // 20 Hz (50ms tick step)
export const MS_PER_TICK = 1000 / DEFAULT_TICK_RATE;

// Auth
export * from './auth/types';

// Engine ECS
export * from './engine/ecs/Components';
export * from './engine/ecs/World';

// Engine Loop & Determinism
export * from './engine/loop/DeterministicMath';
export * from './engine/loop/StateHasher';
export * from './engine/loop/FixedStepLoop';

// Sync Types
export * from './engine/sync/TickSyncTypes';

// Map & Pathfinding
export * from './map/TileGrid';
export * from './map/AStarPathfinder';
export * from './map/GameMap';

// Combat & Towers
export * from './combat/TowerDefinitions';
export * from './combat/DamageCalculator';
export * from './combat/TargetAcquisition';
export * from './combat/systems/TowerTargetingSystem';
export * from './combat/systems/ProjectileSystem';
export * from './combat/systems/BuffSystem';

// Wave System
export * from './waves/EnemyDefinitions';
export * from './waves/WaveScaling';
export * from './waves/WaveGenerator';
export * from './waves/WaveSpawnerSystem';

// Multiplayer
export * from './multiplayer/types';

// Persistence & Stats
export * from './persistence/types';

// Economy & Inventory
export * from './economy/types';

// Admin & Moderation
export * from './admin/types';
