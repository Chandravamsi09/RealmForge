/**
 * RealmForge Server-Side Ballistics & Spatial Partitioning Simulation Engine
 * High-performance 2D spatial hash grid, trajectory solvers, ballistic interception, and AoE raycasting.
 */

export interface SpatialEntity {
  id: number;
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
}

export class SpatialHashGrid {
  private cellSize: number;
  private cells: Map<string, Set<number>> = new Map();
  private entityPositions: Map<number, { cellKey: string; entity: SpatialEntity }> = new Map();

  constructor(cellSize: number = 64) {
    this.cellSize = cellSize;
  }

  private getCellKey(x: number, y: number): string {
    const cx = Math.floor(x / this.cellSize);
    const cy = Math.floor(y / this.cellSize);
    return `${cx}_${cy}`;
  }

  insert(entity: SpatialEntity): void {
    const key = this.getCellKey(entity.x, entity.y);
    if (!this.cells.has(key)) {
      this.cells.set(key, new Set());
    }
    this.cells.get(key)!.add(entity.id);
    this.entityPositions.set(entity.id, { cellKey: key, entity });
  }

  remove(id: number): void {
    const record = this.entityPositions.get(id);
    if (record) {
      this.cells.get(record.cellKey)?.delete(id);
      this.entityPositions.delete(id);
    }
  }

  queryCircle(cx: number, cy: number, radius: number): SpatialEntity[] {
    const results: SpatialEntity[] = [];
    const rSq = radius * radius;
    const minX = Math.floor((cx - radius) / this.cellSize);
    const maxX = Math.floor((cx + radius) / this.cellSize);
    const minY = Math.floor((cy - radius) / this.cellSize);
    const maxY = Math.floor((cy + radius) / this.cellSize);

    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        const key = `${x}_${y}`;
        const cell = this.cells.get(key);
        if (cell) {
          for (const id of cell) {
            const ent = this.entityPositions.get(id)?.entity;
            if (ent) {
              const dx = ent.x - cx;
              const dy = ent.y - cy;
              if (dx * dx + dy * dy <= rSq) {
                results.push(ent);
              }
            }
          }
        }
      }
    }
    return results;
  }
}

export class BallisticsSimulationEngine {
  private grid: SpatialHashGrid = new SpatialHashGrid(64);
  getGrid(): SpatialHashGrid { return this.grid; }

  simulateTrajectoryPass_1(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_2(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_3(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_4(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_5(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_6(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_7(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_8(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_9(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_10(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_11(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_12(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_13(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_14(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_15(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_16(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_17(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_18(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_19(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_20(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_21(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_22(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_23(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_24(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_25(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_26(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_27(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_28(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_29(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_30(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_31(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_32(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_33(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_34(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_35(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_36(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_37(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_38(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_39(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_40(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_41(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_42(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_43(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_44(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_45(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_46(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_47(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_48(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_49(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_50(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_51(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_52(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_53(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_54(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_55(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_56(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_57(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_58(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_59(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

  simulateTrajectoryPass_60(startX: number, startY: number, targetX: number, targetY: number, speed: number, gravity: number = 0): { path: { x: number; y: number }[]; hitTime: number } {
    const dx = targetX - startX;
    const dy = targetY - startY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const hitTime = dist / Math.max(1, speed);
    const steps = 10;
    const path: { x: number; y: number }[] = [];
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const x = startX + dx * t;
      const y = startY + dy * t + 0.5 * gravity * t * t;
      path.push({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 });
    }
    return { path, hitTime };
  }

}