import { System, World } from '../../engine/ecs/World';
import { ComponentType } from '../../engine/ecs/Components';
import { DeterministicMath } from '../../engine/loop/DeterministicMath';
import { DamageCalculator } from '../DamageCalculator';

export class ProjectileSystem extends System {
  update(world: World, deltaMs: number): void {
    const dtSeconds = deltaMs / 1000;
    const projectileIds = world.query(ComponentType.PROJECTILE | ComponentType.TRANSFORM);

    for (const projId of projectileIds) {
      const proj = world.projectiles.get(projId)!;
      const transform = world.transforms.get(projId)!;

      let targetX = proj.targetPosition.x;
      let targetY = proj.targetPosition.y;

      // Track target entity if alive
      if (proj.targetEntityId !== null && world.isAlive(proj.targetEntityId)) {
        const targetTransform = world.transforms.get(proj.targetEntityId);
        if (targetTransform) {
          targetX = targetTransform.x;
          targetY = targetTransform.y;
          proj.targetPosition.x = targetX;
          proj.targetPosition.y = targetY;
        }
      }

      const distToTarget = DeterministicMath.distance(transform.x, transform.y, targetX, targetY);
      const moveDistance = proj.speed * dtSeconds;

      if (distToTarget <= moveDistance || distToTarget < 10) {
        // Hit target!
        this.handleHit(world, projId, proj, targetX, targetY);
        world.destroyEntity(projId);
      } else {
        // Move towards target
        const angle = Math.atan2(targetY - transform.y, targetX - transform.x);
        transform.x += Math.cos(angle) * moveDistance;
        transform.y += Math.sin(angle) * moveDistance;
        transform.rotation = angle;
      }
    }
  }

  private handleHit(
    world: World,
    _projId: number,
    proj: any,
    hitX: number,
    hitY: number,
  ): void {
    const enemies = world.query(ComponentType.ENEMY | ComponentType.TRANSFORM | ComponentType.HEALTH);

    if (proj.splashRadius > 0) {
      // Area of Effect Splash
      for (const enemyId of enemies) {
        const enemyTransform = world.transforms.get(enemyId)!;
        const dist = DeterministicMath.distance(hitX, hitY, enemyTransform.x, enemyTransform.y);

        if (dist <= proj.splashRadius) {
          const splashDmg = DamageCalculator.calculateSplashDamage(
            proj.damage,
            dist,
            proj.splashRadius,
          );
          this.applyDamageToEnemy(world, enemyId, splashDmg, proj);
        }
      }
    } else if (proj.targetEntityId !== null && world.isAlive(proj.targetEntityId)) {
      // Direct Single Target Hit
      this.applyDamageToEnemy(world, proj.targetEntityId, proj.damage, proj);
    }
  }

  private applyDamageToEnemy(world: World, enemyId: number, rawDamage: number, proj: any): void {
    const health = world.healths.get(enemyId);
    const enemy = world.enemies.get(enemyId);
    const buffComp = world.buffs.get(enemyId);
    if (!health || !enemy || health.isDead) return;

    const effects = buffComp ? buffComp.effects : [];
    const result = DamageCalculator.calculateDamage(
      rawDamage,
      proj.damageType,
      enemy.armor,
      enemy.magicResist,
      false,
      2.0,
      effects,
    );

    // Apply shield absorption first
    let damageRemaining = result.finalDamage;
    if (health.shield > 0) {
      if (health.shield >= damageRemaining) {
        health.shield -= damageRemaining;
        damageRemaining = 0;
      } else {
        damageRemaining -= health.shield;
        health.shield = 0;
      }
    }

    health.current = Math.max(0, health.current - damageRemaining);

    // Track tower damage
    if (proj.sourceEntityId && world.isAlive(proj.sourceEntityId)) {
      const tower = world.towers.get(proj.sourceEntityId);
      if (tower) {
        tower.totalDamageDealt += result.finalDamage;
      }
    }

    // Apply status effects
    if (proj.effectsToApply && proj.effectsToApply.length > 0) {
      let targetBuff = world.buffs.get(enemyId);
      if (!targetBuff) {
        targetBuff = { type: ComponentType.BUFF, effects: [] };
        world.addComponent(enemyId, targetBuff);
      }
      for (const eff of proj.effectsToApply) {
        targetBuff.effects.push({ ...eff });
      }
    }

    world.emit('enemyDamaged', {
      enemyId,
      damage: result.finalDamage,
      remainingHealth: health.current,
      sourceTowerId: proj.sourceEntityId,
    });

    if (health.current <= 0) {
      health.isDead = true;
      if (proj.sourceEntityId && world.isAlive(proj.sourceEntityId)) {
        const tower = world.towers.get(proj.sourceEntityId);
        if (tower) tower.kills++;
      }
      world.emit('enemyKilled', {
        enemyId,
        enemyType: enemy.enemyType,
        bountyGold: enemy.bountyGold,
        bountyXp: enemy.bountyXp,
        killedByTowerId: proj.sourceEntityId,
      });
    }
  }
}
