import type { ScenarioFile } from '../engine/types';
import scenario1 from './1';
import scenario2 from './2';
import scenario3 from './3';
import scenario4 from './4';
import scenario5 from './5';
import scenario6 from './6';
import scenario7 from './7';
import scenario8 from './8';

export const scenarioRegistry: Record<string, ScenarioFile> = {
  '1': scenario1,
  '2': scenario2,
  '3': scenario3,
  '4': scenario4,
  '5': scenario5,
  '6': scenario6,
  '7': scenario7,
  '8': scenario8,
};

// シナリオIDからSaveLoadItemで使うラベル名にする
export const chapterLabels: Record<string, string> = {
  '1': '第1章',
  '2': '第2章',
  '3': '第3章',
  '4': '第4章',
  '5': '第5章',
  '6': '第6章',
  '7': '第7章',
  '8': '第8章',
  'end-kyuudou': '終幕',
  'end-hokanbu': '終幕',
  'end-maverick': '終幕',
};
