import { World } from '../ecs/World';

export type TickCallback = (world: World, tick: number, deltaMs: number) => void;

export class FixedStepLoop {
  private isRunning: boolean = false;
  private isPaused: boolean = false;
  private intervalId: NodeJS.Timeout | null = null;
  private lastTimeMs: number = 0;
  private accumulatorMs: number = 0;
  public readonly stepMs: number;

  constructor(
    private world: World,
    public readonly tickRateHz: number = 20,
    private onTick?: TickCallback,
  ) {
    this.stepMs = 1000 / tickRateHz;
  }

  start(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.lastTimeMs = Date.now();
    this.accumulatorMs = 0;

    this.intervalId = setInterval(() => {
      const now = Date.now();
      const frameDelta = now - this.lastTimeMs;
      this.lastTimeMs = now;

      if (!this.isPaused) {
        this.accumulatorMs += frameDelta;

        // Prevent spiral of death if delayed
        if (this.accumulatorMs > 1000) {
          this.accumulatorMs = 1000;
        }

        while (this.accumulatorMs >= this.stepMs) {
          this.step();
          this.accumulatorMs -= this.stepMs;
        }
      } else {
        this.accumulatorMs = 0;
        // When paused, still notify onTick to broadcast live snapshots to clients
        if (this.onTick) {
          this.onTick(this.world, this.world.currentTick, 0);
        }
      }
    }, Math.floor(this.stepMs / 2));
  }

  step(): void {
    this.world.tick(this.stepMs);
    if (this.onTick) {
      this.onTick(this.world, this.world.currentTick, this.stepMs);
    }
  }

  pause(): void {
    this.isPaused = true;
  }

  resume(): void {
    this.isPaused = false;
    this.lastTimeMs = Date.now();
    this.accumulatorMs = 0;
  }

  togglePause(): boolean {
    if (this.isPaused) {
      this.resume();
    } else {
      this.pause();
    }
    return this.isPaused;
  }

  setPaused(paused: boolean): void {
    if (paused) this.pause();
    else this.resume();
  }

  stop(): void {
    if (!this.isRunning) return;
    this.isRunning = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  get running(): boolean {
    return this.isRunning;
  }

  get paused(): boolean {
    return this.isPaused;
  }
}
