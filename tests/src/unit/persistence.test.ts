import { InMemoryMatchRepository } from '@realmforge/server/persistence/MatchRepository';
import { InMemoryStatsRepository } from '@realmforge/server/persistence/StatsRepository';
import { InMemoryLeaderboardRepository } from '@realmforge/server/persistence/LeaderboardRepository';
import { GameMode, LeaderboardCategory } from '@realmforge/shared';

describe('Persistence Layer Unit Tests', () => {
  describe('ELO Rating Calculation', () => {
    const statsRepo = new InMemoryStatsRepository();

    it('should award ~16 ELO for equal opponent win (K=32)', () => {
      const deltaWin = statsRepo.calculateEloDelta(1000, 1000, true, 32);
      expect(deltaWin).toBe(16);

      const deltaLoss = statsRepo.calculateEloDelta(1000, 1000, false, 32);
      expect(deltaLoss).toBe(-16);
    });

    it('should award high ELO when underdog beats high-ranked player', () => {
      const underdogWin = statsRepo.calculateEloDelta(1000, 1400, true, 32);
      expect(underdogWin).toBeGreaterThan(25); // Expected score was ~0.09, so ~29 points
    });
  });

  describe('Match & Stats Repositories', () => {
    let matchRepo: InMemoryMatchRepository;
    let statsRepo: InMemoryStatsRepository;
    let leaderboardRepo: InMemoryLeaderboardRepository;

    beforeEach(() => {
      matchRepo = new InMemoryMatchRepository();
      statsRepo = new InMemoryStatsRepository();
      statsRepo.clear();
      leaderboardRepo = new InMemoryLeaderboardRepository(statsRepo);
    });

    it('should create and atomically finalize match with participants', async () => {
      const match = await matchRepo.createMatch(GameMode.COOP_2P, 'forest_crossing');
      expect(match.id).toBeDefined();
      expect(match.status).toBe('IN_PROGRESS');

      const finalized = await matchRepo.finalizeMatch(match.id, {
        durationSeconds: 320,
        wavesSurvived: 15,
        winnerTeam: 1,
        participants: [
          {
            userId: 'user-1',
            username: 'Hero1',
            team: 1,
            damageDealt: 15000,
            towersPlaced: 8,
            enemiesKilled: 64,
            goldEarned: 2400,
            score: 1200,
            eloDelta: 24,
          },
        ],
      });

      expect(finalized.status).toBe('COMPLETED');
      expect(finalized.durationSeconds).toBe(320);
      expect(finalized.wavesSurvived).toBe(15);
      expect(finalized.participants.length).toBe(1);
      expect(finalized.participants[0]!.damageDealt).toBe(15000);

      // Verify retrieval by user history
      const history = await matchRepo.getUserMatchHistory('user-1');
      expect(history.length).toBe(1);
      expect(history[0]!.id).toBe(match.id);
    });

    it('should record player stats and rank leaderboards', async () => {
      await statsRepo.recordMatchStats('user-a', {
        isWin: true,
        damageDealt: 20000,
        kills: 100,
        wavesSurvived: 20,
        eloDelta: 30,
      });

      await statsRepo.recordMatchStats('user-b', {
        isWin: false,
        damageDealt: 5000,
        kills: 20,
        wavesSurvived: 5,
        eloDelta: -15,
      });

      const statsA = await statsRepo.getPlayerStats('user-a');
      expect(statsA?.wins).toBe(1);
      expect(statsA?.eloRating).toBe(1030);
      expect(statsA?.highestWave).toBe(20);

      // Leaderboard Query
      const topByElo = await leaderboardRepo.getTopPlayers(LeaderboardCategory.ELO);
      expect(topByElo.length).toBe(2);
      expect(topByElo[0]!.userId).toBe('user-a');
      expect(topByElo[0]!.rank).toBe(1);
      expect(topByElo[1]!.userId).toBe('user-b');
      expect(topByElo[1]!.rank).toBe(2);
    });
  });
});
