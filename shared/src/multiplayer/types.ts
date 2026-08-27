export enum GameMode {
  SOLO = 'SOLO',
  COOP_2P = 'COOP_2P',
  COOP_4P = 'COOP_4P',
  PVP_1V1 = 'PVP_1V1',
}

export enum RoomStatus {
  LOBBY = 'LOBBY',
  IN_PROGRESS = 'IN_PROGRESS',
  FINISHED = 'FINISHED',
}

export interface PlayerSession {
  userId: string;
  socketId: string;
  username: string;
  avatar: string;
  isHost: boolean;
  isReady: boolean;
  team: number;
  gold: number;
  health: number;
  score: number;
  towersPlaced: number;
  enemiesKilled: number;
  damageDealt: number;
}
