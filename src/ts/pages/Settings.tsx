// ts/pages/Settings.tsx
import "../../css/pages/Settings.css";

function Settings() {
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
          <div className="setting-item-value">
            <input type="range" min="0" max="10" step="1" value="1" />
            <span className="setting-item-value-text">1</span>
          </div>
        </div>
        <div className="setting-item">
          <div className="setting-item-label-container">
            <span className="setting-item-label-ja">BGM音量</span>
            <span className="setting-item-label-en">Background Music</span>
          </div>
          <div className="setting-item-value">
            <input type="range" min="0" max="10" step="1" value="1" />
            <span className="setting-item-value-text">1</span>
          </div>
        </div>
        <div className="setting-item">
          <div className="setting-item-label-container">
            <span className="setting-item-label-ja">SE音量</span>
            <span className="setting-item-label-en">Sound Effects</span>
          </div>
          <div className="setting-item-value">
            <input type="range" min="0" max="10" step="1" defaultValue="1" />
            <span className="setting-item-value-text">1</span>
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
          <div className="setting-item-value">
            <input type="range" min="0" max="10" step="1" value="1" />
            <span className="setting-item-value-text">1</span>
          </div>
        </div>
        <div className="setting-item">
          <div className="setting-item-label-container">
            <span className="setting-item-label-ja">文字サイズ</span>
            <span className="setting-item-label-en">Text Size</span>
          </div>
          <div className="setting-item-value">
            <input type="range" min="0" max="10" step="1" value="1" />
            <span className="setting-item-value-text">10</span>
          </div>
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
          <div className="setting-item-value">
            <div className="setting-item-value-button-container">
              <button className="setting-item-value-button">全画面</button>
              <button className="setting-item-value-button active">ウィンドウ</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Settings;
