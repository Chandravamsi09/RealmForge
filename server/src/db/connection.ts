import { Pool, QueryResult, QueryResultRow } from 'pg';

export interface IDatabaseClient {
  query<T extends QueryResultRow = any>(text: string, params?: any[]): Promise<QueryResult<T>>;
  getClient(): Promise<any>;
  end(): Promise<void>;
}

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
}

export const db: IDatabaseClient = new PostgresDatabaseClient();
