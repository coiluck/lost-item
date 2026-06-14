// AUTO-GENERATED from 1.md. Do not edit by hand.
import type { ScenarioFile } from '../engine/types';

const scenario: ScenarioFile = {
  id: '1',
  next: '2',
  lines: [
    {
      text: '四月の教室は、知らない匂いがする。',
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
          type: 'bgMove',
          direction: 'leftToRight',
          duration: 10000,
        },
      ],
    },
    {
      text: '黒板の前に立たされて、私はクラス中の視線を一身に浴びていた。',
    },
    {
      text: 'えー、今日から転入してきた――',
      speaker: '担任',
    },
    {
      text: '担任の声が、やけに遠くで響いて聞こえる。',
    },
    {
      text: '（落ち着いて。こういうの、何度もやってきた）',
    },
    {
      text: '息を吸って、口角を上げる。',
    },
    {
      text: '藤波瑞穂です。よろしくお願いします',
      speaker: '瑞穂',
    },
    {
      text: 'ぱらぱらと拍手が起きた。',
    },
    {
      text: '悪くない反応。たぶん、第一印象は合格点。',
    },
    {
      text: '席はあそこに用意してあるから',
      speaker: '担任',
    },
    {
      text: 'そう言って担任は窓側の後ろの席を指した。',
    },
    {
      text: '春の光が、机の木目を白く照らしている。',
    },
    {
      text: '──大丈夫。ここでも、うまくやれる。',
    },
    {
      text: '休み時間の鈴が鳴るのと同時に、隣の席の子がこっちを向いた。',
      commands: [
        {
          type: 'wait',
          ms: 600,
        },
        {
          type: 'se',
          file: 'chime',
        },
        {
          type: 'char',
          id: 'haru',
          pose: 'happy',
        },
      ],
    },
    {
      text: 'くるくるした髪。よく動く目。笑顔が眩しい。',
    },
    {
      text: 'ねえねえ、藤波さんって呼んでいい？ 私、橘陽春っていうんだけど',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/1-1.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'normal_open',
        },
      ],
    },
    {
      text: 'うん、もちろん',
      speaker: '瑞穂',
    },
    {
      text: 'どこから来たの？ 遠い？',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/1-2.wav',
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
      text: '一つ隣の県。お父さんの仕事で',
      speaker: '瑞穂',
    },
    {
      text: 'へえー！ じゃあ方言とかある？',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/1-3.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'happy',
        },
      ],
    },
    {
      text: 'あんまり出ないほうだと思う、たぶん',
      speaker: '瑞穂',
    },
    {
      text: 'ちょっと残念',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/1-4.wav',
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
      text: 'くすっと笑って、陽春はまた何かを訊いてくる。',
    },
    {
      text: '話すのが好きなんだろう。悪い子じゃないとすぐわかる。',
    },
    {
      text: 'ねえ、この辺ってどこか行った？ もしよかったら一緒に――',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/1-5.wav',
    },
    {
      text: '陽春、今日バイトじゃないの',
      speaker: '？？？',
      voice: '/assets/audio/voice/kasumi/1-1.wav',
      commands: [
        {
          type: 'char',
          id: 'kasumi',
          pose: 'normal',
        },
      ],
    },
    {
      text: '後ろの席の子が呆れたように口を挟んだ。',
    },
    {
      text: 'あ',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/1-6.wav',
      commands: [
        {
          type: 'char',
          id: 'haru',
          pose: 'surprised',
        },
      ],
    },
    {
      text: '短い沈黙。',
    },
    {
      text: '……忘れてた',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/1-7.wav',
    },
    {
      text: '大丈夫？',
      speaker: '瑞穂',
    },
    {
      text: '全然大丈夫じゃない！ やばい何時からだっけ！',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/1-8.wav',
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
      text: 'そう言って陽春は鞄をひっつかんで、廊下のほうへ飛び出していった。',
    },
    {
      text: '扉のところで一度振り返って、',
    },
    {
      text: 'また明日ね瑞穂ちゃん！ ごめんね！',
      speaker: '陽春',
      voice: '/assets/audio/voice/haru/1-9.wav',
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
      text: '名前、もう呼び捨てだ。',
    },
    {
      text: 'ばたばたと足音が遠ざかっていく。',
      commands: [
        {
          type: 'charDelete',
          id: 'haru',
        },
        {
          type: 'se',
          file: 'footsteps',
        },
      ],
    },
    {
      text: '残されたクラスメイトたちも、それぞれ荷物をまとめて出て行った。',
      commands: [
        {
          type: 'charDelete',
          id: 'kasumi',
        },
      ],
    },
    {
      text: '（一人になっちゃった）',
      commands: [
        {
          type: 'bgm',
          file: '静かな夜を',
        },
      ],
    },
    {
      text: 'グラウンドから、掛け声が聞こえてくる。',
    },
    {
      text: '体育館からは、シューズの鳴る音。',
    },
    {
      text: '窓の外を見ると、ユニフォームを着た集団が笑いながら走っていた。',
    },
    {
      text: '（まあ、話せたからいいや。初日にしては上出来）',
    },
    {
      text: '私は窓から目を離した。',
    },
    {
      text: '下駄箱に向かって、また歩き出す。',
      commands: [
        {
          type: 'bg',
          file: 'corridor_school.png',
        },
        {
          type: 'bgMove',
          direction: 'bottomToTop',
          duration: 5000,
        },
      ],
    },
    {
      text: '知らない廊下。知らない掲示物。知らない学校の、知らない匂い。',
    },
    {
      text: '──四月は、どこへ行ってもこんな感じだ',
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
