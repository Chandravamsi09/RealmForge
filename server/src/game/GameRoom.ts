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
  TriggerSpecialAbilityAction,
  VoteStartWaveAction,
  SendPvpCreepAction,
  SpecialAbilityType,
  SPECIAL_ABILITIES,
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
  DeterministicMath,
  DamageCalculator,
  DamageType,
  EnemyType,
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

  // Economy & Abilities tracking
  private playerAbilityCooldowns: Map<string, Map<string, number>> = new Map(); // userId -> abilityId -> readyTimestamp
  private flawlessStreak: Map<string, number> = new Map(); // userId -> streak count
  private passiveIncome: Map<string, number> = new Map(); // userId -> pvp passive income
  private nexusDamagedThisWave: boolean = false;

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
      // Award 100% shared bounty gold to all co-op players
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
      const bonusGold = payload.bonusGold || 50;

      for (const player of this.players.values()) {
        // 1. Wave Clear Bonus
        player.gold += bonusGold;

        // 2. 10% Compound Interest (capped at 50g max)
        const interest = Math.min(50, Math.floor(player.gold * 0.1));
        player.gold += interest;

        // 3. Flawless Streak Bonus (+15g per streak up to +75g max)
        if (!this.nexusDamagedThisWave) {
          const curStreak = (this.flawlessStreak.get(player.userId) || 0) + 1;
          this.flawlessStreak.set(player.userId, curStreak);
          const streakBonus = Math.min(75, curStreak * 15);
          player.gold += streakBonus;
        } else {
          this.flawlessStreak.set(player.userId, 0);
        }

        // 4. PvP Passive Income
        const pvpIncome = this.passiveIncome.get(player.userId) || 0;
        player.gold += pvpIncome;
      }

      this.nexusDamagedThisWave = false;
    });

    this.world.on('nexusDamaged', payload => {
      this.eventBuffer.push({ type: 'NEXUS_DAMAGED', payload });
      this.nexusDamagedThisWave = true;
      for (const player of this.players.values()) {
        player.health = Math.max(0, player.health - (payload.damage || 1));
        this.flawlessStreak.set(player.userId, 0);
        if (player.health <= 0) {
          this.stop();
        }
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
      health: 100,
      score: 0,
      towersPlaced: 0,
      enemiesKilled: 0,
      damageDealt: 0,
    };

    this.players.set(player.socketId, session);
    this.spawnerSystem.setPlayerCount(this.players.size);
    return session;
  }

  removePlayer(socketId: string): void {
    this.players.delete(socketId);
    this.spawnerSystem.setPlayerCount(Math.max(1, this.players.size));
    if (this.players.size === 0) {
      this.stop();
    }
  }

  setPlayerReady(socketId: string, ready: boolean): boolean {
    const player = this.players.get(socketId);
    if (!player) return false;
    player.isReady = ready;

    const allReady = Array.from(this.players.values()).every(p => p.isReady);
    if (allReady && this.status === RoomStatus.LOBBY) {
      this.start();
    }
    return true;
  }

  start(): void {
    if (this.status === RoomStatus.IN_PROGRESS) return;
    this.status = RoomStatus.IN_PROGRESS;
    this.spawnerSystem.setPlayerCount(this.players.size);
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
        return this.handleSetTargetPriority(player, action as SetTargetPriorityAction);

      case ActionType.TRIGGER_SPECIAL_ABILITY:
        return this.handleTriggerSpecialAbility(player, action as TriggerSpecialAbilityAction);

      case ActionType.VOTE_START_WAVE:
        return this.handleVoteStartWave(player, action as VoteStartWaveAction);

      case ActionType.SEND_PVP_CREEP:
        return this.handleSendPvpCreep(player, action as SendPvpCreepAction);

      case ActionType.TOGGLE_PAUSE:
        return this.handleTogglePause(player);

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
      targetPriority: (action as any).priority || 'FIRST',
      targetEntityId: null,
      kills: 0,
      totalDamageDealt: 0,
      gridX: action.gridX,
      gridY: action.gridY,
      totalInvestedGold: config.baseCost,
      splashRadius: config.splashRadius,
      chainCount: config.chainCount,
      chainDecay: config.chainDecay,
      effects: [...config.baseEffects],
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
      // Tier 1 -> Tier 2
      upgradeNode = config.upgrades.tier2;
    } else if (tower.tier === 2) {
      // Tier 2 -> Tier 3 Branch A or B
      if (action.upgradePathIndex === 2) {
        upgradeNode = config.upgrades.tier3BranchB;
        tower.branch = 'B';
      } else {
        upgradeNode = config.upgrades.tier3BranchA;
        tower.branch = 'A';
      }
    } else if (tower.tier === 3) {
      // Tier 3 -> Tier 4 (Strictly follow chosen branch)
      if (tower.branch === 'A') {
        if (action.upgradePathIndex === 2) return false; // Locked!
        upgradeNode = config.upgrades.tier4A;
      } else if (tower.branch === 'B') {
        if (action.upgradePathIndex === 1) return false; // Locked!
        upgradeNode = config.upgrades.tier4B;
      } else {
        upgradeNode = action.upgradePathIndex === 2 ? config.upgrades.tier4B : config.upgrades.tier4A;
        tower.branch = action.upgradePathIndex === 2 ? 'B' : 'A';
      }
    }

    if (!upgradeNode || player.gold < upgradeNode.cost) return false;

    player.gold -= upgradeNode.cost;
    tower.totalInvestedGold += upgradeNode.cost;
    tower.tier = upgradeNode.tier;
    tower.damage = upgradeNode.damage;
    tower.range = upgradeNode.range;
    tower.fireRate = upgradeNode.fireRate;
    tower.damageType = upgradeNode.damageType;
    tower.splashRadius = upgradeNode.splashRadius;
    tower.chainCount = upgradeNode.chainCount;
    tower.chainDecay = upgradeNode.chainDecay;
    tower.effects = [...upgradeNode.effects];
    tower.level++;

    this.eventBuffer.push({
      type: 'TOWER_UPGRADED',
      payload: {
        entityId: action.entityId,
        tier: tower.tier,
        damage: tower.damage,
        range: tower.range,
        branch: tower.branch,
        totalInvestedGold: tower.totalInvestedGold,
      },
    });

    return true;
  }

  private handleSellTower(player: PlayerSession, action: SellTowerAction): boolean {
    const tower = this.world.towers.get(action.entityId);
    if (!tower || tower.ownerId !== player.userId) return false;

    // Refund exact 75% of total invested gold (base + all upgrades)
    const refund = calculateSellRefund(tower.totalInvestedGold);

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

  private handleSetTargetPriority(player: PlayerSession, action: SetTargetPriorityAction): boolean {
    const tower = this.world.towers.get(action.entityId);
    if (!tower || tower.ownerId !== player.userId) return false;
    tower.targetPriority = action.priority;
    return true;
  }

  private handleTriggerSpecialAbility(player: PlayerSession, action: TriggerSpecialAbilityAction): boolean {
    const abilityKey = action.abilityId as SpecialAbilityType;
    const ability = SPECIAL_ABILITIES[abilityKey];
    if (!ability) return false;

    // 1. Check gold
    if (player.gold < ability.cost) return false;

    // 2. Check cooldown
    let playerCds = this.playerAbilityCooldowns.get(player.userId);
    if (!playerCds) {
      playerCds = new Map();
      this.playerAbilityCooldowns.set(player.userId, playerCds);
    }
    const readyAt = playerCds.get(abilityKey) || 0;
    const now = Date.now();
    if (now < readyAt) return false;

    // Deduct gold & set cooldown
    player.gold -= ability.cost;
    playerCds.set(abilityKey, now + ability.cooldownMs);

    // Execute ability effects
    switch (abilityKey) {
      case SpecialAbilityType.METEOR_STRIKE: {
        const tx = action.targetX ?? 400;
        const ty = action.targetY ?? 300;
        const enemies = this.world.query(ComponentType.ENEMY | ComponentType.TRANSFORM | ComponentType.HEALTH);

        for (const eid of enemies) {
          const transform = this.world.transforms.get(eid)!;
          const health = this.world.healths.get(eid)!;
          const enemy = this.world.enemies.get(eid)!;
          const dist = DeterministicMath.distance(tx, ty, transform.x, transform.y);

          if (dist <= 120 && !health.isDead) {
            const calc = DamageCalculator.calculateDamage(400, DamageType.MAGIC, enemy.armor, enemy.magicResist);
            health.current = Math.max(0, health.current - calc.finalDamage);

            // Apply 1.5s Stun
            let buff = this.world.buffs.get(eid);
            if (!buff) {
              buff = { type: ComponentType.BUFF, effects: [] };
              this.world.addComponent(eid, buff);
            }
            const stunDuration = enemy.isBoss ? 750 : 1500;
            buff.effects.push({
              id: 'meteor_stun',
              type: 'STUN',
              value: 1.0,
              durationMs: stunDuration,
              remainingMs: stunDuration,
            });

            if (health.current <= 0) {
              health.isDead = true;
              this.world.emit('enemyKilled', {
                enemyId: eid,
                enemyType: enemy.enemyType,
                bountyGold: enemy.bountyGold,
                bountyXp: enemy.bountyXp,
              });
            }
          }
        }
        break;
      }

      case SpecialAbilityType.GLACIAL_BLIZZARD: {
        const enemies = this.world.query(ComponentType.ENEMY | ComponentType.HEALTH);
        for (const eid of enemies) {
          let buff = this.world.buffs.get(eid);
          if (!buff) {
            buff = { type: ComponentType.BUFF, effects: [] };
            this.world.addComponent(eid, buff);
          }
          buff.effects.push({
            id: 'global_blizzard',
            type: 'SLOW',
            value: 0.8,
            durationMs: 6000,
            remainingMs: 6000,
          });
        }
        break;
      }

      case SpecialAbilityType.OVERCHARGE_GRID: {
        const towers = this.world.query(ComponentType.TOWER);
        for (const tid of towers) {
          const tower = this.world.towers.get(tid)!;
          if (tower.ownerId === player.userId) {
            tower.fireRate = Math.round(tower.fireRate * 1.5 * 10) / 10;
            tower.damage = Math.round(tower.damage * 1.25);
          }
        }
        break;
      }

      case SpecialAbilityType.EMERGENCY_REPAIR: {
        player.health = Math.min(100, player.health + 25);
        break;
      }
    }

    this.eventBuffer.push({
      type: 'ABILITY_TRIGGERED',
      payload: {
        userId: player.userId,
        abilityId: abilityKey,
        targetX: action.targetX,
        targetY: action.targetY,
      },
    });

    return true;
  }

  private handleVoteStartWave(player: PlayerSession, _action: VoteStartWaveAction): boolean {
    const early = this.spawnerSystem.startWaveEarly();
    if (early) {
      // Award +15g early wave start bonus to all players
      for (const p of this.players.values()) {
        p.gold += 15;
      }
      this.eventBuffer.push({
        type: 'EARLY_WAVE_STARTED',
        payload: { userId: player.userId, bonus: 15 },
      });
      return true;
    }
    return false;
  }

  private handleSendPvpCreep(player: PlayerSession, action: SendPvpCreepAction): boolean {
    const creepCosts: Record<string, { cost: number; income: number; type: EnemyType }> = {
      SWARM: { cost: 40, income: 5, type: EnemyType.SWARM },
      ORC_BRUTE: { cost: 120, income: 15, type: EnemyType.ORC_BRUTE },
      WYVERN_FLYER: { cost: 180, income: 22, type: EnemyType.WYVERN_FLYER },
      ARMOURED_KNIGHT: { cost: 250, income: 35, type: EnemyType.ARMOURED_KNIGHT },
    };

    const cfg = creepCosts[action.creepType];
    if (!cfg || player.gold < cfg.cost) return false;

    player.gold -= cfg.cost;
    const currentIncome = this.passiveIncome.get(player.userId) || 0;
    this.passiveIncome.set(player.userId, currentIncome + cfg.income);

    // Spawn creep into enemy lane
    this.eventBuffer.push({
      type: 'PVP_CREEP_SENT',
      payload: {
        senderId: player.userId,
        creepType: cfg.type,
        cost: cfg.cost,
        incomeAdded: cfg.income,
      },
    });

    return true;
  }

  private handleTogglePause(player: PlayerSession): boolean {
    const isPaused = this.gameLoop.togglePause();
    this.eventBuffer.push({
      type: 'PAUSE_STATE_CHANGED',
      payload: {
        userId: player.userId,
        isPaused,
      },
    });
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
        tower: tower
          ? {
              type: tower.towerType,
              tier: tower.tier,
              level: tower.level,
              range: tower.range,
              damage: tower.damage,
              targetId: tower.targetEntityId,
              targetPriority: tower.targetPriority,
              branch: tower.branch,
              totalInvestedGold: tower.totalInvestedGold,
            }
          : undefined,
        enemy: enemy
          ? {
              type: enemy.enemyType,
              wave: enemy.waveNumber,
              armor: enemy.armor,
              magicResist: enemy.magicResist,
              speed: enemy.speed,
              isFlying: enemy.isFlying,
            }
          : undefined,
      });
    }

    // Cooldown map for snapshot
    const cooldowns: Record<string, number> = {};
    const now = Date.now();
    for (const [userId, m] of this.playerAbilityCooldowns.entries()) {
      for (const [abId, readyAt] of m.entries()) {
        cooldowns[`${userId}_${abId}`] = Math.max(0, readyAt - now);
      }
    }

    return {
      tick: this.world.currentTick,
      timestamp: now,
      stateChecksum: StateHasher.hashWorld(this.world),
      entities,
      events: [...this.eventBuffer],
      wave: this.spawnerSystem.currentWaveIndex,
      waveTimerRemainingMs: this.spawnerSystem.prepTimerRemainingMs,
      cooldowns,
      isPaused: this.gameLoop.paused,
    };
  }
}
