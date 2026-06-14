// AUTO-GENERATED from end-maverick.md. Do not edit by hand.
import type { ScenarioFile } from '../engine/types';

const scenario: ScenarioFile = {
  id: 'end-maverick',
  lines: [
    {
      text: '登録票の記入欄は、白いままだった。',
      commands: [
        {
          type: 'bg',
          file: 'classroom-daytime.jpg',
        },
        {
          type: 'bgm',
          file: '日曜日の夜',
        },
      ],
    },
    {
      text: '私はそれを、そっと鞄にしまった。',
    },
    {
      text: '提出期限の金曜、結局出さなかった。',
    },
    {
      text: '担任には「もう少し考えます」と言った。',
    },
    {
      text: '別に、怒られはしなかった。',
    },
    {
      text: 'えー、出さなかったの？',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/end-maverick-1.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'surprised',
        },
      ],
    },
    {
      text: 'うん',
      speaker: '瑞穂',
    },
    {
      text: '弓道部、待ってたのに',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/end-maverick-2.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'trouble',
        },
      ],
    },
    {
      text: 'ごめん',
      speaker: '瑞穂',
    },
    {
      text: 'むー',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/end-maverick-3.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'pout',
        },
      ],
    },
    {
      text: '陽春は頬をふくらませたけど、すぐにいつもの顔に戻った。',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'normal',
        },
      ],
    },
    {
      text: 'まあ、無理に入るもんじゃないか',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/end-maverick-4.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'normal_open',
        },
      ],
    },
    {
      text: 'うん。誘ってくれて、ありがとう',
      speaker: '瑞穂',
    },
    {
      text: '気が変わったら、いつでも言ってね',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/end-maverick-5.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'happy',
        },
      ],
    },
    {
      text: 'うん',
      speaker: '瑞穂',
    },
    {
      text: 'この子のこういうところが、好きだ。',
    },
    {
      text: '引きとめすぎない。待ってるって言ってくれる。',
    },
    {
      text: 'だから私も、嘘をつかずに断れた。',
    },
    {
      text: '放課後。',
      commands: [
        {
          type: 'bg',
          file: 'shopping_street_evening.jpg',
          transition: 'crossfade',
        },
        {
          type: 'bgm',
          file: '静かな夜を',
        },
        {
          type: 'charDelete',
        },
        {
          type: 'se',
          file: 'footsteps',
        },
      ],
    },
    {
      text: 'どこにも行く当てがないというのは、案外、悪くない。',
    },
    {
      text: '商店街を歩く。花屋の前を通る。',
    },
    {
      text: 'この前、切り花が一本だけ残っていたバケツには、今日は別の花が挿してあった。',
    },
    {
      text: '知らない街が、少しずつ知っている街になっていく。',
    },
    {
      text: '誰かと一緒じゃなくても、それは進んでいく。',
    },
    {
      text: '校門を出る。',
      commands: [
        {
          type: 'bg',
          file: 'entrance_daytime.jpg',
          transition: 'crossfade',
        },
        {
          type: 'bgm',
          file: '星の降る夜',
        },
      ],
    },
    {
      text: '夕方の風が、頬を撫でていった。',
    },
    {
      text: '弓道部にも、保管部にも、どこにも属していない。',
    },
    {
      text: '宙ぶらりんの放課後。',
    },
    {
      text: 'でも、これは私が選んだ宙ぶらりんだ。',
    },
    {
      text: '誰かにもらった場所でも、同情で選んだ場所でもない。',
    },
    {
      text: '（これは、ちゃんと、私のものだ）',
    },
    {
      text: 'いつか、ここだと思える場所が見つかるかもしれない。',
    },
    {
      text: '見つからないかもしれない。',
    },
    {
      text: 'どっちでも、いい。',
    },
    {
      text: '今はただ、知らない街を、自分の足で歩いていく。',
      commands: [
        {
          type: 'bgmFadeOut',
          duration: 3000,
        },
      ],
    },
    {
      text: '【単独エンド ―了―】',
    },
  ],
};

export default scenario;
