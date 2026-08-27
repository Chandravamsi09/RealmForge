import {
  World,
  DeterministicMath,
  StateHasher,
  ComponentType,
  TransformComponent,
  HealthComponent,
} from '@realmforge/shared';

describe('Shared Engine Core: Determinism & State Hashing', () => {
  it('should generate reproducible random sequences with seeded PRNG', () => {
    const seed = 123456789;
    const rng1 = DeterministicMath.createRng(seed);
    const rng2 = DeterministicMath.createRng(seed);

    const seq1 = Array.from({ length: 50 }, () => rng1());
    const seq2 = Array.from({ length: 50 }, () => rng2());

    expect(seq1).toEqual(seq2);
    expect(seq1[0]).not.toBe(seq1[1]);
  });

  it('should generate identical state hashes across two parallel simulated worlds', () => {
    const worldA = new World();
    const worldB = new World();

    for (let i = 0; i < 10; i++) {
      const eA = worldA.createEntity();
      const eB = worldB.createEntity();

      const transformA: TransformComponent = {
        type: ComponentType.TRANSFORM,
        x: i * 32.5,
        y: i * 64.25,
        rotation: 1.57,
      };
      const transformB: TransformComponent = {
        type: ComponentType.TRANSFORM,
        x: i * 32.5,
        y: i * 64.25,
        rotation: 1.57,
      };

      const healthA: HealthComponent = {
        type: ComponentType.HEALTH,
        current: 100 - i * 5,
        max: 100,
        shield: 10,
        regenRate: 0.5,
        isDead: false,
      };
      const healthB: HealthComponent = {
        type: ComponentType.HEALTH,
        current: 100 - i * 5,
        max: 100,
        shield: 10,
        regenRate: 0.5,
        isDead: false,
      };

      worldA.addComponent(eA, transformA);
      worldA.addComponent(eA, healthA);

      worldB.addComponent(eB, transformB);
      worldB.addComponent(eB, healthB);
    }

    // Run 100 ticks on both worlds
    for (let t = 0; t < 100; t++) {
      worldA.tick(50);
      worldB.tick(50);
    }

    const hashA = StateHasher.hashWorld(worldA);
    const hashB = StateHasher.hashWorld(worldB);

    expect(hashA).toBe(hashB);
    expect(typeof hashA).toBe('number');
    expect(hashA).toBeGreaterThan(0);

    // Modify one world slightly and ensure hash diverges immediately
    const firstEntityA = worldA.getEntities()[0]!;
    worldA.healths.get(firstEntityA)!.current -= 1;

    const modifiedHashA = StateHasher.hashWorld(worldA);
    expect(modifiedHashA).not.toBe(hashB);
  });
});
