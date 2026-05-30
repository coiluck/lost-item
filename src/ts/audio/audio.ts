// audio.ts
class BGM {
  private introAudio: HTMLAudioElement | null = null;
  private loopAudio: HTMLAudioElement | null = null;
  private volume: number = 1.0;
  private FADE_TIME: number = 1000;
  private fadePromise: Promise<void> | null = null;

  setVolume(volume: number) {
    this.volume = volume;
    if (this.introAudio) this.introAudio.volume = volume;
    if (this.loopAudio) this.loopAudio.volume = volume;
  }

  async play(fileName: string) {
    const nextIntro = new Audio(`./src/assets/audio/bgm/${fileName}_intro.mp3`);
    const nextLoop = new Audio(`./src/assets/audio/bgm/${fileName}_loop.mp3`);
    nextIntro.volume = this.volume;
    nextLoop.volume = this.volume;
    nextLoop.loop = true;
    nextIntro.load();
    nextLoop.load();

    if (this.introAudio || this.loopAudio) {
      await this.fadeOut();
      this.stop();
    }

    this.introAudio = nextIntro;
    this.loopAudio = nextLoop;

    this.introAudio.onended = () => {
      this.loopAudio?.play().catch((e) => console.warn('再生に失敗しました:', e));
    };
    this.introAudio.play().catch((e) => console.warn('再生に失敗しました:', e));
  }

  private stop() {
    if (this.introAudio) {
      this.introAudio.onended = null;
      this.introAudio.pause();
      this.introAudio = null;
    }
    if (this.loopAudio) {
      this.loopAudio.pause();
      this.loopAudio = null;
    }
  }

  async fadeOut(duration: number = this.FADE_TIME) {
    if (!this.introAudio && !this.loopAudio) return;
    if (this.fadePromise) return this.fadePromise;

    this.fadePromise = new Promise<void>((resolve) => {
      const stepMs = 50;
      const steps = Math.max(1, Math.round(duration / stepMs));
      const startVolume = this.introAudio?.volume ?? this.loopAudio?.volume ?? 0;
      const fadeStep = startVolume / steps;

      const intervalId = window.setInterval(() => {
        const current = this.introAudio ?? this.loopAudio;
        if (!current) {
          window.clearInterval(intervalId);
          this.fadePromise = null;
          resolve();
          return;
        }
        const next = Math.max(0, current.volume - fadeStep);
        if (this.introAudio) this.introAudio.volume = next;
        if (this.loopAudio) this.loopAudio.volume = next;
        if (next <= 0) {
          this.introAudio?.pause();
          this.loopAudio?.pause();
          window.clearInterval(intervalId);
          this.fadePromise = null;
          resolve();
        }
      }, stepMs);
    });

    return this.fadePromise;
  }
}

const bgm = new BGM();
export { bgm };


class SE {
  private audio: HTMLAudioElement | null = null;
  private volume: number = 1.0;

  setVolume(volume: number) {
    this.volume = volume;
    if (this.audio) this.audio.volume = volume;
  }

  async play(fileName: string) {
    const wavList: string[] = ['button1', 'button2', 'button3', 'button_close', 'day', 'phone_call', 'disable'];
    const extension = wavList.includes(fileName) ? '.wav' : '.mp3';

    this.audio = new Audio(`./src/assets/audio/se/${fileName}${extension}`);
    this.audio.volume = this.volume;
    this.audio.play().catch((e) => console.warn('再生に失敗しました:', e));
  }
}

const se = new SE();
export { se };
