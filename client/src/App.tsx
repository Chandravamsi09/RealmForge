import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { GameSocketProvider, useGameSocket } from './context/GameSocketContext';
import { Navbar } from './components/Navbar';
import { AuthScreen } from './components/AuthScreen';
import { LobbyScreen } from './components/LobbyScreen';
import { LeaderboardScreen } from './components/LeaderboardScreen';
import { StoreScreen } from './components/StoreScreen';
import { SettingsModal } from './components/SettingsModal';
import { GameHud } from './components/GameHud';
import { Minimap } from './components/Minimap';
import { InGameChat } from './components/InGameChat';
import { PhaserGame } from './game/PhaserGame';
import { TowerType } from '@realmforge/shared';

const MainAppContent: React.FC = () => {
  const { user, isLoading } = useAuth();
  const { currentRoomId } = useGameSocket();

  const [currentTab, setCurrentTab] = useState<string>('lobby');
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isInMatch, setIsInMatch] = useState<boolean>(false);

  // In-Match State
  const [selectedTowerToBuild, setSelectedTowerToBuild] = useState<TowerType | null>(null);
  const [selectedEntityId, setSelectedEntityId] = useState<number | null>(null);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-amber-400 font-bold">
        Connecting to RealmForge Engine...
      </div>
    );
  }

  if (!user) {
    return <AuthScreen />;
  }

  const handleStartMatch = () => {
    setIsInMatch(true);
    setCurrentTab('game');
  };

  const handleExitMatch = () => {
    setIsInMatch(false);
    setCurrentTab('lobby');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden font-sans">
      <Navbar
        currentTab={currentTab}
        onSelectTab={tab => {
          if (tab !== 'game') setIsInMatch(false);
          setCurrentTab(tab);
        }}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      <main className="flex-1 relative overflow-y-auto">
        {isInMatch || (currentRoomId && currentTab === 'game') ? (
          /* Active Match Arena View */
          <div className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center p-4">
            {/* Phaser Game Canvas */}
            <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
              <PhaserGame
                selectedTowerToBuild={selectedTowerToBuild}
                onSelectEntity={id => setSelectedEntityId(id)}
              />

              {/* HUD Overlays */}
              <GameHud
                selectedTowerToBuild={selectedTowerToBuild}
                onSelectTowerToBuild={setSelectedTowerToBuild}
                selectedEntityId={selectedEntityId}
              />
            </div>

            {/* Left/Right Floating Panels: Chat & Minimap */}
            <div className="hidden lg:flex flex-col space-y-4 absolute left-6 bottom-6 z-20">
              <Minimap />
              <InGameChat />
            </div>

            {/* Exit Match button */}
            <button
              onClick={handleExitMatch}
              className="absolute top-4 right-4 z-30 px-3 py-1.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 rounded-lg text-xs font-bold transition"
            >
              Surrender / Leave
            </button>
          </div>
        ) : (
          /* Portal Tabs */
          <div className="py-6">
            {currentTab === 'lobby' && <LobbyScreen onStartMatch={handleStartMatch} />}
            {currentTab === 'leaderboard' && <LeaderboardScreen />}
            {currentTab === 'store' && <StoreScreen />}
          </div>
        )}
      </main>

      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <GameSocketProvider>
        <MainAppContent />
      </GameSocketProvider>
    </AuthProvider>
  );
};

export default App;
