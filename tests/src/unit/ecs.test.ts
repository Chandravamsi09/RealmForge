import {
  World,
  System,
  ComponentType,
  TransformComponent,
  HealthComponent,
  VelocityComponent,
} from '@realmforge/shared';

class MovementSystem extends System {
  update(world: World, deltaMs: number): void {
    const dtSeconds = deltaMs / 1000;
    const queryMask = ComponentType.TRANSFORM | ComponentType.VELOCITY;
    const entityIds = world.query(queryMask);

    for (const id of entityIds) {
      const transform = world.transforms.get(id)!;
      const velocity = world.velocities.get(id)!;

      transform.x += velocity.vx * dtSeconds;
      transform.y += velocity.vy * dtSeconds;
    }
  }
}

describe('Shared Engine Core: Entity-Component System (ECS)', () => {
  let world: World;

  beforeEach(() => {
    world = new World();
  });

  it('should create and destroy entities correctly', () => {
    const e1 = world.createEntity();
    const e2 = world.createEntity();

    expect(world.isAlive(e1)).toBe(true);
    expect(world.isAlive(e2)).toBe(true);
    expect(world.getEntities()).toContain(e1);
    expect(world.getEntities()).toContain(e2);

    world.destroyEntity(e1);
    expect(world.isAlive(e1)).toBe(false);
    expect(world.getEntities()).not.toContain(e1);
    expect(world.isAlive(e2)).toBe(true);
  });

  it('should add, query, and remove components by bitmask', () => {
    const entity = world.createEntity();

    const transform: TransformComponent = {
      type: ComponentType.TRANSFORM,
      x: 100,
      y: 200,
      rotation: 0,
    };

    const health: HealthComponent = {
      type: ComponentType.HEALTH,
      current: 100,
      max: 100,
      shield: 20,
      regenRate: 1,
      isDead: false,
    };

    world.addComponent(entity, transform);
    world.addComponent(entity, health);

    expect(world.hasComponents(entity, ComponentType.TRANSFORM)).toBe(true);
    expect(world.hasComponents(entity, ComponentType.HEALTH)).toBe(true);
    expect(world.hasComponents(entity, ComponentType.TRANSFORM | ComponentType.HEALTH)).toBe(true);
    expect(world.hasComponents(entity, ComponentType.VELOCITY)).toBe(false);

    expect(world.query(ComponentType.TRANSFORM | ComponentType.HEALTH)).toEqual([entity]);
    expect(world.query(ComponentType.VELOCITY)).toEqual([]);

    world.removeComponent(entity, ComponentType.HEALTH);
    expect(world.hasComponents(entity, ComponentType.HEALTH)).toBe(false);
    expect(world.query(ComponentType.TRANSFORM | ComponentType.HEALTH)).toEqual([]);
    expect(world.query(ComponentType.TRANSFORM)).toEqual([entity]);
  });

  it('should execute systems properly in tick order', () => {
    world.addSystem(new MovementSystem());

    const entity = world.createEntity();
    world.addComponent(entity, {
      type: ComponentType.TRANSFORM,
      x: 0,
      y: 0,
      rotation: 0,
    } as TransformComponent);

    world.addComponent(entity, {
      type: ComponentType.VELOCITY,
      vx: 100, // 100 px / sec
      vy: 50,
      speed: 111.8,
      maxSpeed: 200,
    } as VelocityComponent);

    // Simulate 20 ticks at 50ms (total 1000ms = 1s)
    for (let i = 0; i < 20; i++) {
      world.tick(50);
    }

    const finalTransform = world.transforms.get(entity)!;
    expect(Math.round(finalTransform.x)).toBe(100);
    expect(Math.round(finalTransform.y)).toBe(50);
    expect(world.currentTick).toBe(20);
  });
});
