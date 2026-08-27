import {
  ComponentType,
  EntityId,
  IComponent,
  TransformComponent,
  VelocityComponent,
  HealthComponent,
  TowerComponent,
  EnemyComponent,
  ProjectileComponent,
  BuffComponent,
  PathFollowerComponent,
  PlayerStateComponent,
} from './Components';

export type GameEventListener = (payload: any) => void;

export class World {
  private nextEntityId: EntityId = 1;
  private activeEntities: Set<EntityId> = new Set();
  private entityMasks: Map<EntityId, number> = new Map();

  // Dense component stores for zero-allocation performance
  public transforms: Map<EntityId, TransformComponent> = new Map();
  public velocities: Map<EntityId, VelocityComponent> = new Map();
  public healths: Map<EntityId, HealthComponent> = new Map();
  public towers: Map<EntityId, TowerComponent> = new Map();
  public enemies: Map<EntityId, EnemyComponent> = new Map();
  public projectiles: Map<EntityId, ProjectileComponent> = new Map();
  public buffs: Map<EntityId, BuffComponent> = new Map();
  public pathFollowers: Map<EntityId, PathFollowerComponent> = new Map();
  public playerStates: Map<EntityId, PlayerStateComponent> = new Map();

  private eventListeners: Map<string, GameEventListener[]> = new Map();
  private systems: System[] = [];
  public currentTick: number = 0;

  createEntity(): EntityId {
    const id = this.nextEntityId++;
    this.activeEntities.add(id);
    this.entityMasks.set(id, 0);
    this.emit('entityCreated', { entityId: id });
    return id;
  }

  destroyEntity(id: EntityId): boolean {
    if (!this.activeEntities.has(id)) return false;

    this.emit('entityDestroyed', { entityId: id });

    this.activeEntities.delete(id);
    this.entityMasks.delete(id);
    this.transforms.delete(id);
    this.velocities.delete(id);
    this.healths.delete(id);
    this.towers.delete(id);
    this.enemies.delete(id);
    this.projectiles.delete(id);
    this.buffs.delete(id);
    this.pathFollowers.delete(id);
    this.playerStates.delete(id);

    return true;
  }

  isAlive(id: EntityId): boolean {
    return this.activeEntities.has(id);
  }

  getEntities(): EntityId[] {
    return Array.from(this.activeEntities);
  }

  addComponent(entityId: EntityId, component: IComponent): void {
    if (!this.activeEntities.has(entityId)) {
      throw new Error(`Cannot add component to non-existent entity ${entityId}`);
    }

    const currentMask = this.entityMasks.get(entityId) || 0;
    this.entityMasks.set(entityId, currentMask | component.type);

    switch (component.type) {
      case ComponentType.TRANSFORM:
        this.transforms.set(entityId, component as TransformComponent);
        break;
      case ComponentType.VELOCITY:
        this.velocities.set(entityId, component as VelocityComponent);
        break;
      case ComponentType.HEALTH:
        this.healths.set(entityId, component as HealthComponent);
        break;
      case ComponentType.TOWER:
        this.towers.set(entityId, component as TowerComponent);
        break;
      case ComponentType.ENEMY:
        this.enemies.set(entityId, component as EnemyComponent);
        break;
      case ComponentType.PROJECTILE:
        this.projectiles.set(entityId, component as ProjectileComponent);
        break;
      case ComponentType.BUFF:
        this.buffs.set(entityId, component as BuffComponent);
        break;
      case ComponentType.PATH_FOLLOWER:
        this.pathFollowers.set(entityId, component as PathFollowerComponent);
        break;
      case ComponentType.PLAYER_STATE:
        this.playerStates.set(entityId, component as PlayerStateComponent);
        break;
    }
  }

  removeComponent(entityId: EntityId, type: ComponentType): void {
    if (!this.activeEntities.has(entityId)) return;

    const currentMask = this.entityMasks.get(entityId) || 0;
    this.entityMasks.set(entityId, currentMask & ~type);

    switch (type) {
      case ComponentType.TRANSFORM:
        this.transforms.delete(entityId);
        break;
      case ComponentType.VELOCITY:
        this.velocities.delete(entityId);
        break;
      case ComponentType.HEALTH:
        this.healths.delete(entityId);
        break;
      case ComponentType.TOWER:
        this.towers.delete(entityId);
        break;
      case ComponentType.ENEMY:
        this.enemies.delete(entityId);
        break;
      case ComponentType.PROJECTILE:
        this.projectiles.delete(entityId);
        break;
      case ComponentType.BUFF:
        this.buffs.delete(entityId);
        break;
      case ComponentType.PATH_FOLLOWER:
        this.pathFollowers.delete(entityId);
        break;
      case ComponentType.PLAYER_STATE:
        this.playerStates.delete(entityId);
        break;
    }
  }

  hasComponents(entityId: EntityId, requiredMask: number): boolean {
    const mask = this.entityMasks.get(entityId) || 0;
    return (mask & requiredMask) === requiredMask;
  }

  query(requiredMask: number): EntityId[] {
    const matching: EntityId[] = [];
    for (const id of this.activeEntities) {
      if (this.hasComponents(id, requiredMask)) {
        matching.push(id);
      }
    }
    return matching;
  }

  addSystem(system: System): void {
    this.systems.push(system);
  }

  on(event: string, listener: GameEventListener): void {
    const listeners = this.eventListeners.get(event) || [];
    listeners.push(listener);
    this.eventListeners.set(event, listeners);
  }

  emit(event: string, payload: any): void {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      for (const listener of listeners) {
        listener(payload);
      }
    }
  }

  tick(deltaMs: number): void {
    this.currentTick++;
    for (const system of this.systems) {
      system.update(this, deltaMs, this.currentTick);
    }
  }

  clear(): void {
    this.activeEntities.clear();
    this.entityMasks.clear();
    this.transforms.clear();
    this.velocities.clear();
    this.healths.clear();
    this.towers.clear();
    this.enemies.clear();
    this.projectiles.clear();
    this.buffs.clear();
    this.pathFollowers.clear();
    this.playerStates.clear();
    this.eventListeners.clear();
    this.systems = [];
    this.currentTick = 0;
    this.nextEntityId = 1;
  }
}

export abstract class System {
  abstract update(world: World, deltaMs: number, currentTick: number): void;
}
