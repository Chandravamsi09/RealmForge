import { System, World } from '../engine/ecs/World';
import { ComponentType, TransformComponent, HealthComponent, EnemyComponent, PathFollowerComponent, Point2D } from '../engine/ecs/Components';
import { WaveGenerator, WaveDefinition } from './WaveGenerator';
import { WaveScaling } from './WaveScaling';
import { TileGrid } from '../map/TileGrid';
import { AStarPathfinder } from '../map/AStarPathfinder';

export enum WaveState {
  WAITING_TO_START = 'WAITING_TO_START',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  GAME_OVER = 'GAME_OVER',
}

interface QueuedSpawn {
  enemyType: any;
  spawnTimeMs: number;
}

export class WaveSpawnerSystem extends System {
  public currentWaveIndex: number = 0;
  public waveState: WaveState = WaveState.WAITING_TO_START;
  public prepTimerRemainingMs: number = 10000;
  public currentWaveDef: WaveDefinition | null = null;
  private queuedSpawns: QueuedSpawn[] = [];
  private waveElapsedTimeMs: number = 0;

  constructor(
    private grid: TileGrid,
    private spawns: Point2D[],
    private nexuses: Point2D[],
    private playerCount: number = 1,
  ) {
    super();
  }

  setPlayerCount(count: number): void {
    this.playerCount = Math.max(1, count);
  }

  startWaveEarly(): boolean {
    if (this.waveState === WaveState.WAITING_TO_START) {
      this.prepTimerRemainingMs = 0;
      this.startNextWave();
      return true;
    }
    return false;
  }

  startNextWave(): void {
    this.currentWaveIndex++;
    this.currentWaveDef = WaveGenerator.generateWave(this.currentWaveIndex);
    this.waveState = WaveState.IN_PROGRESS;
    this.waveElapsedTimeMs = 0;
    this.queuedSpawns = [];

    // Build flattened spawn queue
    let groupOffsetMs = 0;
    for (const group of this.currentWaveDef.groups) {
      groupOffsetMs += group.delayBeforeGroupMs;
      for (let i = 0; i < group.count; i++) {
        this.queuedSpawns.push({
          enemyType: group.enemyType,
          spawnTimeMs: groupOffsetMs + i * group.spawnIntervalMs,
        });
      }
    }

    this.prepTimerRemainingMs = 0;
  }

  update(world: World, deltaMs: number): void {
    if (this.waveState === WaveState.WAITING_TO_START) {
      this.prepTimerRemainingMs -= deltaMs;
      if (this.prepTimerRemainingMs <= 0) {
        this.startNextWave();
        world.emit('waveStarted', {
          waveNumber: this.currentWaveIndex,
          isBossWave: this.currentWaveDef?.isBossWave,
        });
      }
      return;
    }

    if (this.waveState === WaveState.IN_PROGRESS) {
      this.waveElapsedTimeMs += deltaMs;

      // Check and spawn ready enemies
      const remainingQueued: QueuedSpawn[] = [];
      for (const item of this.queuedSpawns) {
        if (item.spawnTimeMs <= this.waveElapsedTimeMs) {
          this.spawnEnemy(world, item.enemyType);
        } else {
          remainingQueued.push(item);
        }
      }
      this.queuedSpawns = remainingQueued;

      // Check if all spawned and all enemies destroyed
      const aliveEnemies = world.query(ComponentType.ENEMY | ComponentType.HEALTH);
      if (this.queuedSpawns.length === 0 && aliveEnemies.length === 0) {
        this.waveState = WaveState.COMPLETED;
        this.prepTimerRemainingMs = (this.currentWaveDef?.preparationTimeSec || 15) * 1000;

        world.emit('waveCompleted', {
          waveNumber: this.currentWaveIndex,
          bonusGold: this.currentWaveDef?.clearBonusGold || 50,
        });

        this.waveState = WaveState.WAITING_TO_START;
      }
    }
  }

  private spawnEnemy(world: World, enemyType: any): number | null {
    if (this.spawns.length === 0 || this.nexuses.length === 0) return null;

    const spawnPoint = this.spawns[0]!;
    const nexusPoint = this.nexuses[0]!;

    const scaledStats = WaveScaling.getScaledStats(
      enemyType,
      this.currentWaveIndex,
      this.playerCount,
    );

    // Compute path
    let waypoints: Point2D[] = [];
    if (scaledStats.isFlying) {
      // Direct aerial flight to nexus
      const spawnWorld = this.grid.gridToWorld(spawnPoint.x, spawnPoint.y);
      const nexusWorld = this.grid.gridToWorld(nexusPoint.x, nexusPoint.y);
      waypoints = [spawnWorld, nexusWorld];
    } else {
      const gridPath = AStarPathfinder.findPath(this.grid, spawnPoint, nexusPoint);
      if (gridPath && gridPath.length > 0) {
        waypoints = gridPath.map(p => this.grid.gridToWorld(p.x, p.y));
      } else {
        const spawnWorld = this.grid.gridToWorld(spawnPoint.x, spawnPoint.y);
        const nexusWorld = this.grid.gridToWorld(nexusPoint.x, nexusPoint.y);
        waypoints = [spawnWorld, nexusWorld];
      }
    }

    const entityId = world.createEntity();
    const startPos = waypoints[0] || this.grid.gridToWorld(spawnPoint.x, spawnPoint.y);

    world.addComponent(entityId, {
      type: ComponentType.TRANSFORM,
      x: startPos.x,
      y: startPos.y,
      rotation: 0,
    } as TransformComponent);

    world.addComponent(entityId, {
      type: ComponentType.HEALTH,
      current: scaledStats.health,
      max: scaledStats.health,
      shield: 0,
      regenRate: 0,
      isDead: false,
    } as HealthComponent);

    world.addComponent(entityId, {
      type: ComponentType.ENEMY,
      enemyType: scaledStats.type,
      waveNumber: this.currentWaveIndex,
      armor: scaledStats.armor,
      magicResist: scaledStats.magicResist,
      bountyGold: scaledStats.bountyGold,
      bountyXp: scaledStats.bountyXp,
      damageToNexus: scaledStats.damageToNexus,
      isFlying: scaledStats.isFlying,
      isBoss: scaledStats.type === 'BOSS_TITAN',
      speed: scaledStats.baseSpeed,
      reachedNexus: false,
    } as EnemyComponent);

    world.addComponent(entityId, {
      type: ComponentType.PATH_FOLLOWER,
      waypoints,
      currentWaypointIndex: 0,
      reachedEnd: false,
    } as PathFollowerComponent);

    world.emit('enemySpawned', {
      entityId,
      enemyType: scaledStats.type,
      wave: this.currentWaveIndex,
      health: scaledStats.health,
    });

    return entityId;
  }
}
