import Redis from 'ioredis';

export interface IRedisClient {
  zadd(key: string, score: number, member: string): Promise<number>;
  zrem(key: string, member: string): Promise<number>;
  zrangebyscore(key: string, min: number | string, max: number | string): Promise<string[]>;
  zcard(key: string): Promise<number>;
  set(key: string, value: string, mode?: string, duration?: number): Promise<any>;
  get(key: string): Promise<string | null>;
  del(key: string): Promise<number>;
}

// In-Memory Redis Mock for standalone test isolation
export class InMemoryRedisClient implements IRedisClient {
  private sortedSets: Map<string, Map<string, number>> = new Map();
  private stringStore: Map<string, string> = new Map();

  async zadd(key: string, score: number, member: string): Promise<number> {
    let set = this.sortedSets.get(key);
    if (!set) {
      set = new Map();
      this.sortedSets.set(key, set);
    }
    const isNew = !set.has(member);
    set.set(member, score);
    return isNew ? 1 : 0;
  }

  async zrem(key: string, member: string): Promise<number> {
    const set = this.sortedSets.get(key);
    if (!set || !set.has(member)) return 0;
    set.delete(member);
    return 1;
  }

  async zrangebyscore(key: string, min: number | string, max: number | string): Promise<string[]> {
    const set = this.sortedSets.get(key);
    if (!set) return [];

    const minNum = min === '-inf' ? -Infinity : typeof min === 'number' ? min : parseFloat(min);
    const maxNum = max === '+inf' ? Infinity : typeof max === 'number' ? max : parseFloat(max);

    const matches: Array<{ member: string; score: number }> = [];
    for (const [member, score] of set.entries()) {
      if (score >= minNum && score <= maxNum) {
        matches.push({ member, score });
      }
    }

    matches.sort((a, b) => a.score - b.score);
    return matches.map(m => m.member);
  }

  async zcard(key: string): Promise<number> {
    const set = this.sortedSets.get(key);
    return set ? set.size : 0;
  }

  async set(key: string, value: string): Promise<'OK'> {
    this.stringStore.set(key, value);
    return 'OK';
  }

  async get(key: string): Promise<string | null> {
    return this.stringStore.get(key) || null;
  }

  async del(key: string): Promise<number> {
    let count = 0;
    if (this.sortedSets.delete(key)) count++;
    if (this.stringStore.delete(key)) count++;
    return count;
  }

  clear(): void {
    this.sortedSets.clear();
    this.stringStore.clear();
  }
}

// Real ioredis Client
export class IoRedisClientWrapper implements IRedisClient {
  private client: Redis;

  constructor() {
    const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
    this.client = new Redis(redisUrl, { lazyConnect: true, maxRetriesPerRequest: 1 });
  }

  async zadd(key: string, score: number, member: string): Promise<number> {
    return this.client.zadd(key, score, member);
  }

  async zrem(key: string, member: string): Promise<number> {
    return this.client.zrem(key, member);
  }

  async zrangebyscore(key: string, min: number | string, max: number | string): Promise<string[]> {
    return this.client.zrangebyscore(key, min, max);
  }

  async zcard(key: string): Promise<number> {
    return this.client.zcard(key);
  }

  async set(key: string, value: string, mode?: string, duration?: number): Promise<any> {
    if (mode && duration) {
      return this.client.set(key, value, mode as any, duration);
    }
    return this.client.set(key, value);
  }

  async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  async del(key: string): Promise<number> {
    return this.client.del(key);
  }
}

export const defaultRedisClient: IRedisClient =
  process.env.NODE_ENV === 'test' || !process.env.REDIS_URL
    ? new InMemoryRedisClient()
    : new IoRedisClientWrapper();
