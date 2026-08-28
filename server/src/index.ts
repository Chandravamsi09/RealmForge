import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Initialize environment variables from project root
const rootEnvPath = path.resolve(__dirname, '../../.env');
if (fs.existsSync(rootEnvPath)) {
  dotenv.config({ path: rootEnvPath });
} else {
  dotenv.config();
}

import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { REALMFORGE_VERSION } from '@realmforge/shared';
import { db } from './db/connection';
import { runMigrations } from './db/migrations';
import { authRouter } from './auth/auth.routes';
import { matchmakingRouter } from './matchmaking/matchmaking.routes';
import { persistenceRouter } from './persistence/persistence.routes';
import { economyRouter } from './economy/economy.routes';
import { adminRouter } from './admin/admin.routes';
import { setupSocketHandler } from './game/SocketHandler';
import { defaultMatchmaker } from './matchmaking/Matchmaker';

const app = express();
const httpServer = createServer(app);
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());

// Initialize Socket.IO Multiplayer Game Handlers & Matchmaker worker
setupSocketHandler(io);
defaultMatchmaker.setIo(io);

// Base health endpoint
app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    version: REALMFORGE_VERSION,
    database: db.isPersistent() ? 'persistent' : 'in-memory',
    timestamp: new Date().toISOString(),
  });
});

// Mount Routes
app.use('/api/auth', authRouter);
app.use('/api/matchmaking', matchmakingRouter);
app.use('/api/economy', economyRouter);
app.use('/api', persistenceRouter);
app.use('/api', adminRouter);

const PORT = process.env.PORT || 4000;

// Initialize database schema safely and start server
async function bootstrap() {
  try {
    await runMigrations(db);
    console.log('[RealmForge DB] Database initialized and verified successfully.');
  } catch (err: any) {
    console.error('[RealmForge DB] Initialization error:', err.message);
  }

  if (process.env.NODE_ENV !== 'test') {
    httpServer.listen(PORT, () => {
      console.log(`[RealmForge Server] v${REALMFORGE_VERSION} listening on port ${PORT}`);
    });
  }
}

bootstrap();

export { app, httpServer, io };
export * from './auth/auth.service';
export * from './auth/auth.middleware';
export * from './auth/jwt';
export * from './auth/password';
export * from './auth/user.repository';
export * from './db/connection';
export * from './db/migrations';
export * from './game/GameRoom';
export * from './game/RoomManager';
export * from './game/SocketHandler';
export * from './matchmaking/RedisClient';
export * from './matchmaking/Matchmaker';
export * from './persistence/MatchRepository';
export * from './persistence/StatsRepository';
export * from './persistence/LeaderboardRepository';
export * from './economy/InventoryRepository';
export * from './admin/AdminRepository';
