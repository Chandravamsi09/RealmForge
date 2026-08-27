import { World } from '../ecs/World';

/**
 * Generates an authoritative 32-bit FNV-1a state checksum for a given World state.
 * Used for tick synchronization and client-server desync detection.
 */
export class StateHasher {
  private static readonly FNV_PRIME = 0x01000193;
  private static readonly FNV_OFFSET_BASIS = 0x811c9dc5;

  public static hashWorld(world: World): number {
    let hash = this.FNV_OFFSET_BASIS;

    // Hash current tick
    hash = this.hashNumber(hash, world.currentTick);

    // Hash all active entities in deterministic sorted order
    const entityIds = world.getEntities().sort((a, b) => a - b);

    for (const id of entityIds) {
      hash = this.hashNumber(hash, id);

      const transform = world.transforms.get(id);
      if (transform) {
        hash = this.hashNumber(hash, Math.round(transform.x * 100));
        hash = this.hashNumber(hash, Math.round(transform.y * 100));
      }

      const health = world.healths.get(id);
      if (health) {
        hash = this.hashNumber(hash, Math.round(health.current * 100));
        hash = this.hashNumber(hash, Math.round(health.shield * 100));
      }

      const enemy = world.enemies.get(id);
      if (enemy) {
        hash = this.hashNumber(hash, enemy.waveNumber);
      }

      const tower = world.towers.get(id);
      if (tower) {
        hash = this.hashNumber(hash, tower.tier);
        hash = this.hashNumber(hash, tower.level);
        hash = this.hashNumber(hash, tower.kills);
      }

      const player = world.playerStates.get(id);
      if (player) {
        hash = this.hashNumber(hash, player.gold);
        hash = this.hashNumber(hash, player.health);
        hash = this.hashNumber(hash, player.score);
      }
    }

    return hash >>> 0;
  }

  private static hashNumber(hash: number, value: number): number {
    const bytes = [
      value & 0xff,
      (value >>> 8) & 0xff,
      (value >>> 16) & 0xff,
      (value >>> 24) & 0xff,
    ];
    for (const byte of bytes) {
      hash ^= byte;
      hash = Math.imul(hash, this.FNV_PRIME);
    }
    return hash;
  }
}
