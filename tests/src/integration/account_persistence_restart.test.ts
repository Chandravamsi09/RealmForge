import fs from 'fs';
import path from 'path';
import { AuthService, PostgresUserRepository, runMigrations } from '@realmforge/server';

describe('Account Persistence and Server Restart Resilience', () => {
  const dbFile = path.resolve(__dirname, '../../../server/data/realmforge.db');
  const rand = Math.floor(Math.random() * 1000000);
  const testUsername = `persist_user_${rand}`;
  const testEmail = `persist_${rand}@example.com`;
  const testPassword = 'StrongSecretPassword123!';
  let createdUserId: string;

  it('TEST 1 - CREATE & PERSIST: creates account, hashes password, saves to persistent database and logs in', async () => {
    // 1. Initialize first server/auth instance
    const { db } = require('@realmforge/server/db/connection');
    await runMigrations(db);

    const userRepo1 = new PostgresUserRepository(db);
    const auth1 = new AuthService(userRepo1);

    // 2. Signup new user
    const signupRes = await auth1.signup({
      username: testUsername,
      email: testEmail,
      password: testPassword,
    });

    expect(signupRes.user).toBeDefined();
    expect(signupRes.user.id).toBeDefined();
    expect(signupRes.user.username).toBe(testUsername);
    expect(signupRes.user.email).toBe(testEmail);
    expect(signupRes.user.profile.gold).toBe(500);
    expect(signupRes.tokens.accessToken).toBeDefined();

    createdUserId = signupRes.user.id;

    // Verify password is NOT plaintext in database
    const passwordHashInDb = await userRepo1.getPasswordHash(createdUserId);
    expect(passwordHashInDb).not.toBe(testPassword);
    expect(passwordHashInDb).toMatch(/^\$2[aby]\$\d+\$/); // Valid bcrypt hash
    expect((signupRes.user as any).password).toBeUndefined();
    expect((signupRes.user as any).passwordHash).toBeUndefined();

    // 3. Login using username
    const loginUsernameRes = await auth1.login({
      usernameOrEmail: testUsername,
      password: testPassword,
    });
    expect(loginUsernameRes.user.id).toBe(createdUserId);

    // 4. Login using email
    const loginEmailRes = await auth1.login({
      usernameOrEmail: testEmail,
      password: testPassword,
    });
    expect(loginEmailRes.user.id).toBe(createdUserId);
  });

  it('TEST 2 & 4 - BACKEND RESTART & DATA PERSISTENCE: account survives server termination and restarts seamlessly', async () => {
    // Verify SQLite file exists on disk
    expect(fs.existsSync(dbFile)).toBe(true);

    // Simulate COMPLETE backend shutdown & restart:
    // Create entirely new database client connection to the existing database file on disk
    const { DatabaseSync } = require('node:sqlite');
    const restartedSqlite = new DatabaseSync(dbFile);

    const restartedDbClient = {
      query: async (text: string, params: any[] = []) => {
        let translated = text.replace(/\$(\d+)/g, '?')
          .replace(/GREATEST\s*\(/gi, 'MAX(')
          .replace(/\bUUID\b/gi, 'TEXT')
          .replace(/\bVARCHAR\(\d+\)/gi, 'TEXT')
          .replace(/\bTIMESTAMP WITH TIME ZONE\b/gi, 'TEXT')
          .replace(/\bBOOLEAN\b/gi, 'INTEGER');

        const upper = translated.toUpperCase().trim();
        if (upper === 'BEGIN' || upper === 'COMMIT' || upper === 'ROLLBACK') {
          restartedSqlite.exec(translated);
          return { rows: [], command: upper, rowCount: 0, oid: 0, fields: [] };
        }

        const isSelect = upper.startsWith('SELECT') || upper.includes(' RETURNING ');
        const stmt = restartedSqlite.prepare(translated);
        if (isSelect) {
          const rows = stmt.all(...params);
          return { rows, command: 'SELECT', rowCount: rows.length, oid: 0, fields: [] };
        } else {
          const result = stmt.run(...params);
          return { rows: [] as any[], command: 'RUN', rowCount: result.changes || 0, oid: 0, fields: [] };
        }
      },
      getClient: async () => ({
        query: async (t: string, p?: any[]) => restartedDbClient.query(t, p),
        release: () => {},
      }),
      end: async () => restartedSqlite.close(),
      isPersistent: () => true,
    };

    const userRepo2 = new PostgresUserRepository(restartedDbClient as any);
    const auth2 = new AuthService(userRepo2);

    // Login with the credentials created before restart
    const postRestartLogin = await auth2.login({
      usernameOrEmail: testUsername,
      password: testPassword,
    });

    expect(postRestartLogin.user).toBeDefined();
    expect(postRestartLogin.user.id).toBe(createdUserId);
    expect(postRestartLogin.user.username).toBe(testUsername);
    expect(postRestartLogin.user.email).toBe(testEmail);
    expect(postRestartLogin.user.profile.level).toBe(1);
    expect(postRestartLogin.user.profile.gold).toBe(500);

    // Rejection of invalid credentials
    await expect(
      auth2.login({
        usernameOrEmail: testUsername,
        password: 'WrongPassword123!',
      }),
    ).rejects.toThrow('Invalid credentials');

    await restartedDbClient.end();
  });

  it('TEST 3 - DUPLICATE ACCOUNT REJECTION: duplicate username and duplicate email are rejected', async () => {
    const { db } = require('@realmforge/server/db/connection');
    const userRepo = new PostgresUserRepository(db);
    const auth = new AuthService(userRepo);

    // Attempt to signup with identical username
    await expect(
      auth.signup({
        username: testUsername,
        email: `different_${rand}@example.com`,
        password: testPassword,
      }),
    ).rejects.toThrow('Username is already taken');

    // Attempt to signup with identical email
    await expect(
      auth.signup({
        username: `different_${rand}`,
        email: testEmail,
        password: testPassword,
      }),
    ).rejects.toThrow('Email is already registered');
  });
});
