import React from 'react';
import {
  ActionType,
  TowerType,
  TOWER_DEFINITIONS,
  calculateSellRefund,
} from '@realmforge/shared';
import { useGameSocket } from '../context/GameSocketContext';
import { useAuth } from '../context/AuthContext';
import { Heart, Coins, Swords, Zap, Flame, Snowflake, Shield, DollarSign, ArrowUpCircle } from 'lucide-react';

interface GameHudProps {
  selectedTowerToBuild: TowerType | null;
  onSelectTowerToBuild: (type: TowerType | null) => void;
  selectedEntityId: number | null;
}

export const GameHud: React.FC<GameHudProps> = ({
  selectedTowerToBuild,
  onSelectTowerToBuild,
  selectedEntityId,
}) => {
  const { user } = useAuth();
  const { latestSnapshot, sendAction, roomPlayers } = useGameSocket();

  const me = roomPlayers.find(p => p.userId === user?.id) || {
    gold: 450,
    health: 20,
    score: 0,
  };

  const selectedEntity = latestSnapshot?.entities.find(e => e.id === selectedEntityId);
  const selectedTower = selectedEntity?.tower;
  const towerConfig = selectedTower ? TOWER_DEFINITIONS[selectedTower.type] : null;

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

  const towerButtons = [
    { type: TowerType.ARCHER, key: '1', icon: Swords, color: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400' },
    { type: TowerType.MAGE, key: '2', icon: Flame, color: 'border-purple-500/50 bg-purple-500/10 text-purple-400' },
    { type: TowerType.CANNON, key: '3', icon: Shield, color: 'border-slate-500/50 bg-slate-500/10 text-slate-300' },
    { type: TowerType.TESLA, key: '4', icon: Zap, color: 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400' },
    { type: TowerType.FROST, key: '5', icon: Snowflake, color: 'border-sky-500/50 bg-sky-500/10 text-sky-400' },
    { type: TowerType.BARRACKS, key: '6', icon: Shield, color: 'border-amber-500/50 bg-amber-500/10 text-amber-400' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 z-20">
      {/* Top Resource Bar */}
      <div className="flex items-center justify-between pointer-events-auto">
        <div className="flex items-center space-x-3 bg-slate-900/90 border border-slate-800 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl">
          {/* Nexus Health */}
          <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm">
            <Heart className="w-5 h-5 fill-current" />
            <span>{me.health} HP</span>
          </div>

          <div className="h-4 w-px bg-slate-800" />

          {/* Tactical Gold */}
          <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
            <Coins className="w-5 h-5 fill-current" />
            <span>{me.gold} Gold</span>
          </div>

          <div className="h-4 w-px bg-slate-800" />

          {/* Score */}
          <div className="text-xs text-slate-300 font-semibold">
            Score: <span className="text-cyan-400">{me.score}</span>
          </div>
        </div>

        {/* Wave Banner */}
        <div className="bg-slate-900/90 border border-amber-500/40 backdrop-blur-md px-5 py-2 rounded-2xl shadow-xl text-center">
          <div className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">CURRENT WAVE</div>
          <div className="text-lg font-black text-white">Wave {latestSnapshot ? Math.floor(latestSnapshot.tick / 300) + 1 : 1}</div>
        </div>
      </div>

      {/* Selected Tower Inspector Panel (Right floating) */}
      {selectedTower && towerConfig && (
        <div className="pointer-events-auto absolute right-4 top-20 w-72 bg-slate-900/95 border border-slate-700 rounded-2xl p-4 shadow-2xl backdrop-blur-xl space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div>
              <h3 className="font-bold text-sm text-amber-300">{towerConfig.name}</h3>
              <div className="text-[11px] text-slate-400">Tier {selectedTower.tier} • Level {selectedTower.level}</div>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
              {towerConfig.damageType}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
            <div>Damage: <span className="font-bold text-white">{selectedTower.level * towerConfig.baseDamage}</span></div>
            <div>Range: <span className="font-bold text-white">{selectedTower.range}px</span></div>
          </div>

          {/* Upgrade Buttons */}
          {selectedTower.tier < 4 && (
            <div className="space-y-1.5 pt-1">
              <button
                onClick={() => handleUpgrade(1)}
                className="w-full py-2 px-3 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-lg text-xs font-bold flex items-center justify-between transition"
              >
                <div className="flex items-center space-x-1.5">
                  <ArrowUpCircle className="w-4 h-4" />
                  <span>Upgrade Branch A</span>
                </div>
                <span>120 G</span>
              </button>
              {selectedTower.tier >= 2 && (
                <button
                  onClick={() => handleUpgrade(2)}
                  className="w-full py-2 px-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 rounded-lg text-xs font-bold flex items-center justify-between transition"
                >
                  <div className="flex items-center space-x-1.5">
                    <ArrowUpCircle className="w-4 h-4" />
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
            className="w-full py-2 px-3 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-lg text-xs font-bold flex items-center justify-between transition"
          >
            <div className="flex items-center space-x-1.5">
              <DollarSign className="w-4 h-4" />
              <span>Sell Tower</span>
            </div>
            <span>+{calculateSellRefund(towerConfig.baseCost)} G</span>
          </button>
        </div>
      )}

      {/* Bottom Tower Hotbar */}
      <div className="flex items-center justify-center pointer-events-auto">
        <div className="flex items-center space-x-2 bg-slate-900/95 border border-slate-800 backdrop-blur-xl p-2 rounded-2xl shadow-2xl">
          {towerButtons.map(btn => {
            const config = TOWER_DEFINITIONS[btn.type];
            const isSelected = selectedTowerToBuild === btn.type;
            const canAfford = me.gold >= config.baseCost;

            return (
              <button
                key={btn.type}
                disabled={!canAfford}
                onClick={() => onSelectTowerToBuild(isSelected ? null : btn.type)}
                className={`relative px-4 py-2.5 rounded-xl border flex flex-col items-center min-w-[76px] transition-all ${
                  isSelected
                    ? 'border-amber-400 bg-amber-400/20 shadow-lg shadow-amber-400/20 scale-105'
                    : canAfford
                    ? `${btn.color} hover:scale-102`
                    : 'border-slate-800 bg-slate-950/40 text-slate-600 opacity-50 cursor-not-allowed'
                }`}
              >
                <span className="absolute top-1 left-1.5 text-[9px] font-mono text-slate-400">{btn.key}</span>
                <btn.icon className="w-5 h-5 mb-1" />
                <span className="text-[11px] font-bold text-white capitalize">{btn.type.toLowerCase()}</span>
                <span className="text-[10px] font-semibold text-amber-400">{config.baseCost} G</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
