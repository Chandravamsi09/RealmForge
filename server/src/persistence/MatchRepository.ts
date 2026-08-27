import {
  MatchRecord,
  MatchParticipantRecord,
  MatchSummaryWithParticipants,
  GameMode,
} from '@realmforge/shared';
import { db, IDatabaseClient } from '../db/connection';
import crypto from 'crypto';

export interface IMatchRepository {
  createMatch(mode: GameMode, mapId: string): Promise<MatchRecord>;
  finalizeMatch(
    matchId: string,
    summary: {
      durationSeconds: number;
      wavesSurvived: number;
      winnerTeam?: number;
      participants: Array<Omit<MatchParticipantRecord, 'matchId'>>;
    },
  ): Promise<MatchSummaryWithParticipants>;
  getMatchById(matchId: string): Promise<MatchSummaryWithParticipants | null>;
  getUserMatchHistory(userId: string, limit?: number, offset?: number): Promise<MatchSummaryWithParticipants[]>;
}

export class InMemoryMatchRepository implements IMatchRepository {
  private matches: Map<string, MatchRecord> = new Map();
  private participants: Map<string, MatchParticipantRecord[]> = new Map();

  async createMatch(mode: GameMode, mapId: string): Promise<MatchRecord> {
    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    const record: MatchRecord = {
      id,
      mode,
      mapId,
      status: 'IN_PROGRESS',
      durationSeconds: 0,
      wavesSurvived: 0,
      createdAt: now,
    };
    this.matches.set(id, record);
    this.participants.set(id, []);
    return { ...record };
  }

  async finalizeMatch(
    matchId: string,
    summary: {
      durationSeconds: number;
      wavesSurvived: number;
      winnerTeam?: number;
      participants: Array<Omit<MatchParticipantRecord, 'matchId'>>;
    },
  ): Promise<MatchSummaryWithParticipants> {
    const match = this.matches.get(matchId);
    if (!match) throw new Error(`Match ${matchId} not found`);

    match.durationSeconds = summary.durationSeconds;
    match.wavesSurvived = summary.wavesSurvived;
    match.winnerTeam = summary.winnerTeam;
    match.status = 'COMPLETED';
    match.endedAt = new Date().toISOString();

    const participantRecords: MatchParticipantRecord[] = summary.participants.map(p => ({
      ...p,
      matchId,
    }));
    this.participants.set(matchId, participantRecords);

    return {
      ...match,
      participants: participantRecords,
    };
  }

  async getMatchById(matchId: string): Promise<MatchSummaryWithParticipants | null> {
    const match = this.matches.get(matchId);
    if (!match) return null;
    return {
      ...match,
      participants: this.participants.get(matchId) || [],
    };
  }

  async getUserMatchHistory(
    userId: string,
    limit: number = 20,
    offset: number = 0,
  ): Promise<MatchSummaryWithParticipants[]> {
    const matchingMatches: MatchSummaryWithParticipants[] = [];

    for (const [matchId, pList] of this.participants.entries()) {
      if (pList.some(p => p.userId === userId)) {
        const match = this.matches.get(matchId);
        if (match) {
          matchingMatches.push({ ...match, participants: pList });
        }
      }
    }

    matchingMatches.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return matchingMatches.slice(offset, offset + limit);
  }

  clear(): void {
    this.matches.clear();
    this.participants.clear();
  }
}

export class PostgresMatchRepository implements IMatchRepository {
  constructor(private dbClient: IDatabaseClient = db) {}

  async createMatch(mode: GameMode, mapId: string): Promise<MatchRecord> {
    const query = `
      INSERT INTO matches (mode, map_id, status)
      VALUES ($1, $2, 'IN_PROGRESS')
      RETURNING id, mode, map_id, status, duration_seconds, waves_survived, created_at
    `;
    const res = await this.dbClient.query(query, [mode, mapId]);
    const row = res.rows[0];
    return {
      id: row.id,
      mode: row.mode,
      mapId: row.map_id,
      status: row.status,
      durationSeconds: row.duration_seconds || 0,
      wavesSurvived: row.waves_survived || 0,
      createdAt: row.created_at.toISOString(),
    };
  }

  async finalizeMatch(
    matchId: string,
    summary: {
      durationSeconds: number;
      wavesSurvived: number;
      winnerTeam?: number;
      participants: Array<Omit<MatchParticipantRecord, 'matchId'>>;
    },
  ): Promise<MatchSummaryWithParticipants> {
    const client = await this.dbClient.getClient();
    try {
      await client.query('BEGIN');

      // Update match record
      const matchQuery = `
        UPDATE matches
        SET duration_seconds = $1, waves_survived = $2, winner_team = $3, status = 'COMPLETED', ended_at = CURRENT_TIMESTAMP
        WHERE id = $4
        RETURNING id, mode, map_id, status, duration_seconds, waves_survived, winner_team, created_at, ended_at
      `;
      const matchRes = await client.query(matchQuery, [
        summary.durationSeconds,
        summary.wavesSurvived,
        summary.winnerTeam || null,
        matchId,
      ]);
      const matchRow = matchRes.rows[0];

      // Insert participants
      const participantRecords: MatchParticipantRecord[] = [];
      for (const p of summary.participants) {
        const pQuery = `
          INSERT INTO match_participants (match_id, user_id, username, team, damage_dealt, towers_placed, enemies_killed, gold_earned, score, elo_delta)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
          RETURNING match_id, user_id, username, team, damage_dealt, towers_placed, enemies_killed, gold_earned, score, elo_delta
        `;
        const pRes = await client.query(pQuery, [
          matchId,
          p.userId,
          p.username,
          p.team,
          p.damageDealt,
          p.towersPlaced,
          p.enemiesKilled,
          p.goldEarned,
          p.score,
          p.eloDelta,
        ]);
        const pRow = pRes.rows[0];
        participantRecords.push({
          matchId: pRow.match_id,
          userId: pRow.user_id,
          username: pRow.username,
          team: pRow.team,
          damageDealt: pRow.damage_dealt,
          towersPlaced: pRow.towers_placed,
          enemiesKilled: pRow.enemies_killed,
          goldEarned: pRow.gold_earned,
          score: pRow.score,
          eloDelta: pRow.elo_delta,
        });
      }

      await client.query('COMMIT');

      return {
        id: matchRow.id,
        mode: matchRow.mode,
        mapId: matchRow.map_id,
        status: matchRow.status,
        durationSeconds: matchRow.duration_seconds,
        wavesSurvived: matchRow.waves_survived,
        winnerTeam: matchRow.winner_team,
        createdAt: matchRow.created_at.toISOString(),
        endedAt: matchRow.ended_at?.toISOString(),
        participants: participantRecords,
      };
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  }

  async getMatchById(matchId: string): Promise<MatchSummaryWithParticipants | null> {
    const matchRes = await this.dbClient.query(
      `SELECT id, mode, map_id, status, duration_seconds, waves_survived, winner_team, created_at, ended_at
       FROM matches WHERE id = $1`,
      [matchId],
    );
    if (matchRes.rows.length === 0) return null;
    const matchRow = matchRes.rows[0];

    const pRes = await this.dbClient.query(
      `SELECT match_id, user_id, username, team, damage_dealt, towers_placed, enemies_killed, gold_earned, score, elo_delta
       FROM match_participants WHERE match_id = $1`,
      [matchId],
    );

    return {
      id: matchRow.id,
      mode: matchRow.mode,
      mapId: matchRow.map_id,
      status: matchRow.status,
      durationSeconds: matchRow.duration_seconds,
      wavesSurvived: matchRow.waves_survived,
      winnerTeam: matchRow.winner_team,
      createdAt: matchRow.created_at.toISOString(),
      endedAt: matchRow.ended_at?.toISOString(),
      participants: pRes.rows.map((r: any) => ({
        matchId: r.match_id,
        userId: r.user_id,
        username: r.username,
        team: r.team,
        damageDealt: r.damage_dealt,
        towersPlaced: r.towers_placed,
        enemiesKilled: r.enemies_killed,
        goldEarned: r.gold_earned,
        score: r.score,
        eloDelta: r.elo_delta,
      })),
    };
  }

  async getUserMatchHistory(
    userId: string,
    limit: number = 20,
    offset: number = 0,
  ): Promise<MatchSummaryWithParticipants[]> {
    const res = await this.dbClient.query(
      `SELECT DISTINCT m.id, m.mode, m.map_id, m.status, m.duration_seconds, m.waves_survived, m.winner_team, m.created_at, m.ended_at
       FROM matches m
       JOIN match_participants p ON m.id = p.match_id
       WHERE p.user_id = $1
       ORDER BY m.created_at DESC
       LIMIT $2 OFFSET $3`,
      [userId, limit, offset],
    );

    const matches: MatchSummaryWithParticipants[] = [];
    for (const row of res.rows) {
      const match = await this.getMatchById(row.id);
      if (match) matches.push(match);
    }

    return matches;
  }
}

export const defaultMatchRepository: IMatchRepository =
  process.env.NODE_ENV === 'test' || !process.env.DATABASE_URL
    ? new InMemoryMatchRepository()
    : new PostgresMatchRepository();
