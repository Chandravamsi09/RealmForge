import { System, World } from '../engine/ecs/World';
import { ComponentType, EnemyComponent } from '../engine/ecs/Components';
import { DeterministicMath } from '../engine/loop/DeterministicMath';

export class EnemyMovementSystem extends System {
  update(world: World, deltaMs: number): void {
    const dtSeconds = deltaMs / 1000;
    const enemyIds = world.query(
      ComponentType.ENEMY | ComponentType.TRANSFORM | ComponentType.PATH_FOLLOWER | ComponentType.HEALTH,
    );

    for (const enemyId of enemyIds) {
      const transform = world.transforms.get(enemyId)!;
      const pathFollower = world.pathFollowers.get(enemyId)!;
      const health = world.healths.get(enemyId)!;
      const enemy = world.enemies.get(enemyId)!;
      const buffComp = world.buffs.get(enemyId);

      if (health.isDead || health.current <= 0) {
        world.destroyEntity(enemyId);
        continue;
      }

      if (pathFollower.reachedEnd || pathFollower.waypoints.length === 0) {
        continue;
      }

      // Check status effects
      let isStunned = false;
      let speedMultiplier = 1.0;

      if (buffComp && buffComp.effects) {
        for (const effect of buffComp.effects) {
          if (effect.type === 'STUN') {
            isStunned = true;
            break;
          }
          if (effect.type === 'SLOW') {
            speedMultiplier = Math.min(speedMultiplier, Math.max(0.2, 1.0 - effect.value));
          }
        }
      }

      if (isStunned) continue;

      const baseSpeed = 80; // Standard 80 px/sec
      const moveDistance = baseSpeed * speedMultiplier * dtSeconds;

      const targetWaypoint = pathFollower.waypoints[pathFollower.currentWaypointIndex];
      if (!targetWaypoint) {
        pathFollower.reachedEnd = true;
        this.handleReachedNexus(world, enemyId, enemy);
        continue;
      }

      const dist = DeterministicMath.distance(transform.x, transform.y, targetWaypoint.x, targetWaypoint.y);

      if (dist <= moveDistance || dist < 4) {
        transform.x = targetWaypoint.x;
        transform.y = targetWaypoint.y;
        pathFollower.currentWaypointIndex++;

        if (pathFollower.currentWaypointIndex >= pathFollower.waypoints.length) {
          pathFollower.reachedEnd = true;
          this.handleReachedNexus(world, enemyId, enemy);
        }
      } else {
        const angle = Math.atan2(targetWaypoint.y - transform.y, targetWaypoint.x - transform.x);
        transform.x += Math.cos(angle) * moveDistance;
        transform.y += Math.sin(angle) * moveDistance;
        transform.rotation = angle;
      }
    }
  }

  private handleReachedNexus(world: World, enemyId: number, enemy: EnemyComponent): void {
    enemy.reachedNexus = true;
    world.emit('nexusDamaged', {
      damage: enemy.damageToNexus || 1,
      enemyType: enemy.enemyType,
      enemyId,
    });
    world.destroyEntity(enemyId);
  }
}
