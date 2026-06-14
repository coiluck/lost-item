// AUTO-GENERATED from 8.md. Do not edit by hand.
import type { ScenarioFile } from '../engine/types';

const scenario: ScenarioFile = {
  id: '8',
  lines: [
    {
      text: '五月の半ば。教室の隅に、一枚の紙が回ってきた。部活動の登録票。提出は今週いっぱい、と担任が言っていた。',
      commands: [
        {
          type: 'bg',
          file: 'classroom-daytime.jpg',
        },
        {
          type: 'bgm',
          file: 'NightGlow',
        },
        {
          type: 'charDelete',
        },
      ],
    },
    {
      text: '（そういう時期か）',
    },
    {
      text: '転入してきて、もう一月以上が経つ。五月のあいだはなんとなく宙ぶらりんで、それが許されていた。でも、もうそろそろ。',
    },
    {
      text: '瑞穂ちゃん、それどうするの',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/8-1.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'normal_open',
        },
      ],
    },
    {
      text: '隣の席から、陽春が登録票を覗き込んできた。',
    },
    {
      text: 'まだ決めてない',
      speaker: '瑞穂',
    },
    {
      text: '弓道部、まだ枠あるよ。私と一緒にやろうよ',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/8-2.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'happy',
          bounce: true,
        },
      ],
    },
    {
      text: 'にこっと笑う。前に見学に行ったときと同じ顔だ。本気で誘ってくれているのが、ちゃんと伝わる。',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'happy',
        },
      ],
    },
    {
      text: '向いてないって言ってたけど、向いてなくてもいいじゃん。私だって肩上がるし',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/8-3.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'normal_open',
          bounce: true,
        },
      ],
    },
    {
      text: '……それは慰めになってない',
      speaker: '瑞穂',
    },
    {
      text: 'えへへ',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/8-4.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'perori',
          bounce: true,
        },
      ],
    },
    {
      text: '笑いながら、でも目はまっすぐだった。',
    },
    {
      text: '一緒だと、楽しいと思うんだけどなあ',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/8-5.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'normal',
        },
      ],
    },
    {
      text: 'その「一緒だと」に、少しだけ胸を押された。この子と過ごす放課後は、たぶん明るい。それは想像がつく。',
    },
    {
      text: '昼休み、霞が前の席から振り返った。',
      commands: [
        {
          type: 'bgm',
          file: '終着駅',
        },
        {
          type: 'charDelete',
        },
        {
          type: 'char',
          id: 'kasumi',
          pose: 'normal',
        },
      ],
    },
    {
      text: '藤波さん、保管部のこと聞いた？',
      speaker: '霞',
      voice: '/assets/audio/voice/kasumi/8-1.wav',
      commands: [
        {
          type: 'char',
          id: 'kasumi',
          pose: 'normal',
          bounce: true,
        },
      ],
    },
    {
      text: '……保管部？',
      speaker: '瑞穂',
    },
    {
      text: '部員、帆波先輩一人なんだって。前からそうらしいけど',
      speaker: '霞',
      voice: '/assets/audio/voice/kasumi/8-2.wav',
      commands: [
        {
          type: 'char',
          id: 'kasumi',
          pose: 'normal',
        },
      ],
    },
    {
      text: '知らなかった。あの広い部室で、棚を一つずつ確かめていた人。ずっと、一人だったのか。',
    },
    {
      text: 'ええ、そうなんだ。さびしくないのかな',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/8-6.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'trouble',
        },
      ],
    },
    {
      text: 'あの人のことだから、平気なんじゃない。一人が好きそうだし',
      speaker: '霞',
      voice: '/assets/audio/voice/kasumi/8-3.wav',
      commands: [
        {
          type: 'char',
          id: 'kasumi',
          pose: 'smile',
          bounce: true,
        },
      ],
    },
    {
      text: '一人が好き。そうなのかもしれない。でも、商店街で見た横顔も、文房具屋で耳を赤くしていた背中も、頭の隅に残っている。',
    },
    {
      text: '（……ほんとに、そうなのかな）',
    },
    {
      text: 'うまく言葉にならないまま、私はその引っかかりを飲み込んだ。',
    },
    {
      text: '放課後。登録票を鞄に入れたまま、私は昇降口で足を止めていた。',
      commands: [
        {
          type: 'bg',
          file: 'entrance_daytime.jpg',
          transition: 'crossfade',
        },
        {
          type: 'bgm',
          file: '日曜日の夜',
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
      text: 'グラウンドからはいつもの掛け声。体育館からはシューズの音。みんな、もう自分の場所を持っている。',
    },
    {
      text: '（私は、どこに行くんだろう）',
    },
    {
      text: '弓道場のほうを見る。陽春が、たぶんもう着替えて、弦を引いている。あそこに行けば、明るい放課後がある。誘ってくれた手は、本物だ。',
    },
    {
      text: '北棟のほうを見る。三階の突き当たり。静かな部屋。半月以上動かない、誰かの教科書。台帳に、自分の落とし物まで律儀に書いていた人。',
    },
    {
      text: 'それから、どちらでもない方向——校門の外を見る。',
    },
    {
      text: 'どこにも属さないまま、知らない街を歩く放課後も、悪くなかった。誰にも気を遣わず、誰にも気を遣われず。それはそれで、私のものだ。',
    },
    {
      text: '登録票を取り出す。記入欄は、まだ白い。',
    },
    {
      text: '（——どこに、書こう）',
    },
    {
      text: '風が、紙の端を少しめくった。',
    },
    {
      text: '',
      choiceId: 'club_choice',
    },
  ],
  choices: {
    club_choice: [
      {
        buttonText: '「保管部」と書く',
        branch: [],
        showIf: [
          {
            key: 'aobaPoints',
            op: '>=',
            value: 2,
          },
        ],
        next: 'end-hokanbu',
      },
      {
        buttonText: '「弓道部」と書く',
        branch: [],
        next: 'end-kyuudou',
      },
      {
        buttonText: 'どこにも書かない',
        branch: [],
        showIf: [
          {
            key: 'aobaPoints',
            op: '<',
            value: 2,
          },
        ],
        next: 'end-maverick',
      },
    ],
  },
};

export default scenario;
