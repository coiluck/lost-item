// ts/save/endingStorage.ts
import { invoke } from '@tauri-apps/api/core';

export interface EndingMeta {
  id: string;
  titleJa: string;
  titleEn: string;
  description: string;
}

// 解放済み一覧で表示する順。シナリオIDと一致させる。
export const ENDINGS: EndingMeta[] = [
  {
    id: 'end-hokanbu',
    titleJa: '保管部',
    titleEn: 'The Keepers',
    description: '登録票の活動団体名に「保管部」と書いた。',
  },
  {
    id: 'end-kyuudou',
    titleJa: '弓道部',
    titleEn: 'The Bowstring',
    description: '登録票の活動団体名に「弓道部」と書いた。',
  },
  {
    id: 'end-maverick',
    titleJa: '一匹狼',
    titleEn: 'The Maverick',
    description: '登録票を提出せず、白いままにした。',
  },
];

export function isEnding(id: string): boolean {
  return ENDINGS.some((e) => e.id === id);
}

export function getEndingMeta(id: string): EndingMeta | undefined {
  return ENDINGS.find((e) => e.id === id);
}

// 解放済みエンディングIDの一覧
export async function getUnlockedEndings(): Promise<string[]> {
  const value = await invoke<string[] | null>('endings_get');
  if (!Array.isArray(value)) return [];
  // ENDINGSにあるやつだけ
  return value.filter(isEnding);
}

// エンディングを解放済みとして記録する。
// 既に解放済みならfalse、今回新たに解放したならtrueを返す（重複判定はRust側で行う）
export async function unlockEnding(id: string): Promise<boolean> {
  if (!isEnding(id)) return false;
  return invoke<boolean>('endings_unlock', { id });
}
