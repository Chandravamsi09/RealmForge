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
