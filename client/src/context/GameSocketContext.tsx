import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import {
  AuthoritativeTickSnapshot,
  PlayerAction,
  PlayerSession,
  GameMode,
} from '@realmforge/shared';
import { useAuth } from './AuthContext';

type DistributeOmit<T, K extends PropertyKey> = T extends any ? Omit<T, K> : never;
export type ClientActionPayload = DistributeOmit<PlayerAction, 'actionId' | 'playerId' | 'clientTimestamp'>;

interface GameSocketContextType {
  socket: Socket | null;
  isConnected: boolean;
  currentRoomId: string | null;
  roomPlayers: PlayerSession[];
  latestSnapshot: AuthoritativeTickSnapshot | null;
  isMatchmaking: boolean;
  matchmakingTime: number;
  chatMessages: Array<{ sender: string; message: string; timestamp: number }>;
  pings: Array<{ sender: string; gridX: number; gridY: number; pingType: string }>;
  createRoom: (mode: GameMode) => Promise<string>;
  joinRoom: (roomId: string) => Promise<boolean>;
  setReady: (ready: boolean) => void;
  sendAction: (action: ClientActionPayload) => void;
  startMatchmaking: (mode: GameMode) => Promise<void>;
  cancelMatchmaking: (mode: GameMode) => Promise<void>;
  sendChat: (message: string) => void;
  sendPing: (gridX: number, gridY: number, pingType?: string) => void;
  leaveRoom: () => void;
}

const GameSocketContext = createContext<GameSocketContextType | null>(null);

export const GameSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, token } = useAuth();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [currentRoomId, setCurrentRoomId] = useState<string | null>(null);
  const [roomPlayers, setRoomPlayers] = useState<PlayerSession[]>([]);
  const [latestSnapshot, setLatestSnapshot] = useState<AuthoritativeTickSnapshot | null>(null);
  const [isMatchmaking, setIsMatchmaking] = useState<boolean>(false);
  const [matchmakingTime, setMatchmakingTime] = useState<number>(0);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: string; message: string; timestamp: number }>>([]);
  const [pings, setPings] = useState<Array<{ sender: string; gridX: number; gridY: number; pingType: string }>>([]);

  const mmTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const s = io(window.location.origin, {
      auth: { token },
      autoConnect: true,
      transports: ['websocket', 'polling'],
    });

    s.on('connect', () => setIsConnected(true));
    s.on('disconnect', () => setIsConnected(false));

    s.on('tick_snapshot', (snapshot: AuthoritativeTickSnapshot) => {
      setLatestSnapshot(snapshot);
    });

    s.on('player_joined', (data: { session: PlayerSession }) => {
      setRoomPlayers(prev => [...prev.filter(p => p.socketId !== data.session.socketId), data.session]);
    });

    s.on('player_left', (data: { socketId: string }) => {
      setRoomPlayers(prev => prev.filter(p => p.socketId !== data.socketId));
    });

    s.on('player_status_changed', (data: { socketId: string; isReady: boolean }) => {
      setRoomPlayers(prev =>
        prev.map(p => (p.socketId === data.socketId ? { ...p, isReady: data.isReady } : p)),
      );
    });

    s.on('match_found', (data: { roomId: string; mode: GameMode; players: PlayerSession[] }) => {
      setIsMatchmaking(false);
      if (mmTimerRef.current) clearInterval(mmTimerRef.current);
      setCurrentRoomId(data.roomId);
      setRoomPlayers(data.players);
    });

    s.on('chat_message', (msg: { sender: string; message: string; timestamp: number }) => {
      setChatMessages(prev => [...prev.slice(-49), msg]);
    });

    s.on('ping_location', (ping: { sender: string; gridX: number; gridY: number; pingType: string }) => {
      setPings(prev => [...prev.slice(-9), ping]);
    });

    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, [token]);

  const createRoom = (mode: GameMode = GameMode.SOLO): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!socket) return reject(new Error('Socket not connected'));
      socket.emit('create_room', { mode }, (res: any) => {
        if (res.success) {
          setCurrentRoomId(res.roomId);
          setRoomPlayers([res.session]);
          resolve(res.roomId);
        } else {
          reject(new Error(res.error));
        }
      });
    });
  };

  const joinRoom = (roomId: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      if (!socket) return reject(new Error('Socket not connected'));
      socket.emit('join_room', { roomId }, (res: any) => {
        if (res.success) {
          setCurrentRoomId(res.roomId);
          setRoomPlayers(res.players || [res.session]);
          resolve(true);
        } else {
          reject(new Error(res.error));
        }
      });
    });
  };

  const setReady = (ready: boolean) => {
    if (!socket || !currentRoomId) return;
    socket.emit('player_ready', { ready });
  };

  const sendAction = (action: any) => {
    if (!socket || !currentRoomId || !user) return;
    const fullAction = {
      ...action,
      actionId: `act_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      playerId: user.id,
      clientTimestamp: Date.now(),
    };
    socket.emit('player_action', fullAction);
  };

  const startMatchmaking = async (mode: GameMode) => {
    if (!socket || !token) return;
    setIsMatchmaking(true);
    setMatchmakingTime(0);

    mmTimerRef.current = setInterval(() => {
      setMatchmakingTime(t => t + 1);
    }, 1000);

    await fetch('/api/matchmaking/enqueue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ mode, socketId: socket.id }),
    });
  };

  const cancelMatchmaking = async (mode: GameMode) => {
    if (!token) return;
    setIsMatchmaking(false);
    if (mmTimerRef.current) clearInterval(mmTimerRef.current);

    await fetch('/api/matchmaking/dequeue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ mode }),
    });
  };

  const sendChat = (message: string) => {
    if (!socket || !currentRoomId || !message.trim()) return;
    socket.emit('chat_message', { message });
  };

  const sendPing = (gridX: number, gridY: number, pingType: string = 'ALERT') => {
    if (!socket || !currentRoomId) return;
    socket.emit('ping_location', { gridX, gridY, pingType });
  };

  const leaveRoom = () => {
    setCurrentRoomId(null);
    setRoomPlayers([]);
    setLatestSnapshot(null);
    setChatMessages([]);
  };

  return (
    <GameSocketContext.Provider
      value={{
        socket,
        isConnected,
        currentRoomId,
        roomPlayers,
        latestSnapshot,
        isMatchmaking,
        matchmakingTime,
        chatMessages,
        pings,
        createRoom,
        joinRoom,
        setReady,
        sendAction,
        startMatchmaking,
        cancelMatchmaking,
        sendChat,
        sendPing,
        leaveRoom,
      }}
    >
      {children}
    </GameSocketContext.Provider>
  );
};

export const useGameSocket = () => {
  const context = useContext(GameSocketContext);
  if (!context) throw new Error('useGameSocket must be used within a GameSocketProvider');
  return context;
};
