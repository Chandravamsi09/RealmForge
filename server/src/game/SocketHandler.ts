import { Server as SocketIOServer, Socket } from 'socket.io';
import { RoomManager, defaultRoomManager } from './RoomManager';
import { verifyToken } from '../auth/jwt';
import { GameMode, PlayerAction } from '@realmforge/shared';

export function setupSocketHandler(
  io: SocketIOServer,
  roomManager: RoomManager = defaultRoomManager,
): void {
  roomManager.setIo(io);

  // Authenticate connection handshake via JWT if supplied
  io.use((socket: Socket, next) => {
    const token = socket.handshake.auth?.token || socket.handshake.headers?.authorization?.replace('Bearer ', '');
    if (token) {
      try {
        const payload = verifyToken(token);
        (socket as any).user = payload;
      } catch {
        // Allow guest or fallback
      }
    }
    next();
  });

  io.on('connection', (socket: Socket) => {
    const user = (socket as any).user || {
      userId: `guest_${socket.id.substring(0, 6)}`,
      username: `Guest_${socket.id.substring(0, 4)}`,
    };

    let currentRoomId: string | null = null;

    // 1. Create or Join Room
    socket.on('create_room', (data: { mode?: GameMode }, callback?: (res: any) => void) => {
      const mode = data?.mode || GameMode.SOLO;
      const room = roomManager.createRoom(mode);
      const session = room.addPlayer({
        userId: user.userId,
        socketId: socket.id,
        username: user.username,
        isHost: true,
      });

      currentRoomId = room.roomId;
      socket.join(room.roomId);

      // Auto start solo room game loop immediately
      if (mode === GameMode.SOLO) {
        room.start();
      }

      if (callback) {
        callback({ success: true, roomId: room.roomId, session });
      }
    });

    socket.on('start_game', (callback?: (res: any) => void) => {
      if (!currentRoomId) {
        if (callback) callback({ success: false, error: 'Not in a room' });
        return;
      }
      const room = roomManager.getRoom(currentRoomId);
      if (!room) {
        if (callback) callback({ success: false, error: 'Room not found' });
        return;
      }

      room.start();
      if (callback) callback({ success: true });
    });

    socket.on('join_room', (data: { roomId: string }, callback?: (res: any) => void) => {
      const room = roomManager.getRoom(data.roomId);
      if (!room) {
        if (callback) callback({ success: false, error: 'Room not found' });
        return;
      }

      if (room.players.size >= 4) {
        if (callback) callback({ success: false, error: 'Room is full' });
        return;
      }

      const session = room.addPlayer({
        userId: user.userId,
        socketId: socket.id,
        username: user.username,
      });

      currentRoomId = room.roomId;
      socket.join(room.roomId);

      // Notify others in room
      socket.to(room.roomId).emit('player_joined', { session });

      if (callback) {
        callback({
          success: true,
          roomId: room.roomId,
          session,
          players: Array.from(room.players.values()),
        });
      }
    });

    // 2. Set Ready State
    socket.on('player_ready', (data: { ready: boolean }) => {
      if (!currentRoomId) return;
      const room = roomManager.getRoom(currentRoomId);
      if (!room) return;

      room.setPlayerReady(socket.id, data.ready);
      io.to(currentRoomId).emit('player_status_changed', {
        socketId: socket.id,
        isReady: data.ready,
      });
    });

    // 3. Player In-Game Action
    socket.on('player_action', (action: PlayerAction, callback?: (res: any) => void) => {
      if (!currentRoomId) return;
      const room = roomManager.getRoom(currentRoomId);
      if (!room) return;

      // Ensure action player ID matches authenticated user
      action.playerId = user.userId;
      room.enqueueAction(action);

      if (callback) {
        callback({ success: true, actionId: action.actionId });
      }
    });

    // 4. Chat & Ping
    socket.on('chat_message', (data: { message: string }) => {
      if (!currentRoomId) return;
      io.to(currentRoomId).emit('chat_message', {
        sender: user.username,
        message: data.message,
        timestamp: Date.now(),
      });
    });

    socket.on('ping_location', (data: { gridX: number; gridY: number; pingType: string }) => {
      if (!currentRoomId) return;
      socket.to(currentRoomId).emit('ping_location', {
        sender: user.username,
        ...data,
      });
    });

    // 5. Disconnect
    socket.on('disconnect', () => {
      if (currentRoomId) {
        const room = roomManager.getRoom(currentRoomId);
        if (room) {
          room.removePlayer(socket.id);
          io.to(currentRoomId).emit('player_left', { socketId: socket.id });
          if (room.players.size === 0) {
            roomManager.removeRoom(currentRoomId);
          }
        }
      }
    });
  });
}
