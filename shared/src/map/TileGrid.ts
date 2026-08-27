export enum TileType {
  EMPTY = 'EMPTY',
  PATH = 'PATH',
  OBSTACLE = 'OBSTACLE',
  BUILDABLE = 'BUILDABLE',
  SPAWN_POINT = 'SPAWN_POINT',
  NEXUS_BASE = 'NEXUS_BASE',
  WATER = 'WATER',
  ELEVATED_CLIFF = 'ELEVATED_CLIFF',
}

export interface GridPoint {
  x: number;
  y: number;
}

export interface TileNode {
  x: number;
  y: number;
  type: TileType;
  walkable: boolean;
  buildable: boolean;
  cost: number; // Movement cost weight
  towerEntityId: number | null;
}

export class TileGrid {
  public readonly width: number;
  public readonly height: number;
  public readonly tileSize: number;
  private grid: TileNode[][];

  constructor(width: number, height: number, tileSize: number = 32) {
    this.width = width;
    this.height = height;
    this.tileSize = tileSize;
    this.grid = [];

    this.initEmptyGrid();
  }

  private initEmptyGrid(): void {
    this.grid = [];
    for (let y = 0; y < this.height; y++) {
      const row: TileNode[] = [];
      for (let x = 0; x < this.width; x++) {
        row.push({
          x,
          y,
          type: TileType.BUILDABLE,
          walkable: true,
          buildable: true,
          cost: 1.0,
          towerEntityId: null,
        });
      }
      this.grid.push(row);
    }
  }

  isInBounds(x: number, y: number): boolean {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  getTile(x: number, y: number): TileNode | null {
    if (!this.isInBounds(x, y)) return null;
    return this.grid[y]![x]!;
  }

  setTileType(x: number, y: number, type: TileType): boolean {
    const tile = this.getTile(x, y);
    if (!tile) return false;

    tile.type = type;
    switch (type) {
      case TileType.PATH:
        tile.walkable = true;
        tile.buildable = false;
        tile.cost = 1.0;
        break;
      case TileType.BUILDABLE:
        tile.walkable = true;
        tile.buildable = true;
        tile.cost = 1.0;
        break;
      case TileType.OBSTACLE:
      case TileType.WATER:
      case TileType.ELEVATED_CLIFF:
        tile.walkable = false;
        tile.buildable = false;
        tile.cost = Infinity;
        break;
      case TileType.SPAWN_POINT:
      case TileType.NEXUS_BASE:
        tile.walkable = true;
        tile.buildable = false;
        tile.cost = 1.0;
        break;
      case TileType.EMPTY:
        tile.walkable = false;
        tile.buildable = false;
        tile.cost = Infinity;
        break;
    }
    return true;
  }

  placeTower(x: number, y: number, towerEntityId: number): boolean {
    const tile = this.getTile(x, y);
    if (!tile || !tile.buildable || tile.towerEntityId !== null) {
      return false;
    }

    tile.towerEntityId = towerEntityId;
    tile.walkable = false;
    tile.buildable = false;
    return true;
  }

  removeTower(x: number, y: number): boolean {
    const tile = this.getTile(x, y);
    if (!tile || tile.towerEntityId === null) {
      return false;
    }

    tile.towerEntityId = null;
    tile.walkable = true;
    tile.buildable = true;
    return true;
  }

  getNeighbors(x: number, y: number, allowDiagonals: boolean = false): TileNode[] {
    const neighbors: TileNode[] = [];
    const cardinalOffsets = [
      { dx: 0, dy: -1 }, // North
      { dx: 1, dy: 0 },  // East
      { dx: 0, dy: 1 },  // South
      { dx: -1, dy: 0 }, // West
    ];

    for (const offset of cardinalOffsets) {
      const nx = x + offset.dx;
      const ny = y + offset.dy;
      const tile = this.getTile(nx, ny);
      if (tile) {
        neighbors.push(tile);
      }
    }

    if (allowDiagonals) {
      const diagonalOffsets = [
        { dx: 1, dy: -1, c1: { dx: 1, dy: 0 }, c2: { dx: 0, dy: -1 } },
        { dx: 1, dy: 1, c1: { dx: 1, dy: 0 }, c2: { dx: 0, dy: 1 } },
        { dx: -1, dy: 1, c1: { dx: -1, dy: 0 }, c2: { dx: 0, dy: 1 } },
        { dx: -1, dy: -1, c1: { dx: -1, dy: 0 }, c2: { dx: 0, dy: -1 } },
      ];

      for (const diag of diagonalOffsets) {
        const nx = x + diag.dx;
        const ny = y + diag.dy;
        const tile = this.getTile(nx, ny);
        const adj1 = this.getTile(x + diag.c1.dx, y + diag.c1.dy);
        const adj2 = this.getTile(x + diag.c2.dx, y + diag.c2.dy);

        // Prevent corner-cutting through walls
        if (tile && adj1 && adj2 && adj1.walkable && adj2.walkable) {
          neighbors.push(tile);
        }
      }
    }

    return neighbors;
  }

  worldToGrid(worldX: number, worldY: number): GridPoint {
    return {
      x: Math.floor(worldX / this.tileSize),
      y: Math.floor(worldY / this.tileSize),
    };
  }

  gridToWorld(gridX: number, gridY: number): { x: number; y: number } {
    return {
      x: gridX * this.tileSize + this.tileSize / 2,
      y: gridY * this.tileSize + this.tileSize / 2,
    };
  }
}
