import { EntityId, TargetPriority } from '../engine/ecs/Components';
import { DeterministicMath } from '../engine/loop/DeterministicMath';

export interface TargetCandidate {
  entityId: EntityId;
  x: number;
  y: number;
  health: number;
  maxHealth: number;
  speed: number;
  pathProgress: number; // Higher number = closer to nexus
  isFlying: boolean;
}

export class TargetAcquisition {
  /**
   * Evaluates all candidates in range and selects the optimal target based on TargetPriority.
   */
  public static selectTarget(
    towerX: number,
    towerY: number,
    range: number,
    priority: TargetPriority,
    candidates: TargetCandidate[],
  ): EntityId | null {
    const inRange = candidates.filter(
      c => DeterministicMath.distance(towerX, towerY, c.x, c.y) <= range,
    );

    if (inRange.length === 0) return null;

    switch (priority) {
      case TargetPriority.FIRST:
        // Highest path progress (closest to reaching nexus)
        inRange.sort((a, b) => b.pathProgress - a.pathProgress);
        return inRange[0]!.entityId;

      case TargetPriority.LAST:
        // Lowest path progress (furthest from nexus / closest to spawn)
        inRange.sort((a, b) => a.pathProgress - b.pathProgress);
        return inRange[0]!.entityId;

      case TargetPriority.STRONGEST:
        // Highest current HP
        inRange.sort((a, b) => b.health - a.health);
        return inRange[0]!.entityId;

      case TargetPriority.WEAKEST:
        // Lowest current HP
        inRange.sort((a, b) => a.health - b.health);
        return inRange[0]!.entityId;

      case TargetPriority.NEAREST: {
        // Closest Euclidean distance to tower
        inRange.sort((a, b) => {
          const distA = DeterministicMath.distanceSquared(towerX, towerY, a.x, a.y);
          const distB = DeterministicMath.distanceSquared(towerX, towerY, b.x, b.y);
          return distA - distB;
        });
        return inRange[0]!.entityId;
      }

      case TargetPriority.FASTEST:
        // Highest movement speed
        inRange.sort((a, b) => b.speed - a.speed);
        return inRange[0]!.entityId;

      default:
        return inRange[0]!.entityId;
    }
  }
}
