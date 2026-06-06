// audioContext.ts
// AudioContext と masterGain を全体で共有する。
let ctx: AudioContext | null = null;
let masterGain: GainNode | null = null;

export function getAudioContext(): AudioContext {
  if (!ctx) {
    ctx = new AudioContext();
    masterGain = ctx.createGain();
    masterGain.gain.value = 1;
    masterGain.connect(ctx.destination);
  }
  // ユーザー操作前に作られると suspended になるので、呼ぶたびに resume を試みる
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

export function getMasterGain(): GainNode {
  getAudioContext();
  return masterGain!;
}

// master は 0〜2
export function setMasterGain(volume: number) {
  getMasterGain().gain.value = volume;
}