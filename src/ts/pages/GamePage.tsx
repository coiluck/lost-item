import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createInitialState, useGameEngine } from '../engine/useGameEngine';
import { useGameStore } from '../stores/gameStore';
import { useSettingsStore } from '../stores/settingsStore';
import { Background } from '../components/Background';
import '../../css/pages/GamePage.css';

export default function GamePage() {
  const navigate = useNavigate();
  const { start, advance, goBack, selectChoice } = useGameEngine(createInitialState());
  const snapshot = useGameStore((s) => s.snapshot);
  const motion = useGameStore((s) => s.motion);
  const pendingChoice = useGameStore((s) => s.pendingChoice);
  const textSize = useSettingsStore((s) => s.textSize);
  const textSpeed = useSettingsStore((s) => s.textSpeed);
  const advancingRef = useRef(false);
  const initializedRef = useRef(false);
  const typingIdRef = useRef(0);
  const textSpeedRef = useRef(textSpeed);
  textSpeedRef.current = textSpeed;
  const skipPendingRef = useRef(0);
  const instantNextRef = useRef(false);

  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    void start();
  }, [start]);

  // snapshot.text が変わるたびに1文字ずつ表示する。speedは ref 経由で最新値を見る。
  useEffect(() => {
    const target = snapshot.text;
    const id = ++typingIdRef.current;

    if (!target) {
      setDisplayedText('');
      return;
    }

    // ホイール skip や goBack 直後はタイピングを省略して即フル表示。
    if (instantNextRef.current) {
      instantNextRef.current = false;
      setDisplayedText(target);
      return;
    }

    const stepMs = Math.max(0, 40 - textSpeedRef.current * 3);
    if (stepMs === 0) {
      setDisplayedText(target);
      return;
    }

    setDisplayedText('');
    let i = 0;
    const tick = () => {
      if (id !== typingIdRef.current) return;
      i += 1;
      setDisplayedText(target.slice(0, i));
      if (i < target.length) window.setTimeout(tick, stepMs);
    };
    const timer = window.setTimeout(tick, stepMs);

    return () => window.clearTimeout(timer);
  }, [snapshot.text]);

  const isTyping = !!snapshot.text && displayedText.length < snapshot.text.length;

  const handleClick = async () => {
    if (pendingChoice || advancingRef.current) return;
    if (isTyping) {
      typingIdRef.current += 1;
      setDisplayedText(snapshot.text);
      return;
    }
    advancingRef.current = true;
    try {
      const result = await advance();
      if (result.kind === 'end') navigate('/top');
    } finally {
      advancingRef.current = false;
    }
  };

  // ホイールで複数行スキップ。skipPendingRef に積まれた回数だけ advance を回す。
  const runSkipLoop = async () => {
    if (advancingRef.current) return;
    advancingRef.current = true;
    try {
      while (skipPendingRef.current > 0) {
        skipPendingRef.current -= 1;
        if (useGameStore.getState().pendingChoice) {
          skipPendingRef.current = 0;
          return;
        }
        instantNextRef.current = true;
        const result = await advance();
        if (result.kind === 'end') {
          skipPendingRef.current = 0;
          navigate('/top');
          return;
        }
        if (result.kind === 'choice') {
          skipPendingRef.current = 0;
          return;
        }
      }
    } finally {
      advancingRef.current = false;
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (pendingChoice) return;
    if (e.deltaY > 0) {
      skipPendingRef.current = Math.min(skipPendingRef.current + 1, 50);
      void runSkipLoop();
    } else if (e.deltaY < 0) {
      if (advancingRef.current) return;
      instantNextRef.current = true;
      if (!goBack()) instantNextRef.current = false;
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    instantNextRef.current = true;
    if (!goBack()) instantNextRef.current = false;
  };
  const handleSettings = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/settings', { state: { from: 'game' } });
  };
  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/save', { state: { from: 'game' } });
  };
  const handleLoad = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/load', { state: { from: 'game' } });
  };
  const handleExit = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/top');
  };
  const handleChoice = async (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!pendingChoice || advancingRef.current) return;
    advancingRef.current = true;
    try {
      await selectChoice(pendingChoice.choiceId, index);
    } finally {
      advancingRef.current = false;
    }
  };

  const bg = snapshot.background
    ? { file: snapshot.background.file, transition: snapshot.background.transition }
    : { file: null, transition: 'fade' as const };

  return (
    <div className="page fade-in" onClick={handleClick} onWheel={handleWheel}>

      <Background bg={bg} motion={motion} />

      <div className="game-text-container">
        <div className="game-speaker-name" style={{ visibility: snapshot.speaker ? 'visible' : 'hidden' }}>
          {snapshot.speaker}
        </div>
        <div className="game-text-message" style={{ fontSize: `${textSize}px` }}>
          <span className="game-text-message-text">{snapshot.text ? displayedText : '...'}</span>
          <span className="game-text-message-cursor" />
        </div>

        <nav>
          <a className="game-menu-icon prev" title="前へ" onClick={handlePrev} />
          <a className="game-menu-icon save" title="セーブ" onClick={handleSave} />
          <a className="game-menu-icon load" title="ロード" onClick={handleLoad} />
          <a className="game-menu-icon settings" title="設定" onClick={handleSettings} />
          <a className="game-menu-icon exit" title="終了" onClick={handleExit} />
        </nav>
      </div>

      {pendingChoice && (
        <div className="game-choice-container" onClick={stop}>
          {pendingChoice.choices.map((c, i) => (
            <button
              key={i}
              className="game-choice-button"
              onClick={(e) => handleChoice(i, e)}
              style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <span className="game-choice-button-decorator left" aria-hidden="true">
                <span className="game-choice-button-line" />
                <span className="game-choice-button-diamond" />
              </span>

              <span className="game-choice-button-text">{c.buttonText}</span>

              <span className="game-choice-button-decorator right" aria-hidden="true">
                <span className="game-choice-button-diamond" />
                <span className="game-choice-button-line" />
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
