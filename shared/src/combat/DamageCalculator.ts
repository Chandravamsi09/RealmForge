import { DamageType, StatusEffect } from '../engine/ecs/Components';

export interface DamageCalculationResult {
  finalDamage: number;
  isCrit: boolean;
  mitigatedAmount: number;
  effectiveArmor: number;
  effectiveMagicResist: number;
}

export class DamageCalculator {
  /**
   * Calculates post-mitigation damage based on damage type, armor, magic resistance,
   * critical strikes, and active status effects.
   */
  public static calculateDamage(
    rawDamage: number,
    damageType: DamageType,
    armor: number,
    magicResist: number,
    isCrit: boolean = false,
    critMultiplier: number = 2.0,
    statusEffects: StatusEffect[] = [],
  ): DamageCalculationResult {
    let effectiveArmor = Math.max(0, armor);
    let effectiveMagicResist = Math.max(0, Math.min(90, magicResist)); // Capped at 90% magic resist

    // Check for armor shred effects
    for (const effect of statusEffects) {
      if (effect.type === 'ARMOR_SHRED') {
        effectiveArmor = Math.max(0, effectiveArmor * (1 - effect.value));
        effectiveMagicResist = Math.max(0, effectiveMagicResist * (1 - effect.value));
      }
    }

    let initialDamage = isCrit ? rawDamage * critMultiplier : rawDamage;
    let finalDamage = initialDamage;
    let mitigatedAmount = 0;

    switch (damageType) {
      case DamageType.PHYSICAL: {
        // Standard Diminishing Returns Armor Formula: Reduction = Armor / (Armor + 100)
        const armorReduction = effectiveArmor / (effectiveArmor + 100);
        finalDamage = initialDamage * (1 - armorReduction);
        mitigatedAmount = initialDamage - finalDamage;
        break;
      }

      case DamageType.MAGIC: {
        // Percentage Magic Resistance Reduction
        const mrReduction = effectiveMagicResist / 100;
        finalDamage = initialDamage * (1 - mrReduction);
        mitigatedAmount = initialDamage - finalDamage;
        break;
      }

      case DamageType.LIGHTNING: {
        // Hybrid: Ignores 50% of armor and magic resistance
        const lightningArmorReduction = (effectiveArmor * 0.5) / (effectiveArmor * 0.5 + 100);
        finalDamage = initialDamage * (1 - lightningArmorReduction);
        mitigatedAmount = initialDamage - finalDamage;
        break;
      }

      case DamageType.FROST: {
        // Frost: Takes armor mitigation, but deals +25% bonus damage to already slowed targets
        const hasSlow = statusEffects.some(e => e.type === 'SLOW');
        const bonusMultiplier = hasSlow ? 1.25 : 1.0;
        const frostArmorReduction = effectiveArmor / (effectiveArmor + 100);
        finalDamage = initialDamage * bonusMultiplier * (1 - frostArmorReduction);
        mitigatedAmount = initialDamage * bonusMultiplier - finalDamage;
        break;
      }

      case DamageType.TRUE: {
        // True Damage: Completely ignores all armor and magic resistance
        finalDamage = initialDamage;
        mitigatedAmount = 0;
        break;
      }
    }

    return {
      finalDamage: Math.max(1, Math.round(finalDamage * 100) / 100),
      isCrit,
      mitigatedAmount: Math.round(mitigatedAmount * 100) / 100,
      effectiveArmor: Math.round(effectiveArmor * 100) / 100,
      effectiveMagicResist: Math.round(effectiveMagicResist * 100) / 100,
    };
  }

  /**
   * Calculates chain lightning bounce damage decay.
   * e.g. Bounce 0 = 100%, Bounce 1 = 80%, Bounce 2 = 64%, etc.
   */
  public static calculateChainDamage(
    baseDamage: number,
    bounceIndex: number,
    decayPerBounce: number = 0.2,
  ): number {
    const multiplier = Math.pow(1 - decayPerBounce, bounceIndex);
    return Math.max(1, Math.round(baseDamage * multiplier * 100) / 100);
  }

  /**
   * Calculates splash AoE damage falloff from impact epicenter.
   */
  public static calculateSplashDamage(
    epicenterDamage: number,
    distanceFromEpicenter: number,
    splashRadius: number,
    minFalloffMultiplier: number = 0.3,
  ): number {
    if (distanceFromEpicenter >= splashRadius) return 0;
    const normalizedDistance = distanceFromEpicenter / splashRadius;
    const falloff = 1 - normalizedDistance * (1 - minFalloffMultiplier);
    return Math.max(1, Math.round(epicenterDamage * falloff * 100) / 100);
  }
}
