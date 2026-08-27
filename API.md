# RealmForge REST & Real-time API Reference

## Base URL
- Local Dev: `http://localhost:4000`
- Production: `https://api.realmforge.gg`

---

## 1. Authentication Endpoints (`/api/auth`)

### POST `/api/auth/signup`
Creates a new player account and returns JWT tokens.
- **Request Body:**
  ```json
  {
    "username": "TacticalHero",
    "email": "hero@realmforge.gg",
    "password": "Password123!"
  }
  ```
- **Response (201 Created):**
  ```json
  {
    "user": {
      "id": "uuid-v4",
      "username": "TacticalHero",
      "email": "hero@realmforge.gg",
      "role": "PLAYER",
      "eloRating": 1000,
      "profile": { "level": 1, "xp": 0, "gold": 500, "gems": 50 }
    },
    "tokens": {
      "accessToken": "eyJhbGci...",
      "refreshToken": "eyJhbGci..."
    }
  }
  ```

### POST `/api/auth/login`
Authenticates existing player with username/email and password.

### POST `/api/auth/refresh`
Rotates access token using a valid refresh token.

### GET `/api/auth/me`
Fetches authenticated player profile. Requires `Authorization: Bearer <token>`.

---

## 2. Matchmaking Endpoints (`/api/matchmaking`)

### POST `/api/matchmaking/enqueue`
Enqueues player into matchmaking queue.
- **Request Body:**
  ```json
  {
    "mode": "COOP_2P",
    "socketId": "sock_abc123"
  }
  ```

### POST `/api/matchmaking/dequeue`
Removes player from active matchmaking pool.

### GET `/api/matchmaking/status`
Returns queue wait time and total players in queue.

---

## 3. Matches & Statistics (`/api/matches`, `/api/stats`, `/api/leaderboard`)

### GET `/api/matches/history?limit=20&offset=0`
Returns recent matches played by the authenticated user.

### GET `/api/matches/:matchId`
Returns complete match breakdown, participant stats, and duration.

### GET `/api/stats/me`
Returns authenticated user win rate, total kills, damage dealt, and ELO.

### GET `/api/leaderboard?category=ELO&limit=50&offset=0`
Returns top ranked players. Categories: `ELO`, `WINS`, `HIGHEST_WAVE`.

---

## 4. Cosmetic Store & Inventory (`/api/economy`)

### GET `/api/economy/catalog`
Returns available tower skins, map themes, and avatar frames.

### GET `/api/economy/inventory`
Returns cosmetics owned by the authenticated player.

### GET `/api/economy/loadout`
Returns player's equipped tower skins and badges.

### POST `/api/economy/purchase`
Unlocks catalog item using player gems.
- **Request Body:** `{ "itemId": "skin_archer_elven_sentinel" }`

### POST `/api/economy/equip`
Equips owned cosmetic to loadout.
- **Request Body:** `{ "itemId": "skin_archer_elven_sentinel" }`

---

## 5. Admin & Moderation Endpoints (`/api/admin`)

*Requires `ADMIN` or `MODERATOR` role.*

### GET `/api/admin/metrics`
Returns real-time server metrics (active rooms, RAM usage, uptime).

### GET `/api/admin/reports`
Returns pending player grievance/cheating reports.

### POST `/api/admin/reports/:reportId/resolve`
Resolves or dismisses moderation report.

### POST `/api/admin/users/:userId/ban`
Bans user from logging into RealmForge.

### POST `/api/admin/users/:userId/grant-currency`
Grants gold or gems to user for tournaments or compensation.

---

## 6. Socket.IO Real-time Events

### Client $\rightarrow$ Server
| Event Name | Payload Schema | Description |
| :--- | :--- | :--- |
| `create_room` | `{ mode: GameMode }` | Creates custom room lobby |
| `join_room` | `{ roomId: string }` | Joins existing room lobby |
| `player_ready`| `{ ready: boolean }` | Toggles player ready state |
| `player_action`| `PlayerAction` | Emits `PLACE_TOWER`, `UPGRADE_TOWER`, `SELL_TOWER` |
| `chat_message`| `{ message: string }` | Broadcasts message to room squad |
| `ping_location`| `{ gridX, gridY, pingType }` | Alerts squad on minimap |

### Server $\rightarrow$ Client
| Event Name | Payload Schema | Description |
| :--- | :--- | :--- |
| `tick_snapshot` | `AuthoritativeTickSnapshot` | 20Hz state synchronization with state checksum |
| `match_found` | `{ roomId, mode, players }` | Notifies matchmaking squad of created match |
| `player_joined`| `{ session: PlayerSession }` | Informs room of new teammate |
| `player_left` | `{ socketId: string }` | Informs room of player disconnection |
