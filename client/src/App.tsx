import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { GameSocketProvider, useGameSocket } from './context/GameSocketContext';
import { Navbar } from './components/Navbar';
import { AuthScreen } from './components/AuthScreen';
import { LobbyScreen } from './components/LobbyScreen';
import { LeaderboardScreen } from './components/LeaderboardScreen';
import { StoreScreen } from './components/StoreScreen';
import { SettingsModal } from './components/SettingsModal';
import { GameHudTop, AbilityBar, TowerHotbar, TowerInspector } from './components/GameHud';
import { Minimap } from './components/Minimap';
import { InGameChat } from './components/InGameChat';
import { PhaserGame } from './game/PhaserGame';
import { TowerType, ActionType, TargetPriority, SpecialAbilityType } from '@realmforge/shared';
import { Pause } from 'lucide-react';

const MainAppContent: React.FC = () => {
  const { user, isLoading } = useAuth();
  const { currentRoomId, latestSnapshot, sendAction } = useGameSocket();

  const [currentTab, setCurrentTab] = useState<string>('lobby');
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isInMatch, setIsInMatch] = useState<boolean>(false);

  // In-Match State
  const [selectedTowerToBuild, setSelectedTowerToBuild] = useState<TowerType | null>(TowerType.ARCHER);
  const [selectedEntityId, setSelectedEntityId] = useState<number | null>(null);
  const [isMeteorTargetingMode, setIsMeteorTargetingMode] = useState<boolean>(false);

  const handleStartMatch = () => {
    setIsInMatch(true);
    setCurrentTab('game');
  };

  const handleExitMatch = () => {
    setIsInMatch(false);
    setCurrentTab('lobby');
  };

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't capture when typing in inputs/chat
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      const key = e.key.toUpperCase();

      // 1-6: Tower Hotbar Selection
      if (e.key === '1') setSelectedTowerToBuild(TowerType.ARCHER);
      else if (e.key === '2') setSelectedTowerToBuild(TowerType.MAGE);
      else if (e.key === '3') setSelectedTowerToBuild(TowerType.CANNON);
      else if (e.key === '4') setSelectedTowerToBuild(TowerType.TESLA);
      else if (e.key === '5') setSelectedTowerToBuild(TowerType.FROST);
      else if (e.key === '6') setSelectedTowerToBuild(TowerType.BARRACKS);

      // ESC: Deselect / Cancel
      else if (e.key === 'Escape') {
        setSelectedTowerToBuild(null);
        setSelectedEntityId(null);
        setIsMeteorTargetingMode(false);
      }

      // Q: Meteor Strike
      else if (key === 'Q') {
        setIsMeteorTargetingMode(prev => !prev);
      }

      // W: Glacial Blizzard
      else if (key === 'W') {
        sendAction({
          type: ActionType.TRIGGER_SPECIAL_ABILITY,
          abilityId: SpecialAbilityType.GLACIAL_BLIZZARD,
        });
      }

      // E: Overcharge Grid
      else if (key === 'E') {
        sendAction({
          type: ActionType.TRIGGER_SPECIAL_ABILITY,
          abilityId: SpecialAbilityType.OVERCHARGE_GRID,
        });
      }

      // R: Emergency Repair
      else if (key === 'R') {
        sendAction({
          type: ActionType.TRIGGER_SPECIAL_ABILITY,
          abilityId: SpecialAbilityType.EMERGENCY_REPAIR,
        });
      }

      // U: Quick Upgrade selected tower (Branch 1)
      else if (key === 'U' && selectedEntityId) {
        sendAction({
          type: ActionType.UPGRADE_TOWER,
          entityId: selectedEntityId,
          upgradePathIndex: 1,
        });
      }

      // S or Delete: Quick Sell selected tower
      else if ((key === 'S' || e.key === 'Delete') && selectedEntityId) {
        sendAction({
          type: ActionType.SELL_TOWER,
          entityId: selectedEntityId,
        });
      }

      // Space or P: Toggle Pause / Resume
      else if (e.code === 'Space' || key === 'P') {
        e.preventDefault();
        sendAction({
          type: ActionType.TOGGLE_PAUSE,
        });
      }

      // T or Tab: Cycle Target Priority
      else if ((key === 'T' || e.key === 'Tab') && selectedEntityId) {
        e.preventDefault();
        const priorities: TargetPriority[] = [
          TargetPriority.FIRST,
          TargetPriority.LAST,
          TargetPriority.STRONGEST,
          TargetPriority.WEAKEST,
          TargetPriority.NEAREST,
          TargetPriority.FASTEST,
        ];
        const selectedTower = latestSnapshot?.entities.find(ent => ent.id === selectedEntityId)?.tower;
        const currentP = selectedTower?.targetPriority || TargetPriority.FIRST;
        const nextIdx = (priorities.indexOf(currentP) + 1) % priorities.length;
        sendAction({
          type: ActionType.SET_TARGET_PRIORITY,
          entityId: selectedEntityId,
          priority: priorities[nextIdx]!,
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEntityId, latestSnapshot, sendAction]);

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

              {/* Center Column: Ability Bar + Game Canvas + Bottom Hotbar */}
              <div className="relative flex flex-col items-center justify-center h-full space-y-2 min-h-0 flex-shrink-0">
                {/* Tactical Pause Banner */}
                {latestSnapshot?.isPaused && (
                  <div className="absolute top-12 z-30 bg-slate-950/90 border border-amber-500/60 text-amber-300 px-4 py-1 rounded-full shadow-2xl backdrop-blur-md flex items-center space-x-2 text-xs font-bold uppercase tracking-wider animate-pulse ring-1 ring-amber-400/40">
                    <Pause className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>Simulation Paused — Place Towers & Plan Tactics</span>
                  </div>
                )}

                {/* Top Ability Bar */}
                <AbilityBar onTriggerMeteorMode={() => setIsMeteorTargetingMode(prev => !prev)} />

                {/* Phaser 3 Canvas */}
                <PhaserGame
                  selectedTowerToBuild={selectedTowerToBuild}
                  isMeteorTargetingMode={isMeteorTargetingMode}
                  onSelectEntity={id => setSelectedEntityId(id)}
                  onMeteorFired={() => setIsMeteorTargetingMode(false)}
                />

                {/* Bottom Tower Hotbar */}
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
