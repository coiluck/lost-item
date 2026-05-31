import type { TransientCommand } from './types';
import { bgm, se } from '../audio/audio';

type Pick<K extends TransientCommand['type']> = Extract<TransientCommand, { type: K }>;

export type ExecutorContext = {
  bgMotion: (cmd: Pick<'bgMove'>) => void;
  bgShake: (cmd: Pick<'bgShake'>) => void;
  showNextChapter: (cmd: Pick<'showNextChapter'>) => Promise<void>;
};

type Handlers = {
  [K in TransientCommand['type']]: (cmd: Pick<K>, ctx: ExecutorContext) => void | Promise<void>;
};

const handlers: Handlers = {
  bgMove:     (cmd, ctx) => ctx.bgMotion(cmd),
  bgShake:    (cmd, ctx) => ctx.bgShake(cmd),
  bgmFadeOut: (cmd)      => bgm.fadeOut(cmd.duration ?? 1000),
  se:         (cmd)      => se.play(cmd.file),
  wait:       (cmd)      => new Promise<void>(r => setTimeout(r, cmd.ms)),
  showNextChapter:    (cmd, ctx) => ctx.showNextChapter(cmd),
};

type AnyHandler = (cmd: TransientCommand, ctx: ExecutorContext) => void | Promise<void>;

export async function executeTransients(
  commands: ReadonlyArray<TransientCommand>,
  ctx: ExecutorContext,
): Promise<void> {
  for (const cmd of commands) {
    await (handlers[cmd.type] as AnyHandler)(cmd, ctx);
  }
}
