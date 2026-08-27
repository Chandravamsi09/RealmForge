import { PlayerStats } from '@realmforge/shared';
import { db, IDatabaseClient } from '../db/connection';

export interface IStatsRepository {
  getPlayerStats(userId: string): Promise<PlayerStats | null>;
  recordMatchStats(
    userId: string,
    delta: {
      isWin: boolean;
      damageDealt: number;
      kills: number;
      wavesSurvived: number;
      eloDelta: number;
    },
  ): Promise<PlayerStats>;
  calculateEloDelta(playerElo: number, opponentElo: number, won: boolean, kFactor?: number): number;
}

export class InMemoryStatsRepository implements IStatsRepository {
  private stats: Map<string, PlayerStats> = new Map();

  calculateEloDelta(playerElo: number, opponentElo: number, won: boolean, kFactor: number = 32): number {
    const expectedScore = 1 / (1 + Math.pow(10, (opponentElo - playerElo) / 400));
    const actualScore = won ? 1 : 0;
    return Math.round(kFactor * (actualScore - expectedScore));
  }

  async getPlayerStats(userId: string): Promise<PlayerStats | null> {
    const stat = this.stats.get(userId);
    if (!stat) return null;
    return { ...stat };
  }

  async recordMatchStats(
    userId: string,
    delta: {
      isWin: boolean;
      damageDealt: number;
      kills: number;
      wavesSurvived: number;
      eloDelta: number;
    },
  ): Promise<PlayerStats> {
    let stat = this.stats.get(userId);
    if (!stat) {
      stat = {
        userId,
        username: `Player_${userId.substring(0, 6)}`,
        avatar: 'default_avatar',
        eloRating: 1000,
        totalMatches: 0,
        wins: 0,
        losses: 0,
        winRate: 0,
        highestWave: 0,
        totalKills: 0,
        totalDamageDealt: 0,
      };
    }

    stat.totalMatches++;
    if (delta.isWin) stat.wins++;
    else stat.losses++;

    stat.winRate = Math.round((stat.wins / stat.totalMatches) * 100);
    stat.highestWave = Math.max(stat.highestWave, delta.wavesSurvived);
    stat.totalKills += delta.kills;
    stat.totalDamageDealt += delta.damageDealt;
    stat.eloRating = Math.max(100, stat.eloRating + delta.eloDelta);

    this.stats.set(userId, { ...stat });
    return { ...stat };
  }

  setStats(userId: string, data: PlayerStats): void {
    this.stats.set(userId, { ...data });
  }

  getAllStats(): PlayerStats[] {
    return Array.from(this.stats.values());
  }

  clear(): void {
    this.stats.clear();
  }
}

export class PostgresStatsRepository implements IStatsRepository {
  constructor(private dbClient: IDatabaseClient = db) {}

  calculateEloDelta(playerElo: number, opponentElo: number, won: boolean, kFactor: number = 32): number {
    const expectedScore = 1 / (1 + Math.pow(10, (opponentElo - playerElo) / 400));
    const actualScore = won ? 1 : 0;
    return Math.round(kFactor * (actualScore - expectedScore));
  }

  async getPlayerStats(userId: string): Promise<PlayerStats | null> {
    const query = `
      SELECT u.id as user_id, u.username, u.elo_rating, p.avatar,
             COUNT(mp.match_id) as total_matches,
             COUNT(CASE WHEN m.winner_team = mp.team THEN 1 END) as wins,
             COUNT(CASE WHEN m.winner_team != mp.team AND m.winner_team IS NOT NULL THEN 1 END) as losses,
             COALESCE(MAX(m.waves_survived), 0) as highest_wave,
             COALESCE(SUM(mp.enemies_killed), 0) as total_kills,
             COALESCE(SUM(mp.damage_dealt), 0) as total_damage
      FROM users u
      LEFT JOIN user_profiles p ON u.id = p.user_id
      LEFT JOIN match_participants mp ON u.id = mp.user_id
      LEFT JOIN matches m ON mp.match_id = m.id
      WHERE u.id = $1
      GROUP BY u.id, u.username, u.elo_rating, p.avatar
    `;
    const res = await this.dbClient.query(query, [userId]);
    if (res.rows.length === 0) return null;
    const row = res.rows[0];

    const totalMatches = parseInt(row.total_matches, 10) || 0;
    const wins = parseInt(row.wins, 10) || 0;
    const losses = parseInt(row.losses, 10) || 0;
    const winRate = totalMatches > 0 ? Math.round((wins / totalMatches) * 100) : 0;

    return {
      userId: row.user_id,
      username: row.username,
      avatar: row.avatar || 'default_avatar',
      eloRating: row.elo_rating,
      totalMatches,
      wins,
      losses,
      winRate,
      highestWave: parseInt(row.highest_wave, 10) || 0,
      totalKills: parseInt(row.total_kills, 10) || 0,
      totalDamageDealt: parseInt(row.total_damage, 10) || 0,
    };
  }

  async recordMatchStats(
    userId: string,
    delta: {
      isWin: boolean;
      damageDealt: number;
      kills: number;
      wavesSurvived: number;
      eloDelta: number;
    },
  ): Promise<PlayerStats> {
    await this.dbClient.query(
      `UPDATE users
       SET elo_rating = GREATEST(100, elo_rating + $1), updated_at = CURRENT_TIMESTAMP
       WHERE id = $2`,
      [delta.eloDelta, userId],
    );

    const stats = await this.getPlayerStats(userId);
    if (!stats) throw new Error(`User ${userId} not found`);
    return stats;
  }
}

export const defaultStatsRepository: IStatsRepository =
  process.env.NODE_ENV === 'test' || !process.env.DATABASE_URL
    ? new InMemoryStatsRepository()
    : new PostgresStatsRepository();
