import Phaser from 'phaser';
import {
  AuthoritativeTickSnapshot,
  GameMap,
  FOREST_CROSSING_MAP,
  TileType,
  TowerType,
  TOWER_DEFINITIONS,
} from '@realmforge/shared';

export class MainGameScene extends Phaser.Scene {
  private map: GameMap;
  private mapGridTiles: Phaser.GameObjects.Sprite[][] = [];
  private entitySprites: Map<number, Phaser.GameObjects.Sprite> = new Map();
  private healthBars: Map<number, Phaser.GameObjects.Graphics> = new Map();

  public selectedTowerToBuild: TowerType | null = null;
  public selectedEntityId: number | null = null;
  public isMeteorTargetingMode: boolean = false;

  public onSelectEntity?: (entityId: number | null) => void;
  public onPlaceTowerRequest?: (gridX: number, gridY: number, towerType: TowerType) => void;
  public onTriggerSpecialAbility?: (abilityId: string, targetX?: number, targetY?: number) => void;

  private hoverGraphics!: Phaser.GameObjects.Graphics;
  private rangeIndicator!: Phaser.GameObjects.Graphics;
  private abilityIndicator!: Phaser.GameObjects.Graphics;

  constructor() {
    super('MainGameScene');
    this.map = new GameMap(FOREST_CROSSING_MAP);
  }

  create(): void {
    this.renderMap();

    this.hoverGraphics = this.add.graphics();
    this.rangeIndicator = this.add.graphics();
    this.abilityIndicator = this.add.graphics();

    this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
      this.handlePointerMove(pointer);
    });

    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      this.handlePointerDown(pointer);
    });

    // Right-click or ESC to cancel modes
    this.input.mouse?.disableContextMenu();
  }

  private renderMap(): void {
    const grid = this.map.grid;
    this.mapGridTiles = [];

    for (let y = 0; y < grid.height; y++) {
      const row: Phaser.GameObjects.Sprite[] = [];
      for (let x = 0; x < grid.width; x++) {
        const tile = grid.getTile(x, y);
        let texture = 'tile_ground';

        if (tile?.type === TileType.PATH) texture = 'tile_path';
        else if (tile?.type === TileType.OBSTACLE) texture = 'tile_obstacle';
        else if (tile?.type === TileType.SPAWN_POINT) texture = 'tile_spawn';
        else if (tile?.type === TileType.NEXUS_BASE) texture = 'tile_nexus';

        const sprite = this.add.sprite(x * 32 + 16, y * 32 + 16, texture);
        row.push(sprite);
      }
      this.mapGridTiles.push(row);
    }
  }

  private handlePointerMove(pointer: Phaser.Input.Pointer): void {
    this.hoverGraphics.clear();
    this.rangeIndicator.clear();
    this.abilityIndicator.clear();

    // 1. Meteor Targeting Mode Indicator
    if (this.isMeteorTargetingMode) {
      this.abilityIndicator.fillStyle(0xf97316, 0.25);
      this.abilityIndicator.fillCircle(pointer.worldX, pointer.worldY, 120);
      this.abilityIndicator.lineStyle(2, 0xf97316, 0.9);
      this.abilityIndicator.strokeCircle(pointer.worldX, pointer.worldY, 120);
      return;
    }

    const gridPos = this.map.grid.worldToGrid(pointer.worldX, pointer.worldY);
    if (!this.map.grid.isInBounds(gridPos.x, gridPos.y)) return;

    // 2. Tower Placement Hover Indicator
    const tile = this.map.grid.getTile(gridPos.x, gridPos.y);
    const isValidBuild = this.selectedTowerToBuild && tile?.buildable && tile.towerEntityId === null;

    this.hoverGraphics.lineStyle(2, isValidBuild ? 0x10b981 : 0xef4444, 0.8);
    this.hoverGraphics.strokeRect(gridPos.x * 32, gridPos.y * 32, 32, 32);

    if (this.selectedTowerToBuild) {
      const config = TOWER_DEFINITIONS[this.selectedTowerToBuild];
      if (config) {
        this.rangeIndicator.fillStyle(isValidBuild ? 0x10b981 : 0xef4444, 0.15);
        this.rangeIndicator.fillCircle(gridPos.x * 32 + 16, gridPos.y * 32 + 16, config.baseRange);
        this.rangeIndicator.lineStyle(1, isValidBuild ? 0x10b981 : 0xef4444, 0.6);
        this.rangeIndicator.strokeCircle(gridPos.x * 32 + 16, gridPos.y * 32 + 16, config.baseRange);
      }
    }
  }

  private handlePointerDown(pointer: Phaser.Input.Pointer): void {
    // Right-click: Cancel placement or ability mode
    if (pointer.rightButtonDown()) {
      this.isMeteorTargetingMode = false;
      this.selectedTowerToBuild = null;
      if (this.onSelectEntity) this.onSelectEntity(null);
      return;
    }

    // 1. Meteor Ability Trigger
    if (this.isMeteorTargetingMode) {
      if (this.onTriggerSpecialAbility) {
        this.onTriggerSpecialAbility('METEOR_STRIKE', pointer.worldX, pointer.worldY);
      }
      this.isMeteorTargetingMode = false;
      this.abilityIndicator.clear();
      return;
    }

    const gridPos = this.map.grid.worldToGrid(pointer.worldX, pointer.worldY);
    if (!this.map.grid.isInBounds(gridPos.x, gridPos.y)) return;

    const tile = this.map.grid.getTile(gridPos.x, gridPos.y);

    // 2. Tower Placement
    if (this.selectedTowerToBuild) {
      if (tile?.buildable && tile.towerEntityId === null) {
        if (this.onPlaceTowerRequest) {
          this.onPlaceTowerRequest(gridPos.x, gridPos.y, this.selectedTowerToBuild);
        }
      }
    } else if (tile?.towerEntityId) {
      this.selectedEntityId = tile.towerEntityId;
      if (this.onSelectEntity) {
        this.onSelectEntity(tile.towerEntityId);
      }
    } else {
      this.selectedEntityId = null;
      if (this.onSelectEntity) {
        this.onSelectEntity(null);
      }
    }
  }

  public updateFromSnapshot(snapshot: AuthoritativeTickSnapshot): void {
    const activeIds = new Set<number>();

    for (const ent of snapshot.entities) {
      activeIds.add(ent.id);

      if (ent.transform) {
        let sprite = this.entitySprites.get(ent.id);

        if (!sprite) {
          let texture = 'projectile_default';
          if (ent.tower) texture = `tower_${ent.tower.type}`;
          else if (ent.enemy) texture = `enemy_${ent.enemy.type}` in this.textures.list ? `enemy_${ent.enemy.type}` : 'enemy_GOBLIN';

          sprite = this.add.sprite(ent.transform.x, ent.transform.y, texture);
          this.entitySprites.set(ent.id, sprite);
        }

        // Interpolate position
        sprite.x = Phaser.Math.Linear(sprite.x, ent.transform.x, 0.6);
        sprite.y = Phaser.Math.Linear(sprite.y, ent.transform.y, 0.6);
        sprite.rotation = ent.transform.rotation || 0;

        // Render health bar
        if (ent.health) {
          let hb = this.healthBars.get(ent.id);
          if (!hb) {
            hb = this.add.graphics();
            this.healthBars.set(ent.id, hb);
          }
          hb.clear();

          const pct = Math.max(0, ent.health.current / ent.health.max);
          const barWidth = 24;
          const barHeight = 4;
          const barX = sprite.x - barWidth / 2;
          const barY = sprite.y - 18;

          hb.fillStyle(0x000000, 0.7);
          hb.fillRect(barX - 1, barY - 1, barWidth + 2, barHeight + 2);

          hb.fillStyle(pct > 0.5 ? 0x10b981 : pct > 0.25 ? 0xf59e0b : 0xef4444, 1.0);
          hb.fillRect(barX, barY, barWidth * pct, barHeight);
        }
      }
    }

    // Clean up destroyed entities
    for (const [id, sprite] of this.entitySprites.entries()) {
      if (!activeIds.has(id)) {
        sprite.destroy();
        this.entitySprites.delete(id);

        const hb = this.healthBars.get(id);
        if (hb) {
          hb.destroy();
          this.healthBars.delete(id);
        }
      }
    }

    // Process events (e.g. damage text, ability FX)
    for (const evt of snapshot.events) {
      if (evt.type === 'ENEMY_DAMAGED') {
        this.showCombatText(evt.payload.damage, evt.payload.enemyId);
      } else if (evt.type === 'ABILITY_TRIGGERED') {
        this.showAbilityFx(evt.payload);
      }
    }
  }

  private showCombatText(damage: number, enemyId: number): void {
    const sprite = this.entitySprites.get(enemyId);
    if (!sprite) return;

    const text = this.add.text(sprite.x, sprite.y - 10, `-${Math.round(damage)}`, {
      fontFamily: 'Arial',
      fontSize: '12px',
      color: '#ef4444',
      stroke: '#000000',
      strokeThickness: 2,
    });

    this.tweens.add({
      targets: text,
      y: sprite.y - 30,
      alpha: 0,
      duration: 600,
      ease: 'Power1',
      onComplete: () => text.destroy(),
    });
  }

  private showAbilityFx(payload: any): void {
    if (payload.abilityId === 'METEOR_STRIKE' && payload.targetX !== undefined) {
      const circle = this.add.circle(payload.targetX, payload.targetY, 120, 0xf97316, 0.4);
      this.tweens.add({
        targets: circle,
        alpha: 0,
        scale: 1.2,
        duration: 800,
        onComplete: () => circle.destroy(),
      });
    } else if (payload.abilityId === 'GLACIAL_BLIZZARD') {
      const flash = this.add.rectangle(256, 192, 512, 384, 0x38bdf8, 0.3);
      this.tweens.add({
        targets: flash,
        alpha: 0,
        duration: 1000,
        onComplete: () => flash.destroy(),
      });
    }
  }
}
