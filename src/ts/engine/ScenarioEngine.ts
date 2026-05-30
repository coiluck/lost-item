import type {
  GameState, ScenarioLine, TransientCommand, ScenarioFile, BranchFrame,
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

  constructor(
    initial: GameState,
    private readonly registry: Record<string, ScenarioFile>,
  ) {
    this.state = structuredClone(initial);
  }

  getState(): GameState {
    return structuredClone(this.state);
  }

  peek(): ScenarioLine | null {
    return peekLine(this.state.progress, this.registry);
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
    this.history.push(structuredClone(this.state));
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
    return this.getState();
  }

  // -------- private --------

  private consumeLine(line: ScenarioLine): AdvanceResult {
    this.history.push(structuredClone(this.state));
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
  }
}
