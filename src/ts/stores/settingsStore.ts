import { create } from 'zustand';
import { invoke } from '@tauri-apps/api/core';

type ScreenMode = 'fullscreen' | 'window';

type SettingsState = {
  // audio
  masterVolume: number;
  bgmVolume: number;
  seVolume: number;
  setMasterVolume: (volume: number) => void;
  setBgmVolume: (volume: number) => void;
  setSeVolume: (volume: number) => void;
  loadAudioSettings: () => Promise<void>;

  // text
  textSpeed: number;
  textSize: number;
  setTextSpeed: (speed: number) => void;
  setTextSize: (size: number) => void;
  loadTextSettings: () => Promise<void>;

  // others
  screenMode: ScreenMode;
  setScreenMode: (mode: ScreenMode) => void;
  loadOthersSettings: () => Promise<void>;
};

async function getSetting<T>(key: string, fallback: T): Promise<T> {
  const value = await invoke<T | null>('settings_get', { key });
  return value === null || value === undefined ? fallback : value;
}

function setSetting(key: string, value: unknown): void {
  void invoke('settings_set', { key, value });
}

export const useSettingsStore = create<SettingsState>((set) => ({
  // audio
  masterVolume: 1,
  bgmVolume: 3,
  seVolume: 8,
  setMasterVolume: (volume: number) => {
    set({ masterVolume: volume });
    setSetting('masterVolume', volume);
  },
  setBgmVolume: (volume: number) => {
    set({ bgmVolume: volume });
    setSetting('bgmVolume', volume);
  },
  setSeVolume: (volume: number) => {
    set({ seVolume: volume });
    setSetting('seVolume', volume);
  },
  loadAudioSettings: async () => {
    const [masterVolume, bgmVolume, seVolume] = await Promise.all([
      getSetting<number>('masterVolume', 1),
      getSetting<number>('bgmVolume', 3),
      getSetting<number>('seVolume', 8),
    ]);
    set({ masterVolume, bgmVolume, seVolume });
  },

  // text
  textSpeed: 6,
  textSize: 16,
  setTextSpeed: (speed: number) => {
    set({ textSpeed: speed });
    setSetting('textSpeed', speed);
  },
  setTextSize: (size: number) => {
    set({ textSize: size });
    setSetting('textSize', size);
  },
  loadTextSettings: async () => {
    const [textSpeed, textSize] = await Promise.all([
      getSetting<number>('textSpeed', 6),
      getSetting<number>('textSize', 16),
    ]);
    set({ textSpeed, textSize });
  },

  // others
  screenMode: 'window',
  setScreenMode: (mode: ScreenMode) => {
    set({ screenMode: mode });
    setSetting('screenMode', mode);
  },
  loadOthersSettings: async () => {
    const screenMode = await getSetting<ScreenMode>('screenMode', 'window');
    set({ screenMode });
  },
}));
