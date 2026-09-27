import audio from "../assets/audio/wedding-song.mp3"
class BengaliWeddingAudio {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;

  /**
   * Initialize the wedding song.
   *
   * IMPORTANT:
   * Put your MP3 file inside:
   *
   * public/audio/wedding-song.mp3
   *
   * Then the browser URL is:
   * /audio/wedding-song.mp3
   */
  private initAudio() {
    if (!this.audio) {
      this.audio = new Audio(audio);

      // Continuously repeat the song
      this.audio.loop = true;

      // Keep volume comfortable
      this.audio.volume = 0.5;

      // Update state when audio starts
      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
      });

      // Update state when audio stops/ends
      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
      });

      // Handle loading/playback errors
      this.audio.addEventListener('error', () => {
        this.isPlaying = false;
        console.error('Wedding song could not be loaded.');
      });
    }
  }

  /**
   * Play wedding song
   */
  public async play() {
    try {
      this.initAudio();

      if (!this.audio) return;

      // If already playing, don't restart the song
      if (!this.audio.paused) {
        this.isPlaying = true;
        return;
      }

      await this.audio.play();

      this.isPlaying = true;
    } catch (error) {
      console.error('Unable to play wedding song:', error);
      this.isPlaying = false;
    }
  }

  /**
   * Stop wedding song
   */
  public stop() {
    if (!this.audio) {
      this.isPlaying = false;
      return;
    }

    this.audio.pause();

    // Start from beginning when played again
    this.audio.currentTime = 0;

    this.isPlaying = false;
  }

  /**
   * Toggle play / stop
   */
  public async toggle(): Promise<boolean> {
    if (this.isPlaying) {
      this.stop();
      return false;
    }

    await this.play();
    return this.isPlaying;
  }

  /**
   * Check whether song is currently playing
   */
  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  /**
   * Change volume
   */
  public setVolume(volume: number) {
    if (!this.audio) {
      this.initAudio();
    }

    if (!this.audio) return;

    // Keep volume between 0 and 1
    this.audio.volume = Math.max(0, Math.min(1, volume));
  }

  /**
   * Clean up audio
   */
  public destroy() {
    if (!this.audio) return;

    this.audio.pause();
    this.audio.currentTime = 0;
    this.audio.src = '';

    this.audio.load();

    this.audio = null;
    this.isPlaying = false;
  }
}

export const bengaliWeddingAudio = new BengaliWeddingAudio();