import { writeTextFile, readTextFile } from '@tauri-apps/plugin-fs';
import type { GameState } from './types';

const SAVE_DIR = 'save';
const CURRENT_VERSION = 2;

const path = (slot: number) => `${SAVE_DIR}/slot${slot}.json`;

export type SaveMeta = {
  slot: number;
  savedAt: string;
  rootChapter: string;
  preview: { speaker: string; text: string };
};

export type SaveData = {
  version: number;
  savedAt: string;
  state: GameState;
};

export async function saveGame(slot: number, state: GameState): Promise<void> {
  const data: SaveData = {
    version: CURRENT_VERSION,
    savedAt: new Date().toISOString(),
    state,
  };
  await writeTextFile(path(slot), JSON.stringify(data));
}

export async function loadGame(slot: number): Promise<GameState> {
  const raw = await readTextFile(path(slot));
  const data = JSON.parse(raw) as SaveData;
  return migrate(data);
}

function migrate(data: SaveData): GameState {
  if (data.version === CURRENT_VERSION) return data.state;
  // v1: points フィールドが無い。空で補ってv2に上げる。
  if (data.version === 1) {
    return { ...data.state, points: {}, version: 2 };
  }
  throw new Error(`Unsupported save version: ${data.version}`);
}