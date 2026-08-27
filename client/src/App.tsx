import React from 'react';
import { REALMFORGE_VERSION } from '@realmforge/shared';

export const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-6">
      <div className="max-w-xl w-full bg-slate-800/80 border border-slate-700 rounded-xl p-8 shadow-2xl backdrop-blur-md text-center">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent mb-2">
          RealmForge
        </h1>
        <p className="text-slate-400 text-sm mb-6">
          Real-time Multiplayer Tower Defense Engine v{REALMFORGE_VERSION}
        </p>
        <div className="p-4 bg-slate-900/60 rounded-lg border border-slate-700/50 text-left text-xs text-slate-300 space-y-2">
          <p><span className="text-emerald-400 font-semibold">● Engine Core:</span> Deterministic ECS & A* Pathfinding</p>
          <p><span className="text-cyan-400 font-semibold">● Multiplayer:</span> Authoritative Socket.IO Tick Sync</p>
          <p><span className="text-amber-400 font-semibold">● Visuals:</span> Phaser 3 Canvas + React HUD</p>
        </div>
      </div>
    </main>
  );
};

export default App;
