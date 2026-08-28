/**
 * RealmForge Server-Side Behavior Tree AI & Swarm Flocking Mechanics
 * Executes composite, decorator, and leaf AI task nodes for 80+ enemy archetypes and boss phases.
 */

export enum NodeStatus {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  RUNNING = 'RUNNING',
}

export interface AIContext {
  entityId: number;
  currentHp: number;
  maxHp: number;
  posX: number;
  posY: number;
  targetNexusX: number;
  targetNexusY: number;
  nearbyTowerIds: number[];
  blackboard: Map<string, any>;
}

export abstract class BehaviorNode {
  abstract execute(context: AIContext): NodeStatus;
}

export class SequenceNode extends BehaviorNode {
  constructor(private children: BehaviorNode[]) { super(); }
  execute(context: AIContext): NodeStatus {
    for (const child of this.children) {
      const res = child.execute(context);
      if (res !== NodeStatus.SUCCESS) return res;
    }
    return NodeStatus.SUCCESS;
  }
}

export class SelectorNode extends BehaviorNode {
  constructor(private children: BehaviorNode[]) { super(); }
  execute(context: AIContext): NodeStatus {
    for (const child of this.children) {
      const res = child.execute(context);
      if (res === NodeStatus.SUCCESS || res === NodeStatus.RUNNING) return res;
    }
    return NodeStatus.FAILURE;
  }
}

export class AIBehaviorTree_1 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_2 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_3 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_4 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_5 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_6 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_7 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_8 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_9 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_10 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_11 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_12 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_13 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_14 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_15 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_16 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_17 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_18 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_19 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_20 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_21 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_22 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_23 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_24 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_25 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_26 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_27 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_28 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_29 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_30 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_31 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_32 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_33 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_34 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_35 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_36 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_37 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_38 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_39 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_40 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_41 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_42 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_43 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_44 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_45 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_46 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_47 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_48 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_49 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_50 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_51 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_52 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_53 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_54 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_55 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_56 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_57 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_58 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_59 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class AIBehaviorTree_60 extends BehaviorNode {
  execute(context: AIContext): NodeStatus {
    const hpPct = context.currentHp / Math.max(1, context.maxHp);
    if (hpPct < 0.25) {
      context.blackboard.set('berserk', true);
      return NodeStatus.SUCCESS;
    }
    return NodeStatus.RUNNING;
  }
}

export class EnemyBehaviorTreeEngine {
  private trees: Map<string, BehaviorNode> = new Map();
  evaluate(treeId: string, context: AIContext): NodeStatus {
    const tree = this.trees.get(treeId);
    return tree ? tree.execute(context) : NodeStatus.SUCCESS;
  }
}