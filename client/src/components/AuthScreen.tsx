import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Shield, Lock, User, Mail, Sparkles, ArrowRight } from 'lucide-react';

export const AuthScreen: React.FC = () => {
  const { login, signup } = useAuth();
  const [isLoginTab, setIsLoginTab] = useState<boolean>(true);

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      if (isLoginTab) {
        await login({ usernameOrEmail: username, password });
      } else {
        await signup({ username, email, password });
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full w-full min-h-screen overflow-y-auto flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-4 sm:p-6 my-auto">
      <div className="max-w-md w-full my-auto bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Header Hero */}
        <div className="bg-gradient-to-b from-slate-800 to-slate-900/50 p-5 sm:p-6 text-center border-b border-slate-800">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 mx-auto flex items-center justify-center shadow-xl shadow-amber-500/20 mb-2 sm:mb-3">
            <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-slate-950 font-bold" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
            RealmForge
          </h1>
          <p className="text-slate-400 text-xs mt-0.5">Multiplayer Real-time Tower Defense</p>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 p-1.5 bg-slate-950/60 border-b border-slate-800 gap-1">
          <button
            onClick={() => {
              setIsLoginTab(true);
              setError(null);
            }}
            className={`py-2 text-sm font-semibold rounded-lg transition-all ${
              isLoginTab
                ? 'bg-slate-800 text-amber-400 shadow-md border border-slate-700'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => {
              setIsLoginTab(false);
              setError(null);
            }}
            className={`py-2 text-sm font-semibold rounded-lg transition-all ${
              !isLoginTab
                ? 'bg-slate-800 text-amber-400 shadow-md border border-slate-700'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-3 sm:space-y-4">
          {error && (
            <div className="p-2.5 bg-rose-500/10 border border-rose-500/30 rounded-lg text-rose-400 text-xs font-medium">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              {isLoginTab ? 'Username or Email' : 'Username'}
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-2.5" />
              <input
                type="text"
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder={isLoginTab ? 'player_one or player@realm.gg' : 'TacticalMaster'}
                className="w-full bg-slate-950/80 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition placeholder:text-slate-600"
              />
            </div>
          </div>

          {!isLoginTab && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-2.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="tactician@realmforge.gg"
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition placeholder:text-slate-600"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-2.5" />
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-950/80 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 transition placeholder:text-slate-600"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-2.5 sm:py-3 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/20 transition disabled:opacity-50"
          >
            <span>{isSubmitting ? 'Authenticating...' : isLoginTab ? 'Enter the Realm' : 'Forge Account'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="pt-1 text-center text-xs text-slate-500 flex items-center justify-center space-x-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500/80" />
            <span>Authoritative Deterministic Engine</span>
          </div>
        </form>
      </div>
    </div>
  );
};
