/**
 * Procedural Web Audio API sound synthesizer
 * Zero external audio files required, fast loading, no broken asset links.
 */

class SoundSynthesizer {
  private ctx: AudioContext | null = null;
  private isEnabled: boolean = false;
  private masterGain: GainNode | null = null;
  private droneGain: GainNode | null = null;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private droneLFO: OscillatorNode | null = null;

  constructor() {
    // Check saved state
    const saved = localStorage.getItem('mindmatter_audio_enabled');
    this.isEnabled = saved === 'true';
  }

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isEnabled ? 0.35 : 0, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleSound(force?: boolean): boolean {
    const nextState = force !== undefined ? force : !this.isEnabled;
    this.isEnabled = nextState;
    localStorage.setItem('mindmatter_audio_enabled', String(this.isEnabled));

    this.initContext();

    if (this.masterGain && this.ctx) {
      const targetGain = this.isEnabled ? 0.35 : 0;
      this.masterGain.gain.setTargetAtTime(targetGain, this.ctx.currentTime, 0.1);
    }

    if (this.isEnabled) {
      this.startAmbientDrone();
      this.playChime(440, 'triangle');
    } else {
      this.stopAmbientDrone();
    }

    return this.isEnabled;
  }

  public getSoundEnabled(): boolean {
    return this.isEnabled;
  }

  public startAmbientDrone() {
    if (!this.isEnabled || !this.ctx || this.droneOsc1) return;

    try {
      this.droneGain = this.ctx.createGain();
      this.droneGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

      // Low fundamental (55Hz - A1)
      this.droneOsc1 = this.ctx.createOscillator();
      this.droneOsc1.type = 'sine';
      this.droneOsc1.frequency.setValueAtTime(55, this.ctx.currentTime);

      // Fifth overtone (82.4Hz - E2) with slight detune for cosmic chorus
      this.droneOsc2 = this.ctx.createOscillator();
      this.droneOsc2.type = 'sine';
      this.droneOsc2.frequency.setValueAtTime(82.4, this.ctx.currentTime);
      this.droneOsc2.detune.setValueAtTime(4, this.ctx.currentTime);

      // Filter for warm dark tone
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(220, this.ctx.currentTime);

      // Slow LFO for breath-like pulsation
      this.droneLFO = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      this.droneLFO.frequency.setValueAtTime(0.08, this.ctx.currentTime); // 12.5s cycle
      lfoGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      this.droneLFO.connect(lfoGain.gain);

      this.droneOsc1.connect(filter);
      this.droneOsc2.connect(filter);
      filter.connect(this.droneGain);

      if (this.masterGain) {
        this.droneGain.connect(this.masterGain);
      }

      this.droneOsc1.start();
      this.droneOsc2.start();
      this.droneLFO.start();
    } catch {
      // Audio auto-play policy catch
    }
  }

  public stopAmbientDrone() {
    try {
      if (this.droneOsc1) {
        this.droneOsc1.stop();
        this.droneOsc1.disconnect();
        this.droneOsc1 = null;
      }
      if (this.droneOsc2) {
        this.droneOsc2.stop();
        this.droneOsc2.disconnect();
        this.droneOsc2 = null;
      }
      if (this.droneLFO) {
        this.droneLFO.stop();
        this.droneLFO.disconnect();
        this.droneLFO = null;
      }
    } catch {
      // Graceful shutdown
    }
  }

  public playHover() {
    if (!this.isEnabled) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.03);

      gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.03);
    } catch {
      // Ignore audio glitches
    }
  }

  public playChime(freq = 528, type: OscillatorType = 'sine') {
    if (!this.isEnabled) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.98, now + 0.6);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.6);
    } catch {
      // Ignore
    }
  }

  public playSweep(up = true) {
    if (!this.isEnabled) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      const startF = up ? 150 : 600;
      const endF = up ? 600 : 150;

      osc.frequency.setValueAtTime(startF, now);
      osc.frequency.exponentialRampToValueAtTime(endF, now + 0.4);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.4);
    } catch {
      // Ignore
    }
  }
}

export const sound = new SoundSynthesizer();
