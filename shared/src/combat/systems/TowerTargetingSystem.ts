import { System, World } from '../../engine/ecs/World';
import { ComponentType, TowerComponent, TransformComponent, ProjectileComponent } from '../../engine/ecs/Components';
import { TargetAcquisition, TargetCandidate } from '../TargetAcquisition';
import { TOWER_DEFINITIONS } from '../TowerDefinitions';

export class TowerTargetingSystem extends System {
  update(world: World, deltaMs: number): void {
    const towers = world.query(ComponentType.TOWER | ComponentType.TRANSFORM);
    const enemies = world.query(ComponentType.ENEMY | ComponentType.TRANSFORM | ComponentType.HEALTH);

    // Build candidate list once per tick
    const candidates: TargetCandidate[] = [];
    for (const enemyId of enemies) {
      const transform = world.transforms.get(enemyId)!;
      const health = world.healths.get(enemyId)!;
      const enemy = world.enemies.get(enemyId)!;
      const pathFollower = world.pathFollowers.get(enemyId);

      if (health.isDead || health.current <= 0) continue;

      const pathProgress = pathFollower
        ? pathFollower.currentWaypointIndex * 1000 + (transform.x + transform.y)
        : 0;

      candidates.push({
        entityId: enemyId,
        x: transform.x,
        y: transform.y,
        health: health.current,
        maxHealth: health.max,
        speed: enemy.speed || 100,
        pathProgress,
        isFlying: !!enemy.isFlying,
      });
    }

    for (const towerId of towers) {
      const tower = world.towers.get(towerId)!;
      const transform = world.transforms.get(towerId)!;

      // Update cooldown
      if (tower.attackCooldown > 0) {
        tower.attackCooldown -= deltaMs;
      }

      // Skip support barracks (passive aura only)
      if (tower.fireRate <= 0) continue;

      // Filter candidates for ground-only towers (Heavy Cannon cannot target flying enemies)
      const validCandidates = tower.towerType === 'CANNON'
        ? candidates.filter(c => !c.isFlying)
        : candidates;

      // Select target
      const targetId = TargetAcquisition.selectTarget(
        transform.x,
        transform.y,
        tower.range,
        tower.targetPriority || 'FIRST',
        validCandidates,
      );
      tower.targetEntityId = targetId;

      // Fire projectile if off cooldown and valid target exists
      if (targetId !== null && tower.attackCooldown <= 0) {
        const config = TOWER_DEFINITIONS[tower.towerType];
        const attackIntervalMs = 1000 / tower.fireRate;
        tower.attackCooldown = attackIntervalMs;

        const targetTransform = world.transforms.get(targetId);
        if (targetTransform) {
          this.spawnProjectile(world, towerId, tower, transform, targetId, targetTransform, config);
        }
      }
    }
  }

  private spawnProjectile(
    world: World,
    towerEntityId: number,
    tower: TowerComponent,
    towerTransform: TransformComponent,
    targetEntityId: number,
    targetTransform: TransformComponent,
    config: any,
  ): void {
    const projId = world.createEntity();

    world.addComponent(projId, {
      type: ComponentType.TRANSFORM,
      x: towerTransform.x,
      y: towerTransform.y,
      rotation: Math.atan2(targetTransform.y - towerTransform.y, targetTransform.x - towerTransform.x),
    } as TransformComponent);

    const projectileComponent: ProjectileComponent = {
      type: ComponentType.PROJECTILE,
      sourceEntityId: towerEntityId,
      targetEntityId,
      targetPosition: { x: targetTransform.x, y: targetTransform.y },
      speed: 400, // 400 px/sec
      damage: tower.damage,
      damageType: tower.damageType,
      splashRadius: tower.splashRadius !== undefined ? tower.splashRadius : config.splashRadius,
      chainCount: tower.chainCount !== undefined ? tower.chainCount : config.chainCount,
      chainDecay: tower.chainDecay !== undefined ? tower.chainDecay : config.chainDecay,
      chainsRemaining: tower.chainCount !== undefined ? tower.chainCount : config.chainCount,
      pierceRemaining: 0,
      effectsToApply: tower.effects && tower.effects.length > 0 ? [...tower.effects] : [...config.baseEffects],
    };

    world.addComponent(projId, projectileComponent);

    world.emit('projectileFired', {
      projectileId: projId,
      sourceId: towerEntityId,
      targetId: targetEntityId,
      damage: tower.damage,
    });
  }
}
