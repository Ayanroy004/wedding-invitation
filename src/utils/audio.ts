// Auspicious Bengali Wedding Song & Melody Synthesizer via Web Audio API
// Playing the emotional melody of "শুধু তোমারই জন্য / তুমি কাছে টানলে"

class BengaliWeddingAudio {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private melodyTimeout: number | null = null;
  private masterGain: GainNode | null = null;
  private droneGain: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Warm acoustic string & Tanpura drone
  private startDrone() {
    if (!this.ctx || !this.masterGain) return;

    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    this.droneGain.connect(this.masterGain);

    const freqs = [146.83, 220.0, 293.66, 440.0, 587.33]; // D3, A3, D4, A4, D5 (Warm Raag Yaman / Bhairavi mood)
    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.droneGain) return;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, this.ctx.currentTime);

      gain.gain.setValueAtTime(idx === 0 ? 0.35 : 0.2, this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.droneGain);
      osc.start();
    });
  }

  // Melodic flute / Shehnai note
  private playFluteNote(freq: number, duration: number, startTime: number) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const noteGain = this.ctx.createGain();
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    subOsc.type = 'triangle';
    subOsc.frequency.setValueAtTime(freq * 2, startTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(freq * 3.5, startTime);
    filter.Q.setValueAtTime(2.0, startTime);

    // Warm vibrato
    lfo.frequency.setValueAtTime(5.2, startTime);
    lfoGain.gain.setValueAtTime(freq * 0.015, startTime);
    lfo.connect(osc.frequency);
    lfo.start(startTime);
    lfo.stop(startTime + duration);

    // Envelope
    noteGain.gain.setValueAtTime(0.001, startTime);
    noteGain.gain.exponentialRampToValueAtTime(0.28, startTime + Math.min(0.2, duration * 0.3));
    noteGain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    osc.connect(filter);
    subOsc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(startTime);
    subOsc.start(startTime);
    osc.stop(startTime + duration);
    subOsc.stop(startTime + duration);
  }

  // Plucked Acoustic guitar / sitar arpeggio note
  private playPluck(freq: number, startTime: number) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, startTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, startTime);

    gain.gain.setValueAtTime(0.18, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 1.2);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + 1.2);
  }

  // Melodic loop matching the song "রাজি হলো ইচ্ছে তোমারি জন্য রে... হতে পারি গল্প তুমি কাছে টানলে..."
  private playSongLoop() {
    if (!this.isPlaying || !this.ctx) return;

    // Melody notes (D major scale: D, E, F#, G, A, B, C#)
    const melody: Array<{ freq: number; dur: number; rest: number }> = [
      // রাজি হলো ইচ্ছে (D4, F#4, A4, G4, F#4)
      { freq: 293.66, dur: 0.7, rest: 0.1 },
      { freq: 369.99, dur: 0.6, rest: 0.1 },
      { freq: 440.00, dur: 0.9, rest: 0.15 },
      { freq: 392.00, dur: 0.6, rest: 0.1 },
      { freq: 369.99, dur: 1.0, rest: 0.2 },
      // তোমারি জন্য রে...
      { freq: 329.63, dur: 0.7, rest: 0.1 },
      { freq: 293.66, dur: 0.8, rest: 0.1 },
      { freq: 440.00, dur: 1.4, rest: 0.3 },
      // হতে পারি গল্প
      { freq: 440.00, dur: 0.6, rest: 0.1 },
      { freq: 493.88, dur: 0.6, rest: 0.1 },
      { freq: 587.33, dur: 1.0, rest: 0.15 },
      // তুমি কাছে টানলে...
      { freq: 554.37, dur: 0.6, rest: 0.1 },
      { freq: 493.88, dur: 0.7, rest: 0.1 },
      { freq: 440.00, dur: 1.5, rest: 0.4 },
      // শুধু তুমি চাও যদি...
      { freq: 369.99, dur: 0.7, rest: 0.1 },
      { freq: 392.00, dur: 0.6, rest: 0.1 },
      { freq: 440.00, dur: 0.9, rest: 0.1 },
      // সাজাবো আবার নদী...
      { freq: 392.00, dur: 0.8, rest: 0.1 },
      { freq: 369.99, dur: 0.7, rest: 0.1 },
      { freq: 329.63, dur: 0.7, rest: 0.1 },
      { freq: 293.66, dur: 1.6, rest: 0.6 },
    ];

    let currentOffset = this.ctx.currentTime + 0.1;
    melody.forEach((note, idx) => {
      if (!this.isPlaying) return;
      this.playFluteNote(note.freq, note.dur, currentOffset);

      // Add gentle acoustic guitar plucks on every 2nd note
      if (idx % 2 === 0) {
        this.playPluck(note.freq * 0.5, currentOffset);
      }
      currentOffset += note.dur + note.rest;
    });

    const totalDurationMs = (currentOffset - this.ctx.currentTime + 1.0) * 1000;
    this.melodyTimeout = window.setTimeout(() => {
      if (this.isPlaying) {
        this.playSongLoop();
      }
    }, totalDurationMs);
  }

  public play() {
    try {
      this.initContext();
      if (this.isPlaying) return;
      this.isPlaying = true;
      this.startDrone();
      this.playSongLoop();
    } catch {
      // Audio playback gesture restriction
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.melodyTimeout) {
      clearTimeout(this.melodyTimeout);
      this.melodyTimeout = null;
    }
    if (this.droneGain && this.ctx) {
      try {
        this.droneGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      } catch {
        // Safe
      }
    }
    if (this.ctx) {
      try {
        this.ctx.close();
      } catch {
        // Ignore
      }
      this.ctx = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const bengaliWeddingAudio = new BengaliWeddingAudio();
