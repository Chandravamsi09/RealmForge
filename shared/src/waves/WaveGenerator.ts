import { EnemyType } from '../engine/ecs/Components';

export interface EnemySpawnGroup {
  enemyType: EnemyType;
  count: number;
  spawnIntervalMs: number;
  delayBeforeGroupMs: number;
}

export interface WaveDefinition {
  waveNumber: number;
  groups: EnemySpawnGroup[];
  isBossWave: boolean;
  clearBonusGold: number;
  preparationTimeSec: number;
}

export class WaveGenerator {
  /**
   * Generates a procedurally balanced wave definition for any wave number.
   */
  public static generateWave(waveNumber: number): WaveDefinition {
    const isBossWave = waveNumber % 5 === 0;
    const clearBonusGold = 50 + waveNumber * 10 + (isBossWave ? 150 : 0);
    const preparationTimeSec = isBossWave ? 25 : 15;

    const groups: EnemySpawnGroup[] = [];

    if (isBossWave) {
      // Boss Wave Composition
      groups.push({
        enemyType: EnemyType.BOSS_TITAN,
        count: Math.floor(waveNumber / 10) + 1,
        spawnIntervalMs: 4000,
        delayBeforeGroupMs: 0,
      });

      // Supporting escorts
      groups.push({
        enemyType: EnemyType.ARMOURED_KNIGHT,
        count: 4 + Math.floor(waveNumber / 2),
        spawnIntervalMs: 1200,
        delayBeforeGroupMs: 3000,
      });
    } else {
      // Standard Wave progression composition
      const waveCycle = waveNumber % 5;

      switch (waveCycle) {
        case 1: // Swarm rush
          groups.push({
            enemyType: EnemyType.SWARM,
            count: 12 + waveNumber * 3,
            spawnIntervalMs: 400,
            delayBeforeGroupMs: 0,
          });
          break;

        case 2: // Standard infantry + flyer flankers
          groups.push({
            enemyType: EnemyType.GOBLIN,
            count: 8 + waveNumber * 2,
            spawnIntervalMs: 800,
            delayBeforeGroupMs: 0,
          });
          if (waveNumber >= 2) {
            groups.push({
              enemyType: EnemyType.WYVERN_FLYER,
              count: 3 + Math.floor(waveNumber / 2),
              spawnIntervalMs: 1500,
              delayBeforeGroupMs: 2500,
            });
          }
          break;

        case 3: // Heavy Brutes + Magic Golems
          groups.push({
            enemyType: EnemyType.ORC_BRUTE,
            count: 4 + Math.floor(waveNumber / 2),
            spawnIntervalMs: 1200,
            delayBeforeGroupMs: 0,
          });
          groups.push({
            enemyType: EnemyType.ARCANE_GOLEM,
            count: 3 + Math.floor(waveNumber / 3),
            spawnIntervalMs: 1400,
            delayBeforeGroupMs: 2000,
          });
          break;

        case 4: // Mixed Armored Assault
          groups.push({
            enemyType: EnemyType.SWARM,
            count: 10 + waveNumber,
            spawnIntervalMs: 500,
            delayBeforeGroupMs: 0,
          });
          groups.push({
            enemyType: EnemyType.ARMOURED_KNIGHT,
            count: 5 + Math.floor(waveNumber / 2),
            spawnIntervalMs: 1000,
            delayBeforeGroupMs: 2000,
          });
          break;
      }
    }

    return {
      waveNumber,
      groups,
      isBossWave,
      clearBonusGold,
      preparationTimeSec,
    };
  }
}
