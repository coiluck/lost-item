import { ScenarioEngine, type AdvanceResult } from './ScenarioEngine';
import { executeTransients } from './CommandExecutor';
import { scenarioRegistry } from '../scenarios';
import { useGameStore } from '../stores/gameStore';
import { bgm } from '../audio/audio';
import type { Choice, GameState } from './types';

// エンジンと「初回advance済みフラグ」「最後に再生したBGMファイル名」は
// /game ↔ /settings 等のナビゲーション越しに保つためモジュールスコープで持つ。
let sharedEngine: ScenarioEngine | null = null;
let started = false;
let lastBgm: string | null = null;

export const createInitialState = (scenarioId = 'test'): GameState => ({
  progress: { scenarioId, lineIndex: 0, branchStack: [] },
  snapshot: {
    background: null,
    characters: [],
    bgm: null,
    text: '',
    speaker: '',
  },
  rootChapter: scenarioId,
  version: 1,
});

export function resetGameEngine(initial: GameState = createInitialState()): void {
  sharedEngine = new ScenarioEngine(initial, scenarioRegistry);
  started = false;
  if (lastBgm) void bgm.fadeOut();
  lastBgm = initial.snapshot.bgm?.file ?? null;
  useGameStore.getState().reset();
  useGameStore.getState().setSnapshot(initial.snapshot);
}

export function useGameEngine(initial: GameState) {
  if (!sharedEngine) {
    sharedEngine = new ScenarioEngine(initial, scenarioRegistry);
    lastBgm = initial.snapshot.bgm?.file ?? null;
  }
  const engine = sharedEngine;

  const setSnapshot = useGameStore((s) => s.setSnapshot);
  const fireMotion = useGameStore((s) => s.fireMotion);
  const setPendingChoice = useGameStore((s) => s.setPendingChoice);

  const syncBgm = (next: string | null) => {
    if (lastBgm === next) return;
    lastBgm = next;
    if (next) void bgm.play(next);
    else void bgm.fadeOut();
  };

  const syncFromState = () => {
    const s = engine.getState();
    setSnapshot(s.snapshot);
    syncBgm(s.snapshot.bgm?.file ?? null);
  };

  const advance = async (): Promise<AdvanceResult> => {
    const result = engine.advance();
    if (result.kind === 'line') {
      syncFromState();
      await executeTransients(result.transients, {
        bgMotion: (cmd) => fireMotion({ direction: cmd.direction, duration: cmd.duration }),
        bgShake: (_cmd) => { /* TODO */ },
        showNextChapter: async (_cmd) => { /* TODO */ },
      });
    } else if (result.kind === 'choice') {
      setPendingChoice({
        choiceId: result.choiceId,
        choices: engine.getChoices(result.choiceId),
      });
    }
    return result;
  };

  /** 既に開始済みなら何もしない。/game に再入したときに先頭から advance しないため。 */
  const start = async () => {
    if (started) {
      syncFromState();
      return;
    }
    started = true;
    await advance();
  };

  const goBack = (): boolean => {
    if (!engine.goBack()) return false;
    setPendingChoice(null);
    syncFromState();
    return true;
  };

  const selectChoice = async (choiceId: string, choiceIndex: number) => {
    engine.selectChoice(choiceId, choiceIndex);
    setPendingChoice(null);
    await advance();
  };

  const restore = (saved: GameState) => {
    engine.restore(saved);
    setPendingChoice(null);
    syncFromState();
  };

  return {
    start,
    advance,
    goBack,
    selectChoice,
    restore,
    getChoices: (id: string): Choice[] => engine.getChoices(id),
    getState: () => engine.getState(),
  };
}
