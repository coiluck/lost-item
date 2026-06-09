// AUTO-GENERATED from 6.md. Do not edit by hand.
import type { ScenarioFile } from '../engine/types';

const scenario: ScenarioFile = {
  id: '6',
  next: '7',
  lines: [
    {
      text: '翌朝、教室に入ると陽春がもう来ていた。',
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
      text: '机の上に肘をついて、こちらが座るのを待ち構えていたような顔をしている。',
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
      text: '瑞穂ちゃん、今日の放課後空いてる？',
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
      text: '特には',
      speaker: '瑞穂',
    },
    {
      text: 'じゃあ決まり。弓道部の見学、一緒に来て',
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
      text: '鞄を置く間もなかった。',
    },
    {
      text: '……弓道？',
      speaker: '瑞穂',
    },
    {
      text: '私、一年から入ってるんだけど。瑞穂ちゃんってなんか、向いてそうじゃない？',
      speaker: '陽春',
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
      text: '何で',
      speaker: '瑞穂',
    },
    {
      text: 'なんか、静かな感じするから',
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
      text: 'それ弓道と関係ある？',
      speaker: '瑞穂',
    },
    {
      text: '陽春はきょとんとした顔をした。',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'surprised',
        },
      ],
    },
    {
      text: '関係あると思う。たぶん',
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
      text: '……たぶん',
      speaker: '瑞穂',
    },
    {
      text: '全然根拠がない。',
    },
    {
      text: '見るだけでいいから！ ね？',
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
      text: 'にこっと笑われると、断りづらい。',
    },
    {
      text: 'これは計算なのか天然なのか、まだよくわからない。',
    },
    {
      text: '……見るだけね',
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
      text: '陽春はパンと手を合わせた。',
    },
    {
      text: '……見てるだけ？',
      speaker: '瑞穂',
    },
    {
      text: '最初はね',
      speaker: '陽春',
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
      text: '「最初は」というのが少し引っかかったけど、もうほとんど決定事項の顔をしていた。',
    },
    {
      text: '放課後、弓道場は校舎の裏手にあった。木の引き戸を開けると、畳と木の匂いがした。',
      commands: [
        {
          type: 'bg',
          file: 'kyudojo.jpg',
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
          file: 'door',
        },
      ],
    },
    {
      text: '静かな場所だと思ったのに、案外部員は多い。',
    },
    {
      text: 'あ、来た来た。瑞穂ちゃん、紹介するね',
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
      text: 'にこにこしながら引っ張っていかれた先に、三年生らしき人が立っていた。落ち着いた目をした、背の高い人。',
    },
    {
      text: '橘の友達？ 私、部長の八島。よく来てくれた',
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
      text: '藤波瑞穂です。転入してきたばかりで',
      speaker: '瑞穂',
    },
    {
      text: '知ってるよ。陽春からよく聞いてる',
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
      text: 'そんな言ってないし',
      speaker: '陽春',
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
      text: '言ってた',
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
      text: '淡々と言って、八島先輩は的のほうに目をやった。',
    },
    {
      text: '今日は見るだけでいいけど、せっかくだから弓を持ってみる？',
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
      text: 'あ、いえ——',
      speaker: '瑞穂',
    },
    {
      text: 'やろうやろう',
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
      text: 'やらない',
      speaker: '瑞穂',
    },
    {
      text: 'くすっと笑って、先輩は的場のほうへ歩いていった。',
      commands: [
        {
          type: 'char',
          id: 'yashima',
          pose: 'smile',
        },
      ],
    },
    {
      text: '着替えてくるね。そこ座って待ってて',
      speaker: '陽春',
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
      text: '壁際のベンチを指して、陽春も奥へ消えた。',
    },
    {
      text: '一人になった。弓道場は静かだった。',
      commands: [
        {
          type: 'charDelete',
        },
      ],
    },
    {
      text: '的に向かって立っている先輩が一人いて、しばらく動かなかった。',
    },
    {
      text: 'それから、弦の音がした。',
      commands: [
        {
          type: 'se',
          file: 'bowstring',
        },
      ],
    },
    {
      text: '（……あ）',
    },
    {
      text: '矢が的に刺さっている。音が消えると、また静かになった。',
    },
    {
      text: '（こういうものか）',
    },
    {
      text: '悪くない、とは思う。でも「やりたい」かどうかは、また別の話だった。',
    },
    {
      text: '陽春が戻ってきた。道着姿だった。',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'happy',
        },
      ],
    },
    {
      text: '似合う',
      speaker: '瑞穂',
    },
    {
      text: 'でしょ！',
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
      text: '嬉しそうにくるりと回る。それから、きりっと前を向いた。',
    },
    {
      text: 'じゃあ、ちょっとやってみせるね',
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
      text: '射位に立つ。さっきまでとは少し違う顔をしていた。',
    },
    {
      text: '眩しいとか、よく動くとか、そういうのが全部しずまって。',
    },
    {
      text: '弦の音。',
      commands: [
        {
          type: 'se',
          file: 'bowstring',
        },
      ],
    },
    {
      text: '矢は的の少し外れたところに刺さった。',
    },
    {
      text: '……惜しい',
      speaker: '陽春',
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
      text: '肩、また上がってる',
      speaker: '八島',
      commands: [
        {
          type: 'char',
          id: 'yashima',
          pose: 'serious',
        },
      ],
    },
    {
      text: 'うぐ',
      speaker: '陽春',
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
      text: 'すぐ元の顔に戻った。',
    },
    {
      text: '弦の鳴る音が、また一つ響いた。',
      commands: [
        {
          type: 'charDelete',
          id: 'yashima',
        },
        {
          type: 'se',
          file: 'bowstring',
        },
      ],
    },
    {
      text: '道場の端で、一人黙々と引いている部員がいた。他の子と少し離れて、一人だけのペースで。',
    },
    {
      text: '同じ動作を、何度も繰り返している。',
    },
    {
      text: '（ああいうのが向いてる人と、そうじゃない人がいるんだろうな）',
    },
    {
      text: '自分はたぶん、後者だと思った。',
    },
    {
      text: '——帰り道、陽春はずっと弓道部の話をしていた。先輩がどうとか、大会がどうとか。楽しそうだった。',
      commands: [
        {
          type: 'bg',
          file: 'shopping_street_evening.jpg',
          transition: 'crossfade',
        },
        {
          type: 'bgm',
          file: '夕焼け帰り道',
        },
        {
          type: 'char',
          id: 'haru',
          pose: 'normal_open',
          bounce: true,
        },
      ],
    },
    {
      text: '陽春は本当に好きなんだね、弓道',
      speaker: '瑞穂',
    },
    {
      text: 'うん、大好き。一年のとき体験で引いて、それで決めちゃった',
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
      text: 'ふ～ん',
      speaker: '瑞穂',
    },
    {
      text: '入ってくれる？',
      speaker: '陽春',
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
      text: 'たぶん、入らないと思う',
      speaker: '瑞穂',
    },
    {
      text: 'えー',
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
      text: '本気で残念そうな顔をした。',
    },
    {
      text: 'なんでわかるの、向いてないって',
      speaker: '陽春',
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
      text: 'なんとなく',
      speaker: '瑞穂',
    },
    {
      text: 'なんとなくって何',
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
      text: '説明できないんだけど',
      speaker: '瑞穂',
    },
    {
      text: '陽春はしばらくむくれていたけど、すぐにまた笑顔に戻った。',
    },
    {
      text: 'まあ、無理には言わないけど。ゆっくり考えてよ',
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
      text: '分かれ道で陽春と別れて、一人になった。',
      commands: [
        {
          type: 'charDelete',
          id: 'haru',
        },
        {
          type: 'se',
          file: 'footsteps_slow',
        },
      ],
    },
    {
      text: '夕方の風が少し冷たかった。',
    },
    {
      text: '（じゃあ、どうするんだろう）',
    },
    {
      text: 'どこにも「ここだ」という感覚がない。',
    },
    {
      text: 'ただ、頭のどこかに、北棟の突き当たりがある。静かな部屋。棚の落とし物たち。',
    },
    {
      text: '（……保管部って、部員募集してるのかな）',
    },
    {
      text: '考えてから、少し可笑しくなった。なんでそっちが出てくるんだろう。',
    },
    {
      text: '答えのないまま、私は家に向かって歩き出した。',
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
