import { useEffect, useRef } from 'react';
import { useGameStore } from '../stores/gameStore';
import '../../css/components/Character.css';

// @char の bounce フラグで明示的にはねて、話している雰囲気を演出する立ち絵。
function SpriteImage({ id, pose }: { id: string; pose: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const mountedRef = useRef(false);
  const bounce = useGameStore((s) => s.bounce);

  // 初回登場時のクラスを確定する。bounce 指定付きで登場したときだけはねさせ、
  // それ以外はフェードインのみにする。
  const appearClassRef = useRef<string | null>(null);
  if (appearClassRef.current === null) {
    appearClassRef.current = bounce && bounce.charId === id ? 'appear-bounce' : 'fade-in';
  }

  useEffect(() => {
    // 初回マウントは登場アニメーション（appear / appear-bounce）に任せる。
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    // 自分宛ての bounce 発火のときだけバウンドを再生する。
    if (!bounce || bounce.charId !== id) return;
    const el = ref.current;
    if (!el) return;
    el.classList.remove('fade-in', 'appear-bounce', 'bounce');
    void el.offsetWidth; // リフローを強制してアニメーションを再start
    el.classList.add('bounce');
  }, [bounce?.id]);

  return (
    <img
      ref={ref}
      className={`character-sprite-image ${appearClassRef.current}`}
      src={`/assets/images/character/full_body/${id}/${pose}.png`}
      alt={id}
    />
  );
}

export function CharacterSprite() {
  const characters = useGameStore((s) => s.snapshot.characters);

  if (characters.length === 0) return <div className="character-layer" />;

  return (
    <div className="character-sprite-layer">
      {characters.map((c) => (
        <SpriteImage key={c.id} id={c.id} pose={c.pose} />
      ))}
    </div>
  );
}

export function CharacterFace() {
  const characters = useGameStore((s) => s.snapshot.characters);

  if (characters.length === 0) return <div className="character-layer" />;

  return (
    <div className="character-face-layer">
      {characters.map((c) => (
        <img
          key={c.id}
          className="character-face-image"
          src={`/assets/images/character/face/${c.id}/${c.pose}.png`}
          alt={c.id}
        />
      ))}
    </div>
  );
}

