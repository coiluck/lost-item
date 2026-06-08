// AUTO-GENERATED from 5.md. Do not edit by hand.
import type { ScenarioFile } from '../engine/types';

const scenario: ScenarioFile = {
  id: '5',
  next: '6',
  lines: [
    {
      text: '遅れて文房具に入ると、青葉先輩は制服のまま、棚の前に立っていた。',
      commands: [
        {
          type: 'bg',
          file: 'stationery_store.png',
        },
        {
          type: 'bgm',
          file: '星の降る夜',
        },
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: '手に持っているのは——付箋？ラベル？',
    },
    {
      text: '細かく並んだ棚を、一つ一つ確かめるように見ていた。',
    },
    {
      text: '（なんか、楽しそう）',
    },
    {
      text: '保管部で見たときとは、少し違う。',
    },
    {
      text: 'ああいう場所では「整然としている」という印象が先に来たけど、今は違う。',
    },
    {
      text: '棚の前で少し背伸びして、上の段を覗き込んで、また元に戻って。',
    },
    {
      text: 'ただ、自分のペースで動いている。',
    },
    {
      text: '店員に声をかけられて、先輩は短く返した。',
    },
    {
      text: 'それから、何かを手に取って光に透かして確かめた。',
    },
    {
      text: '（あんな顔もするんだ）',
    },
    {
      text: 'しばらく見ていたら、先輩がこちらに向き直った。',
    },
    {
      text: '私は反射的に、視線をずらした。',
    },
    {
      text: '（ええと、どうしよう）',
    },
    {
      text: 'でもここで行かなかったら、たぶんずっと気になる。',
    },
    {
      text: '扉を開けると、文房具の匂いがした。',
      commands: [
        {
          type: 'se',
          file: 'door',
        },
      ],
    },
    {
      text: '先輩はまだ同じ棚の前にいた。',
    },
    {
      text: 'あの——帆波先輩',
      speaker: '瑞穂',
    },
    {
      text: '先輩が振り向いた。',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'surprised',
        },
      ],
    },
    {
      text: '一瞬、固まった。',
    },
    {
      text: 'それから、耳のあたりがかすかに赤くなった。',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'blush',
        },
      ],
    },
    {
      text: '……藤波さん',
      speaker: '青葉',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'blush',
          bounce: true,
        },
      ],
    },
    {
      text: 'こんなところで。文房具屋さん、好きなんですか',
      speaker: '瑞穂',
    },
    {
      text: '……べつに',
      speaker: '青葉',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'blush',
          bounce: true,
        },
      ],
    },
    {
      text: '視線がわずかに横に逃げた。',
    },
    {
      text: '手の中に、ラベルシールの束が握られている。',
    },
    {
      text: 'それ、部室用ですか',
      speaker: '瑞穂',
    },
    {
      text: '……そうです',
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
      text: '短い。でも否定はしなかった。',
    },
    {
      text: '（ほんとに？）',
    },
    {
      text: '棚に目をやると、カラフルな柄のものや、罫線の細かいものや、ちょっと可愛らしいものが混じっていた。保管部の棚にあった、あの几帳面なラベルたちとは、少し雰囲気が違うような。',
    },
    {
      text: '黙っていると、先輩はまた棚に向き直った。',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: 'でも今度は、さっきより少し動作がぎこちない。',
    },
    {
      text: '……見ないでください',
      speaker: '青葉',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'pout',
          bounce: true,
        },
      ],
    },
    {
      text: 'え、あ、すみません',
      speaker: '瑞穂',
    },
    {
      text: '……覚えられると、困ります',
      speaker: '青葉',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'pout',
          bounce: true,
        },
      ],
    },
    {
      text: '何をですか',
      speaker: '瑞穂',
    },
    {
      text: '……こういうところを',
      speaker: '青葉',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'blush',
          bounce: true,
        },
      ],
    },
    {
      text: 'ぼそぼそとした声だった。',
    },
    {
      text: '（こういうところ）',
    },
    {
      text: '私はもう一度棚を見て、それから先輩を見た。',
    },
    {
      text: '赤くなった耳。横を向いた目。少し拗ねたみたいな言い方。',
    },
    {
      text: '（ああ、なるほど)',
    },
    {
      text: '笑うつもりはなかったけど、少し笑ってしまった。',
    },
    {
      text: '……笑わないでください',
      speaker: '青葉',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'pout',
          bounce: true,
        },
      ],
    },
    {
      text: '笑ってないです',
      speaker: '瑞穂',
    },
    {
      text: '笑っています',
      speaker: '青葉',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'pout',
          bounce: true,
        },
      ],
    },
    {
      text: '……ちょっとだけ',
      speaker: '瑞穂',
    },
    {
      text: '先輩はそれ以上何も言わなかった。',
    },
    {
      text: 'また棚に向き直って、さっきより真剣な顔でラベルを見比べている。',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'normal',
        },
      ],
    },
    {
      text: '私は隣に並んで、何となく同じ棚を眺めた。',
    },
    {
      text: '少しの間、二人とも黙っていた。',
    },
    {
      text: '悪くない沈黙だと思った。',
    },
    {
      text: '……これ、どっちがいいと思いますか',
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
      text: 'ふいに訊かれた。',
    },
    {
      text: '手のひらに、二種類のラベルシールが乗っていた。',
    },
    {
      text: 'どちらもほとんど同じに見えたけど、片方は角が少し丸くて、もう片方はきっちり四角だった。',
    },
    {
      text: 'こっち',
      speaker: '瑞穂',
    },
    {
      text: '丸いほうを指さした。',
    },
    {
      text: '……そうですか',
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
      text: '先輩は少しの間それを見てから、丸いほうをかごに入れた。',
    },
    {
      text: '固い理由はないんですけど',
      speaker: '瑞穂',
    },
    {
      text: 'いいです。参考にしただけなので',
      speaker: '青葉',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'smile',
          bounce: true,
        },
      ],
    },
    {
      text: 'でも、口元がほんのわずかにゆるんでいた。',
      commands: [
        {
          type: 'char',
          id: 'aoba',
          pose: 'smile',
        },
      ],
    },
    {
      text: '気がした。',
    },
    {
      text: '——帰り道は途中まで同じ方向で、二人並んで少しだけ歩いた。',
      commands: [
        {
          type: 'bg',
          file: 'shopping_street_evening.jpg',
          transition: 'crossfade',
        },
        {
          type: 'charDelete',
        },
      ],
    },
    {
      text: '夕方の商店街は、行きより少し静かだった。',
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
