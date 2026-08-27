import { GameRoom } from '@realmforge/server/game/GameRoom';
import {
  GameMode,
  ActionType,
  TowerType,
  PlaceTowerAction,
  UpgradeTowerAction,
  SellTowerAction,
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

  it('should add player with initial gold and health', () => {
    const session = room.addPlayer({
      userId: 'user-1',
      socketId: 'sock-1',
      username: 'CommanderAlex',
    });

    expect(session.userId).toBe('user-1');
    expect(session.gold).toBe(450);
    expect(session.health).toBe(20);
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

  it('should upgrade and sell towers correctly', () => {
    const player = room.addPlayer({
      userId: 'user-1',
      socketId: 'sock-1',
      username: 'CommanderAlex',
    });

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

    // Upgrade to Tier 2 (cost 120)
    const goldBeforeUpgrade = player.gold;
    const upgradeSuccess = room.processAction({
      actionId: 'act-upgrade',
      playerId: 'user-1',
      type: ActionType.UPGRADE_TOWER,
      clientTimestamp: Date.now(),
      entityId: towerEntityId,
    } as UpgradeTowerAction);

    expect(upgradeSuccess).toBe(true);
    expect(towerComponent.tier).toBe(2);
    expect(player.gold).toBe(goldBeforeUpgrade - 120);

    // Sell tower
    const goldBeforeSell = player.gold;
    const sellSuccess = room.processAction({
      actionId: 'act-sell',
      playerId: 'user-1',
      type: ActionType.SELL_TOWER,
      clientTimestamp: Date.now(),
      entityId: towerEntityId,
    } as SellTowerAction);

    expect(sellSuccess).toBe(true);
    expect(player.gold).toBeGreaterThan(goldBeforeSell);
    expect(room.world.isAlive(towerEntityId)).toBe(false);
    expect(room.map.grid.getTile(1, 1)!.towerEntityId).toBeNull();
  });
});
