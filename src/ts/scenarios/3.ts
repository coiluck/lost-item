// AUTO-GENERATED from 3.md. Do not edit by hand.
import type { ScenarioFile } from '../engine/types';

const scenario: ScenarioFile = {
  id: '3',
  next: '4',
  lines: [
    {
      text: '翌朝の教室は、昨日より少しだけ知った匂いがした。',
      commands: [
        {
          type: 'bg',
          file: 'classroom-daytime.jpg',
        },
        {
          type: 'bgm',
          file: 'NightGlow',
        },
      ],
    },
    {
      text: '窓側の席に座ると、机の木目がもう自分のもののように馴染んでいる。',
    },
    {
      text: '（昨日の、あの部室）',
    },
    {
      text: 'ノートを開いても、思い出すのは北棟の突き当たりのことばかりだった。',
    },
    {
      text: '整然と並んだ棚。西日。台帳に自分の名前を書いていた、あの人の手。',
    },
    {
      text: '（保管部、か）',
    },
    {
      text: '瑞穂ちゃん、おはよ！',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/3-1.wav',
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
      text: '鞄を置くなり、陽春が隣の席から身を乗り出してきた。',
    },
    {
      text: '今日も眩しい。',
    },
    {
      text: 'おはよう。バイト、間に合った？',
      speaker: '瑞穂',
    },
    {
      text: 'ぎりぎりセーフ。店長にめちゃくちゃ睨まれた',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/3-2.wav',
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
      text: 'へへ、と舌を出して笑う。',
    },
    {
      text: 'そのうしろから、もう一人の子が顔を出した。',
    },
    {
      text: '昨日、陽春にバイトを思い出させた子だ。',
    },
    {
      text: 'おはよう。藤波さん、でいい？',
      speaker: '霞',
      voice: '/assets/audio/voice/kasumi/3-1.wav',
      commands: [
        {
          type: 'char',
          id: 'kasumi',
          pose: 'normal',
        },
      ],
    },
    {
      text: 'うん。ええと――',
      speaker: '瑞穂',
    },
    {
      text: '霞。よろしく',
      speaker: '霞',
      voice: '/assets/audio/voice/kasumi/3-2.wav',
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
      text: '静かな声の子だった。陽春とは少し違う温度の。',
    },
    {
      text: 'あのさ。昨日、落とし物を届けに行ったんだ。保管部っていうところ',
      speaker: '瑞穂',
    },
    {
      text: 'えっ、保管部？',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/3-3.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'surprised',
          bounce: true,
        },
      ],
    },
    {
      text: '声が少し裏返った。',
    },
    {
      text: '瑞穂ちゃん、もうあそこ行ったの？',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/3-4.wav',
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
      text: '保管部って、帆波先輩のところでしょ',
      speaker: '霞',
      voice: '/assets/audio/voice/kasumi/3-3.wav',
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
      text: '会ったよ。髪の長い、きれいな人',
      speaker: '瑞穂',
    },
    {
      text: 'それ。二年の帆波青葉先輩',
      speaker: '霞',
      voice: '/assets/audio/voice/kasumi/3-4.wav',
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
      text: 'いいなー、私まだ見たことない',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/3-5.wav',
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
      text: 'あの人、けっこう人気あるんだよ。表立ってじゃないけど',
      speaker: '霞',
      voice: '/assets/audio/voice/kasumi/3-5.wav',
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
      text: '人気？',
      speaker: '瑞穂',
    },
    {
      text: '隠れファンみたいなの。きれいだし、めったに笑わないし',
      speaker: '霞',
      voice: '/assets/audio/voice/kasumi/3-6.wav',
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
      text: 'めったに笑わないのが人気なの？',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/3-6.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'pout',
          bounce: true,
        },
      ],
    },
    {
      text: 'そういうのがいい、って子もいるの',
      speaker: '霞',
      voice: '/assets/audio/voice/kasumi/3-7.wav',
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
      text: '霞は少しだけ声を落とした。',
    },
    {
      text: 'でも、冷たいって言う子も多いよ',
      speaker: '霞',
      voice: '/assets/audio/voice/kasumi/3-8.wav',
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
      text: '',
      choiceId: 'is_cold',
    },
    {
      text: '落とし物を取りに行っても、にこりともしないって。ルールにすごく厳しくて、事務的で',
      speaker: '霞',
      voice: '/assets/audio/voice/kasumi/3-9.wav',
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
      text: 'うわ、ちょっとこわい',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/3-7.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'trouble',
          bounce: true,
        },
      ],
    },
    {
      text: 'まあ、噂だけどね',
      speaker: '霞',
      voice: '/assets/audio/voice/kasumi/3-10.wav',
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
      text: 'そう言って、霞は前を向いた。',
    },
    {
      text: '（冷たい、か）',
    },
    {
      text: '昨日のことを、もう一度たどってみる。',
    },
    {
      text: 'たしかに、たくさん喋る人ではなかった。',
    },
    {
      text: '笑ったわけでもない。',
    },
    {
      text: '自分の落とし物まで、律儀に台帳に書いていた。',
    },
    {
      text: '――でも。',
    },
    {
      text: '（……なんか、ちょっと違う気がする）',
    },
    {
      text: 'うまく言葉にはできないけれど。',
    },
    {
      text: '瑞穂ちゃん？ どうかした？',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/3-8.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'normal',
          bounce: true,
        },
      ],
    },
    {
      text: 'ううん。なんでもない',
      speaker: '瑞穂',
    },
    {
      text: '視線をずらすと、ちょうど担任が入ってきた。',
      commands: [
        {
          type: 'charDelete',
        },
      ],
    },
  ],
  choices: {
    is_cold: [
      {
        buttonText: '冷たい？',
        branch: [
          {
            text: '冷たい？',
            speaker: '瑞穂',
          },
        ],
      },
    ],
  },
};

export default scenario;
