import { UserProfile, UserRole, UserWithProfile } from '@realmforge/shared';
import { db, IDatabaseClient } from '../db/connection';
import crypto from 'crypto';

export interface IUserRepository {
  findByUsername(username: string): Promise<UserWithProfile | null>;
  findByEmail(email: string): Promise<UserWithProfile | null>;
  findById(id: string): Promise<UserWithProfile | null>;
  create(userData: {
    username: string;
    email: string;
    passwordHash: string;
    role?: UserRole;
  }): Promise<UserWithProfile>;
  getPasswordHash(userId: string): Promise<string | null>;
  updateElo(userId: string, newElo: number): Promise<void>;
  updateProfile(userId: string, updates: Partial<UserProfile>): Promise<UserProfile>;
}

// In-Memory Repository implementation for tests and standalone mode
export class InMemoryUserRepository implements IUserRepository {
  private users: Map<string, UserWithProfile> = new Map();
  private passwordHashes: Map<string, string> = new Map();

  async findByUsername(username: string): Promise<UserWithProfile | null> {
    const user = Array.from(this.users.values()).find(
      u => u.username.toLowerCase() === username.toLowerCase(),
    );
    return user ? JSON.parse(JSON.stringify(user)) : null;
  }

  async findByEmail(email: string): Promise<UserWithProfile | null> {
    const user = Array.from(this.users.values()).find(
      u => u.email.toLowerCase() === email.toLowerCase(),
    );
    return user ? JSON.parse(JSON.stringify(user)) : null;
  }

  async findById(id: string): Promise<UserWithProfile | null> {
    const user = this.users.get(id);
    return user ? JSON.parse(JSON.stringify(user)) : null;
  }

  async create(userData: {
    username: string;
    email: string;
    passwordHash: string;
    role?: UserRole;
  }): Promise<UserWithProfile> {
    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    const role = userData.role || UserRole.PLAYER;

    const profile: UserProfile = {
      userId: id,
      avatar: 'default_avatar',
      level: 1,
      xp: 0,
      gold: 500,
      gems: 50,
    };

    const newUser: UserWithProfile = {
      id,
      username: userData.username,
      email: userData.email.toLowerCase(),
      role,
      eloRating: 1000,
      isBanned: false,
      createdAt: now,
      updatedAt: now,
      profile,
    };

    this.users.set(id, newUser);
    this.passwordHashes.set(id, userData.passwordHash);
    return JSON.parse(JSON.stringify(newUser));
  }

  async getPasswordHash(userId: string): Promise<string | null> {
    return this.passwordHashes.get(userId) || null;
  }

  async updateElo(userId: string, newElo: number): Promise<void> {
    const user = this.users.get(userId);
    if (user) {
      user.eloRating = newElo;
      user.updatedAt = new Date().toISOString();
    }
  }

  async updateProfile(userId: string, updates: Partial<UserProfile>): Promise<UserProfile> {
    const user = this.users.get(userId);
    if (!user) {
      throw new Error(`User ${userId} not found`);
    }
    Object.assign(user.profile, updates);
    user.updatedAt = new Date().toISOString();
    return JSON.parse(JSON.stringify(user.profile));
  }

  clear(): void {
    this.users.clear();
    this.passwordHashes.clear();
  }
}

// PostgreSQL Repository Implementation
export class PostgresUserRepository implements IUserRepository {
  constructor(private dbClient: IDatabaseClient = db) {}

  async findByUsername(username: string): Promise<UserWithProfile | null> {
    const query = `
      SELECT u.id, u.username, u.email, u.role, u.elo_rating, u.is_banned, u.created_at, u.updated_at,
             p.avatar, p.level, p.xp, p.gold, p.gems
      FROM users u
      LEFT JOIN user_profiles p ON u.id = p.user_id
      WHERE LOWER(u.username) = LOWER($1)
    `;
    const res = await this.dbClient.query(query, [username]);
    if (res.rows.length === 0) return null;
    return this.mapRowToUserWithProfile(res.rows[0]);
  }

  async findByEmail(email: string): Promise<UserWithProfile | null> {
    const query = `
      SELECT u.id, u.username, u.email, u.role, u.elo_rating, u.is_banned, u.created_at, u.updated_at,
             p.avatar, p.level, p.xp, p.gold, p.gems
      FROM users u
      LEFT JOIN user_profiles p ON u.id = p.user_id
      WHERE LOWER(u.email) = LOWER($1)
    `;
    const res = await this.dbClient.query(query, [email]);
    if (res.rows.length === 0) return null;
    return this.mapRowToUserWithProfile(res.rows[0]);
  }

  async findById(id: string): Promise<UserWithProfile | null> {
    const query = `
      SELECT u.id, u.username, u.email, u.role, u.elo_rating, u.is_banned, u.created_at, u.updated_at,
             p.avatar, p.level, p.xp, p.gold, p.gems
      FROM users u
      LEFT JOIN user_profiles p ON u.id = p.user_id
      WHERE u.id = $1
    `;
    const res = await this.dbClient.query(query, [id]);
    if (res.rows.length === 0) return null;
    return this.mapRowToUserWithProfile(res.rows[0]);
  }

  async create(userData: {
    username: string;
    email: string;
    passwordHash: string;
    role?: UserRole;
  }): Promise<UserWithProfile> {
    const client = await this.dbClient.getClient();
    try {
      await client.query('BEGIN');
      const userRes = await client.query(
        `INSERT INTO users (username, email, password_hash, role)
         VALUES ($1, $2, $3, $4)
         RETURNING id, username, email, role, elo_rating, is_banned, created_at, updated_at`,
        [userData.username, userData.email.toLowerCase(), userData.passwordHash, userData.role || UserRole.PLAYER],
      );
      const userRow = userRes.rows[0];

      const profileRes = await client.query(
        `INSERT INTO user_profiles (user_id, avatar, level, xp, gold, gems)
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING avatar, level, xp, gold, gems`,
        [userRow.id, 'default_avatar', 1, 0, 500, 50],
      );
      const profileRow = profileRes.rows[0];

      await client.query('COMMIT');

      return {
        id: userRow.id,
        username: userRow.username,
        email: userRow.email,
        role: userRow.role,
        eloRating: userRow.elo_rating,
        isBanned: userRow.is_banned,
        createdAt: userRow.created_at.toISOString(),
        updatedAt: userRow.updated_at.toISOString(),
        profile: {
          userId: userRow.id,
          avatar: profileRow.avatar,
          level: profileRow.level,
          xp: profileRow.xp,
          gold: profileRow.gold,
          gems: profileRow.gems,
        },
      };
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  }

  async getPasswordHash(userId: string): Promise<string | null> {
    const res = await this.dbClient.query('SELECT password_hash FROM users WHERE id = $1', [userId]);
    if (res.rows.length === 0) return null;
    return res.rows[0].password_hash;
  }

  async updateElo(userId: string, newElo: number): Promise<void> {
    await this.dbClient.query(
      'UPDATE users SET elo_rating = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2',
      [newElo, userId],
    );
  }

  async updateProfile(userId: string, updates: Partial<UserProfile>): Promise<UserProfile> {
    const fields: string[] = [];
    const values: any[] = [];
    let idx = 1;

    if (updates.avatar !== undefined) {
      fields.push(`avatar = $${idx++}`);
      values.push(updates.avatar);
    }
    if (updates.level !== undefined) {
      fields.push(`level = $${idx++}`);
      values.push(updates.level);
    }
    if (updates.xp !== undefined) {
      fields.push(`xp = $${idx++}`);
      values.push(updates.xp);
    }
    if (updates.gold !== undefined) {
      fields.push(`gold = $${idx++}`);
      values.push(updates.gold);
    }
    if (updates.gems !== undefined) {
      fields.push(`gems = $${idx++}`);
      values.push(updates.gems);
    }

    fields.push(`updated_at = CURRENT_TIMESTAMP`);
    values.push(userId);

    const query = `
      UPDATE user_profiles
      SET ${fields.join(', ')}
      WHERE user_id = $${idx}
      RETURNING avatar, level, xp, gold, gems
    `;
    const res = await this.dbClient.query(query, values);
    const row = res.rows[0];
    return {
      userId,
      avatar: row.avatar,
      level: row.level,
      xp: row.xp,
      gold: row.gold,
      gems: row.gems,
    };
  }

  private mapRowToUserWithProfile(row: any): UserWithProfile {
    return {
      id: row.id,
      username: row.username,
      email: row.email,
      role: row.role,
      eloRating: row.elo_rating,
      isBanned: row.is_banned,
      createdAt: typeof row.created_at === 'string' ? row.created_at : row.created_at.toISOString(),
      updatedAt: typeof row.updated_at === 'string' ? row.updated_at : row.updated_at.toISOString(),
      profile: {
        userId: row.id,
        avatar: row.avatar,
        level: row.level,
        xp: row.xp,
        gold: row.gold,
        gems: row.gems,
      },
    };
  }
}

export const defaultUserRepository: IUserRepository =
  process.env.NODE_ENV === 'test' || !process.env.DATABASE_URL
    ? new InMemoryUserRepository()
    : new PostgresUserRepository();
