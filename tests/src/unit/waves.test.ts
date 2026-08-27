import {
  EnemyType,
  ENEMY_DEFINITIONS,
  WaveScaling,
  WaveGenerator,
  WaveSpawnerSystem,
  WaveState,
  TileGrid,
  World,
} from '@realmforge/shared';

describe('Enemy Wave System: Scaling, Archetypes & Spawner', () => {
  it('should have valid base definitions for all enemy archetypes', () => {
    const archetypes = [
      EnemyType.SWARM,
      EnemyType.GOBLIN,
      EnemyType.ORC_BRUTE,
      EnemyType.ARMOURED_KNIGHT,
      EnemyType.ARCANE_GOLEM,
      EnemyType.WYVERN_FLYER,
      EnemyType.BOSS_TITAN,
    ];

    for (const type of archetypes) {
      const def = ENEMY_DEFINITIONS[type];
      expect(def).toBeDefined();
      expect(def.baseHealth).toBeGreaterThan(0);
      expect(def.baseSpeed).toBeGreaterThan(0);
    }
  });

  describe('Wave Scaling Curves', () => {
    it('should scale health smoothly with wave progression', () => {
      const baseHp = 100;
      const wave1Hp = WaveScaling.calculateHealth(baseHp, 1, 1);
      const wave5Hp = WaveScaling.calculateHealth(baseHp, 5, 1);
      const wave10Hp = WaveScaling.calculateHealth(baseHp, 10, 1);

      expect(wave1Hp).toBe(100);
      expect(wave5Hp).toBeGreaterThan(wave1Hp);
      expect(wave10Hp).toBeGreaterThan(wave5Hp);
    });

    it('should scale health for co-op multiplayer (higher playerCount)', () => {
      const baseHp = 100;
      const soloHp = WaveScaling.calculateHealth(baseHp, 5, 1);
      const duoHp = WaveScaling.calculateHealth(baseHp, 5, 2);
      const quadHp = WaveScaling.calculateHealth(baseHp, 5, 4);

      expect(duoHp).toBeGreaterThan(soloHp);
      expect(quadHp).toBeGreaterThan(duoHp);
      expect(duoHp).toBe(Math.round(soloHp * 1.6));
    });

    it('should scale armor and bounties', () => {
      const scaledStatsW1 = WaveScaling.getScaledStats(EnemyType.GOBLIN, 1);
      const scaledStatsW10 = WaveScaling.getScaledStats(EnemyType.GOBLIN, 10);

      expect(scaledStatsW10.armor).toBeGreaterThan(scaledStatsW1.armor);
      expect(scaledStatsW10.bountyGold).toBeGreaterThan(scaledStatsW1.bountyGold);
    });
  });

  describe('Wave Generator', () => {
    it('should generate boss waves at wave 5, 10, 15...', () => {
      const wave1 = WaveGenerator.generateWave(1);
      const wave5 = WaveGenerator.generateWave(5);
      const wave10 = WaveGenerator.generateWave(10);

      expect(wave1.isBossWave).toBe(false);
      expect(wave5.isBossWave).toBe(true);
      expect(wave10.isBossWave).toBe(true);

      const hasBossInWave5 = wave5.groups.some(g => g.enemyType === EnemyType.BOSS_TITAN);
      expect(hasBossInWave5).toBe(true);
    });
  });

  describe('WaveSpawnerSystem Lifecycle', () => {
    it('should start wave, spawn enemies, and complete wave when enemies are destroyed', () => {
      const world = new World();
      const grid = new TileGrid(10, 10);
      const spawns = [{ x: 0, y: 0 }];
      const nexuses = [{ x: 9, y: 9 }];

      const spawner = new WaveSpawnerSystem(grid, spawns, nexuses, 1);
      world.addSystem(spawner);

      // Force immediate wave start
      spawner.startNextWave();
      expect(spawner.waveState).toBe(WaveState.IN_PROGRESS);
      expect(spawner.currentWaveIndex).toBe(1);

      // Tick through time to spawn all enemies
      for (let t = 0; t < 200; t++) {
        world.tick(100);
      }

      // Check that enemies were spawned into world
      expect(world.getEntities().length).toBeGreaterThan(0);

      // Destroy all enemies
      for (const id of world.getEntities()) {
        world.destroyEntity(id);
      }

      // Tick once to allow wave completion check
      world.tick(50);
      expect(spawner.waveState).toBe(WaveState.WAITING_TO_START);
    });
  });
});
