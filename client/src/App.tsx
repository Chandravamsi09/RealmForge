import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { GameSocketProvider, useGameSocket } from './context/GameSocketContext';
import { Navbar } from './components/Navbar';
import { AuthScreen } from './components/AuthScreen';
import { LobbyScreen } from './components/LobbyScreen';
import { LeaderboardScreen } from './components/LeaderboardScreen';
import { StoreScreen } from './components/StoreScreen';
import { SettingsModal } from './components/SettingsModal';
import { GameHudTop, TowerHotbar, TowerInspector } from './components/GameHud';
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
  const [selectedTowerToBuild, setSelectedTowerToBuild] = useState<TowerType | null>(TowerType.ARCHER);
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
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden font-sans select-none">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={tab => {
          if (tab !== 'game') setIsInMatch(false);
          setCurrentTab(tab);
        }}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      <main className="flex-1 relative flex flex-col min-h-0 overflow-hidden">
        {isInMatch || (currentRoomId && currentTab === 'game') ? (
          /* Active Match Arena View - Clean Docked Layout */
          <div className="flex-1 flex flex-col w-full h-full min-h-0 bg-slate-950">
            {/* Top Match HUD Bar */}
            <GameHudTop onLeaveMatch={handleExitMatch} />

            {/* Arena Main Body: 3-column Layout */}
            <div className="flex-1 flex items-center justify-center p-3 gap-3 min-h-0 overflow-hidden">
              {/* Left Column: Minimap & In-Game Chat */}
              <div className="hidden lg:flex flex-col space-y-2.5 w-64 h-full justify-between py-1 flex-shrink-0">
                <Minimap />
                <InGameChat />
              </div>

              {/* Center Column: Game Canvas + Bottom Hotbar */}
              <div className="flex-1 flex flex-col items-center justify-center h-full max-w-4xl space-y-2 min-h-0">
                <div className="flex-1 w-full flex items-center justify-center min-h-0">
                  <PhaserGame
                    selectedTowerToBuild={selectedTowerToBuild}
                    onSelectEntity={id => setSelectedEntityId(id)}
                  />
                </div>

                {/* Bottom Hotbar directly below canvas */}
                <TowerHotbar
                  selectedTowerToBuild={selectedTowerToBuild}
                  onSelectTowerToBuild={setSelectedTowerToBuild}
                />
              </div>

              {/* Right Column: Selected Tower / Placement Inspector */}
              <div className="hidden md:flex flex-col w-64 h-full justify-start py-1 flex-shrink-0">
                <TowerInspector
                  selectedEntityId={selectedEntityId}
                  selectedTowerToBuild={selectedTowerToBuild}
                />
              </div>
            </div>
          </div>
        ) : (
          /* Portal Tabs */
          <div className="py-2 sm:py-3 overflow-y-auto flex-1">
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
