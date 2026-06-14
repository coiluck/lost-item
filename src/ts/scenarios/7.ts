// AUTO-GENERATED from 7.md. Do not edit by hand.
import type { ScenarioFile } from '../engine/types';

const scenario: ScenarioFile = {
  id: '7',
  next: '8',
  lines: [
    {
      text: '放課後の北棟は静かだ。いつもそうで、それが気に入っている。',
      voice: '/assets/audio/voice/aoba/7-1.wav',
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
      voice: '/assets/audio/voice/aoba/7-2.wav',
    },
    {
      text: '立ち上がって、棚の整理をする。先週届いた体操服の袋に、まだ名前の照合ができていないものがあった。',
      voice: '/assets/audio/voice/aoba/7-3.wav',
    },
    {
      text: '一つずつ確かめながら、所定の場所に並べていく。',
      voice: '/assets/audio/voice/aoba/7-4.wav',
    },
    {
      text: '（……届けに来ないな）',
      voice: '/assets/audio/voice/aoba/7-5.wav',
    },
    {
      text: '棚の隅、半月以上前から動いていない荷物がある。誰かの教科書。日本史。名前の書いていないもの。',
      voice: '/assets/audio/voice/aoba/7-6.wav',
    },
    {
      text: '誰かが一度取りに来て、「あ、これじゃない」と言って帰った。それきりだ。',
      voice: '/assets/audio/voice/aoba/7-7.wav',
    },
    {
      text: 'ルールとして、一定期間取りに来なければ処分になる。わかってはいるけど、その日まで自分が何か感じることはないはずだった。',
      voice: '/assets/audio/voice/aoba/7-8.wav',
    },
    {
      text: '（別に、感じているわけじゃないけど）',
      voice: '/assets/audio/voice/aoba/7-9.wav',
    },
    {
      text: '窓を少し開けた。夕方の風が入ってきた。',
      voice: '/assets/audio/voice/aoba/7-10.wav',
      commands: [
        {
          type: 'se',
          file: 'door',
        },
      ],
    },
    {
      text: 'そのとき、視界の端に動くものがあった。渡り廊下の下。校舎の裏手のほうに向かう制服姿。',
      voice: '/assets/audio/voice/aoba/7-11.wav',
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
      voice: '/assets/audio/voice/aoba/7-12.wav',
    },
    {
      text: '隣の子と一緒に歩いている。そのまま弓道場のほうに向かっていた。',
      voice: '/assets/audio/voice/aoba/7-13.wav',
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
      voice: '/assets/audio/voice/aoba/7-14.wav',
    },
    {
      text: '眺めるつもりはなかったのに、目が追ってしまった。',
      voice: '/assets/audio/voice/aoba/7-15.wav',
    },
    {
      text: '二人並んで、隣の子のほうが何か話していた。',
      voice: '/assets/audio/voice/aoba/7-16.wav',
    },
    {
      text: '藤波さんが少し苦笑いしているような顔をしていた。引っ張られているみたいな歩き方で。',
      voice: '/assets/audio/voice/aoba/7-17.wav',
    },
    {
      text: 'すぐに見えなくなった。',
      voice: '/assets/audio/voice/aoba/7-18.wav',
    },
    {
      text: '台帳に戻る。ペンを持ったまま、少しの間動かなかった。',
      voice: '/assets/audio/voice/aoba/7-19.wav',
    },
    {
      text: '（弓道部、か）',
      voice: '/assets/audio/voice/aoba/7-20.wav',
    },
    {
      text: 'それがどうした、という話だ。どこに入ろうと、その子の話。自分には関係がない。',
      voice: '/assets/audio/voice/aoba/7-21.wav',
    },
    {
      text: '台帳の続きを書く。日付。物品名。届け出の状況。',
      voice: '/assets/audio/voice/aoba/7-22.wav',
    },
    {
      text: '（……入っちゃうのかな）',
      voice: '/assets/audio/voice/aoba/7-23.wav',
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
      voice: '/assets/audio/voice/aoba/7-24.wav',
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
      voice: '/assets/audio/voice/aoba/7-25.wav',
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
      voice: '/assets/audio/voice/aoba/7-26.wav',
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
