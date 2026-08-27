import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { BootScene } from './scenes/BootScene';
import { MainGameScene } from './scenes/MainGameScene';
import { TowerType, ActionType } from '@realmforge/shared';
import { useGameSocket } from '../context/GameSocketContext';

interface PhaserGameProps {
  selectedTowerToBuild: TowerType | null;
  onSelectEntity: (entityId: number | null) => void;
}

export const PhaserGame: React.FC<PhaserGameProps> = ({
  selectedTowerToBuild,
  onSelectEntity,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Phaser.Game | null>(null);
  const sceneRef = useRef<MainGameScene | null>(null);

  const { latestSnapshot, sendAction } = useGameSocket();

  useEffect(() => {
    if (!containerRef.current) return;

    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: containerRef.current,
      width: 16 * 32, // 512px
      height: 12 * 32, // 384px
      backgroundColor: '#0f172a',
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      scene: [BootScene, MainGameScene],
    };

    const game = new Phaser.Game(config);
    gameRef.current = game;

    game.events.on('ready', () => {
      const mainScene = game.scene.getScene('MainGameScene') as MainGameScene;
      sceneRef.current = mainScene;

      mainScene.onSelectEntity = onSelectEntity;
      mainScene.onPlaceTowerRequest = (gridX, gridY, towerType) => {
        sendAction({
          type: ActionType.PLACE_TOWER,
          towerType,
          gridX,
          gridY,
        });
      };
    });

    return () => {
      game.destroy(true);
    };
  }, []);

  // Update selected tower in scene
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.selectedTowerToBuild = selectedTowerToBuild;
    }
  }, [selectedTowerToBuild]);

  // Feed snapshots to Phaser scene
  useEffect(() => {
    if (sceneRef.current && latestSnapshot) {
      sceneRef.current.updateFromSnapshot(latestSnapshot);
    }
  }, [latestSnapshot]);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-slate-950/80 rounded-xl border border-slate-700/60 overflow-hidden shadow-2xl">
      <div ref={containerRef} className="rounded-lg overflow-hidden border border-slate-800" />
    </div>
  );
};
