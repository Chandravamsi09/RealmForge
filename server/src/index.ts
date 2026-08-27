import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { REALMFORGE_VERSION } from '@realmforge/shared';

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

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    version: REALMFORGE_VERSION,
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV !== 'test') {
  httpServer.listen(PORT, () => {
    console.log(`[RealmForge Server] v${REALMFORGE_VERSION} listening on port ${PORT}`);
  });
}

export { app, httpServer, io };
