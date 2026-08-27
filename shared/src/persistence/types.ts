import { GameMode } from '../multiplayer/types';

export enum MatchResultStatus {
  VICTORY = 'VICTORY',
  DEFEAT = 'DEFEAT',
  DRAW = 'DRAW',
}

export interface MatchRecord {
  id: string;
  mode: GameMode;
  mapId: string;
  status: string;
  durationSeconds: number;
  wavesSurvived: number;
  winnerTeam?: number;
  createdAt: string;
  endedAt?: string;
}

export interface MatchParticipantRecord {
  matchId: string;
  userId: string;
  username: string;
  team: number;
  damageDealt: number;
  towersPlaced: number;
  enemiesKilled: number;
  goldEarned: number;
  score: number;
  eloDelta: number;
}

export interface MatchSummaryWithParticipants extends MatchRecord {
  participants: MatchParticipantRecord[];
}

export interface PlayerStats {
  userId: string;
  username: string;
  avatar: string;
  eloRating: number;
  totalMatches: number;
  wins: number;
  losses: number;
  winRate: number; // Percentage 0-100
  highestWave: number;
  totalKills: number;
  totalDamageDealt: number;
}

export enum LeaderboardCategory {
  ELO = 'ELO',
  WINS = 'WINS',
  HIGHEST_WAVE = 'HIGHEST_WAVE',
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  avatar: string;
  eloRating: number;
  wins: number;
  highestWave: number;
  totalMatches: number;
}
