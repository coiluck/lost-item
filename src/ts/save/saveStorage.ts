// ts/save/saveStorage.ts
import { invoke } from '@tauri-apps/api/core';
import type { GameState } from '../engine/types';

export const SLOTS_PAGE = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const SLOTS_PER_PAGE = 10;

export interface SaveSlot {
  savedAt: number; // Date.now()
  state: GameState;
}

export async function readSlot(page: number, slot: number): Promise<SaveSlot | null> {
  const value = await invoke<SaveSlot | null>('savedata_get', { page, slot });
  return value ?? null;
}

export async function writeSlot(page: number, slot: number, state: GameState): Promise<void> {
  const data: SaveSlot = { savedAt: Date.now(), state };
  await invoke('savedata_set', { page, slot, value: data });
}

/** "Mar 1, 2026 12:00" 形式に整形する。 */
export function formatSavedAt(savedAt: number): string {
  return new Date(savedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}
