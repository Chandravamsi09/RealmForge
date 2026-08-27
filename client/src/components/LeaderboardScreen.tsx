import React, { useState, useEffect } from 'react';
import { LeaderboardCategory, LeaderboardEntry } from '@realmforge/shared';
import { Trophy, Medal, Crown } from 'lucide-react';

export const LeaderboardScreen: React.FC = () => {
  const [category, setCategory] = useState<LeaderboardCategory>(LeaderboardCategory.ELO);
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/leaderboard?category=${category}&limit=50`);
        if (res.ok) {
          const data = await res.json();
          setEntries(data.leaderboard || []);
        }
      } catch {
        // Mock fallback data for display
        setEntries([
          { rank: 1, userId: 'u1', username: 'ArchmageVanguard', avatar: 'avatar_1', eloRating: 2450, wins: 184, highestWave: 55, totalMatches: 210 },
          { rank: 2, userId: 'u2', username: 'StormForged', avatar: 'avatar_2', eloRating: 2310, wins: 142, highestWave: 48, totalMatches: 170 },
          { rank: 3, userId: 'u3', username: 'ShadowSniper', avatar: 'avatar_3', eloRating: 2180, wins: 119, highestWave: 42, totalMatches: 155 },
          { rank: 4, userId: 'u4', username: 'IronBastion', avatar: 'avatar_4', eloRating: 1980, wins: 95, highestWave: 36, totalMatches: 120 },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchLeaderboard();
  }, [category]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Title */}
      <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl">
            <Trophy className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white">Global Hall of Fame</h1>
            <p className="text-xs text-slate-400">The most accomplished tacticians in the Realm.</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex space-x-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
          {(['ELO', 'WINS', 'HIGHEST_WAVE'] as LeaderboardCategory[]).map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                category === cat ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat === 'ELO' ? 'Rating' : cat === 'WINS' ? 'Victories' : 'Max Wave'}
            </button>
          ))}
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-950/70 border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            <tr>
              <th className="py-3.5 px-6">Rank</th>
              <th className="py-3.5 px-6">Guardian</th>
              <th className="py-3.5 px-6 text-center">ELO Rating</th>
              <th className="py-3.5 px-6 text-center">Wins</th>
              <th className="py-3.5 px-6 text-right">Highest Wave</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-medium">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-slate-500">
                  Retrieving ranked records...
                </td>
              </tr>
            ) : entries.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-slate-500">
                  No records registered yet. Play a match to claim the crown!
                </td>
              </tr>
            ) : (
              entries.map(row => (
                <tr key={row.userId} className="hover:bg-slate-800/40 transition">
                  <td className="py-4 px-6 font-bold flex items-center space-x-2">
                    {row.rank === 1 ? (
                      <Crown className="w-5 h-5 text-yellow-400" />
                    ) : row.rank === 2 ? (
                      <Medal className="w-5 h-5 text-slate-300" />
                    ) : row.rank === 3 ? (
                      <Medal className="w-5 h-5 text-amber-600" />
                    ) : (
                      <span className="text-slate-400 pl-1.5">#{row.rank}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-white font-bold">{row.username}</td>
                  <td className="py-4 px-6 text-center font-mono font-bold text-amber-400">{row.eloRating}</td>
                  <td className="py-4 px-6 text-center text-emerald-400 font-semibold">{row.wins}</td>
                  <td className="py-4 px-6 text-right font-mono font-bold text-cyan-400">Wave {row.highestWave}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
