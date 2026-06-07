import type {
  GameState, ScenarioLine, TransientCommand, ScenarioFile, BranchFrame, Choice,
} from './types';
import { reduceLine } from './SceneReducer';
import { isTransient } from './commands';
import { resolveCursor, peekLine } from './cursor';
import { HistoryManager } from './HistoryManager';

export type AdvanceResult =
  | { kind: 'line'; line: ScenarioLine; transients: TransientCommand[] }
  | { kind: 'choice'; choiceId: string }
  | { kind: 'end' };

export class ScenarioEngine {
  private state: GameState;
  private readonly history = new HistoryManager<GameState>(50);
  // 初期 state (まだ何も消費していない空 snapshot) を history に積むと
  // goBack で「テキスト無し+背景無し」の見えない地点まで戻れてしまうため、
  // 最初の消費/選択までは push をスキップする。
  private hasConsumed = false;

  constructor(
    initial: GameState,
    private readonly registry: Record<string, ScenarioFile>,
    private readonly chapterLabels: Record<string, string> = {},
  ) {
    this.state = structuredClone(initial);
  }

  getState(): GameState {
    return structuredClone(this.state);
  }

  peek(): ScenarioLine | null {
    return peekLine(this.state.progress, this.registry);
  }

  getChoices(choiceId: string): Choice[] {
    const top = this.state.progress.branchStack[this.state.progress.branchStack.length - 1];
    const scenarioId = top?.scenarioId ?? this.state.progress.scenarioId;
    return this.registry[scenarioId]?.choices?.[choiceId] ?? [];
  }

  // 1ステップ進める
  advance(): AdvanceResult {
    while (true) {
      const line = this.peek();
      if (line) {
        if (line.choiceId) return { kind: 'choice', choiceId: line.choiceId };
        return this.consumeLine(line);
      }
      // 終端: 分岐内 -> 親へ, ルート -> nextへ, なにもない -> シナリオ終了。
      if (this.state.progress.branchStack.length > 0) {
        const popped = this.state.progress.branchStack.pop()!;
        if (popped.next) {
          this.jumpToScenario(popped.next);
        } else {
          this.incrementCurrent();
        }
        continue;
      }
      const nextId = this.registry[this.state.progress.scenarioId]?.next;
      if (!nextId) return { kind: 'end' };
      this.jumpToScenario(nextId);
    }
  }

  // 選択肢を選ぶ
  selectChoice(choiceId: string, choiceIndex: number): void {
    const scenario = this.registry[this.state.progress.scenarioId];
    const choice = scenario?.choices?.[choiceId]?.[choiceIndex];
    if (!choice) {
      throw new Error(`Invalid choice: ${choiceId}[${choiceIndex}]`);
    }
    this.pushHistory();
    const frame: BranchFrame = {
      scenarioId: this.state.progress.scenarioId,
      choiceId,
      choiceIndex,
      lineIndex: 0,
    };
    if (choice.next) frame.next = choice.next;
    this.state.progress.branchStack.push(frame);
  }

  // 1ステップ戻る
  goBack(): GameState | null {
    const prev = this.history.pop();
    if (!prev) return null;
    this.state = prev;
    return this.getState();
  }

  // ロード
  restore(saved: GameState): GameState {
    this.state = structuredClone(saved);
    this.history.clear();
    // ロード後はロード地点に「戻れる」必要があるため、次のadvanceからpush開始。
    this.hasConsumed = true;
    return this.getState();
  }

  // -------- private --------

  private pushHistory(): void {
    if (!this.hasConsumed) {
      this.hasConsumed = true;
      return;
    }
    this.history.push(structuredClone(this.state));
  }

  private consumeLine(line: ScenarioLine): AdvanceResult {
    this.pushHistory();
    this.state.snapshot = reduceLine(this.state.snapshot, line);
    const transients = (line.commands ?? []).filter(isTransient);
    this.incrementCurrent();
    return { kind: 'line', line, transients };
  }

  private incrementCurrent(): void {
    resolveCursor(this.state.progress, this.registry).frame.lineIndex++;
  }

  private jumpToScenario(id: string): void {
    if (!this.registry[id]) throw new Error(`Unknown scenario: ${id}`);
    this.state.progress = { scenarioId: id, lineIndex: 0, branchStack: [] };
    this.state.rootChapter = this.chapterLabels[id] ?? id;
  }
}
