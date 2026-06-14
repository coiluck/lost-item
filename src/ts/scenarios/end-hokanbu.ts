// AUTO-GENERATED from end-hokanbu.md. Do not edit by hand.
import type { ScenarioFile } from '../engine/types';

const scenario: ScenarioFile = {
  id: 'end-hokanbu',
  lines: [
    {
      text: '登録票の、活動団体名の欄。',
      commands: [
        {
          type: 'bg',
          file: 'entrance_daytime.jpg',
        },
        {
          type: 'bgm',
          file: '星の降る夜',
        },
      ],
    },
    {
      text: '私はそこに、ゆっくりとペンを下ろした。',
    },
    {
      text: '『保管部』',
    },
    {
      text: '書いてしまうと、案外あっけなかった。',
    },
    {
      text: 'あれだけ迷っていたのに、文字にしてみると、ただの三文字だ。',
    },
    {
      text: '翌日の放課後、北棟の突き当たり。',
      commands: [
        {
          type: 'bg',
          file: 'bushitu_evening.jpg',
          transition: 'crossfade',
        },
        {
          type: 'bgm',
          file: '夕焼け帰り道',
        },
      ],
    },
    {
      text: 'ドアを開けると、青葉先輩はいつもの席にいた。',
      commands: [
        {
          type: 'se',
          file: 'door',
        },
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: '先輩',
      speaker: '瑞穂',
    },
    {
      text: '……藤波さん。落とし物ですか',
      speaker: '青葉',
      voice: '/assets/audio/voice/aoba/end-hokanbu-1.wav',
    },
    {
      text: 'いえ',
      speaker: '瑞穂',
    },
    {
      text: '私は鞄から、登録票の控えを取り出した。',
    },
    {
      text: '机の上に、そっと置く。',
    },
    {
      text: '先輩の目が、紙の上を動いた。',
    },
    {
      text: '『保管部』の文字のところで、止まった。',
    },
    {
      text: '……これ',
      speaker: '青葉',
      voice: '/assets/audio/voice/aoba/end-hokanbu-2.wav',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'surprised',
        },
      ],
    },
    {
      text: '入部届です',
      speaker: '瑞穂',
    },
    {
      text: '少しの間、先輩は何も言わなかった。',
    },
    {
      text: '……ここ、何もないですよ。大会もないし、活躍もできない',
      speaker: '青葉',
      voice: '/assets/audio/voice/aoba/end-hokanbu-3.wav',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: '知ってます',
      speaker: '瑞穂',
    },
    {
      text: 'ただ、落とし物を待つだけです',
      speaker: '青葉',
      voice: '/assets/audio/voice/aoba/end-hokanbu-4.wav',
    },
    {
      text: 'はい',
      speaker: '瑞穂',
    },
    {
      text: '……それでも？',
      speaker: '青葉',
      voice: '/assets/audio/voice/aoba/end-hokanbu-5.wav',
    },
    {
      text: 'それがいいんです',
      speaker: '瑞穂',
    },
    {
      text: '先輩はもう一度、登録票を見た。',
    },
    {
      text: 'それから、ゆっくりと顔を上げた。',
    },
    {
      text: '……ひとつ、訊いていいですか',
      speaker: '青葉',
      voice: '/assets/audio/voice/aoba/end-hokanbu-6.wav',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: 'はい',
      speaker: '瑞穂',
    },
    {
      text: 'これは、ちゃんと、あなたのものですか',
      speaker: '青葉',
      voice: '/assets/audio/voice/aoba/end-hokanbu-7.wav',
    },
    {
      text: '',
      choiceId: 'is_yours',
    },
    {
      text: '先輩は、しばらく私を見ていた。',
    },
    {
      text: 'それから、机の引き出しを開けて、新しいタグを取り出した。',
    },
    {
      text: '入部の手続き、台帳に書きますね',
      speaker: '青葉',
      voice: '/assets/audio/voice/aoba/end-hokanbu-8.wav',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: '……それも書くんですか',
      speaker: '瑞穂',
    },
    {
      text: 'ルールなので',
      speaker: '青葉',
      voice: '/assets/audio/voice/aoba/end-hokanbu-9.wav',
    },
    {
      text: 'そう言った先輩の口元が、ほんの少しだけ、ほぐれていた。',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'smile',
        },
      ],
    },
    {
      text: '公園で見た、あの顔。',
    },
    {
      text: 'ペンが走る。',
    },
    {
      text: '日付。氏名。藤波瑞穂。',
    },
    {
      text: '……これで、二人ですね',
      speaker: '青葉',
      voice: '/assets/audio/voice/aoba/end-hokanbu-10.wav',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'smile',
        },
      ],
    },
    {
      text: '二人です',
      speaker: '瑞穂',
    },
    {
      text: 'ずっと一人だったこの部屋に、今日から、もう一つ名前が増えた。',
    },
    {
      text: '先輩は、書き終えた台帳をそっと閉じた。',
    },
    {
      text: 'その手つきが、いつもより少しだけ、嬉しそうに見えた。',
    },
    {
      text: 'よろしくお願いします。藤波さん',
      speaker: '青葉',
      voice: '/assets/audio/voice/aoba/end-hokanbu-11.wav',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'smile',
        },
      ],
    },
    {
      text: 'こちらこそ。先輩',
      speaker: '瑞穂',
    },
    {
      text: '窓から、夕方の風が入ってきた。',
    },
    {
      text: '棚の落とし物たちが、いつもより少しだけ、あたたかく見えた。',
      commands: [
        {
          type: 'bgmFadeOut',
          duration: 3000,
        },
      ],
    },
    {
      text: '【保管部エンド ―了―】',
    },
  ],
  choices: {
    is_yours: [
      {
        buttonText: 'はい',
        branch: [
          {
            text: '私のものです',
            speaker: '瑞穂',
          },
        ],
      },
    ],
  },
};

export default scenario;
