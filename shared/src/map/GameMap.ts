import { TileGrid, TileType, GridPoint } from './TileGrid';

export interface MapDefinition {
  id: string;
  name: string;
  description: string;
  width: number;
  height: number;
  tileSize: number;
  spawns: GridPoint[];
  nexuses: GridPoint[];
  layout: string[]; // Character array representing tile types
}

export class GameMap {
  public readonly id: string;
  public readonly name: string;
  public readonly description: string;
  public readonly grid: TileGrid;
  public readonly spawns: GridPoint[];
  public readonly nexuses: GridPoint[];

  constructor(definition: MapDefinition) {
    this.id = definition.id;
    this.name = definition.name;
    this.description = definition.description;
    this.spawns = [...definition.spawns];
    this.nexuses = [...definition.nexuses];
    this.grid = new TileGrid(definition.width, definition.height, definition.tileSize);

    this.loadLayout(definition.layout);
  }

  private loadLayout(layout: string[]): void {
    for (let y = 0; y < layout.length && y < this.grid.height; y++) {
      const row = layout[y]!;
      for (let x = 0; x < row.length && x < this.grid.width; x++) {
        const char = row[x];
        switch (char) {
          case '.': // Buildable ground
            this.grid.setTileType(x, y, TileType.BUILDABLE);
            break;
          case '#': // Obstacle / mountain
            this.grid.setTileType(x, y, TileType.OBSTACLE);
            break;
          case 'P': // Path road
            this.grid.setTileType(x, y, TileType.PATH);
            break;
          case 'S': // Spawn point
            this.grid.setTileType(x, y, TileType.SPAWN_POINT);
            break;
          case 'N': // Nexus base
            this.grid.setTileType(x, y, TileType.NEXUS_BASE);
            break;
          case '~': // Water
            this.grid.setTileType(x, y, TileType.WATER);
            break;
          case '^': // Cliff
            this.grid.setTileType(x, y, TileType.ELEVATED_CLIFF);
            break;
          default:
            this.grid.setTileType(x, y, TileType.BUILDABLE);
        }
      }
    }

    // Ensure spawns and nexuses are marked correctly
    for (const spawn of this.spawns) {
      this.grid.setTileType(spawn.x, spawn.y, TileType.SPAWN_POINT);
    }
    for (const nexus of this.nexuses) {
      this.grid.setTileType(nexus.x, nexus.y, TileType.NEXUS_BASE);
    }
  }
}

/**
 * Built-in standard map templates
 */
export const FOREST_CROSSING_MAP: MapDefinition = {
  id: 'forest_crossing',
  name: 'Forest Crossing',
  description: 'A winding trail through an ancient enchanted forest with dual choke points.',
  width: 16,
  height: 12,
  tileSize: 32,
  spawns: [{ x: 0, y: 5 }],
  nexuses: [{ x: 15, y: 5 }],
  layout: [
    '################',
    '#..............#',
    '#..###....###..#',
    '#..#........#..#',
    '#..#..####..#..#',
    'S..#..#..#..#..N',
    '#..#..####..#..#',
    '#..#........#..#',
    '#..###....###..#',
    '#..............#',
    '#..............#',
    '################',
  ],
};

export const VOLCANIC_RIFT_MAP: MapDefinition = {
  id: 'volcanic_rift',
  name: 'Volcanic Rift',
  description: 'Dual lane volcanic plateau surrounded by molten lava hazards.',
  width: 20,
  height: 14,
  tileSize: 32,
  spawns: [{ x: 0, y: 3 }, { x: 0, y: 10 }],
  nexuses: [{ x: 19, y: 6 }],
  layout: [
    '####################',
    '#...~~~~~~~~~~~~...#',
    '#..#............#..#',
    'S..#..########..#..#',
    '#..#..#......#..#..#',
    '#..#..#..~~..#..#..#',
    '#........~~........N',
    '#..#..#..~~..#..#..#',
    '#..#..#......#..#..#',
    '#..#..########..#..#',
    'S..#............#..#',
    '#..#~~~~~~~~~~~~#..#',
    '#..................#',
    '####################',
  ],
};
