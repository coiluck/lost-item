// AUTO-GENERATED from 7.md. Do not edit by hand.
import type { ScenarioFile } from '../engine/types';

const scenario: ScenarioFile = {
  id: '7',
  next: '8',
  lines: [
    {
      text: '放課後の北棟は静かだ。いつもそうで、それが気に入っている。',
      commands: [
        {
          type: 'bg',
          file: 'bushitu_evening.jpg',
        },
        {
          type: 'bgm',
          file: '終着駅',
        },
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: '台帳の続きを書いていると、窓の外でグラウンドの声が遠くなった。日が傾いている。もうそういう時間か。',
    },
    {
      text: '立ち上がって、棚の整理をする。先週届いた体操服の袋に、まだ名前の照合ができていないものがあった。',
    },
    {
      text: '一つずつ確かめながら、所定の場所に並べていく。',
    },
    {
      text: '（……届けに来ないな）',
    },
    {
      text: '棚の隅、半月以上前から動いていない荷物がある。誰かの教科書。日本史。名前の書いていないもの。',
    },
    {
      text: '誰かが一度取りに来て、「あ、これじゃない」と言って帰った。それきりだ。',
    },
    {
      text: 'ルールとして、一定期間取りに来なければ処分になる。わかってはいるけど、その日まで自分が何か感じることはないはずだった。',
    },
    {
      text: '（別に、感じているわけじゃないけど）',
    },
    {
      text: '窓を少し開けた。夕方の風が入ってきた。',
      commands: [
        {
          type: 'se',
          file: 'door',
        },
      ],
    },
    {
      text: 'そのとき、視界の端に動くものがあった。渡り廊下の下。校舎の裏手のほうに向かう制服姿。',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'surprised',
        },
      ],
    },
    {
      text: '——藤波さんだ。',
    },
    {
      text: '隣の子と一緒に歩いている。そのまま弓道場のほうに向かっていた。',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: '（弓道部の見学か）',
    },
    {
      text: '眺めるつもりはなかったのに、目が追ってしまった。',
    },
    {
      text: '二人並んで、隣の子のほうが何か話していた。',
    },
    {
      text: '藤波さんが少し苦笑いしているような顔をしていた。引っ張られているみたいな歩き方で。',
    },
    {
      text: 'すぐに見えなくなった。',
    },
    {
      text: '台帳に戻る。ペンを持ったまま、少しの間動かなかった。',
    },
    {
      text: '（弓道部、か）',
    },
    {
      text: 'それがどうした、という話だ。どこに入ろうと、その子の話。自分には関係がない。',
    },
    {
      text: '台帳の続きを書く。日付。物品名。届け出の状況。',
    },
    {
      text: '（……入っちゃうのかな）',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'pout',
        },
      ],
    },
    {
      text: '書いた文字を見て、ペンを置いた。そういうことを考えるつもりはなかった。',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'blush',
        },
      ],
    },
    {
      text: '窓の外は、もうほとんど夕方の色になっていた。グラウンドの声も、だいぶ遠い。',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: '台帳を閉じて、青葉は棚の整理に戻った。',
      commands: [
        {
          type: 'bgmFadeOut',
          duration: 2000,
        },
      ],
    },
  ],
};

export default scenario;
