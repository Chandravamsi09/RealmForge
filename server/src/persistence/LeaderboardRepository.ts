import { LeaderboardCategory, LeaderboardEntry } from '@realmforge/shared';
import { db, IDatabaseClient } from '../db/connection';
import { InMemoryStatsRepository } from './StatsRepository';

export interface ILeaderboardRepository {
  getTopPlayers(category: LeaderboardCategory, limit?: number, offset?: number): Promise<LeaderboardEntry[]>;
}

export class InMemoryLeaderboardRepository implements ILeaderboardRepository {
  constructor(private statsRepo: InMemoryStatsRepository) {}

  async getTopPlayers(
    category: LeaderboardCategory = LeaderboardCategory.ELO,
    limit: number = 50,
    offset: number = 0,
  ): Promise<LeaderboardEntry[]> {
    const all = this.statsRepo.getAllStats();

    all.sort((a, b) => {
      if (category === LeaderboardCategory.WINS) return b.wins - a.wins;
      if (category === LeaderboardCategory.HIGHEST_WAVE) return b.highestWave - a.highestWave;
      return b.eloRating - a.eloRating;
    });

    const paged = all.slice(offset, offset + limit);
    return paged.map((s, idx) => ({
      rank: offset + idx + 1,
      userId: s.userId,
      username: s.username,
      avatar: s.avatar,
      eloRating: s.eloRating,
      wins: s.wins,
      highestWave: s.highestWave,
      totalMatches: s.totalMatches,
    }));
  }
}

export class PostgresLeaderboardRepository implements ILeaderboardRepository {
  constructor(private dbClient: IDatabaseClient = db) {}

  async getTopPlayers(
    category: LeaderboardCategory = LeaderboardCategory.ELO,
    limit: number = 50,
    offset: number = 0,
  ): Promise<LeaderboardEntry[]> {
    let orderClause = 'u.elo_rating DESC';
    if (category === LeaderboardCategory.WINS) {
      orderClause = 'wins DESC, u.elo_rating DESC';
    } else if (category === LeaderboardCategory.HIGHEST_WAVE) {
      orderClause = 'highest_wave DESC, u.elo_rating DESC';
    }

    const query = `
      SELECT u.id as user_id, u.username, u.elo_rating, p.avatar,
             COUNT(CASE WHEN m.winner_team = mp.team THEN 1 END) as wins,
             COALESCE(MAX(m.waves_survived), 0) as highest_wave,
             COUNT(mp.match_id) as total_matches
      FROM users u
      LEFT JOIN user_profiles p ON u.id = p.user_id
      LEFT JOIN match_participants mp ON u.id = mp.user_id
      LEFT JOIN matches m ON mp.match_id = m.id
      WHERE u.is_banned = FALSE
      GROUP BY u.id, u.username, u.elo_rating, p.avatar
      ORDER BY ${orderClause}
      LIMIT $1 OFFSET $2
    `;

    const res = await this.dbClient.query(query, [limit, offset]);
    return res.rows.map((row: any, idx: number) => ({
      rank: offset + idx + 1,
      userId: row.user_id,
      username: row.username,
      avatar: row.avatar || 'default_avatar',
      eloRating: row.elo_rating,
      wins: parseInt(row.wins, 10) || 0,
      highestWave: parseInt(row.highest_wave, 10) || 0,
      totalMatches: parseInt(row.total_matches, 10) || 0,
    }));
  }
}

export const defaultLeaderboardRepository: ILeaderboardRepository = new PostgresLeaderboardRepository(db);
