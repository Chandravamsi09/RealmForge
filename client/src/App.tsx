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
      <div className="h-screen w-screen bg-slate-950 flex items-center justify-center text-amber-400 font-bold">
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
    <div className="h-screen w-screen max-h-screen overflow-hidden flex flex-col bg-slate-950 text-slate-100 font-sans select-none">
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
          /* Active Match Arena View - Strict 100% Locked Viewport */
          <div className="flex-1 flex flex-col w-full h-[calc(100vh-3.5rem)] min-h-0 overflow-hidden bg-slate-950">
            {/* Top Match HUD Bar */}
            <GameHudTop onLeaveMatch={handleExitMatch} />

            {/* Arena Main Body: 3-column Layout */}
            <div className="flex-1 flex items-center justify-center p-2 gap-3 min-h-0 overflow-hidden">
              {/* Left Column: Minimap & In-Game Chat */}
              <div className="hidden lg:flex flex-col space-y-2 w-60 h-full justify-center flex-shrink-0">
                <Minimap />
                <InGameChat />
              </div>

              {/* Center Column: Game Canvas + Bottom Hotbar */}
              <div className="flex flex-col items-center justify-center h-full space-y-2 min-h-0 flex-shrink-0">
                <PhaserGame
                  selectedTowerToBuild={selectedTowerToBuild}
                  onSelectEntity={id => setSelectedEntityId(id)}
                />

                {/* Bottom Hotbar directly below canvas */}
                <TowerHotbar
                  selectedTowerToBuild={selectedTowerToBuild}
                  onSelectTowerToBuild={setSelectedTowerToBuild}
                />
              </div>

              {/* Right Column: Selected Tower / Placement Inspector */}
              <div className="hidden md:flex flex-col w-60 h-full justify-center flex-shrink-0">
                <TowerInspector
                  selectedEntityId={selectedEntityId}
                  selectedTowerToBuild={selectedTowerToBuild}
                />
              </div>
            </div>
          </div>
        ) : (
          /* Portal Tabs */
          <div className="py-2 sm:py-3 overflow-y-auto flex-1 h-[calc(100vh-3.5rem)]">
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
