import React, { useState } from 'react';
import { X, Volume2, Sparkles, Sliders } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [masterVolume, setMasterVolume] = useState<number>(80);
  const [sfxVolume, setSfxVolume] = useState<number>(75);
  const [particleQuality, setParticleQuality] = useState<'LOW' | 'MEDIUM' | 'HIGH'>('HIGH');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2 font-bold text-white text-base">
            <Sliders className="w-5 h-5 text-amber-400" />
            <span>Game Settings</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Audio Volume Controls */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
            <Volume2 className="w-4 h-4 text-amber-400" />
            <span>Audio & Sound FX</span>
          </div>

          <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Master Volume</span>
                <span>{masterVolume}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={masterVolume}
                onChange={e => setMasterVolume(parseInt(e.target.value, 10))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Sound FX & Combat</span>
                <span>{sfxVolume}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sfxVolume}
                onChange={e => setSfxVolume(parseInt(e.target.value, 10))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Graphics & Particles */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Visual Quality</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {(['LOW', 'MEDIUM', 'HIGH'] as const).map(q => (
              <button
                key={q}
                onClick={() => setParticleQuality(q)}
                className={`py-2 rounded-lg text-xs font-bold border transition ${
                  particleQuality === q
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow transition"
        >
          Save & Apply
        </button>
      </div>
    </div>
  );
};
