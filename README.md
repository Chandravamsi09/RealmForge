# RealmForge 🏰⚡

[![CI/CD Pipeline](https://github.com/Chandravamsi09/RealmForge/actions/workflows/ci.yml/badge.svg)](https://github.com/Chandravamsi09/RealmForge/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B%20%7C%2020%2B-green.svg)](https://nodejs.org/)

**RealmForge** is a full-stack, real-time multiplayer tower defense game engineered as a high-performance TypeScript monorepo. It features a deterministic Entity Component System (ECS) game engine, authoritative Node.js server loop (20 Hz), Redis-backed ELO matchmaking queues, PostgreSQL persistence, and a modern React + Phaser 3 client interface.

---

## 🌟 Key Features

- **Deterministic ECS Core**: Bitmask-queried Entity Component System with Mulberry32 PRNG and FNV-1a state checksums for desync-free networking.
- **Dynamic A* Pathfinding**: Real-time pathfinding with Min-Heap Priority Queues and anti-blocking validation to prevent maze sealing.
- **Deep Tower & Combat System**: 6 unique tower archetypes (Archer, Mage, Cannon, Tesla, Frost, Barracks), 4-tier branching upgrade trees, and realistic damage formulas (Armor diminishing returns, Magic resistance, true damage, status effects).
- **Infinite Procedural Waves**: 7 enemy archetypes with exponential health and speed scaling curves, along with periodic Titan Boss encounters.
- **Authoritative Multiplayer**: Real-time 20Hz state synchronization over Socket.IO with input validation and anti-cheat checksum verification.
- **Redis Matchmaking**: Automated queue matching across Solo, 2P Co-op, 4P Co-op, and 1v1 PvP with dynamic ELO search radius expansion.
- **DAO Persistence Layer**: PostgreSQL match history tracking, K=32 ELO rating recalculation, and global leaderboards.
- **Cosmetic Economy**: Metagame gem store, tower skin loadouts, avatar frames, and wave interest calculations.
- **Admin Moderation Portal**: Role-based access control (RBAC) with report handling, player ban systems, and server telemetry.
- **Hybrid Client UI**: React-based portal shell with integrated Phaser 3 canvas, real-time radar minimap, in-game chat, and tactical pings.

---

## 🏗️ Architecture & Monorepo Layout

```
RealmForge/
├── shared/           # @realmforge/shared: Deterministic ECS, Pathfinding, Combat, Waves, Types
├── server/           # @realmforge/server: Express REST API, Socket.IO Server, Matchmaker, DAOs
├── client/           # @realmforge/client: React Shell, Phaser 3 Canvas, Socket Context, Tailwind
├── tests/            # @realmforge/tests: Unit tests, Supertest API tests, Playwright E2E
├── docker-compose.yml
├── ARCHITECTURE.md   # Deep architectural specification
└── API.md            # Complete REST & Socket API reference
```

---

## 🚀 Quickstart Guide

### Prerequisites
- Node.js `18.x` or `20.x`
- npm `9.x` or higher
- Docker & Docker Compose (optional for local DB/Redis)

### 1. Installation
Clone the repository and install dependencies across all workspaces:
```bash
git clone https://github.com/Chandravamsi09/RealmForge.git
cd RealmForge
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

### 3. Build All Workspaces
```bash
npm run build --workspace=shared
npm run build --workspace=server
npm run build --workspace=client
```

### 4. Running the Application
```bash
# Start backend server (Port 4000)
npm run dev --workspace=server

# In a separate terminal, start frontend client (Port 3000 / 5173)
npm run dev --workspace=client
```

---

## 🐳 Docker Deployment

To launch the full stack (PostgreSQL, Redis, RealmForge Server, and Client) with Docker Compose:
```bash
docker-compose up --build
```

---

## 🧪 Testing Suite

RealmForge features extensive automated test coverage across unit, integration, and E2E tiers:

```bash
# Run all unit and integration test suites
npm test

# Run tests in specific workspaces
npm run test --workspace=tests
```

### Test Coverage Highlights:
- **Unit Tests**: Mulberry32 determinism, FNV-1a checksums, ECS queries, A* pathfinding, anti-blocking checks, damage calculations, wave scaling, ELO delta formulas, and cosmetic purchases.
- **Integration Tests**: Supertest REST API tests for Auth, Matchmaking queues, Match history, Player stats, Global leaderboards, Economy, and Admin RBAC.
- **E2E Tests**: Full user journey from signup, lobby assembly, tactical tower placement, simulation, and post-match leaderboard progression.

---

## 📚 Documentation
- [Architecture & Mechanics Deep Dive (ARCHITECTURE.md)](ARCHITECTURE.md)
- [REST & Real-time API Reference (API.md)](API.md)

---

## 📜 License
Distributed under the MIT License. Built fresh for RealmForge.
