import React from 'react';
import {
  ActionType,
  TowerType,
  TargetPriority,
  TOWER_DEFINITIONS,
  calculateSellRefund,
  SpecialAbilityType,
  SPECIAL_ABILITIES,
} from '@realmforge/shared';
import { useGameSocket } from '../context/GameSocketContext';
import { useAuth } from '../context/AuthContext';
import {
  Heart,
  Coins,
  Swords,
  Zap,
  Flame,
  Snowflake,
  Shield,
  DollarSign,
  ArrowUpCircle,
  Sparkles,
  LogOut,
  Target,
  Play,
  Pause,
} from 'lucide-react';

interface GameHudTopProps {
  onLeaveMatch: () => void;
}

export const GameHudTop: React.FC<GameHudTopProps> = ({ onLeaveMatch }) => {
  const { user } = useAuth();
  const { latestSnapshot, roomPlayers, sendAction } = useGameSocket();

  const me = roomPlayers.find(p => p.userId === user?.id) || {
    gold: 450,
    health: 100,
    score: 0,
    enemiesKilled: 0,
  };

  const currentWave = latestSnapshot?.wave || (latestSnapshot ? Math.floor(latestSnapshot.tick / 300) + 1 : 1);
  const prepTimerSec = latestSnapshot?.waveTimerRemainingMs ? Math.ceil(latestSnapshot.waveTimerRemainingMs / 1000) : 0;
  const isPaused = latestSnapshot?.isPaused || false;

  const handleStartEarly = () => {
    sendAction({
      type: ActionType.VOTE_START_WAVE,
      waveIndex: currentWave,
    });
  };

  const handleTogglePause = () => {
    sendAction({
      type: ActionType.TOGGLE_PAUSE,
    });
  };

  return (
    <div className="w-full bg-slate-900/95 border-b border-slate-800 backdrop-blur-md px-4 py-2 flex items-center justify-between text-white flex-shrink-0 select-none">
      {/* Left: Nexus HP, Gold, Score, Kills */}
      <div className="flex items-center space-x-3">
        {/* Nexus Health */}
        <div className="flex items-center space-x-2 bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-lg shadow-inner">
          <Heart className={`w-4 h-4 ${me.health > 25 ? 'text-rose-500 fill-rose-500' : 'text-rose-600 fill-rose-600 animate-pulse'}`} />
          <span className="font-extrabold text-sm text-rose-400">{me.health} HP</span>
        </div>

        {/* Tactical Gold */}
        <div className="flex items-center space-x-2 bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-lg shadow-inner">
          <Coins className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="font-extrabold text-sm text-amber-300">{me.gold} Gold</span>
        </div>

        {/* Score & Kills */}
        <div className="hidden sm:flex items-center space-x-2 bg-slate-950/80 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300">
          <span>Score: <span className="text-cyan-400 font-bold">{me.score}</span></span>
          <span className="text-slate-600">•</span>
          <span>Kills: <span className="text-emerald-400 font-bold">{me.enemiesKilled || 0}</span></span>
        </div>
      </div>

      {/* Center: Wave Badge, Early Start Button, Pause/Play Button */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2 bg-slate-950/90 border border-amber-500/40 px-4 py-1.5 rounded-xl shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs uppercase font-bold text-amber-400">Wave {currentWave}</span>
        </div>

        {/* Pause / Resume Button */}
        <button
          onClick={handleTogglePause}
          className={`flex items-center space-x-1.5 font-bold text-xs px-3 py-1.5 rounded-xl border transition shadow-md ${
            isPaused
              ? 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border-emerald-500/50 animate-pulse ring-1 ring-emerald-400'
              : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border-amber-500/30'
          }`}
          title={isPaused ? 'Resume match simulation (Space / P)' : 'Pause simulation for tactical planning (Space / P)'}
        >
          {isPaused ? (
            <>
              <Play className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
              <span>Resume</span>
            </>
          ) : (
            <>
              <Pause className="w-3.5 h-3.5" />
              <span>Pause</span>
            </>
          )}
        </button>

        {prepTimerSec > 0 && (
          <button
            onClick={handleStartEarly}
            className="flex items-center space-x-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-lg border border-emerald-400/30 transition animate-pulse"
            title="Start wave immediately for +15 Gold bonus!"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Start Wave ({prepTimerSec}s)</span>
            <span className="bg-emerald-950/60 text-emerald-300 px-1.5 py-0.5 rounded text-[10px] ml-1 font-mono">+15 G</span>
          </button>
        )}
      </div>

      {/* Right: Surrender Button */}
      <button
        onClick={onLeaveMatch}
        className="px-3 py-1.5 bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 rounded-lg text-xs font-bold transition flex items-center space-x-1.5"
      >
        <LogOut className="w-3.5 h-3.5" />
        <span>Surrender</span>
      </button>
    </div>
  );
};

interface AbilityBarProps {
  onTriggerMeteorMode: () => void;
}

export const AbilityBar: React.FC<AbilityBarProps> = ({ onTriggerMeteorMode }) => {
  const { user } = useAuth();
  const { latestSnapshot, roomPlayers, sendAction } = useGameSocket();

  const me = roomPlayers.find(p => p.userId === user?.id) || { gold: 450 };

  const abilities = [
    { type: SpecialAbilityType.METEOR_STRIKE, icon: Flame, color: 'text-amber-400 border-amber-500/40 bg-amber-500/10' },
    { type: SpecialAbilityType.GLACIAL_BLIZZARD, icon: Snowflake, color: 'text-sky-400 border-sky-500/40 bg-sky-500/10' },
    { type: SpecialAbilityType.OVERCHARGE_GRID, icon: Zap, color: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10' },
    { type: SpecialAbilityType.EMERGENCY_REPAIR, icon: Heart, color: 'text-rose-400 border-rose-500/40 bg-rose-500/10' },
  ];

  const handleTrigger = (type: SpecialAbilityType) => {
    if (type === SpecialAbilityType.METEOR_STRIKE) {
      onTriggerMeteorMode();
    } else {
      sendAction({
        type: ActionType.TRIGGER_SPECIAL_ABILITY,
        abilityId: type,
      });
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 bg-slate-900/90 border border-slate-800 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-xl flex-shrink-0 select-none">
      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mr-1 hidden sm:inline">Tactics:</span>
      {abilities.map(ab => {
        const config = SPECIAL_ABILITIES[ab.type];
        const cdKey = `${user?.id}_${ab.type}`;
        const remainingCdMs = latestSnapshot?.cooldowns ? latestSnapshot.cooldowns[cdKey] || 0 : 0;
        const isOnCd = remainingCdMs > 0;
        const canAfford = me.gold >= config.cost;
        const isDisabled = isOnCd || !canAfford;

        return (
          <button
            key={ab.type}
            disabled={isDisabled}
            onClick={() => handleTrigger(ab.type)}
            title={`${config.name} (${config.key}): ${config.description}`}
            className={`relative px-2.5 py-1 rounded-lg border flex items-center space-x-1.5 transition-all text-xs ${
              isDisabled
                ? 'border-slate-800 bg-slate-950/50 text-slate-600 opacity-50 cursor-not-allowed'
                : `${ab.color} hover:scale-105 active:scale-95 shadow-md shadow-amber-500/10`
            }`}
          >
            <span className="font-mono text-[9px] font-bold text-slate-400 bg-slate-950 px-1 rounded border border-slate-800">
              {config.key}
            </span>
            <ab.icon className="w-3.5 h-3.5" />
            <div className="flex flex-col items-start leading-tight">
              <span className="font-bold text-[10px] text-white whitespace-nowrap">{config.name}</span>
              <span className="text-[8px] font-semibold text-amber-300">{config.cost} G</span>
            </div>
            {isOnCd && (
              <div className="absolute inset-0 bg-slate-950/85 rounded-lg flex items-center justify-center text-amber-400 font-mono text-[10px] font-bold">
                {Math.ceil(remainingCdMs / 1000)}s
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};

interface TowerHotbarProps {
  selectedTowerToBuild: TowerType | null;
  onSelectTowerToBuild: (type: TowerType | null) => void;
}

export const TowerHotbar: React.FC<TowerHotbarProps> = ({
  selectedTowerToBuild,
  onSelectTowerToBuild,
}) => {
  const { user } = useAuth();
  const { roomPlayers } = useGameSocket();

  const me = roomPlayers.find(p => p.userId === user?.id) || { gold: 450 };

  const towerButtons = [
    { type: TowerType.ARCHER, key: '1', icon: Swords, color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400' },
    { type: TowerType.MAGE, key: '2', icon: Flame, color: 'border-purple-500/50 bg-purple-500/10 text-purple-400' },
    { type: TowerType.CANNON, key: '3', icon: Shield, color: 'border-slate-500/50 bg-slate-500/10 text-slate-300' },
    { type: TowerType.TESLA, key: '4', icon: Zap, color: 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400' },
    { type: TowerType.FROST, key: '5', icon: Snowflake, color: 'border-sky-500/50 bg-sky-500/10 text-sky-400' },
    { type: TowerType.BARRACKS, key: '6', icon: Shield, color: 'border-amber-500/50 bg-amber-500/10 text-amber-400' },
  ];

  return (
    <div className="flex items-center justify-center space-x-2 bg-slate-900/90 border border-slate-800 backdrop-blur-md p-2 rounded-xl shadow-xl flex-shrink-0 select-none">
      {towerButtons.map(btn => {
        const config = TOWER_DEFINITIONS[btn.type];
        const isSelected = selectedTowerToBuild === btn.type;
        const canAfford = me.gold >= config.baseCost;

        return (
          <button
            key={btn.type}
            disabled={!canAfford}
            onClick={() => onSelectTowerToBuild(isSelected ? null : btn.type)}
            className={`relative px-3 py-1.5 rounded-lg border flex flex-col items-center min-w-[68px] transition-all ${
              isSelected
                ? 'border-amber-400 bg-amber-400/25 shadow-md shadow-amber-400/20 scale-105 ring-1 ring-amber-400'
                : canAfford
                ? `${btn.color} hover:scale-102`
                : 'border-slate-800 bg-slate-950/40 text-slate-600 opacity-40 cursor-not-allowed'
            }`}
          >
            <span className="absolute top-0.5 left-1 text-[8px] font-mono text-slate-400">{btn.key}</span>
            <btn.icon className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-bold text-white capitalize">{btn.type.toLowerCase()}</span>
            <span className="text-[9px] font-semibold text-amber-400">{config.baseCost} G</span>
          </button>
        );
      })}
    </div>
  );
};

interface TowerInspectorProps {
  selectedEntityId: number | null;
  selectedTowerToBuild: TowerType | null;
}

export const TowerInspector: React.FC<TowerInspectorProps> = ({
  selectedEntityId,
  selectedTowerToBuild,
}) => {
  const { user } = useAuth();
  const { latestSnapshot, roomPlayers, sendAction } = useGameSocket();

  const me = roomPlayers.find(p => p.userId === user?.id) || { gold: 450 };

  const selectedEntity = latestSnapshot?.entities.find(e => e.id === selectedEntityId);
  const selectedTower = selectedEntity?.tower;
  const towerConfig = selectedTower ? TOWER_DEFINITIONS[selectedTower.type] : null;
  const hotbarConfig = selectedTowerToBuild ? TOWER_DEFINITIONS[selectedTowerToBuild] : null;

  const handleUpgrade = (branchIndex: number) => {
    if (!selectedEntityId) return;
    sendAction({
      type: ActionType.UPGRADE_TOWER,
      entityId: selectedEntityId,
      upgradePathIndex: branchIndex,
    });
  };

  const handleSell = () => {
    if (!selectedEntityId) return;
    sendAction({
      type: ActionType.SELL_TOWER,
      entityId: selectedEntityId,
    });
  };

  const handlePriorityChange = (priority: TargetPriority) => {
    if (!selectedEntityId) return;
    sendAction({
      type: ActionType.SET_TARGET_PRIORITY,
      entityId: selectedEntityId,
      priority,
    });
  };

  if (selectedTower && towerConfig) {
    const totalInvested = selectedTower.totalInvestedGold || towerConfig.baseCost;
    const sellRefund = calculateSellRefund(totalInvested);

    // Compute upgrade nodes
    let upgradeNodeA = null;
    let upgradeNodeB = null;

    if (selectedTower.tier === 1) {
      upgradeNodeA = towerConfig.upgrades.tier2;
    } else if (selectedTower.tier === 2) {
      upgradeNodeA = towerConfig.upgrades.tier3BranchA;
      upgradeNodeB = towerConfig.upgrades.tier3BranchB;
    } else if (selectedTower.tier === 3) {
      if (selectedTower.branch === 'A' || !selectedTower.branch) {
        upgradeNodeA = towerConfig.upgrades.tier4A;
      }
      if (selectedTower.branch === 'B' || !selectedTower.branch) {
        upgradeNodeB = towerConfig.upgrades.tier4B;
      }
    }

    return (
      <div className="w-64 bg-slate-900/95 border border-slate-800 rounded-xl p-3.5 shadow-xl backdrop-blur-md space-y-2.5 text-xs select-none">
        {/* Tower Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div>
            <h3 className="font-bold text-sm text-amber-300">{towerConfig.name}</h3>
            <div className="text-[10px] text-slate-400">
              Tier {selectedTower.tier} • Level {selectedTower.level} {selectedTower.branch ? `(Branch ${selectedTower.branch})` : ''}
            </div>
          </div>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
            {towerConfig.damageType}
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-1.5 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
          <div>Damage: <span className="font-bold text-white">{selectedTower.damage || selectedTower.level * towerConfig.baseDamage}</span></div>
          <div>Range: <span className="font-bold text-white">{selectedTower.range}px</span></div>
        </div>

        {/* Target Priority Selector */}
        <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800 space-y-1">
          <div className="flex items-center space-x-1 text-[10px] font-semibold text-slate-400">
            <Target className="w-3 h-3 text-cyan-400" />
            <span>Target Priority:</span>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {[
              TargetPriority.FIRST,
              TargetPriority.LAST,
              TargetPriority.STRONGEST,
              TargetPriority.WEAKEST,
              TargetPriority.NEAREST,
              TargetPriority.FASTEST,
            ].map(p => (
              <button
                key={p}
                onClick={() => handlePriorityChange(p)}
                className={`py-1 text-[9px] font-bold rounded border transition ${
                  (selectedTower.targetPriority || TargetPriority.FIRST) === p
                    ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Upgrade Buttons */}
        {selectedTower.tier < 4 ? (
          <div className="space-y-1.5 pt-1">
            {upgradeNodeA && (
              <button
                disabled={me.gold < upgradeNodeA.cost || (selectedTower.tier === 3 && selectedTower.branch === 'B')}
                onClick={() => handleUpgrade(1)}
                className={`w-full py-1.5 px-2.5 rounded-lg text-xs font-bold flex items-center justify-between border transition ${
                  selectedTower.tier === 3 && selectedTower.branch === 'B'
                    ? 'bg-slate-950/40 border-slate-800 text-slate-600 opacity-40 cursor-not-allowed'
                    : me.gold >= upgradeNodeA.cost
                    ? 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-amber-500/40 shadow-sm'
                    : 'bg-slate-950 border-slate-800 text-slate-500 opacity-50'
                }`}
              >
                <div className="flex items-center space-x-1 text-left">
                  <ArrowUpCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{upgradeNodeA.branchName}</span>
                </div>
                <span className="font-mono text-amber-400">{upgradeNodeA.cost} G</span>
              </button>
            )}

            {upgradeNodeB && (
              <button
                disabled={me.gold < upgradeNodeB.cost || (selectedTower.tier === 3 && selectedTower.branch === 'A')}
                onClick={() => handleUpgrade(2)}
                className={`w-full py-1.5 px-2.5 rounded-lg text-xs font-bold flex items-center justify-between border transition ${
                  selectedTower.tier === 3 && selectedTower.branch === 'A'
                    ? 'bg-slate-950/40 border-slate-800 text-slate-600 opacity-40 cursor-not-allowed'
                    : me.gold >= upgradeNodeB.cost
                    ? 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border-cyan-500/40 shadow-sm'
                    : 'bg-slate-950 border-slate-800 text-slate-500 opacity-50'
                }`}
              >
                <div className="flex items-center space-x-1 text-left">
                  <ArrowUpCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{upgradeNodeB.branchName}</span>
                </div>
                <span className="font-mono text-cyan-400">{upgradeNodeB.cost} G</span>
              </button>
            )}
          </div>
        ) : (
          <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400 text-center font-bold text-[10px]">
            ⭐ MAXIMUM TIER REACHED
          </div>
        )}

        {/* Sell Button */}
        <button
          onClick={handleSell}
          className="w-full py-1.5 px-2.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-lg text-xs font-bold flex items-center justify-between transition"
        >
          <div className="flex items-center space-x-1">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Sell Tower (75% Refund)</span>
          </div>
          <span className="font-mono text-emerald-400">+{sellRefund} G</span>
        </button>
      </div>
    );
  }

  // If no grid tower is selected, display placement intel
  if (hotbarConfig) {
    return (
      <div className="w-64 bg-slate-900/95 border border-slate-800 rounded-xl p-3.5 shadow-xl backdrop-blur-md space-y-2 text-xs select-none">
        <div className="border-b border-slate-800 pb-1.5">
          <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Placement Intel</div>
          <h3 className="font-bold text-sm text-white">{hotbarConfig.name}</h3>
        </div>
        <p className="text-slate-300 text-[11px] leading-relaxed">{hotbarConfig.description}</p>
        <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800 space-y-1 text-[11px]">
          <div className="flex justify-between">
            <span className="text-slate-400">Damage Type:</span>
            <span className="font-bold text-white">{hotbarConfig.damageType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Base Damage:</span>
            <span className="font-bold text-white">{hotbarConfig.baseDamage}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Range:</span>
            <span className="font-bold text-white">{hotbarConfig.baseRange} px</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Cost:</span>
            <span className="font-bold text-amber-400">{hotbarConfig.baseCost} Gold</span>
          </div>
        </div>
        <div className="p-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-[10px] font-medium text-center">
          Click any dark ground tile to place
        </div>
      </div>
    );
  }

  // Default tactical tip
  return (
    <div className="w-64 bg-slate-900/95 border border-slate-800 rounded-xl p-3.5 shadow-xl backdrop-blur-md space-y-2 text-xs select-none">
      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Tactical Command</div>
      <p className="text-slate-300 text-[11px] leading-relaxed">
        Select a tower from hotbar (1-6), then click on any buildable ground tile along the path.
      </p>
      <div className="p-2 bg-slate-950/60 rounded-lg border border-slate-800 text-slate-400 text-[10px] space-y-1">
        <div>💡 <b>Shortcuts:</b> [Q/W/E/R] Abilities, [1-6] Towers, [T] Priority, [U] Upgrade, [S] Sell.</div>
      </div>
    </div>
  );
};
