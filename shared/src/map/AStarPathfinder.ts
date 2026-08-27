import { TileGrid, GridPoint } from './TileGrid';

interface PriorityQueueItem<T> {
  element: T;
  priority: number;
}

class MinPriorityQueue<T> {
  private heap: PriorityQueueItem<T>[] = [];

  push(element: T, priority: number): void {
    this.heap.push({ element, priority });
    this.bubbleUp(this.heap.length - 1);
  }

  pop(): T | undefined {
    if (this.heap.length === 0) return undefined;
    const top = this.heap[0]!.element;
    const bottom = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = bottom;
      this.bubbleDown(0);
    }
    return top;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  private bubbleUp(index: number): void {
    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      if (this.heap[index]!.priority < this.heap[parentIdx]!.priority) {
        const temp = this.heap[index]!;
        this.heap[index] = this.heap[parentIdx]!;
        this.heap[parentIdx] = temp;
        index = parentIdx;
      } else {
        break;
      }
    }
  }

  private bubbleDown(index: number): void {
    const length = this.heap.length;
    while (true) {
      const leftIdx = 2 * index + 1;
      const rightIdx = 2 * index + 2;
      let smallest = index;

      if (leftIdx < length && this.heap[leftIdx]!.priority < this.heap[smallest]!.priority) {
        smallest = leftIdx;
      }
      if (rightIdx < length && this.heap[rightIdx]!.priority < this.heap[smallest]!.priority) {
        smallest = rightIdx;
      }

      if (smallest !== index) {
        const temp = this.heap[index]!;
        this.heap[index] = this.heap[smallest]!;
        this.heap[smallest] = temp;
        index = smallest;
      } else {
        break;
      }
    }
  }
}

export class AStarPathfinder {
  public static heuristic(p1: GridPoint, p2: GridPoint): number {
    // Manhattan distance
    return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
  }

  public static euclideanHeuristic(p1: GridPoint, p2: GridPoint): number {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * Finds the shortest walkable path from start to goal on the given TileGrid.
   */
  public static findPath(
    grid: TileGrid,
    start: GridPoint,
    goal: GridPoint,
    allowDiagonals: boolean = false,
  ): GridPoint[] | null {
    if (!grid.isInBounds(start.x, start.y) || !grid.isInBounds(goal.x, goal.y)) {
      return null;
    }

    const startTile = grid.getTile(start.x, start.y);
    const goalTile = grid.getTile(goal.x, goal.y);

    if (!startTile || !goalTile || !startTile.walkable || !goalTile.walkable) {
      return null;
    }

    if (start.x === goal.x && start.y === goal.y) {
      return [start];
    }

    const key = (x: number, y: number) => `${x},${y}`;
    const openSet = new MinPriorityQueue<GridPoint>();
    const cameFrom = new Map<string, GridPoint>();
    const gScore = new Map<string, number>();

    const startKey = key(start.x, start.y);
    gScore.set(startKey, 0);
    openSet.push(start, this.heuristic(start, goal));

    const closedSet = new Set<string>();

    while (!openSet.isEmpty()) {
      const current = openSet.pop()!;
      const currentKey = key(current.x, current.y);

      if (current.x === goal.x && current.y === goal.y) {
        return this.reconstructPath(cameFrom, current);
      }

      closedSet.add(currentKey);

      const neighbors = grid.getNeighbors(current.x, current.y, allowDiagonals);
      for (const neighbor of neighbors) {
        if (!neighbor.walkable) continue;

        const neighborKey = key(neighbor.x, neighbor.y);
        if (closedSet.has(neighborKey)) continue;

        const isDiagonal = current.x !== neighbor.x && current.y !== neighbor.y;
        const moveCost = isDiagonal ? 1.414 : 1.0;
        const tentativeGScore = (gScore.get(currentKey) || 0) + moveCost * neighbor.cost;

        if (tentativeGScore < (gScore.get(neighborKey) ?? Infinity)) {
          cameFrom.set(neighborKey, current);
          gScore.set(neighborKey, tentativeGScore);
          const fScore = tentativeGScore + this.heuristic({ x: neighbor.x, y: neighbor.y }, goal);
          openSet.push({ x: neighbor.x, y: neighbor.y }, fScore);
        }
      }
    }

    // No path found
    return null;
  }

  /**
   * Validates whether placing a tower at (gridX, gridY) would completely block any path
   * between spawns and nexuses.
   */
  public static canPlaceTowerWithoutBlocking(
    grid: TileGrid,
    gridX: number,
    gridY: number,
    spawns: GridPoint[],
    nexuses: GridPoint[],
  ): boolean {
    const tile = grid.getTile(gridX, gridY);
    if (!tile || !tile.buildable) return false;

    // Temporarily block
    tile.walkable = false;

    let allSpawnsCanReachNexus = true;
    for (const spawn of spawns) {
      let canReachAnyNexus = false;
      for (const nexus of nexuses) {
        const path = this.findPath(grid, spawn, nexus, false);
        if (path && path.length > 0) {
          canReachAnyNexus = true;
          break;
        }
      }

      if (!canReachAnyNexus) {
        allSpawnsCanReachNexus = false;
        break;
      }
    }

    // Revert temporary block
    tile.walkable = true;

    return allSpawnsCanReachNexus;
  }

  private static reconstructPath(cameFrom: Map<string, GridPoint>, current: GridPoint): GridPoint[] {
    const path: GridPoint[] = [current];
    const key = (x: number, y: number) => `${x},${y}`;
    let currKey = key(current.x, current.y);

    while (cameFrom.has(currKey)) {
      current = cameFrom.get(currKey)!;
      currKey = key(current.x, current.y);
      path.unshift(current);
    }

    return path;
  }
}
