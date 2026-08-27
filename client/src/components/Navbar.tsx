import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Shield, Sparkles, Trophy, ShoppingBag, Settings, LogOut, Swords } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenSettings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab, onOpenSettings }) => {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md px-6 flex items-center justify-between text-white select-none z-30">
      {/* Brand Logo */}
      <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onSelectTab('lobby')}>
        <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20">
          <Shield className="w-6 h-6 text-slate-950 font-bold" />
        </div>
        <div>
          <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
            REALMFORGE
          </span>
          <span className="text-[10px] text-slate-400 block -mt-1 tracking-widest font-mono">TOWER DEFENSE</span>
        </div>
      </div>

      {/* Main Nav Tabs */}
      <nav className="flex items-center space-x-1 bg-slate-950/60 p-1 rounded-lg border border-slate-800">
        <button
          onClick={() => onSelectTab('lobby')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
            currentTab === 'lobby' || currentTab === 'game'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          <Swords className="w-4 h-4" />
          <span>Play & Lobby</span>
        </button>

        <button
          onClick={() => onSelectTab('leaderboard')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
            currentTab === 'leaderboard'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Leaderboard</span>
        </button>

        <button
          onClick={() => onSelectTab('store')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
            currentTab === 'store'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Armory Store</span>
        </button>
      </nav>

      {/* User Profile & Currencies */}
      {user && (
        <div className="flex items-center space-x-4">
          {/* ELO & Currencies */}
          <div className="hidden md:flex items-center space-x-3 bg-slate-950/70 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold">
            <div className="flex items-center space-x-1.5 text-amber-400">
              <Trophy className="w-3.5 h-3.5" />
              <span>{user.eloRating} ELO</span>
            </div>
            <div className="h-3 w-px bg-slate-800" />
            <div className="flex items-center space-x-1 text-purple-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{user.profile.gems} Gems</span>
            </div>
          </div>

          {/* User Badge */}
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-amber-500/40 flex items-center justify-center font-bold text-amber-300 text-xs">
              {user.username.substring(0, 2).toUpperCase()}
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-semibold text-slate-200">{user.username}</div>
              <div className="text-[10px] text-emerald-400 font-medium">Lv. {user.profile.level} Guardian</div>
            </div>
          </div>

          {/* Settings & Logout */}
          <div className="flex items-center space-x-1">
            <button
              onClick={onOpenSettings}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Settings"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={logout}
              className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
