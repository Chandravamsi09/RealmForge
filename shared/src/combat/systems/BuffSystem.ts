import { System, World } from '../../engine/ecs/World';
import { ComponentType } from '../../engine/ecs/Components';

export class BuffSystem extends System {
  update(world: World, deltaMs: number): void {
    const buffedEntities = world.query(ComponentType.BUFF | ComponentType.HEALTH);

    for (const id of buffedEntities) {
      const buffComp = world.buffs.get(id)!;
      const health = world.healths.get(id)!;

      if (health.isDead) continue;

      const remainingEffects = [];
      for (const effect of buffComp.effects) {
        effect.remainingMs -= deltaMs;

        // Process periodic Damage Over Time (e.g. Burn/Poison)
        if (effect.tickIntervalMs && effect.tickDamage) {
          effect.tickTimerMs = (effect.tickTimerMs || 0) + deltaMs;
          if (effect.tickTimerMs >= effect.tickIntervalMs) {
            effect.tickTimerMs -= effect.tickIntervalMs;
            health.current = Math.max(0, health.current - effect.tickDamage);
            if (health.current <= 0) {
              health.isDead = true;
              world.emit('enemyKilled', {
                enemyId: id,
                killedByEffect: effect.type,
              });
            }
          }
        }

        if (effect.remainingMs > 0 && !health.isDead) {
          remainingEffects.push(effect);
        }
      }

      buffComp.effects = remainingEffects;
      if (buffComp.effects.length === 0) {
        world.removeComponent(id, ComponentType.BUFF);
      }
    }
  }
}
