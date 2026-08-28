import { GameRoom } from '@realmforge/server/game/GameRoom';
import {
  GameMode,
  ActionType,
  TowerType,
  TargetPriority,
  SpecialAbilityType,
  PlaceTowerAction,
  UpgradeTowerAction,
  SellTowerAction,
  SetTargetPriorityAction,
  TriggerSpecialAbilityAction,
  VoteStartWaveAction,
} from '@realmforge/shared';

describe('Real-time Multiplayer: GameRoom Engine', () => {
  let room: GameRoom;

  beforeEach(() => {
    room = new GameRoom('test_room_1', GameMode.SOLO);
  });

  afterEach(() => {
    room.stop();
  });

  it('should initialize room with correct mode, map, and empty player list', () => {
    expect(room.roomId).toBe('test_room_1');
    expect(room.mode).toBe(GameMode.SOLO);
    expect(room.players.size).toBe(0);
  });

  it('should add player with initial gold and health matching rulebook', () => {
    const session = room.addPlayer({
      userId: 'user-1',
      socketId: 'sock-1',
      username: 'CommanderAlex',
    });

    expect(session.userId).toBe('user-1');
    expect(session.gold).toBe(450);
    expect(session.health).toBe(100);
    expect(session.isHost).toBe(true);
  });

  it('should allow player to place a tower when they have sufficient gold and valid spot', () => {
    const player = room.addPlayer({
      userId: 'user-1',
      socketId: 'sock-1',
      username: 'CommanderAlex',
    });

    const initialGold = player.gold; // 450
    const placeAction: PlaceTowerAction = {
      actionId: 'act-1',
      playerId: 'user-1',
      type: ActionType.PLACE_TOWER,
      clientTimestamp: Date.now(),
      towerType: TowerType.ARCHER, // Cost 100
      gridX: 1,
      gridY: 1,
    };

    const success = room.processAction(placeAction);
    expect(success).toBe(true);
    expect(player.gold).toBe(initialGold - 100);
    expect(player.towersPlaced).toBe(1);

    // Grid tile should now have tower
    const tile = room.map.grid.getTile(1, 1)!;
    expect(tile.towerEntityId).not.toBeNull();
    expect(tile.walkable).toBe(false);
  });

  it('should reject tower placement when player has insufficient gold', () => {
    const player = room.addPlayer({
      userId: 'user-2',
      socketId: 'sock-2',
      username: 'BrokePlayer',
    });
    player.gold = 50; // Not enough for any tower

    const placeAction: PlaceTowerAction = {
      actionId: 'act-2',
      playerId: 'user-2',
      type: ActionType.PLACE_TOWER,
      clientTimestamp: Date.now(),
      towerType: TowerType.ARCHER, // Cost 100
      gridX: 1,
      gridY: 1,
    };

    const success = room.processAction(placeAction);
    expect(success).toBe(false);
    expect(player.gold).toBe(50);
  });

  it('should enforce upgrade branch locking and calculate exact 75% total investment sell refund', () => {
    const player = room.addPlayer({
      userId: 'user-1',
      socketId: 'sock-1',
      username: 'CommanderAlex',
    });
    player.gold = 2000;

    // Place Archer tower (cost 100)
    room.processAction({
      actionId: 'act-1',
      playerId: 'user-1',
      type: ActionType.PLACE_TOWER,
      clientTimestamp: Date.now(),
      towerType: TowerType.ARCHER,
      gridX: 1,
      gridY: 1,
    });

    const tile = room.map.grid.getTile(1, 1)!;
    const towerEntityId = tile.towerEntityId!;
    const towerComponent = room.world.towers.get(towerEntityId)!;

    expect(towerComponent.tier).toBe(1);
    expect(towerComponent.totalInvestedGold).toBe(100);

    // Upgrade to Tier 2 (cost 120)
    const u2 = room.processAction({
      actionId: 'act-upgrade-2',
      playerId: 'user-1',
      type: ActionType.UPGRADE_TOWER,
      clientTimestamp: Date.now(),
      entityId: towerEntityId,
    } as UpgradeTowerAction);

    expect(u2).toBe(true);
    expect(towerComponent.tier).toBe(2);
    expect(towerComponent.totalInvestedGold).toBe(220);

    // Upgrade to Tier 3 Branch A: Longbow Sniper (cost 240)
    const u3 = room.processAction({
      actionId: 'act-upgrade-3',
      playerId: 'user-1',
      type: ActionType.UPGRADE_TOWER,
      clientTimestamp: Date.now(),
      entityId: towerEntityId,
      upgradePathIndex: 1,
    } as UpgradeTowerAction);

    expect(u3).toBe(true);
    expect(towerComponent.tier).toBe(3);
    expect(towerComponent.branch).toBe('A');
    expect(towerComponent.totalInvestedGold).toBe(460);

    // Attempting to upgrade opposite Branch B at Tier 4 should be rejected (Branch Locking!)
    const invalidBranchU4 = room.processAction({
      actionId: 'act-upgrade-4-invalid',
      playerId: 'user-1',
      type: ActionType.UPGRADE_TOWER,
      clientTimestamp: Date.now(),
      entityId: towerEntityId,
      upgradePathIndex: 2,
    } as UpgradeTowerAction);

    expect(invalidBranchU4).toBe(false);

    // Upgrading valid Branch A at Tier 4: Grand Eagle Eye (cost 500)
    const validBranchU4 = room.processAction({
      actionId: 'act-upgrade-4-valid',
      playerId: 'user-1',
      type: ActionType.UPGRADE_TOWER,
      clientTimestamp: Date.now(),
      entityId: towerEntityId,
      upgradePathIndex: 1,
    } as UpgradeTowerAction);

    expect(validBranchU4).toBe(true);
    expect(towerComponent.tier).toBe(4);
    expect(towerComponent.totalInvestedGold).toBe(960); // 100 + 120 + 240 + 500 = 960

    // Sell tower: refund must be floor(960 * 0.75) = 720g
    const goldBeforeSell = player.gold;
    const sellSuccess = room.processAction({
      actionId: 'act-sell',
      playerId: 'user-1',
      type: ActionType.SELL_TOWER,
      clientTimestamp: Date.now(),
      entityId: towerEntityId,
    } as SellTowerAction);

    expect(sellSuccess).toBe(true);
    expect(player.gold).toBe(goldBeforeSell + 720);
    expect(room.world.isAlive(towerEntityId)).toBe(false);
    expect(room.map.grid.getTile(1, 1)!.towerEntityId).toBeNull();
  });

  it('should change tower target priority correctly', () => {
    room.addPlayer({
      userId: 'user-1',
      socketId: 'sock-1',
      username: 'CommanderAlex',
    });

    room.processAction({
      actionId: 'act-1',
      playerId: 'user-1',
      type: ActionType.PLACE_TOWER,
      clientTimestamp: Date.now(),
      towerType: TowerType.ARCHER,
      gridX: 1,
      gridY: 1,
    });

    const towerId = room.map.grid.getTile(1, 1)!.towerEntityId!;
    const tower = room.world.towers.get(towerId)!;
    expect(tower.targetPriority).toBe(TargetPriority.FIRST);

    const priorityChanged = room.processAction({
      actionId: 'act-prio',
      playerId: 'user-1',
      type: ActionType.SET_TARGET_PRIORITY,
      clientTimestamp: Date.now(),
      entityId: towerId,
      priority: TargetPriority.STRONGEST,
    } as SetTargetPriorityAction);

    expect(priorityChanged).toBe(true);
    expect(tower.targetPriority).toBe(TargetPriority.STRONGEST);
  });

  it('should execute special abilities and respect gold and cooldown constraints', () => {
    const player = room.addPlayer({
      userId: 'user-1',
      socketId: 'sock-1',
      username: 'CommanderAlex',
    });
    player.gold = 500;
    player.health = 50;

    // Trigger Emergency Repair (cost 200g, restores +25 HP)
    const repairSuccess = room.processAction({
      actionId: 'act-repair',
      playerId: 'user-1',
      type: ActionType.TRIGGER_SPECIAL_ABILITY,
      clientTimestamp: Date.now(),
      abilityId: SpecialAbilityType.EMERGENCY_REPAIR,
    } as TriggerSpecialAbilityAction);

    expect(repairSuccess).toBe(true);
    expect(player.gold).toBe(300);
    expect(player.health).toBe(75);

    // Immediate re-cast should fail due to cooldown
    const cooldownFail = room.processAction({
      actionId: 'act-repair-2',
      playerId: 'user-1',
      type: ActionType.TRIGGER_SPECIAL_ABILITY,
      clientTimestamp: Date.now(),
      abilityId: SpecialAbilityType.EMERGENCY_REPAIR,
    } as TriggerSpecialAbilityAction);

    expect(cooldownFail).toBe(false);
  });

  it('should award +15g early wave start bonus when voting to start wave early', () => {
    const player = room.addPlayer({
      userId: 'user-1',
      socketId: 'sock-1',
      username: 'CommanderAlex',
    });
    const initialGold = player.gold;

    const voteSuccess = room.processAction({
      actionId: 'act-early',
      playerId: 'user-1',
      type: ActionType.VOTE_START_WAVE,
      clientTimestamp: Date.now(),
    } as VoteStartWaveAction);

    expect(voteSuccess).toBe(true);
    expect(player.gold).toBe(initialGold + 15);
  });
});
