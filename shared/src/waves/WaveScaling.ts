import { EnemyType } from '../engine/ecs/Components';
import { ENEMY_DEFINITIONS, EnemyStats } from './EnemyDefinitions';

export interface ScaledEnemyStats extends EnemyStats {
  health: number;
  armor: number;
  magicResist: number;
  bountyGold: number;
  bountyXp: number;
}

export class WaveScaling {
  /**
   * Computes dynamic mathematical scaling multiplier for health based on wave number and player count.
   * Curve: Base * (1 + 0.22 * (wave - 1) + 0.04 * (wave - 1)^1.5) * playerCountMultiplier
   */
  public static calculateHealth(
    baseHealth: number,
    waveNumber: number,
    playerCount: number = 1,
  ): number {
    const waveIndex = Math.max(0, waveNumber - 1);
    const waveFactor = 1 + 0.22 * waveIndex + 0.04 * Math.pow(waveIndex, 1.5);
    const playerFactor = 1 + 0.6 * Math.max(0, playerCount - 1);

    return Math.round(baseHealth * waveFactor * playerFactor);
  }

  /**
   * Computes armor scaling across waves.
   */
  public static calculateArmor(baseArmor: number, waveNumber: number): number {
    const waveIndex = Math.max(0, waveNumber - 1);
    return Math.round(baseArmor * (1 + 0.08 * waveIndex));
  }

  /**
   * Computes magic resist scaling (capped at 85%).
   */
  public static calculateMagicResist(baseMagicResist: number, waveNumber: number): number {
    const waveIndex = Math.max(0, waveNumber - 1);
    const scaled = baseMagicResist * (1 + 0.05 * waveIndex);
    return Math.min(85, Math.round(scaled));
  }

  /**
   * Computes economy bounty gold scaling for defeating enemies in later waves.
   */
  public static calculateBounty(baseBounty: number, waveNumber: number): number {
    const waveIndex = Math.max(0, waveNumber - 1);
    return Math.round(baseBounty * (1 + 0.04 * waveIndex));
  }

  /**
   * Returns a complete scaled stats object for an enemy type in a given wave.
   */
  public static getScaledStats(
    type: EnemyType,
    waveNumber: number,
    playerCount: number = 1,
  ): ScaledEnemyStats {
    const base = ENEMY_DEFINITIONS[type];
    return {
      ...base,
      health: this.calculateHealth(base.baseHealth, waveNumber, playerCount),
      armor: this.calculateArmor(base.baseArmor, waveNumber),
      magicResist: this.calculateMagicResist(base.baseMagicResist, waveNumber),
      bountyGold: this.calculateBounty(base.baseBountyGold, waveNumber),
      bountyXp: this.calculateBounty(base.baseBountyXp, waveNumber),
    };
  }
}
