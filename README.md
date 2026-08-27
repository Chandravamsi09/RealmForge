# RealmForge — Real-time Multiplayer Web-Based Tower Defense

RealmForge is a production-grade, full-stack real-time multiplayer tower defense game and engine.

## Architecture

- **Shared (`/shared`)**: Deterministic ECS game engine, tile grid representation, A* pathfinding, pure combat and economy calculations, and tick sync protocols.
- **Server (`/server`)**: Node.js + Express REST API, Socket.IO authoritative game loop, JWT authentication, PostgreSQL persistence with DAO pattern, Redis matchmaking queue.
- **Client (`/client`)**: React HUD shell (Lobby, Matchmaking, Inventory, Profile, Admin Dashboard) + Phaser.js real-time game canvas.
- **Tests (`/tests`)**: Unit test suite (Jest), Integration test suite (Supertest + DB), E2E test suite (Playwright).

## Quick Start (Local Development)

### 1. Prerequisites
- Node.js >= 20.x
- Docker & Docker Compose

### 2. Installation
```bash
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

### 4. Running with Docker Compose
```bash
docker-compose up --build
```

### 5. Running Tests
```bash
# Run unit tests
npm run test:unit

# Run integration tests
npm run test:integration

# Run all test suites
npm test
```
