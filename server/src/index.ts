import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { REALMFORGE_VERSION } from '@realmforge/shared';
import { authRouter } from './auth/auth.routes';

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

// Base health endpoint
app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    version: REALMFORGE_VERSION,
    timestamp: new Date().toISOString(),
  });
});

// Mount Routes
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== 'test') {
  httpServer.listen(PORT, () => {
    console.log(`[RealmForge Server] v${REALMFORGE_VERSION} listening on port ${PORT}`);
  });
}

export { app, httpServer, io };
export * from './auth/auth.service';
export * from './auth/auth.middleware';
export * from './auth/jwt';
export * from './auth/password';
export * from './auth/user.repository';
export * from './db/connection';
export * from './db/migrations';
