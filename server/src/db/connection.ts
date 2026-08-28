import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { Pool, QueryResult, QueryResultRow } from 'pg';

// Load environment variables from project root .env if present
const rootEnvPath = path.resolve(__dirname, '../../../.env');
if (fs.existsSync(rootEnvPath)) {
  dotenv.config({ path: rootEnvPath });
} else {
  dotenv.config();
}

export interface IDatabaseClient {
  query<T extends QueryResultRow = any>(text: string, params?: any[]): Promise<QueryResult<T>>;
  getClient(): Promise<any>;
  end(): Promise<void>;
  isPersistent(): boolean;
}

// PostgreSQL Implementation
class PostgresDatabaseClient implements IDatabaseClient {
  private pool: Pool;

  constructor() {
    const connectionString = process.env.DATABASE_URL;
    if (connectionString) {
      this.pool = new Pool({ connectionString });
    } else {
      this.pool = new Pool({
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '5432', 10),
        database: process.env.DB_NAME || 'realmforge_dev',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres_dev_password',
      });
    }
  }

  async query<T extends QueryResultRow = any>(text: string, params?: any[]): Promise<QueryResult<T>> {
    return this.pool.query<T>(text, params);
  }

  async getClient(): Promise<any> {
    return this.pool.connect();
  }

  async end(): Promise<void> {
    await this.pool.end();
  }

  isPersistent(): boolean {
    return true;
  }
}

// Persistent On-Disk SQLite Implementation for Zero-Config Standalone Operation
class SqliteDatabaseClient implements IDatabaseClient {
  private sqliteDb: any;
  private dbPath: string;

  constructor() {
    const dataDir = path.resolve(__dirname, '../../data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    this.dbPath = process.env.SQLITE_DB_PATH || path.join(dataDir, 'realmforge.db');
    const { DatabaseSync } = require('node:sqlite');
    this.sqliteDb = new DatabaseSync(this.dbPath);

    // Enable WAL mode for high concurrency and performance
    this.sqliteDb.exec('PRAGMA journal_mode = WAL;');
    this.sqliteDb.exec('PRAGMA foreign_keys = ON;');
    this.sqliteDb.exec('PRAGMA busy_timeout = 5000;');
  }

  private translateSql(sql: string): string {
    // Replace PostgreSQL parameter markers ($1, $2, ...) with standard SQLite '?'
    let translated = sql.replace(/\$(\d+)/g, '?');
    // Replace GREATEST(a, b) with MAX(a, b)
    translated = translated.replace(/GREATEST\s*\(/gi, 'MAX(');
    // Replace UUID with TEXT
    translated = translated.replace(/\bUUID\b/gi, 'TEXT');
    // Replace VARCHAR(...) with TEXT
    translated = translated.replace(/\bVARCHAR\(\d+\)/gi, 'TEXT');
    // Replace TIMESTAMP WITH TIME ZONE with TEXT
    translated = translated.replace(/\bTIMESTAMP WITH TIME ZONE\b/gi, 'TEXT');
    // Replace gen_random_uuid() with hex random or literal
    translated = translated.replace(/\bDEFAULT\s+gen_random_uuid\(\)/gi, '');
    // Replace BOOLEAN with INTEGER
    translated = translated.replace(/\bBOOLEAN\b/gi, 'INTEGER');
    // Replace TRUE/FALSE in defaults
    translated = translated.replace(/\bDEFAULT\s+TRUE\b/gi, 'DEFAULT 1');
    translated = translated.replace(/\bDEFAULT\s+FALSE\b/gi, 'DEFAULT 0');
    return translated;
  }

  async query<T extends QueryResultRow = any>(text: string, params: any[] = []): Promise<QueryResult<T>> {
    const cleanText = text.trim();

    // Check if query is a multi-statement transaction / schema migration
    if (cleanText.includes(';') && (cleanText.toUpperCase().includes('CREATE TABLE') || cleanText.toUpperCase().includes('CREATE INDEX'))) {
      const statements = cleanText.split(';').map(s => s.trim()).filter(s => s.length > 0);
      for (const stmt of statements) {
        const translatedStmt = this.translateSql(stmt);
        this.sqliteDb.exec(translatedStmt);
      }
      return {
        rows: [] as T[],
        command: 'EXEC',
        rowCount: 0,
        oid: 0,
        fields: [],
      };
    }

    const translated = this.translateSql(cleanText);

    // Handle transaction commands
    const upper = translated.toUpperCase().trim();
    if (upper === 'BEGIN' || upper === 'COMMIT' || upper === 'ROLLBACK') {
      this.sqliteDb.exec(translated);
      return {
        rows: [] as T[],
        command: upper,
        rowCount: 0,
        oid: 0,
        fields: [],
      };
    }

    const isSelect = upper.startsWith('SELECT') || upper.includes(' RETURNING ');

    try {
      const stmt = this.sqliteDb.prepare(translated);
      if (isSelect) {
        const rows = stmt.all(...params);
        return {
          rows: rows as T[],
          command: 'SELECT',
          rowCount: rows.length,
          oid: 0,
          fields: [],
        };
      } else {
        const result = stmt.run(...params);
        return {
          rows: [] as T[],
          command: 'RUN',
          rowCount: result.changes || 0,
          oid: 0,
          fields: [],
        };
      }
    } catch (err: any) {
      throw new Error(`[SQLite Database Error] ${err.message} in query: ${translated}`);
    }
  }

  async getClient(): Promise<any> {
    return {
      query: (text: string, params?: any[]) => this.query(text, params),
      release: () => {},
    };
  }

  async end(): Promise<void> {
    this.sqliteDb.close();
  }

  isPersistent(): boolean {
    return true;
  }
}

// Database Selector: Always persistent on disk
function createDatabaseClient(): IDatabaseClient {
  // If explicitly configured for PostgreSQL and PG is enabled, try Postgres
  if (process.env.DB_TYPE === 'postgres' && process.env.DATABASE_URL) {
    try {
      return new PostgresDatabaseClient();
    } catch {
      console.warn('[RealmForge DB] PostgreSQL unavailable, falling back to persistent on-disk SQLite.');
      return new SqliteDatabaseClient();
    }
  }

  // Default to robust on-disk SQLite for persistent standalone and development runtime
  return new SqliteDatabaseClient();
}

export const db: IDatabaseClient = createDatabaseClient();
