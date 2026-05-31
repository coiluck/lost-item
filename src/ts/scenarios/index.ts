import type { ScenarioFile } from '../engine/types';

const testScenario: ScenarioFile = {
  id: 'test',
  lines: [
    {
      text: '四月の教室は、知らない匂いがする。',
      commands: [
        { type: 'bg', file: 'classroom-daytime.jpg' },
        { type: 'bgMove', direction: 'leftToRight', duration: 5000 },
      ],
    },
    { text: '黒板の前に立たされて、私はクラス中の視線を一身に浴びていた。' },
    { text: '藤波瑞穂です。よろしくお願いします', speaker: '瑞穂' },
    {
      text: 'ぱらぱらと拍手が起きた。',
      commands: [{ type: 'bgMove', direction: 'rightToLeft', duration: 4000 }],
    },
    { text: 'さて、最初の挨拶をどうしよう。' },
    { text: '', choiceId: 'greet' },
    { text: '担任が席の場所を指した。' },
    {
      text: '廊下に出ると、まだ春の冷気を残していた。',
      commands: [
        { type: 'bg', file: 'corridor_school.png' },
        { type: 'bgMove', direction: 'topToBottom', duration: 4000 },
      ],
    },
    { text: '部室棟へ向かおう。' },
    {
      text: '机がぽつんと並んでいる。',
      commands: [
        { type: 'bg', file: 'bushitu_daytime.jpg' },
        { type: 'bgMove', direction: 'bottomToTop', duration: 5000 },
      ],
    },
    { text: 'ここから何かが始まる気がした。' },
  ],
  choices: {
    greet: [
      {
        buttonText: '元気よく挨拶する',
        branch: [
          { text: 'よろしくお願いします!', speaker: '瑞穂' },
          { text: '声が少し裏返った気がする。' },
        ],
      },
      {
        buttonText: '控えめに会釈する',
        branch: [
          { text: '...どうも', speaker: '瑞穂' },
          { text: 'なんとなく、それで通じた気がした。' },
        ],
      },
      {
        buttonText: '何も言わない',
        branch: [
          { text: '沈黙が、教室に流れた。' },
          { text: '最悪のスタートかもしれない。' },
        ],
      },
    ],
  },
};

export const scenarioRegistry: Record<string, ScenarioFile> = {
  test: testScenario,
};
