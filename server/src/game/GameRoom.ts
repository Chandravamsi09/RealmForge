import {
  World,
  FixedStepLoop,
  GameMap,
  FOREST_CROSSING_MAP,
  WaveSpawnerSystem,
  EnemyMovementSystem,
  TowerTargetingSystem,
  ProjectileSystem,
  BuffSystem,
  StateHasher,
  PlayerAction,
  ActionType,
  PlaceTowerAction,
  UpgradeTowerAction,
  SellTowerAction,
  SetTargetPriorityAction,
  TOWER_DEFINITIONS,
  calculateSellRefund,
  AStarPathfinder,
  ComponentType,
  TowerComponent,
  TransformComponent,
  PlayerSession,
  GameMode,
  RoomStatus,
  AuthoritativeTickSnapshot,
  SerializedEntitySnapshot,
} from '@realmforge/shared';
import { Server as SocketIOServer } from 'socket.io';

export class GameRoom {
  public readonly roomId: string;
  public readonly mode: GameMode;
  public readonly map: GameMap;
  public status: RoomStatus = RoomStatus.LOBBY;
  public players: Map<string, PlayerSession> = new Map(); // socketId -> session
  public world: World;
  public gameLoop: FixedStepLoop;
  public spawnerSystem: WaveSpawnerSystem;

  private actionQueue: PlayerAction[] = [];
  private eventBuffer: Array<{ type: string; payload: any }> = [];
  private io?: SocketIOServer;

  constructor(roomId: string, mode: GameMode = GameMode.SOLO, io?: SocketIOServer) {
    this.roomId = roomId;
    this.mode = mode;
    this.io = io;

    this.map = new GameMap(FOREST_CROSSING_MAP);
    this.world = new World();

    // Register Systems
    this.spawnerSystem = new WaveSpawnerSystem(
      this.map.grid,
      this.map.spawns,
      this.map.nexuses,
      1,
    );

    this.world.addSystem(this.spawnerSystem);
    this.world.addSystem(new EnemyMovementSystem());
    this.world.addSystem(new TowerTargetingSystem());
    this.world.addSystem(new ProjectileSystem());
    this.world.addSystem(new BuffSystem());

    // Hook game events
    this.world.on('enemyKilled', payload => {
      this.eventBuffer.push({ type: 'ENEMY_KILLED', payload });
      // Award bounty gold to all co-op players
      if (payload.bountyGold) {
        for (const player of this.players.values()) {
          player.gold += payload.bountyGold;
          player.score += payload.bountyXp || 10;
          player.enemiesKilled++;
        }
      }
    });

    this.world.on('waveCompleted', payload => {
      this.eventBuffer.push({ type: 'WAVE_COMPLETED', payload });
      if (payload.bonusGold) {
        for (const player of this.players.values()) {
          player.gold += payload.bonusGold;
        }
      }
    });

    this.world.on('nexusDamaged', payload => {
      this.eventBuffer.push({ type: 'NEXUS_DAMAGED', payload });
      for (const player of this.players.values()) {
        player.health = Math.max(0, player.health - (payload.damage || 1));
      }
    });

    this.world.on('enemyDamaged', payload => {
      this.eventBuffer.push({ type: 'ENEMY_DAMAGED', payload });
    });

    this.gameLoop = new FixedStepLoop(this.world, 20, () => this.onTick());
  }

  addPlayer(player: {
    userId: string;
    socketId: string;
    username: string;
    avatar?: string;
    isHost?: boolean;
  }): PlayerSession {
    const session: PlayerSession = {
      userId: player.userId,
      socketId: player.socketId,
      username: player.username,
      avatar: player.avatar || 'default_avatar',
      isHost: player.isHost || this.players.size === 0,
      isReady: false,
      team: 1,
      gold: 450,
      health: 20,
      score: 0,
      towersPlaced: 0,
      enemiesKilled: 0,
      damageDealt: 0,
    };

    this.players.set(player.socketId, session);
    return session;
  }

  removePlayer(socketId: string): void {
    this.players.delete(socketId);
    if (this.players.size === 0) {
      this.stop();
    }
  }

  setPlayerReady(socketId: string, ready: boolean): boolean {
    const player = this.players.get(socketId);
    if (!player) return false;
    player.isReady = ready;

    // Check if all players ready
    const allReady = Array.from(this.players.values()).every(p => p.isReady);
    if (allReady && this.status === RoomStatus.LOBBY) {
      this.start();
    }
    return true;
  }

  start(): void {
    if (this.status === RoomStatus.IN_PROGRESS) return;
    this.status = RoomStatus.IN_PROGRESS;
    this.spawnerSystem.startNextWave();
    this.gameLoop.start();

    if (this.io) {
      this.io.to(this.roomId).emit('game_started', {
        roomId: this.roomId,
        wave: this.spawnerSystem.currentWaveIndex,
      });
    }
  }

  stop(): void {
    this.status = RoomStatus.FINISHED;
    this.gameLoop.stop();
  }

  enqueueAction(action: PlayerAction): void {
    this.actionQueue.push(action);
  }

  private onTick(): void {
    // 1. Process all queued player actions for this tick
    while (this.actionQueue.length > 0) {
      const action = this.actionQueue.shift()!;
      this.processAction(action);
    }

    // 2. Generate tick snapshot
    const snapshot = this.generateSnapshot();

    // 3. Broadcast snapshot to room
    if (this.io) {
      this.io.to(this.roomId).emit('tick_snapshot', snapshot);
    }

    // 4. Clear tick event buffer
    this.eventBuffer = [];
  }

  public processAction(action: PlayerAction): boolean {
    const player = Array.from(this.players.values()).find(p => p.userId === action.playerId);
    if (!player) return false;

    switch (action.type) {
      case ActionType.PLACE_TOWER:
        return this.handlePlaceTower(player, action as PlaceTowerAction);

      case ActionType.UPGRADE_TOWER:
        return this.handleUpgradeTower(player, action as UpgradeTowerAction);

      case ActionType.SELL_TOWER:
        return this.handleSellTower(player, action as SellTowerAction);

      case ActionType.SET_TARGET_PRIORITY:
        return this.handleSetTargetPriority(action as SetTargetPriorityAction);

      default:
        return false;
    }
  }

  private handlePlaceTower(player: PlayerSession, action: PlaceTowerAction): boolean {
    const config = TOWER_DEFINITIONS[action.towerType];
    if (!config) return false;

    // Check gold
    if (player.gold < config.baseCost) return false;

    // Check grid bounds & buildability
    const tile = this.map.grid.getTile(action.gridX, action.gridY);
    if (!tile || !tile.buildable || tile.towerEntityId !== null) return false;

    // Anti-blocking path validation
    const canPlace = AStarPathfinder.canPlaceTowerWithoutBlocking(
      this.map.grid,
      action.gridX,
      action.gridY,
      this.map.spawns,
      this.map.nexuses,
    );
    if (!canPlace) return false;

    // Deduct gold
    player.gold -= config.baseCost;
    player.towersPlaced++;

    // Create Tower Entity in World
    const entityId = this.world.createEntity();
    const worldPos = this.map.grid.gridToWorld(action.gridX, action.gridY);

    this.world.addComponent(entityId, {
      type: ComponentType.TRANSFORM,
      x: worldPos.x,
      y: worldPos.y,
      rotation: 0,
    } as TransformComponent);

    const towerComponent: TowerComponent = {
      type: ComponentType.TOWER,
      ownerId: player.userId,
      towerType: action.towerType,
      tier: 1,
      level: 1,
      range: config.baseRange,
      damage: config.baseDamage,
      damageType: config.damageType,
      fireRate: config.baseFireRate,
      attackCooldown: 0,
      targetPriority: config.baseEffects.length > 0 ? (action as any).priority || 'FIRST' : 'FIRST',
      targetEntityId: null,
      kills: 0,
      totalDamageDealt: 0,
      gridX: action.gridX,
      gridY: action.gridY,
    };

    this.world.addComponent(entityId, towerComponent);
    this.map.grid.placeTower(action.gridX, action.gridY, entityId);

    this.eventBuffer.push({
      type: 'TOWER_PLACED',
      payload: {
        entityId,
        playerId: player.userId,
        towerType: action.towerType,
        gridX: action.gridX,
        gridY: action.gridY,
      },
    });

    return true;
  }

  private handleUpgradeTower(player: PlayerSession, action: UpgradeTowerAction): boolean {
    const tower = this.world.towers.get(action.entityId);
    if (!tower || tower.ownerId !== player.userId) return false;

    const config = TOWER_DEFINITIONS[tower.towerType];
    let upgradeNode = null;

    if (tower.tier === 1) {
      upgradeNode = config.upgrades.tier2;
    } else if (tower.tier === 2) {
      upgradeNode = action.upgradePathIndex === 2 ? config.upgrades.tier3BranchB : config.upgrades.tier3BranchA;
    } else if (tower.tier === 3) {
      upgradeNode = action.upgradePathIndex === 2 ? config.upgrades.tier4B : config.upgrades.tier4A;
    }

    if (!upgradeNode || player.gold < upgradeNode.cost) return false;

    player.gold -= upgradeNode.cost;
    tower.tier = upgradeNode.tier;
    tower.damage = upgradeNode.damage;
    tower.range = upgradeNode.range;
    tower.fireRate = upgradeNode.fireRate;
    tower.level++;

    this.eventBuffer.push({
      type: 'TOWER_UPGRADED',
      payload: {
        entityId: action.entityId,
        tier: tower.tier,
        damage: tower.damage,
        range: tower.range,
      },
    });

    return true;
  }

  private handleSellTower(player: PlayerSession, action: SellTowerAction): boolean {
    const tower = this.world.towers.get(action.entityId);
    if (!tower || tower.ownerId !== player.userId) return false;

    const config = TOWER_DEFINITIONS[tower.towerType];
    const totalInvested = config.baseCost; // Base estimate
    const refund = calculateSellRefund(totalInvested);

    player.gold += refund;
    this.map.grid.removeTower(tower.gridX, tower.gridY);
    this.world.destroyEntity(action.entityId);

    this.eventBuffer.push({
      type: 'TOWER_SOLD',
      payload: {
        entityId: action.entityId,
        refund,
      },
    });

    return true;
  }

  private handleSetTargetPriority(action: SetTargetPriorityAction): boolean {
    const tower = this.world.towers.get(action.entityId);
    if (!tower) return false;
    tower.targetPriority = action.priority;
    return true;
  }

  public generateSnapshot(): AuthoritativeTickSnapshot {
    const entities: SerializedEntitySnapshot[] = [];

    for (const id of this.world.getEntities()) {
      const transform = this.world.transforms.get(id);
      const velocity = this.world.velocities.get(id);
      const health = this.world.healths.get(id);
      const tower = this.world.towers.get(id);
      const enemy = this.world.enemies.get(id);

      entities.push({
        id,
        mask: 0,
        transform: transform ? { x: transform.x, y: transform.y, rotation: transform.rotation } : undefined,
        velocity: velocity ? { vx: velocity.vx, vy: velocity.vy } : undefined,
        health: health ? { current: health.current, max: health.max, shield: health.shield } : undefined,
        tower: tower ? { type: tower.towerType, tier: tower.tier, level: tower.level, range: tower.range, targetId: tower.targetEntityId } : undefined,
        enemy: enemy ? { type: enemy.enemyType, wave: enemy.waveNumber, armor: enemy.armor } : undefined,
      });
    }

    return {
      tick: this.world.currentTick,
      timestamp: Date.now(),
      stateChecksum: StateHasher.hashWorld(this.world),
      entities,
      events: [...this.eventBuffer],
    };
  }
}
