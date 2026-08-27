import React, { useRef, useEffect } from 'react';
import { useGameSocket } from '../context/GameSocketContext';
import { GameMap, FOREST_CROSSING_MAP, TileType } from '@realmforge/shared';
import { Compass } from 'lucide-react';

export const Minimap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { latestSnapshot, pings } = useGameSocket();
  const mapRef = useRef<GameMap>(new GameMap(FOREST_CROSSING_MAP));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const map = mapRef.current;
    const grid = map.grid;
    const cellW = canvas.width / grid.width;
    const cellH = canvas.height / grid.height;

    // Clear
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw terrain
    for (let y = 0; y < grid.height; y++) {
      for (let x = 0; x < grid.width; x++) {
        const tile = grid.getTile(x, y);
        if (tile?.type === TileType.PATH) ctx.fillStyle = '#334155';
        else if (tile?.type === TileType.OBSTACLE) ctx.fillStyle = '#020617';
        else if (tile?.type === TileType.SPAWN_POINT) ctx.fillStyle = '#ef4444';
        else if (tile?.type === TileType.NEXUS_BASE) ctx.fillStyle = '#10b981';
        else ctx.fillStyle = '#1e293b';

        ctx.fillRect(x * cellW, y * cellH, cellW, cellH);
      }
    }

    // Draw active entities from snapshot
    if (latestSnapshot) {
      for (const ent of latestSnapshot.entities) {
        if (ent.transform) {
          const mapPixelW = grid.width * 32;
          const mapPixelH = grid.height * 32;
          const normX = ent.transform.x / mapPixelW;
          const normY = ent.transform.y / mapPixelH;

          if (ent.tower) {
            ctx.fillStyle = '#38bdf8'; // Cyan tower dot
            ctx.beginPath();
            ctx.arc(normX * canvas.width, normY * canvas.height, 2.5, 0, Math.PI * 2);
            ctx.fill();
          } else if (ent.enemy) {
            ctx.fillStyle = '#f87171'; // Red enemy dot
            ctx.beginPath();
            ctx.arc(normX * canvas.width, normY * canvas.height, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }

    // Draw active pings
    for (const ping of pings) {
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(
        (ping.gridX * 32 + 16) / (grid.width * 32) * canvas.width,
        (ping.gridY * 32 + 16) / (grid.height * 32) * canvas.height,
        6,
        0,
        Math.PI * 2,
      );
      ctx.stroke();
    }
  }, [latestSnapshot, pings]);

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2 backdrop-blur-md shadow-xl">
      <div className="flex items-center space-x-1 text-[11px] font-bold text-slate-400 mb-1 px-1">
        <Compass className="w-3 h-3 text-amber-400" />
        <span>Tactical Radar</span>
      </div>
      <canvas
        ref={canvasRef}
        width={160}
        height={120}
        className="rounded border border-slate-700/60 block"
      />
    </div>
  );
};
