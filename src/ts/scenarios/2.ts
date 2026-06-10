// AUTO-GENERATED from 2.md. Do not edit by hand.
import type { ScenarioFile } from '../engine/types';

const scenario: ScenarioFile = {
  id: '2',
  next: '3',
  lines: [
    {
      text: '下駄箱で靴を履き替えて、外に出ようとしたとき。',
      commands: [
        {
          type: 'bg',
          file: 'corridor_school.png',
        },
        {
          type: 'bgm',
          file: '終着駅',
        },
      ],
    },
    {
      text: '足元に、何かが落ちていた。',
    },
    {
      text: '白い布。四つ折りにされた、小さなハンカチ。',
    },
    {
      text: '踏まれた跡はない。落ちてからそんなに経っていないのかもしれなかった。',
    },
    {
      text: '（誰かの忘れ物、か）',
    },
    {
      text: '周りを見回す。下駄箱のあたりには、もう誰もいない。',
    },
    {
      text: '昇降口の外は、帰宅する生徒の流れが途切れかけていた。',
    },
    {
      text: '（職員室に届ければいいのかな。でも場所、まだ覚えてないし）',
    },
    {
      text: '手の中のハンカチを、なんとなく眺める。',
    },
    {
      text: 'きれいに畳まれていた。ということは、最初からここにあったわけじゃない。',
    },
    {
      text: '誰かが落としていった。でもまだ取りに来ていない。',
    },
    {
      text: '（こういうの、どうすればいいんだろう）',
    },
    {
      text: 'あー、それ落とし物？',
      speaker: '？？？',
    },
    {
      text: '振り返ると、廊下を歩いてきた女子生徒がこちらを見ていた。帰り支度の鞄を肩にかけている。',
    },
    {
      text: 'えっと、さっき廊下に落ちてて',
      speaker: '瑞穂',
    },
    {
      text: '保管部に持ってったらいいよ。ほら、あそこの棟の',
      speaker: '？？？',
    },
    {
      text: 'そう言って、渡り廊下の先を指さした。',
    },
    {
      text: 'ほかん……部？',
      speaker: '瑞穂',
    },
    {
      text: '聞き慣れない響きだった。',
    },
    {
      text: '部室に人いると思うから。じゃ',
      speaker: '？？？',
    },
    {
      text: 'それだけ言って、彼女は行ってしまった。',
      commands: [
        {
          type: 'se',
          file: 'footsteps_slow',
        },
      ],
    },
    {
      text: '（部活なんだ、そういうのが）',
    },
    {
      text: '手の中のハンカチを折り直して、鞄に入れた。',
    },
    {
      text: '北棟。三階。突き当たり。',
    },
    {
      text: '知らない廊下を、もう少しだけ歩くことになった。',
    },
    {
      text: 'ドアを一枚一枚確かめながら歩いていくと、小さなプレートが目に入った。',
    },
    {
      text: '『保管部』',
    },
    {
      text: '（ここか）',
    },
    {
      text: 'ノックして、返事を待つ。',
      commands: [
        {
          type: 'se',
          file: 'knock',
        },
      ],
    },
    {
      text: '……どうぞ',
      speaker: '？？？',
    },
    {
      text: '静かな声だった。',
    },
    {
      text: '開けると、中は思っていたより広かった。',
      commands: [
        {
          type: 'bg',
          file: 'bushitu_daytime.jpg',
          transition: 'crossfade',
        },
      ],
    },
    {
      text: '壁に沿って棚が並んでいて、棚にはいろんなものが整然と収められている。',
    },
    {
      text: '傘、ノート、体操服の袋、名前のわからないもの。',
    },
    {
      text: '窓際の机に、一人の女子生徒が座っていた。',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: 'きれいな人だ、と思った。長い髪。落ち着いた目。',
    },
    {
      text: 'こっちを見て、何も言わない。',
    },
    {
      text: 'あの、廊下で拾ったんですけど',
      speaker: '瑞穂',
    },
    {
      text: 'ハンカチを差し出すと、彼女は立ち上がって受け取った。',
    },
    {
      text: '広げて、確かめる。',
    },
    {
      text: '少しの間。',
    },
    {
      text: '……これ、私のですね',
      speaker: '？？？',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'surprised',
        },
      ],
    },
    {
      text: 'え',
      speaker: '瑞穂',
    },
    {
      text: '朝、落としたのかもしれません',
      speaker: '？？？',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: '彼女は小さく息を吐いてから、棚の引き出しを開けてタグを取り出した。',
    },
    {
      text: '日付と、落とし物の種類を書き込んでいく。',
    },
    {
      text: 'あの……それ、自分のものでも台帳に書くんですか',
      speaker: '瑞穂',
    },
    {
      text: 'ルールなので',
      speaker: '？？？',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: '書き終えると、彼女は引き出しにハンカチをしまった。',
    },
    {
      text: '丁寧な手つきで。',
    },
    {
      text: 'いけませんね、保管部員なのに',
      speaker: '？？？',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'pout',
        },
      ],
    },
    {
      text: 'どこか他人事みたいな言い方だった。',
    },
    {
      text: '自分を少し遠くから見ているような。',
    },
    {
      text: '',
      choiceId: 'losing_things',
    },
    {
      text: '……帆波青葉、といいます',
      speaker: '青葉',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: 'ふいに名乗られて、私は少し面食らった。',
    },
    {
      text: 'ここの部員。二年生です',
      speaker: '青葉',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
          bounce: true,
        },
      ],
    },
    {
      text: '怒っている様子はない。むしろ普通に話しかけられたような声だった。',
    },
    {
      text: 'あなたは？',
      speaker: '青葉',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: 'あ、藤波瑞穂です。一年です',
      speaker: '瑞穂',
    },
    {
      text: 'そう。藤波さん',
      speaker: '青葉',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: '名前を一度、確かめるように繰り返した。',
    },
    {
      text: 'それで、彼女が二年生なのだと、ようやく腑に落ちた。',
    },
    {
      text: '（先輩、だったのか）',
    },
    {
      text: 'さっき言い返したことを思い出して、今さら少し気まずくなる。',
    },
    {
      text: '青葉先輩は台帳を閉じて、窓の外に目をやった。',
    },
    {
      text: '西日が、棚の落とし物たちをぼんやり照らしている。',
    },
    {
      text: 'ラベルの貼られた袋。名前のついていない傘。誰かの教科書。',
    },
    {
      text: 'それぞれに、誰かが失くした日があるのだろう。',
    },
    {
      text: '……これ、ちゃんと戻ってくるんですか。落とし物',
      speaker: '瑞穂',
    },
    {
      text: '気づいたら、また口から出ていた。',
    },
    {
      text: '取りに来る人もいます',
      speaker: '青葉',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: '一呼吸おいて、',
    },
    {
      text: '来ない人も、います',
      speaker: '青葉',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: 'それだけ言った。',
    },
    {
      text: '付け足しも、説明もなく。',
    },
    {
      text: '窓の外で、部活の声が遠くに聞こえる。',
    },
    {
      text: 'そうなんですね',
      speaker: '瑞穂',
    },
    {
      text: '青葉先輩はまた机に戻った。',
    },
    {
      text: 'それが「話は終わり」の合図に見えたので、私は鞄を持ち直した。',
    },
    {
      text: 'あの、届けられてよかったです。落とし物',
      speaker: '瑞穂',
    },
    {
      text: '……そうですね',
      speaker: '青葉',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: '短い。でも、嘘のない返し方だと思った。',
    },
    {
      text: '失礼しました',
      speaker: '瑞穂',
    },
    {
      text: '部屋を出て、ドアを閉める。',
      commands: [
        {
          type: 'se',
          file: 'door',
        },
      ],
    },
    {
      text: '廊下はまだ静かだった。',
      commands: [
        {
          type: 'charDelete',
        },
        {
          type: 'bg',
          file: 'corridor_school.png',
          transition: 'crossfade',
        },
      ],
    },
    {
      text: '（変わった先輩だな）',
    },
    {
      text: 'でも、悪い意味じゃない。',
    },
    {
      text: '下駄箱に向かって、私はまた歩き出した。',
      commands: [
        {
          type: 'bgmFadeOut',
          duration: 2000,
        },
      ],
    },
  ],
  choices: {
    losing_things: [
      {
        buttonText: '「別にいいじゃないですか、落としても」',
        branch: [
          {
            text: '落とすときは落とすでしょう。ちゃんと拾われて、戻ってきたんだしいいじゃないですか',
            speaker: '瑞穂',
          },
          {
            text: '言ってから、少し焦った。初対面でそんなこと言う必要もなかった。',
          },
          {
            text: '彼女の目が、こちらに向いた。',
          },
          {
            text: '何かを言いかけて、やめる。',
          },
          {
            text: 'そのかわり、ほんの少しだけ、表情がやわらいだ気がした。',
            commands: [
              {
                type: 'char',
                id: 'aoba',
                pose: 'smile',
              },
            ],
          },
        ],
        points: {
          aobaPoints: 1,
        },
      },
      {
        buttonText: '「すぐ見つかってよかったです」',
        branch: [
          {
            text: '彼女はこちらをちらっと見た。',
          },
        ],
      },
    ],
  },
};

export default scenario;
