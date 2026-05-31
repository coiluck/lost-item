// 命令の型
export type BgDirection = 'leftToRight' | 'rightToLeft' | 'topToBottom' | 'bottomToTop';

export type StatefulCommand =
  | { type: 'bg'; file: string; transition?: 'fade' | 'crossfade' | 'none' }
  | { type: 'char'; id: string; pose: string; withFace?: boolean }
  | { type: 'charDelete'; id?: string }
  | { type: 'bgm'; file: string | null };

export type TransientCommand =
  | { type: 'bgMove'; direction: BgDirection; duration: number }
  | { type: 'bgShake'; duration: number; intensity: number }
  | { type: 'bgmFadeOut'; duration?: number }
  | { type: 'se'; file: string }
  | { type: 'wait'; ms: number }
  | { type: 'showNextChapter'; chapter: number; backgroundImage: string };

export type ScenarioCommand = StatefulCommand | TransientCommand;
export type CommandType = ScenarioCommand['type'];

// シナリオ
export type ScenarioLine = {
  text: string;
  speaker?: string;
  commands?: ScenarioCommand[];
  choiceId?: string;
};

export type Choice = {
  buttonText: string;
  branch: ScenarioLine[];
  /** 分岐終了時にジャンプする別シナリオID。省略時は親フローへ戻る。 */
  next?: string;
};

export type ScenarioFile = {
  id: string;
  lines: ScenarioLine[];
  choices?: Record<string, Choice[]>;
  next?: string;
};

// シーン状態
export type SceneSnapshot = {
  background: { file: string; transition: 'fade' | 'crossfade' | 'none' } | null;
  characters: ReadonlyArray<{ id: string; pose: string; withFace: boolean }>;
  bgm: { file: string } | null;
  text: string;
  speaker: string;
};

// 進行位置
export type BranchFrame = {
  scenarioId: string;
  choiceId: string;
  choiceIndex: number;
  lineIndex: number;
  /** この分岐を抜けるときにジャンプする別シナリオID (Choice.nextの引き継ぎ)。 */
  next?: string;
};

export type ProgressState = {
  scenarioId: string;
  lineIndex: number;
  branchStack: BranchFrame[];
};

// ゲーム全体
export type GameState = {
  progress: ProgressState;
  snapshot: SceneSnapshot;
  rootChapter: string;
  version: number; // セーブデータマイグレーション用
};