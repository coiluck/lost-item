import { create } from 'zustand';
import type { BgDirection, Choice, SceneSnapshot } from '../engine/types';

export type Motion = {
  id: number;
  direction: BgDirection;
  duration: number;
};

export type PendingChoice = {
  choiceId: string;
  choices: Choice[];
};

const INITIAL_SNAPSHOT: SceneSnapshot = {
  background: null,
  characters: [],
  bgm: null,
  text: '',
  speaker: '',
};

type GameStore = {
  snapshot: SceneSnapshot;
  motion: Motion | null;
  pendingChoice: PendingChoice | null;
  setSnapshot: (snapshot: SceneSnapshot) => void;
  fireMotion: (m: Omit<Motion, 'id'>) => void;
  setPendingChoice: (c: PendingChoice | null) => void;
  reset: () => void;
};

let motionSeq = 0;

export const useGameStore = create<GameStore>((set) => ({
  snapshot: INITIAL_SNAPSHOT,
  motion: null,
  pendingChoice: null,
  setSnapshot: (snapshot) => set({ snapshot }),
  fireMotion: (m) => set({ motion: { id: ++motionSeq, ...m } }),
  setPendingChoice: (pendingChoice) => set({ pendingChoice }),
  reset: () => set({ snapshot: INITIAL_SNAPSHOT, motion: null, pendingChoice: null }),
}));
