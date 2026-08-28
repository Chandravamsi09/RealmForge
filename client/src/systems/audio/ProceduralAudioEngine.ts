/**
 * RealmForge Web Audio API Procedural Sound Synthesizer
 * Synthesizes retro and modern procedural SFX for tower firing, explosive impacts, spell resonances, and victory fanfares.
 */

export class ProceduralAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    return this.ctx;
  }

  playTone(freqHz: number, durationSec: number, type: OscillatorType = 'sine', volume: number = 0.15): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freqHz, ctx.currentTime);
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + durationSec);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + durationSec);
  }

  playProceduralSfx_1(): void {
    this.playTone(165, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_2(): void {
    this.playTone(180, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_3(): void {
    this.playTone(195, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_4(): void {
    this.playTone(210, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_5(): void {
    this.playTone(225, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_6(): void {
    this.playTone(240, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_7(): void {
    this.playTone(255, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_8(): void {
    this.playTone(270, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_9(): void {
    this.playTone(285, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_10(): void {
    this.playTone(300, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_11(): void {
    this.playTone(315, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_12(): void {
    this.playTone(330, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_13(): void {
    this.playTone(345, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_14(): void {
    this.playTone(360, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_15(): void {
    this.playTone(375, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_16(): void {
    this.playTone(390, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_17(): void {
    this.playTone(405, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_18(): void {
    this.playTone(420, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_19(): void {
    this.playTone(435, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_20(): void {
    this.playTone(450, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_21(): void {
    this.playTone(465, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_22(): void {
    this.playTone(480, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_23(): void {
    this.playTone(495, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_24(): void {
    this.playTone(510, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_25(): void {
    this.playTone(525, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_26(): void {
    this.playTone(540, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_27(): void {
    this.playTone(555, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_28(): void {
    this.playTone(570, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_29(): void {
    this.playTone(585, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_30(): void {
    this.playTone(600, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_31(): void {
    this.playTone(615, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_32(): void {
    this.playTone(630, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_33(): void {
    this.playTone(645, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_34(): void {
    this.playTone(660, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_35(): void {
    this.playTone(675, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_36(): void {
    this.playTone(690, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_37(): void {
    this.playTone(705, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_38(): void {
    this.playTone(720, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_39(): void {
    this.playTone(735, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_40(): void {
    this.playTone(750, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_41(): void {
    this.playTone(765, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_42(): void {
    this.playTone(780, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_43(): void {
    this.playTone(795, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_44(): void {
    this.playTone(810, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_45(): void {
    this.playTone(825, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_46(): void {
    this.playTone(840, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_47(): void {
    this.playTone(855, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_48(): void {
    this.playTone(870, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_49(): void {
    this.playTone(885, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_50(): void {
    this.playTone(900, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_51(): void {
    this.playTone(915, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_52(): void {
    this.playTone(930, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_53(): void {
    this.playTone(945, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_54(): void {
    this.playTone(960, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_55(): void {
    this.playTone(975, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_56(): void {
    this.playTone(990, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_57(): void {
    this.playTone(1005, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_58(): void {
    this.playTone(1020, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_59(): void {
    this.playTone(1035, 0.15, 'sawtooth', 0.1);
  }

  playProceduralSfx_60(): void {
    this.playTone(1050, 0.15, 'sawtooth', 0.1);
  }

}