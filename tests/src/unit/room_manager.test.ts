import { RoomManager } from '@realmforge/server/game/RoomManager';
import { GameMode } from '@realmforge/shared';

describe('Real-time Multiplayer: RoomManager', () => {
  let manager: RoomManager;

  beforeEach(() => {
    manager = new RoomManager();
  });

  afterEach(() => {
    manager.clear();
  });

  it('should create and retrieve game rooms', () => {
    const room = manager.createRoom(GameMode.COOP_2P);
    expect(room.roomId).toBeDefined();
    expect(room.mode).toBe(GameMode.COOP_2P);

    const retrieved = manager.getRoom(room.roomId);
    expect(retrieved).toBe(room);
    expect(manager.getActiveRoomCount()).toBe(1);
  });

  it('should find available rooms for matchmaking', () => {
    const room = manager.createRoom(GameMode.COOP_2P);
    room.addPlayer({ userId: 'u1', socketId: 's1', username: 'Player1' });

    const available = manager.findAvailableRoom(GameMode.COOP_2P);
    expect(available).toBe(room);

    // Add second player to fill 2P room
    room.addPlayer({ userId: 'u2', socketId: 's2', username: 'Player2' });
  });

  it('should remove room when cleared or requested', () => {
    const room = manager.createRoom(GameMode.SOLO);
    manager.removeRoom(room.roomId);

    expect(manager.getRoom(room.roomId)).toBeNull();
    expect(manager.getActiveRoomCount()).toBe(0);
  });
});
