// AUTO-GENERATED from 4.md. Do not edit by hand.
import type { ScenarioFile } from '../engine/types';

const scenario: ScenarioFile = {
  id: '4',
  next: '6',
  lines: [
    {
      text: '放課後、特に行く当てもなく、駅前の商店街を歩いていた。',
      commands: [
        {
          type: 'bg',
          file: 'shopping_street_evening.jpg',
        },
        {
          type: 'bgm',
          file: '夕焼け帰り道',
        },
      ],
    },
    {
      text: '知らない街の知らない店が並んでいる。看板を眺めながら歩くだけで、なんとなく時間が潰せる。',
    },
    {
      text: '花屋の前で少し足を止めたとき、見覚えのある後ろ姿が目に入った。',
    },
    {
      text: '長い髪。静かな立ち方。',
    },
    {
      text: '（あ）',
    },
    {
      text: '帆波先輩だ。',
    },
    {
      text: '商店街の少し外れた場所、小さな公園の前に立っていた。柵越しに、中を見ている。',
      commands: [
        {
          type: 'bg',
          file: 'park_evening.jpg',
          transition: 'crossfade',
        },
      ],
    },
    {
      text: '何を見ているんだろうと思って、自然と目で追った。',
    },
    {
      text: '公園の砂場に、小さな子どもが座り込んでいた。一人で砂をいじっていたのに、何かの拍子に尻もちをついて、泣き出してしまったようだった。',
    },
    {
      text: '青葉先輩はしばらくそれを見ていた。それから、鞄を脇に抱え直して、公園の入り口から中に入っていった。',
    },
    {
      text: '女の子のそばにしゃがむ。',
    },
    {
      text: '何か言っている。声は聞こえない。',
    },
    {
      text: '女の子が先輩の顔を見上げた。',
    },
    {
      text: '先輩はポケットから小さなハンカチを出した。丁寧に、女の子の手の砂を払ってやっていた。',
    },
    {
      text: '（……あ）',
    },
    {
      text: '見てはいけないものを見ているような気がして、私は少し目をそらした。',
    },
    {
      text: 'でも、ちらっとまた見てしまう。',
    },
    {
      text: '女の子が何か言った。先輩は小さくうなずいた。表情は遠くてよくわからない。',
    },
    {
      text: '女の子が笑った。',
    },
    {
      text: 'そのとき、青葉先輩も、ほんの少しだけ、口元がほぐれた気がした。',
    },
    {
      text: '保管部の窓際で台帳を書いていたときとは、違う顔。',
    },
    {
      text: '（笑うんだ、あの人も）',
    },
    {
      text: '足音を殺しているつもりではなかったのに、なぜか自分の息が静かになっていた。',
    },
    {
      text: '先輩が立ち上がる。',
      commands: [
        {
          type: 'se',
          file: 'footsteps_slow',
        },
      ],
    },
    {
      text: '女の子に何か言って、公園を出た。',
    },
    {
      text: 'こちらには気づいていない。',
    },
    {
      text: '先輩はそのまま商店街の中へ歩いていった。',
      commands: [
        {
          type: 'bg',
          file: 'shopping_street_evening.jpg',
          transition: 'crossfade',
        },
      ],
    },
    {
      text: '少し行ったところで、足を止めた。文房具屋の前だった。',
    },
    {
      text: '少しの間、ショーウィンドウを眺めてから、中に入っていった。',
    },
    {
      text: '私はまだ、花屋の前に立っていた。',
    },
    {
      text: '（優しいんだ、あの人）',
    },
    {
      text: '霞は「冷たい」と言っていた。',
    },
    {
      text: '保管部で、台帳にルール通り書き込んでいた人。',
    },
    {
      text: 'でも今のあれは。',
    },
    {
      text: '',
      choiceId: 'follow_aoba',
    },
  ],
  choices: {
    follow_aoba: [
      {
        buttonText: '追いかける',
        branch: [
          {
            text: '（……行ってみようかな）',
          },
          {
            text: '自分でもよくわからない引力で、足が動いていた。',
          },
        ],
        points: {
          aobaPoints: 1,
        },
        next: '5',
      },
      {
        buttonText: 'そのまま帰る',
        branch: [
          {
            text: '（……なんか、ちょっといいかも）',
          },
          {
            text: '花屋のバケツに、切り花が一本だけ残っていた。値札が風にゆれている。',
          },
          {
            text: 'なんとなく眺めてから私は家へと向かった。',
          },
          {
            text: 'なぜか夕方の商店街が、さっきより少しだけ明るく見えた。',
            commands: [
              {
                type: 'bgmFadeOut',
                duration: 2000,
              },
            ],
          },
        ],
        next: '6',
      },
    ],
  },
};

export default scenario;
