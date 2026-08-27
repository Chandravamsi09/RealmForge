import { TileGrid, TileType } from '@realmforge/shared';

describe('Map System: TileGrid', () => {
  let grid: TileGrid;

  beforeEach(() => {
    grid = new TileGrid(10, 10, 32);
  });

  it('should initialize with correct dimensions and default buildable tiles', () => {
    expect(grid.width).toBe(10);
    expect(grid.height).toBe(10);
    expect(grid.tileSize).toBe(32);

    const tile = grid.getTile(0, 0);
    expect(tile).not.toBeNull();
    expect(tile?.type).toBe(TileType.BUILDABLE);
    expect(tile?.walkable).toBe(true);
    expect(tile?.buildable).toBe(true);
  });

  it('should correctly handle bounds and invalid queries', () => {
    expect(grid.isInBounds(0, 0)).toBe(true);
    expect(grid.isInBounds(9, 9)).toBe(true);
    expect(grid.isInBounds(-1, 0)).toBe(false);
    expect(grid.isInBounds(10, 5)).toBe(false);
    expect(grid.getTile(-1, -1)).toBeNull();
  });

  it('should place and remove towers correctly', () => {
    const placed = grid.placeTower(3, 4, 101);
    expect(placed).toBe(true);

    const tile = grid.getTile(3, 4)!;
    expect(tile.towerEntityId).toBe(101);
    expect(tile.walkable).toBe(false);
    expect(tile.buildable).toBe(false);

    // Cannot place second tower on same tile
    const placedAgain = grid.placeTower(3, 4, 102);
    expect(placedAgain).toBe(false);

    // Remove tower
    const removed = grid.removeTower(3, 4);
    expect(removed).toBe(true);
    expect(tile.towerEntityId).toBeNull();
    expect(tile.walkable).toBe(true);
    expect(tile.buildable).toBe(true);
  });

  it('should convert coordinates between world and grid spaces', () => {
    const gridPos = grid.worldToGrid(65, 98);
    expect(gridPos).toEqual({ x: 2, y: 3 });

    const worldPos = grid.gridToWorld(2, 3);
    expect(worldPos).toEqual({ x: 80, y: 112 }); // Center of tile 2,3 (2*32+16, 3*32+16)
  });
});
