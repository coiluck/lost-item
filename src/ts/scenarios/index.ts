import type { ScenarioFile } from '../engine/types';
import scenario1 from './1';
import scenario2 from './2';
import scenario3 from './3';

export const scenarioRegistry: Record<string, ScenarioFile> = {
  '1': scenario1,
  '2': scenario2,
  '3': scenario3,
};

// シナリオIDからSaveLoadItemで使うラベル名にする
export const chapterLabels: Record<string, string> = {
  '1': '第1章',
  '2': '第2章',
  '3': '第3章',
  'end-kyuudou': '終幕',
  'end-hokanbu': '終幕',
  'end-maverick': '終幕',
};
