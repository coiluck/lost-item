// ts/pages/Settings.tsx
import { useRef } from "react";
import { useSettingsStore } from "../stores/settingsStore";
import { bgm, se, voice } from '../audio/audio';
import { setMasterGain } from '../audio/audioContext';
import "../../css/pages/SettingsPage.css";

export default function SettingsPage() {
  const masterVolume = useSettingsStore(state => state.masterVolume);
  const setMasterVolume = useSettingsStore(state => state.setMasterVolume);
  const bgmVolume = useSettingsStore(state => state.bgmVolume);
  const setBgmVolume = useSettingsStore(state => state.setBgmVolume);
  const seVolume = useSettingsStore(state => state.seVolume);
  const setSeVolume = useSettingsStore(state => state.setSeVolume);
  const cvVolume = useSettingsStore(state => state.cvVolume);
  const setCvVolume = useSettingsStore(state => state.setCvVolume);
  const textSpeed = useSettingsStore(state => state.textSpeed);
  const setTextSpeed = useSettingsStore(state => state.setTextSpeed);
  const textSize = useSettingsStore(state => state.textSize);
  const setTextSize = useSettingsStore(state => state.setTextSize);
  const screenMode = useSettingsStore(state => state.screenMode);
  const setScreenMode = useSettingsStore(state => state.setScreenMode);

  const textPreviewRef = useRef<HTMLSpanElement>(null);
  const animationIdRef = useRef<number>(0); // アニメーション割り込み用

  const handleMasterVolumeChange = (volume: number) => {
    setMasterVolume(volume);
    setMasterGain(volume);
  };

  const handleBgmVolumeChange = (volume: number) => {
    setBgmVolume(volume);
    bgm.setVolume(volume);
  };

  const handleSeVolumeChange = (volume: number) => {
    setSeVolume(volume);
    se.setVolume(volume);
  };

  const handleCvVolumeChange = (volume: number) => {
    setCvVolume(volume);
    voice.setVolume(volume);
  };

  const handleTextSpeedChange = async (speed: number) => {
    setTextSpeed(speed);

    if (!textPreviewRef.current) return;

    const currentId = ++animationIdRef.current;

    const textAwaitTimeMs = 40 - speed * 3; // 10 ~ 40ms
    const SAMPLE_TEXT = "きなこを探しに来たことも、家に夕飯が待っていることも、すべてが頭から吹き飛んでいた。ただ、彼女の指先から生み出される音と、街灯に照らされた淡い髪の輪郭だけが、私の世界のすべてになった。";
    const textArray = SAMPLE_TEXT.split('');

    textPreviewRef.current.innerHTML = '';

    for (const char of textArray) {
      if (currentId !== animationIdRef.current) return;
      textPreviewRef.current.innerHTML += char;
      await new Promise(resolve => setTimeout(resolve, textAwaitTimeMs));
    }
  };

  const handleTextSizeChange = (size: number) => {
    setTextSize(size);
  };

  const handleScreenModeChange = (mode: 'fullscreen' | 'window') => {
    setScreenMode(mode);
  };

  return (
    <div className="page">
      <section className="setting-section">
        <div className="setting-section-label-container">
          <span className="setting-section-label-icon" />
          <span className="setting-section-label-text">音声 · Audio</span>
          <span className="setting-section-label-line" />
        </div>

        <div className="setting-item">
          <div className="setting-item-label-container">
            <span className="setting-item-label-ja">アプリ音量</span>
            <span className="setting-item-label-en">Master Volume</span>
          </div>
          <div className="setting-item-value-range-container">
            <input
              type="range" min="0" max="2" step="0.1"
              defaultValue={masterVolume}
              onChange={e => handleMasterVolumeChange(parseFloat(e.target.value))}
            />
            <span className="setting-item-value-range-text">{masterVolume}</span>
          </div>
        </div>
        <div className="setting-item">
          <div className="setting-item-label-container">
            <span className="setting-item-label-ja">BGM音量</span>
            <span className="setting-item-label-en">Background Music</span>
          </div>
          <div className="setting-item-value-range-container">
            <input
              type="range" min="0" max="10" step="1"
              defaultValue={bgmVolume}
              onChange={e => handleBgmVolumeChange(parseInt(e.target.value))}
            />
            <span className="setting-item-value-range-text">{bgmVolume}</span>
          </div>
        </div>
        <div className="setting-item">
          <div className="setting-item-label-container">
            <span className="setting-item-label-ja">SE音量</span>
            <span className="setting-item-label-en">Sound Effects</span>
          </div>
          <div className="setting-item-value-range-container">
            <input
              type="range" min="0" max="10" step="1"
              defaultValue={seVolume}
              onChange={e => handleSeVolumeChange(parseInt(e.target.value))}
            />
            <span className="setting-item-value-range-text">{seVolume}</span>
          </div>
        </div>
        <div className="setting-item">
          <div className="setting-item-label-container">
            <span className="setting-item-label-ja">ボイス音量</span>
            <span className="setting-item-label-en">Character Voice</span>
          </div>
          <div className="setting-item-value-range-container">
            <input
              type="range" min="0" max="10" step="1"
              defaultValue={cvVolume}
              onChange={e => handleCvVolumeChange(parseInt(e.target.value))}
            />
            <span className="setting-item-value-range-text">{cvVolume}</span>
          </div>
        </div>
      </section>

      <section className="setting-section">
        <div className="setting-section-label-container">
          <span className="setting-section-label-icon" />
          <span className="setting-section-label-text">文字 · Text</span>
          <span className="setting-section-label-line" />
        </div>

        <div className="setting-item">
          <div className="setting-item-label-container">
            <span className="setting-item-label-ja">文字表示速度</span>
            <span className="setting-item-label-en">Text Speed</span>
          </div>
          <div className="setting-item-value-range-container">
            <input
              type="range" min="1" max="10" step="1"
              defaultValue={textSpeed}
              onChange={e => handleTextSpeedChange(parseInt(e.target.value))}
            />
            <span className="setting-item-value-range-text">{textSpeed}</span>
          </div>
        </div>
        <div className="setting-item">
          <div className="setting-item-label-container">
            <span className="setting-item-label-ja">文字サイズ</span>
            <span className="setting-item-label-en">Text Size</span>
          </div>
          <div className="setting-item-value-range-container">
            <input
              type="range" min="14" max="18" step="1"
              defaultValue={textSize}
              onChange={e => handleTextSizeChange(parseInt(e.target.value))}
            />
            <span className="setting-item-value-range-text">{textSize}</span>
          </div>
        </div>
        <div className="setting-text-preview-container">
          <span className="setting-text-preview-label">Preview</span>
          <p>
            <span ref={textPreviewRef} style={{ fontSize: `${textSize}px` }}>
              きなこを探しに来たことも、家に夕飯が待っていることも、すべてが頭から吹き飛んでいた。ただ、彼女の指先から生み出される音と、街灯に照らされた淡い髪の輪郭だけが、私の世界のすべてになった。
            </span>
            <span className="setting-text-preview-cursor" />
          </p>
        </div>
      </section>

      <section className="setting-section">
        <div className="setting-section-label-container">
          <span className="setting-section-label-icon" />
          <span className="setting-section-label-text">その他 · Others</span>
          <span className="setting-section-label-line" />
        </div>

        <div className="setting-item">
          <div className="setting-item-label-container">
            <span className="setting-item-label-ja">画面モード</span>
            <span className="setting-item-label-en">Screen Mode</span>
          </div>
          <div className="setting-item-value-button-container">
            <button className={`setting-item-value-button ${screenMode === 'fullscreen' ? 'active' : ''}`} onClick={() => handleScreenModeChange('fullscreen')}>全画面</button>
            <button className={`setting-item-value-button ${screenMode === 'window' ? 'active' : ''}`} onClick={() => handleScreenModeChange('window')}>ウィンドウ</button>
          </div>
        </div>
      </section>
    </div>
  );
}
