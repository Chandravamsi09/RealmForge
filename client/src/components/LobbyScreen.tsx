import React, { useState } from 'react';
import { useGameSocket } from '../context/GameSocketContext';
import { useAuth } from '../context/AuthContext';
import { GameMode } from '@realmforge/shared';
import { Users, User, Play, Loader2, Plus, LogIn, CheckCircle2, Circle } from 'lucide-react';

interface LobbyScreenProps {
  onStartMatch: () => void;
}

export const LobbyScreen: React.FC<LobbyScreenProps> = ({ onStartMatch }) => {
  const { user } = useAuth();
  const {
    currentRoomId,
    roomPlayers,
    createRoom,
    joinRoom,
    setReady,
    isMatchmaking,
    matchmakingTime,
    startMatchmaking,
    cancelMatchmaking,
    leaveRoom,
  } = useGameSocket();

  const [selectedMode, setSelectedMode] = useState<GameMode>(GameMode.SOLO);
  const [customRoomInput, setCustomRoomInput] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isMeReady = roomPlayers.find(p => p.userId === user?.id)?.isReady || false;
  const isHost = roomPlayers.find(p => p.userId === user?.id)?.isHost || false;

  const handleCreateCustom = async () => {
    try {
      setErrorMessage(null);
      await createRoom(selectedMode);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to create room');
    }
  };

  const handleJoinCustom = async () => {
    if (!customRoomInput.trim()) return;
    try {
      setErrorMessage(null);
      await joinRoom(customRoomInput.trim());
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to join room');
    }
  };

  const handleToggleReady = () => {
    setReady(!isMeReady);
    if (selectedMode === GameMode.SOLO) {
      onStartMatch();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-3 space-y-3">
      {/* Title Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2.5 shadow-lg backdrop-blur-md gap-2">
        <div>
          <h1 className="text-base sm:text-lg font-black tracking-wide text-white leading-tight">
            Battle Nexus & Matchmaking
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Select a mode to enter matchmaking or create a private custom co-op squad.
          </p>
        </div>
        {currentRoomId && (
          <div className="flex items-center space-x-2 bg-slate-950/80 border border-slate-700 px-3 py-1 rounded-lg">
            <span className="text-[10px] text-slate-400">ROOM ID:</span>
            <span className="text-xs font-mono font-bold text-amber-400">{currentRoomId}</span>
          </div>
        )}
      </div>

      {errorMessage && (
        <div className="p-2.5 bg-rose-500/10 border border-rose-500/30 rounded-lg text-rose-400 text-xs font-medium">
          {errorMessage}
        </div>
      )}

      {!currentRoomId ? (
        /* Matchmaking & Room Selection View */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Game Modes Selection */}
          <div className="md:col-span-2 space-y-2.5">
            <h2 className="text-xs font-bold tracking-wider text-slate-300 uppercase">Select Battle Mode</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Solo Survival */}
              <div
                onClick={() => setSelectedMode(GameMode.SOLO)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedMode === GameMode.SOLO
                    ? 'bg-amber-500/10 border-amber-500/60 shadow-md shadow-amber-500/10'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                    1 Player
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white">Solo Survival</h3>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  Defend the nexus alone against infinite escalating enemy waves.
                </p>
              </div>

              {/* 2-Player Co-op */}
              <div
                onClick={() => setSelectedMode(GameMode.COOP_2P)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedMode === GameMode.COOP_2P
                    ? 'bg-amber-500/10 border-amber-500/60 shadow-md shadow-amber-500/10'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                    2 Players
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white">Duo Co-op</h3>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  Team up with a partner, pool strategy, and defend multi-lane choke points.
                </p>
              </div>

              {/* 4-Player Raid */}
              <div
                onClick={() => setSelectedMode(GameMode.COOP_4P)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedMode === GameMode.COOP_4P
                    ? 'bg-amber-500/10 border-amber-500/60 shadow-md shadow-amber-500/10'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                    4 Players
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white">Grand Crusade</h3>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  Massive 4-player co-op raid against titan boss monsters and swarms.
                </p>
              </div>

              {/* 1v1 PvP */}
              <div
                onClick={() => setSelectedMode(GameMode.PVP_1V1)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedMode === GameMode.PVP_1V1
                    ? 'bg-amber-500/10 border-amber-500/60 shadow-md shadow-amber-500/10'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="p-1.5 rounded-lg bg-rose-500/20 text-rose-400">
                    <Play className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                    Ranked 1v1
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white">Competitive Duel</h3>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  Send enemy waves to your opponent while building defenses for ELO rating.
                </p>
              </div>
            </div>

            {/* Quick Match Action */}
            <div className="pt-1">
              {isMatchmaking ? (
                <div className="p-3 bg-slate-900 border border-amber-500/40 rounded-xl flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-amber-400 font-semibold text-xs">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Searching for {selectedMode} match ({matchmakingTime}s)...</span>
                  </div>
                  <button
                    onClick={() => cancelMatchmaking(selectedMode)}
                    className="px-3 py-1 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-xs font-bold rounded-lg border border-rose-500/40 transition"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    if (selectedMode === GameMode.SOLO) {
                      handleCreateCustom();
                    } else {
                      startMatchmaking(selectedMode);
                    }
                  }}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:opacity-95 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-amber-500/20 transition flex items-center justify-center space-x-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{selectedMode === GameMode.SOLO ? 'Launch Solo Match' : 'Find Match (Matchmaking)'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Custom Lobby Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 space-y-2.5 h-fit">
            <h2 className="text-xs font-bold tracking-wider text-slate-300 uppercase">Custom Rooms</h2>

            <button
              onClick={handleCreateCustom}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700/80 text-amber-300 font-bold text-xs rounded-lg border border-slate-700 flex items-center justify-center space-x-1.5 transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create Private Room</span>
            </button>

            <div className="relative flex py-0.5 items-center">
              <div className="flex-grow border-t border-slate-800"></div>
              <span className="flex-shrink mx-2 text-slate-500 text-[10px] uppercase font-mono">Or Join Code</span>
              <div className="flex-grow border-t border-slate-800"></div>
            </div>

            <div className="space-y-1.5">
              <input
                type="text"
                value={customRoomInput}
                onChange={e => setCustomRoomInput(e.target.value)}
                placeholder="room_xxxx"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-amber-500 transition"
              />
              <button
                onClick={handleJoinCustom}
                className="w-full py-1.5 bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold text-xs rounded-lg border border-slate-700 flex items-center justify-center space-x-1 transition"
              >
                <LogIn className="w-3 h-3" />
                <span>Join by Room ID</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Inside Active Room Lobby */
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white">Squad Roster ({roomPlayers.length}/4)</h2>
              <p className="text-[11px] text-slate-400">All players must toggle Ready before the match begins.</p>
            </div>
            <button
              onClick={leaveRoom}
              className="px-2.5 py-1 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-semibold rounded-lg transition"
            >
              Leave Room
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {roomPlayers.map((p, idx) => (
              <div
                key={p.socketId || idx}
                className={`p-3 rounded-lg border flex flex-col justify-between ${
                  p.isReady
                    ? 'bg-emerald-500/10 border-emerald-500/40'
                    : 'bg-slate-950/60 border-slate-800'
                }`}
              >
                <div className="flex items-center space-x-2.5 mb-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-amber-300 text-xs">
                    {p.username.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center space-x-1">
                      <span>{p.username}</span>
                      {p.isHost && (
                        <span className="text-[8px] bg-amber-500/20 text-amber-300 px-1 rounded font-mono">
                          HOST
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-400">Gold: {p.gold}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-xs font-semibold">
                  {p.isReady ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">Ready</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-3.5 h-3.5 text-slate-500" />
                      <span className="text-slate-500 text-[11px]">Not Ready</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-end space-x-2.5">
            <button
              onClick={handleToggleReady}
              className={`px-5 py-2 rounded-xl font-bold text-xs transition flex items-center space-x-1.5 ${
                isMeReady
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isMeReady ? 'Ready (Click to Unready)' : 'Ready Up'}</span>
            </button>
            {isHost && (
              <button
                onClick={onStartMatch}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-600/20 transition flex items-center space-x-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Launch Match</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
