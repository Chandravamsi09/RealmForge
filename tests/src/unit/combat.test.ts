import {
  DamageCalculator,
  DamageType,
  StatusEffect,
} from '@realmforge/shared';

describe('Combat System: Pure Damage Calculations', () => {
  it('should calculate physical damage reduction correctly using armor curve', () => {
    // 0 Armor -> 0% reduction -> 100 damage
    const res0 = DamageCalculator.calculateDamage(100, DamageType.PHYSICAL, 0, 0);
    expect(res0.finalDamage).toBe(100);
    expect(res0.mitigatedAmount).toBe(0);

    // 100 Armor -> 50% reduction (100/(100+100)) -> 50 damage
    const res100 = DamageCalculator.calculateDamage(100, DamageType.PHYSICAL, 100, 0);
    expect(res100.finalDamage).toBe(50);
    expect(res100.mitigatedAmount).toBe(50);

    // 300 Armor -> 75% reduction (300/(300+100)) -> 25 damage
    const res300 = DamageCalculator.calculateDamage(100, DamageType.PHYSICAL, 300, 0);
    expect(res300.finalDamage).toBe(25);
    expect(res300.mitigatedAmount).toBe(75);
  });

  it('should calculate magic damage mitigation correctly', () => {
    // 25% Magic Resist -> 75 damage
    const res25 = DamageCalculator.calculateDamage(100, DamageType.MAGIC, 0, 25);
    expect(res25.finalDamage).toBe(75);
    expect(res25.mitigatedAmount).toBe(25);
  });

  it('should calculate true damage ignoring all defense', () => {
    const resTrue = DamageCalculator.calculateDamage(100, DamageType.TRUE, 500, 80);
    expect(resTrue.finalDamage).toBe(100);
    expect(resTrue.mitigatedAmount).toBe(0);
  });

  it('should apply critical strike multipliers', () => {
    const critRes = DamageCalculator.calculateDamage(100, DamageType.PHYSICAL, 0, 0, true, 2.5);
    expect(critRes.finalDamage).toBe(250);
    expect(critRes.isCrit).toBe(true);
  });

  it('should apply armor shred status effects before mitigation', () => {
    const shredEffect: StatusEffect = {
      id: 'shred_50',
      type: 'ARMOR_SHRED',
      value: 0.5, // 50% armor shred
      durationMs: 3000,
      remainingMs: 3000,
    };

    // 100 armor shredded to 50 armor -> reduction 50/(50+100) = 33.33% -> final damage ~ 66.67
    const shreddedRes = DamageCalculator.calculateDamage(
      100,
      DamageType.PHYSICAL,
      100,
      0,
      false,
      2.0,
      [shredEffect],
    );

    expect(shreddedRes.effectiveArmor).toBe(50);
    expect(shreddedRes.finalDamage).toBe(66.67);
  });

  it('should calculate chain lightning decay properly', () => {
    const bounce0 = DamageCalculator.calculateChainDamage(100, 0, 0.2);
    const bounce1 = DamageCalculator.calculateChainDamage(100, 1, 0.2);
    const bounce2 = DamageCalculator.calculateChainDamage(100, 2, 0.2);

    expect(bounce0).toBe(100);
    expect(bounce1).toBe(80);
    expect(bounce2).toBe(64);
  });

  it('should calculate splash AoE damage falloff correctly', () => {
    const centerHit = DamageCalculator.calculateSplashDamage(100, 0, 50);
    const midHit = DamageCalculator.calculateSplashDamage(100, 25, 50);
    const edgeHit = DamageCalculator.calculateSplashDamage(100, 50, 50);

    expect(centerHit).toBe(100);
    expect(midHit).toBe(65); // 1 - (0.5 * 0.7) = 0.65 -> 65
    expect(edgeHit).toBe(0); // At/beyond edge
  });
});
