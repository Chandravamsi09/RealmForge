import {
  TOWER_DEFINITIONS,
  TowerType,
  TargetPriority,
  TargetAcquisition,
  calculateSellRefund,
} from '@realmforge/shared';

describe('Tower System: Upgrades, Heuristics & Refunds', () => {
  it('should have complete definitions for all tower archetypes', () => {
    const archetypes = [
      TowerType.ARCHER,
      TowerType.MAGE,
      TowerType.CANNON,
      TowerType.TESLA,
      TowerType.FROST,
      TowerType.BARRACKS,
    ];

    for (const type of archetypes) {
      const config = TOWER_DEFINITIONS[type];
      expect(config).toBeDefined();
      expect(config.baseCost).toBeGreaterThan(0);
      expect(config.upgrades.tier2).toBeDefined();
      expect(config.upgrades.tier3BranchA).toBeDefined();
      expect(config.upgrades.tier3BranchB).toBeDefined();
      expect(config.upgrades.tier4A).toBeDefined();
      expect(config.upgrades.tier4B).toBeDefined();
    }
  });

  it('should accurately calculate sell refund (75%)', () => {
    expect(calculateSellRefund(100)).toBe(75);
    expect(calculateSellRefund(220)).toBe(165);
  });

  describe('Target Acquisition Heuristics', () => {
    const towerX = 100;
    const towerY = 100;
    const range = 150;

    const candidates = [
      {
        entityId: 1,
        x: 120,
        y: 100,
        health: 200,
        maxHealth: 200,
        speed: 80,
        pathProgress: 1000,
        isFlying: false,
      },
      {
        entityId: 2,
        x: 180,
        y: 100,
        health: 50,
        maxHealth: 100,
        speed: 150,
        pathProgress: 2500, // Furthest along
        isFlying: false,
      },
      {
        entityId: 3,
        x: 110,
        y: 100, // Nearest to tower (dist = 10)
        health: 800, // Strongest HP
        maxHealth: 800,
        speed: 60,
        pathProgress: 500,
        isFlying: false,
      },
      {
        entityId: 4,
        x: 500, // Out of range
        y: 500,
        health: 10,
        maxHealth: 10,
        speed: 200,
        pathProgress: 9999,
        isFlying: false,
      },
    ];

    it('should select FIRST (highest path progress in range)', () => {
      const target = TargetAcquisition.selectTarget(
        towerX,
        towerY,
        range,
        TargetPriority.FIRST,
        candidates,
      );
      expect(target).toBe(2);
    });

    it('should select LAST (lowest path progress in range)', () => {
      const target = TargetAcquisition.selectTarget(
        towerX,
        towerY,
        range,
        TargetPriority.LAST,
        candidates,
      );
      expect(target).toBe(3);
    });

    it('should select STRONGEST (highest HP in range)', () => {
      const target = TargetAcquisition.selectTarget(
        towerX,
        towerY,
        range,
        TargetPriority.STRONGEST,
        candidates,
      );
      expect(target).toBe(3);
    });

    it('should select WEAKEST (lowest HP in range)', () => {
      const target = TargetAcquisition.selectTarget(
        towerX,
        towerY,
        range,
        TargetPriority.WEAKEST,
        candidates,
      );
      expect(target).toBe(2);
    });

    it('should select NEAREST (closest distance to tower)', () => {
      const target = TargetAcquisition.selectTarget(
        towerX,
        towerY,
        range,
        TargetPriority.NEAREST,
        candidates,
      );
      expect(target).toBe(3);
    });

    it('should select FASTEST (highest speed in range)', () => {
      const target = TargetAcquisition.selectTarget(
        towerX,
        towerY,
        range,
        TargetPriority.FASTEST,
        candidates,
      );
      expect(target).toBe(2);
    });
  });
});
