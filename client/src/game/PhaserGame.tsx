import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { BootScene } from './scenes/BootScene';
import { MainGameScene } from './scenes/MainGameScene';
import { TowerType, ActionType } from '@realmforge/shared';
import { useGameSocket } from '../context/GameSocketContext';

interface PhaserGameProps {
  selectedTowerToBuild: TowerType | null;
  isMeteorTargetingMode?: boolean;
  onSelectEntity: (entityId: number | null) => void;
  onMeteorFired?: () => void;
}

export const PhaserGame: React.FC<PhaserGameProps> = ({
  selectedTowerToBuild,
  isMeteorTargetingMode = false,
  onSelectEntity,
  onMeteorFired,
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
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.NO_CENTER,
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
      mainScene.onTriggerSpecialAbility = (abilityId, targetX, targetY) => {
        sendAction({
          type: ActionType.TRIGGER_SPECIAL_ABILITY,
          abilityId,
          targetX,
          targetY,
        });
        if (onMeteorFired) onMeteorFired();
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

  // Update meteor mode in scene
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.isMeteorTargetingMode = isMeteorTargetingMode;
    }
  }, [isMeteorTargetingMode]);

  // Feed snapshots to Phaser scene
  useEffect(() => {
    if (sceneRef.current && latestSnapshot) {
      sceneRef.current.updateFromSnapshot(latestSnapshot);
    }
  }, [latestSnapshot]);

  return (
    <div className="flex items-center justify-center">
      <div
        ref={containerRef}
        className="w-[512px] h-[384px] rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 flex-shrink-0"
      />
    </div>
  );
};
