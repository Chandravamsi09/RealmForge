import React from 'react';
import {
  ActionType,
  TowerType,
  TOWER_DEFINITIONS,
  calculateSellRefund,
} from '@realmforge/shared';
import { useGameSocket } from '../context/GameSocketContext';
import { useAuth } from '../context/AuthContext';
import { Heart, Coins, Swords, Zap, Flame, Snowflake, Shield, DollarSign, ArrowUpCircle, Sparkles, LogOut } from 'lucide-react';

interface GameHudTopProps {
  onLeaveMatch: () => void;
}

export const GameHudTop: React.FC<GameHudTopProps> = ({ onLeaveMatch }) => {
  const { user } = useAuth();
  const { latestSnapshot, roomPlayers } = useGameSocket();

  const me = roomPlayers.find(p => p.userId === user?.id) || {
    gold: 450,
    health: 20,
    score: 0,
    enemiesKilled: 0,
  };

  const currentWave = latestSnapshot ? Math.floor(latestSnapshot.tick / 300) + 1 : 1;

  return (
    <div className="w-full bg-slate-900/90 border-b border-slate-800 backdrop-blur-md px-4 py-2 flex items-center justify-between text-white flex-shrink-0">
      {/* Nexus Health & Tactical Gold */}
      <div className="flex items-center space-x-3">
        {/* Nexus Health */}
        <div className="flex items-center space-x-2 bg-slate-950/70 border border-slate-800 px-3 py-1 rounded-lg">
          <Heart className={`w-4 h-4 ${me.health > 10 ? 'text-rose-500 fill-rose-500' : 'text-rose-600 fill-rose-600 animate-pulse'}`} />
          <span className="font-extrabold text-sm text-rose-400">{me.health} HP</span>
        </div>

        {/* Tactical Gold */}
        <div className="flex items-center space-x-2 bg-slate-950/70 border border-slate-800 px-3 py-1 rounded-lg">
          <Coins className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="font-extrabold text-sm text-amber-300">{me.gold} Gold</span>
        </div>

        {/* Score & Kills */}
        <div className="hidden sm:flex items-center space-x-2 bg-slate-950/70 border border-slate-800 px-3 py-1 rounded-lg text-xs font-semibold text-slate-300">
          <span>Score: <span className="text-cyan-400 font-bold">{me.score}</span></span>
          <span className="text-slate-600">•</span>
          <span>Kills: <span className="text-emerald-400 font-bold">{me.enemiesKilled || 0}</span></span>
        </div>
      </div>

      {/* Wave Badge */}
      <div className="flex items-center space-x-2 bg-slate-950/80 border border-amber-500/40 px-4 py-1 rounded-xl shadow-md">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span className="text-xs uppercase font-bold text-amber-400">Wave {currentWave}</span>
      </div>

      {/* Surrender Button */}
      <button
        onClick={onLeaveMatch}
        className="px-3 py-1 bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 rounded-lg text-xs font-bold transition flex items-center space-x-1.5"
      >
        <LogOut className="w-3.5 h-3.5" />
        <span>Surrender</span>
      </button>
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
    <div className="flex items-center justify-center space-x-2 bg-slate-900/90 border border-slate-800 backdrop-blur-md p-2 rounded-xl shadow-xl flex-shrink-0">
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
  const { latestSnapshot, sendAction } = useGameSocket();

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

  if (selectedTower && towerConfig) {
    return (
      <div className="w-64 bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 shadow-xl backdrop-blur-md space-y-2.5 text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div>
            <h3 className="font-bold text-sm text-amber-300">{towerConfig.name}</h3>
            <div className="text-[10px] text-slate-400">Tier {selectedTower.tier} • Level {selectedTower.level}</div>
          </div>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
            {towerConfig.damageType}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-1.5 bg-slate-950/60 p-2 rounded-lg border border-slate-800">
          <div>Damage: <span className="font-bold text-white">{selectedTower.level * towerConfig.baseDamage}</span></div>
          <div>Range: <span className="font-bold text-white">{selectedTower.range}px</span></div>
        </div>

        {/* Upgrade Buttons */}
        {selectedTower.tier < 4 && (
          <div className="space-y-1 pt-1">
            <button
              onClick={() => handleUpgrade(1)}
              className="w-full py-1.5 px-2.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-lg text-xs font-bold flex items-center justify-between transition"
            >
              <div className="flex items-center space-x-1">
                <ArrowUpCircle className="w-3.5 h-3.5" />
                <span>Upgrade Branch A</span>
              </div>
              <span>120 G</span>
            </button>
            {selectedTower.tier >= 2 && (
              <button
                onClick={() => handleUpgrade(2)}
                className="w-full py-1.5 px-2.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 rounded-lg text-xs font-bold flex items-center justify-between transition"
              >
                <div className="flex items-center space-x-1">
                  <ArrowUpCircle className="w-3.5 h-3.5" />
                  <span>Upgrade Branch B</span>
                </div>
                <span>140 G</span>
              </button>
            )}
          </div>
        )}

        {/* Sell Button */}
        <button
          onClick={handleSell}
          className="w-full py-1.5 px-2.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-lg text-xs font-bold flex items-center justify-between transition"
        >
          <div className="flex items-center space-x-1">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Sell Tower</span>
          </div>
          <span>+{calculateSellRefund(towerConfig.baseCost)} G</span>
        </button>
      </div>
    );
  }

  // If no grid tower is selected, display info on the currently chosen hotbar tower
  if (hotbarConfig) {
    return (
      <div className="w-64 bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 shadow-xl backdrop-blur-md space-y-2 text-xs">
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
    <div className="w-64 bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 shadow-xl backdrop-blur-md space-y-2 text-xs">
      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Tactical Command</div>
      <p className="text-slate-300 text-[11px] leading-relaxed">
        Select a tower from the hotbar below (keys 1-6), then click on any buildable ground tile along the path.
      </p>
      <div className="p-2 bg-slate-950/60 rounded-lg border border-slate-800 text-slate-400 text-[10px]">
        💡 Click on any existing tower on the battlefield to inspect upgrades or sell it for 75% refund.
      </div>
    </div>
  );
};
