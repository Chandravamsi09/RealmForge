import {
  TileGrid,
  TileType,
  AStarPathfinder,
  GameMap,
  FOREST_CROSSING_MAP,
} from '@realmforge/shared';

describe('Map & Pathfinding: A* Pathfinder', () => {
  it('should find the shortest direct path on an open grid', () => {
    const grid = new TileGrid(10, 10);
    const start = { x: 0, y: 0 };
    const goal = { x: 4, y: 0 };

    const path = AStarPathfinder.findPath(grid, start, goal);
    expect(path).not.toBeNull();
    expect(path?.length).toBe(5);
    expect(path?.[0]).toEqual(start);
    expect(path?.[path!.length - 1]).toEqual(goal);
  });

  it('should navigate around solid obstacles correctly', () => {
    const grid = new TileGrid(5, 5);
    // Place a vertical wall at x=2, y=0..3
    for (let y = 0; y < 4; y++) {
      grid.setTileType(2, y, TileType.OBSTACLE);
    }

    const start = { x: 0, y: 0 };
    const goal = { x: 4, y: 0 };

    const path = AStarPathfinder.findPath(grid, start, goal);
    expect(path).not.toBeNull();

    // Must navigate through the opening at y=4
    const goesThroughOpening = path?.some(p => p.x === 2 && p.y === 4);
    expect(goesThroughOpening).toBe(true);
  });

  it('should return null when goal is completely unreachable', () => {
    const grid = new TileGrid(5, 5);
    // Fully wall off the goal at (4,4)
    grid.setTileType(3, 4, TileType.OBSTACLE);
    grid.setTileType(4, 3, TileType.OBSTACLE);

    const start = { x: 0, y: 0 };
    const goal = { x: 4, y: 4 };

    const path = AStarPathfinder.findPath(grid, start, goal);
    expect(path).toBeNull();
  });

  it('should find path on loaded built-in GameMap', () => {
    const map = new GameMap(FOREST_CROSSING_MAP);
    const spawn = map.spawns[0]!;
    const nexus = map.nexuses[0]!;

    const path = AStarPathfinder.findPath(map.grid, spawn, nexus);
    expect(path).not.toBeNull();
    expect(path![0]).toEqual(spawn);
    expect(path![path!.length - 1]).toEqual(nexus);
  });

  it('should prevent tower placement that blocks the only remaining path', () => {
    const grid = new TileGrid(5, 3);
    // Create single corridor at y=1
    for (let x = 0; x < 5; x++) {
      grid.setTileType(x, 0, TileType.OBSTACLE);
      grid.setTileType(x, 2, TileType.OBSTACLE);
    }

    const spawns = [{ x: 0, y: 1 }];
    const nexuses = [{ x: 4, y: 1 }];

    // Placing tower in the corridor at (2,1) would block the only path
    const canPlace = AStarPathfinder.canPlaceTowerWithoutBlocking(grid, 2, 1, spawns, nexuses);
    expect(canPlace).toBe(false);
  });
});
