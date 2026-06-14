// audio.ts
import { getAudioContext, getMasterGain, setMasterGain } from './audioContext';

export function setMasterVolume(volume: number) {
  setMasterGain(volume);
}

class BGM {
  private introAudio: HTMLAudioElement | null = null;
  private loopAudio: HTMLAudioElement | null = null;
  private gain: GainNode | null = null;
  private volume: number = 1.0; // チャンネル音量 0〜1
  private FADE_TIME: number = 1000;
  private fadePromise: Promise<void> | null = null;

  private ensureGain(): GainNode {
    if (!this.gain) {
      const ctx = getAudioContext();
      this.gain = ctx.createGain();
      this.gain.gain.value = this.volume;
      this.gain.connect(getMasterGain());
    }
    return this.gain;
  }

  private clampVolume(volume: number) {
    // 入力は1 ~ 10。出力は0 ~ 1。
    const clampedVolume = volume / 10;
    return Math.max(0, Math.min(clampedVolume, 1));
  }

  setVolume(volume: number) {
    this.volume = this.clampVolume(volume);
    this.ensureGain().gain.value = this.volume;
  }

  private connect(audio: HTMLAudioElement) {
    const ctx = getAudioContext();
    const source = ctx.createMediaElementSource(audio);
    source.connect(this.ensureGain());
  }

  async play(fileName: string) {
    const nextIntro = new Audio(`/assets/audio/bgm/${fileName}_intro.mp3`);
    const nextLoop = new Audio(`/assets/audio/bgm/${fileName}_loop.mp3`);
    nextLoop.loop = true;
    nextIntro.load();
    nextLoop.load();

    if (this.introAudio || this.loopAudio) {
      await this.fadeOut();
      this.stop();
    }

    this.connect(nextIntro);
    this.connect(nextLoop);

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
    if (!this.gain) return;

    const ctx = getAudioContext();
    const gain = this.gain;
    const startVolume = gain.gain.value;

    this.fadePromise = new Promise<void>((resolve) => {
      // GainNode のスケジューリングでなめらかにフェード
      gain.gain.cancelScheduledValues(ctx.currentTime);
      gain.gain.setValueAtTime(startVolume, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + duration / 1000);

      window.setTimeout(() => {
        this.introAudio?.pause();
        this.loopAudio?.pause();
        gain.gain.value = this.volume; // 次回再生用に戻す
        this.fadePromise = null;
        resolve();
      }, duration);
    });

    return this.fadePromise;
  }
}

const bgm = new BGM();
export { bgm };

class SE {
  private gain: GainNode | null = null;
  private volume: number = 1.0;

  private ensureGain(): GainNode {
    if (!this.gain) {
      const ctx = getAudioContext();
      this.gain = ctx.createGain();
      this.gain.gain.value = this.volume;
      this.gain.connect(getMasterGain());
    }
    return this.gain;
  }

  private clampVolume(volume: number) {
    // 入力は1 ~ 10。出力は0 ~ 1。
    const clampedVolume = volume / 10;
    return Math.max(0, Math.min(clampedVolume, 1));
  }

  setVolume(volume: number) {
    this.volume = this.clampVolume(volume);
    this.ensureGain().gain.value = this.volume;
  }

  async play(fileName: string) {
    const wavList: string[] = ['theme', 'click'];
    const extension = wavList.includes(fileName) ? '.wav' : '.mp3';

    const audio = new Audio(`/assets/audio/se/${fileName}${extension}`);
    const ctx = getAudioContext();
    const source = ctx.createMediaElementSource(audio);
    source.connect(this.ensureGain());
    audio.onended = () => source.disconnect()
    audio.play().catch((e) => console.warn('再生に失敗しました:', e));
  }
}

const se = new SE();
export { se };

class Voice {
  private current: HTMLAudioElement | null = null;
  private gain: GainNode | null = null;
  private volume: number = 1.0;

  private ensureGain(): GainNode {
    if (!this.gain) {
      const ctx = getAudioContext();
      this.gain = ctx.createGain();
      this.gain.gain.value = this.volume;
      this.gain.connect(getMasterGain());
    }
    return this.gain;
  }

  private clampVolume(volume: number) {
    // 入力は1 ~ 10。出力は0 ~ 1。
    const clampedVolume = volume / 10;
    return Math.max(0, Math.min(clampedVolume, 1));
  }

  setVolume(volume: number) {
    this.volume = this.clampVolume(volume);
    this.ensureGain().gain.value = this.volume;
  }

  async play(path: string) {
    this.stop(); // 前のは止める

    const audio = new Audio(path);
    const ctx = getAudioContext();
    const src = ctx.createMediaElementSource(audio);
    src.connect(this.ensureGain());
    audio.onended = () => { src.disconnect(); this.current = null; };
    this.current = audio;
    audio.play().catch(e => console.warn('再生に失敗しました:', e));
  }

  stop() {
    if (this.current) { this.current.pause(); this.current = null; }
  }
}

const voice = new Voice();
export { voice };