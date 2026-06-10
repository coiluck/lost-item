// AUTO-GENERATED from end-kyuudou.md. Do not edit by hand.
import type { ScenarioFile } from '../engine/types';

const scenario: ScenarioFile = {
  id: 'end-kyuudou',
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
          file: '日曜日の夜',
        },
      ],
    },
    {
      text: '『弓道部』と書いて、私はペンを置いた。',
    },
    {
      text: '向いてないと思う。たぶん、肩は上がるし、的にも当たらない。',
    },
    {
      text: 'でも——陽春が「一緒だと楽しい」と言ったとき、少しだけ胸を押された。',
    },
    {
      text: 'あの「一緒だと」を、確かめてみたかった。',
    },
    {
      text: '提出箱に登録票を入れた帰り、北棟の前を通りかかった。',
    },
    {
      text: '三階の突き当たりに、まだ灯りがついている。',
    },
    {
      text: '（……先輩は、今日も一人なんだろうな）',
    },
    {
      text: '商店街の横顔も、文房具屋の赤い耳も、たしかに気になっていた。',
    },
    {
      text: 'でも、私が確かめたいのは、たぶんそっちじゃない。',
    },
    {
      text: '灯りに一度だけ目をやって、私は校門のほうへ歩き出した。',
    },
    {
      text: '翌朝、教室に入ると、陽春はもう来ていた。',
      commands: [
        {
          type: 'bg',
          file: 'classroom-daytime.jpg',
          transition: 'crossfade',
        },
        {
          type: 'bgm',
          file: 'NightGlow',
        },
        {
          type: 'char',
          id: 'haru',
          pose: 'normal',
        },
      ],
    },
    {
      text: '机に肘をついて、こちらを待ち構えている。いつもの顔。',
    },
    {
      text: '陽春',
      speaker: '瑞穂',
    },
    {
      text: 'おはよ、瑞穂ちゃん',
      speaker: '陽春',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'happy',
        },
      ],
    },
    {
      text: 'これ',
      speaker: '瑞穂',
    },
    {
      text: '登録票の控えを、机に置いた。',
    },
    {
      text: '陽春の目が、紙の上を走る。',
    },
    {
      text: '……えっ',
      speaker: '陽春',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'surprised',
        },
      ],
    },
    {
      text: '弓道部',
      speaker: '瑞穂',
    },
    {
      text: 'えっ、えっ、ほんとに？',
      speaker: '陽春',
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
      text: 'ほんとに',
      speaker: '瑞穂',
    },
    {
      text: '陽春は登録票と私の顔を、何度も見比べた。',
    },
    {
      text: 'それから、ぱあっと顔が明るくなった。',
    },
    {
      text: 'やった——！',
      speaker: '陽春',
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
      text: '立ち上がった拍子に、椅子がガタンと鳴った。',
    },
    {
      text: '前の席の子が振り返る。',
    },
    {
      text: 'あ、ごめん',
      speaker: '陽春',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'perori',
        },
      ],
    },
    {
      text: 'ぺこっと頭を下げて、それからまた私のほうを向いた。',
    },
    {
      text: '今度は声を抑えて、でも興奮は隠しきれていない。',
    },
    {
      text: '向いてないって言ってたのに',
      speaker: '陽春',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'happy',
        },
      ],
    },
    {
      text: '言ってた',
      speaker: '瑞穂',
    },
    {
      text: 'なんで？',
      speaker: '陽春',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'normal_open',
        },
      ],
    },
    {
      text: '……陽春が、一緒だと楽しいって言ったから',
      speaker: '瑞穂',
    },
    {
      text: '言ってから、少し恥ずかしくなった。',
    },
    {
      text: '陽春は一瞬きょとんとして、それから、今までで一番やわらかく笑った。',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'surprised',
        },
      ],
    },
    {
      text: '……そっか',
      speaker: '陽春',
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
      text: 'うん。楽しいよ。絶対',
      speaker: '陽春',
    },
    {
      text: '放課後、弓道場。',
      commands: [
        {
          type: 'bg',
          file: 'kyudojo.jpg',
          transition: 'crossfade',
        },
        {
          type: 'bgm',
          file: '夕焼け帰り道',
        },
        {
          type: 'charDelete',
        },
      ],
    },
    {
      text: '道着を借りて、初めて射位に立った。',
    },
    {
      text: '肩、力入れすぎ。もっと抜いて',
      speaker: '陽春',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'normal_open',
        },
      ],
    },
    {
      text: '……難しい',
      speaker: '瑞穂',
    },
    {
      text: '最初はみんなそう',
      speaker: '陽春',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'happy',
        },
      ],
    },
    {
      text: '八島先輩が、的場のほうから見ていた。',
      commands: [
        {
          type: 'char',
          id: 'yashima',
          pose: 'normal',
        },
      ],
    },
    {
      text: '淡々とした目で、でも口元は少しゆるんでいる。',
      commands: [
        {
          type: 'char',
          id: 'yashima',
          pose: 'smile',
        },
      ],
    },
    {
      text: '橘、人に教えるの下手だな',
      speaker: '八島',
    },
    {
      text: 'ええっ、そんなことないし！',
      speaker: '陽春',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'pout',
        },
      ],
    },
    {
      text: '藤波さん、肩じゃなくて、背中で引く感じ',
      speaker: '八島',
      commands: [
        {
          type: 'char',
          id: 'yashima',
          pose: 'normal',
        },
      ],
    },
    {
      text: '……背中',
      speaker: '瑞穂',
    },
    {
      text: 'そう',
      speaker: '八島',
    },
    {
      text: '言われた通りにすると、少しだけ楽になった。',
    },
    {
      text: '弦を引いて、的を見る。',
    },
    {
      text: 'いける、いける',
      speaker: '陽春',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'happy',
        },
      ],
    },
    {
      text: '息を吐いて、離す。',
      commands: [
        {
          type: 'se',
          file: 'bowstring',
        },
      ],
    },
    {
      text: '矢は、的のずっと手前に落ちた。',
    },
    {
      text: '……うん。まあ、最初だし',
      speaker: '陽春',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'trouble',
        },
      ],
    },
    {
      text: '全然だめだった',
      speaker: '瑞穂',
    },
    {
      text: '私も最初そうだったよ。ほんとに',
      speaker: '陽春',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'normal',
        },
      ],
    },
    {
      text: '橘は今もそうだろ',
      speaker: '八島',
      commands: [
        {
          type: 'char',
          id: 'yashima',
          pose: 'smile',
        },
      ],
    },
    {
      text: '先輩！',
      speaker: '陽春',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'pout',
        },
      ],
    },
    {
      text: '笑い声が、道場に響いた。',
    },
    {
      text: '静かな場所だと思っていたのに、陽春がいると、ここは少しにぎやかだ。',
    },
    {
      text: '矢を拾いに行きながら、陽春が横に並んだ。',
    },
    {
      text: '来てくれて、嬉しい',
      speaker: '陽春',
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
      text: 'ずっと、一緒にやりたかったんだ',
      speaker: '陽春',
    },
    {
      text: '夕方の光が、道場の床を斜めに照らしていた。',
    },
    {
      text: '向いてるかどうかは、まだわからない。',
    },
    {
      text: 'たぶん、しばらくは下手なままだろう。',
    },
    {
      text: 'でも、隣で笑っているこの子と、明日もここに来る。',
    },
    {
      text: 'それだけで、選んでよかったと思えた。',
    },
    {
      text: '明日も来るよね？',
      speaker: '陽春',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'normal',
        },
      ],
    },
    {
      text: '来る',
      speaker: '瑞穂',
    },
    {
      text: 'やった',
      speaker: '陽春',
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
      text: 'パンと手を合わせる陽春の隣で、私はもう一本、矢をつがえた。',
      commands: [
        {
          type: 'bgmFadeOut',
          duration: 3000,
        },
      ],
    },
    {
      text: '【弓道部エンド ―了―】',
    },
  ],
};

export default scenario;
