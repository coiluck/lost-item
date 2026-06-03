import type { ScenarioFile } from '../engine/types';
import scenario1 from './1';

export const scenarioRegistry: Record<string, ScenarioFile> = {
  '1': scenario1,
};
