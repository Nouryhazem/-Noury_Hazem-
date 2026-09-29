/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Nouri Hazem Web Audio API Sound System
 * Pure synthesized sound design with zero external network dependencies.
 * Automatically ON when visitors enter the website, with user option to mute.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false; // Automatically ON by default
  private lastSoundTime: number = 0;
  private soundListeners: Set<(muted: boolean) => void> = new Set();
  private userInteracted: boolean = false;
  private hasPlayedIntro: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      // Check if user explicitly muted previously in this session
      const saved = sessionStorage.getItem('nouri_sound_enabled');
      if (saved === 'false') {
        this.isMuted = true;
      } else {
        this.isMuted = false; // Default ON automatically
      }

      // Try creating context immediately
      try {
        this.getContext();
      } catch {
        // Ignored until gesture
      }

      // Auto-unlock AudioContext on the first gesture (pointerdown/scroll/keydown/touchstart/click)
      const unlockAudio = () => {
        const ctx = this.getContext();
        if (ctx && ctx.state === 'suspended') {
          ctx.resume().then(() => {
            if (!this.isMuted && !this.hasPlayedIntro) {
              this.hasPlayedIntro = true;
              this.playNouriTwoNoteMotif();
            }
          }).catch(() => {});
        } else if (ctx && ctx.state === 'running' && !this.isMuted && !this.hasPlayedIntro) {
          this.hasPlayedIntro = true;
          this.playNouriTwoNoteMotif();
        }
        this.userInteracted = true;
      };

      const events = ['pointerdown', 'touchstart', 'click', 'keydown', 'scroll', 'wheel'];
      events.forEach((ev) => {
        window.addEventListener(ev, unlockAudio, { once: true, passive: true });
      });
    }
  }

  public getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('nouri_sound_enabled', (!this.isMuted).toString());
    }

    if (!this.isMuted) {
      const ctx = this.getContext();
      if (ctx && ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }
      // Play a gentle confirmation signature note
      this.playNouriTwoNoteMotif();
    }

    this.notifyListeners();
    return this.isMuted;
  }

  public setMute(muted: boolean): void {
    this.isMuted = muted;
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('nouri_sound_enabled', (!this.isMuted).toString());
    }
    this.notifyListeners();
  }

  public subscribe(callback: (muted: boolean) => void): () => void {
    this.soundListeners.add(callback);
    callback(this.isMuted);
    return () => this.soundListeners.delete(callback);
  }

  private notifyListeners(): void {
    this.soundListeners.forEach((cb) => cb(this.isMuted));
  }

  // Throttle helper for scroll-linked acoustic cues (prevent audio stacking)
  private canPlayScrollCue(minIntervalMs: number = 700): boolean {
    if (this.isMuted) return false;
    const now = Date.now();
    if (now - this.lastSoundTime < minIntervalMs) return false;
    this.lastSoundTime = now;
    return true;
  }

  /**
   * 1. Soft editorial click: precise, short, dampened organic click
   */
  public playEditorialClick(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.025);

      gain.gain.setValueAtTime(0.045, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.025);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.028);
    } catch {
      // AudioContext policy catch
    }
  }

  /**
   * 2. Restrained airy sweep: soft band-filtered harmonic sweep for major section reveals
   */
  public playAirySweep(force: boolean = false): void {
    if (!force && !this.canPlayScrollCue(1000)) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(240, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(480, ctx.currentTime + 0.35);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(350, ctx.currentTime);
      filter.frequency.linearRampToValueAtTime(700, ctx.currentTime + 0.35);
      filter.Q.value = 1.2;

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.035, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.38);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch {
      // AudioContext policy catch
    }
  }

  /**
   * 3. Signature short two-note motif for the N/ monogram:
   * Clean crystalline interval (C5: 523.25Hz -> G5: 783.99Hz)
   */
  public playNouriTwoNoteMotif(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;

      // Note 1: C5
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(523.25, now);
      gain1.gain.setValueAtTime(0.04, now);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.2);

      // Note 2: G5 (80ms later)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(783.99, now + 0.08);
      gain2.gain.setValueAtTime(0.045, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.38);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.4);
    } catch {
      // AudioContext policy catch
    }
  }

  /**
   * 4. Subtle mechanical ticks for the analytics reveal (Chaos to Clarity)
   */
  public playMechanicalTick(count: number = 1): void {
    if (!this.canPlayScrollCue(500)) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      for (let i = 0; i < Math.min(count, 3); i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const t = now + i * 0.045;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(2400 + i * 200, t);
        osc.frequency.exponentialRampToValueAtTime(800, t + 0.015);

        gain.gain.setValueAtTime(0.025, t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.018);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 0.02);
      }
    } catch {
      // AudioContext policy catch
    }
  }

  /**
   * Safe stop all audio
   */
  public stopAll(): void {
    if (this.ctx && this.ctx.state === 'running') {
      this.ctx.suspend().catch(() => {});
    }
  }
}

export const soundEngine = new SoundEngine();
