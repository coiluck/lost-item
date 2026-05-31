// ts/pages/LoadDataPage.tsx
import { useState, useEffect } from 'react';
import '../../css/pages/LoadDataPage.css';

interface SaveData {
  slot: number;
  savedAt: string;
  rootChapter: string;
  preview: { speaker: string; text: string };
}

export default function LoadDataPage() {
  const SLOTS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [slotPageIndex, setSlotPageIndex] = useState<number>(1);
  const [activeSlotIndex, setActiveSlotIndex] = useState<number>(0);

  const [saveData, setSaveData] = useState<SaveData[]>([]);
  useEffect(() => {
    // あとで
  }, []);

  return (
    <div className="page fade-in">
      <div className="load-data-header">
        {SLOTS.map((slot) => (
          <button
            key={slot}
            onClick={() => setSlotPageIndex(slot)}
            className={slotPageIndex === slot ? 'active' : ''}
          >
            {slot}
          </button>
        ))}
      </div>
      <div className="load-data-content">
        <div className="load-data-content-item">
          <div className="load-data-content-item-left">
            <span className="load-data-content-item-left-label">No.</span>
            <span className="load-data-content-item-left-number">01</span>
          </div>
          <div className="load-data-content-item-right">
            <div className="load-data-content-item-image-container"></div>
            <div className="load-data-content-item-text-container">
              <div className="load-data-content-item-text-title">
                <span>第一章</span>
              </div>
              <div className="load-data-content-item-text-content">公園に着くと、彼女はベンチの屋根代わりに使っているのかビニール傘を頭の上に差したまま、それでも律儀に弦を爪弾いていた。ギターケースを膝で抱えて、楽器だけは濡らさないようにしながら。</div>
              <div className="load-data-content-item-text-time">Mar 1, 2026 12:00</div>
            </div>
            <div className="load-data-content-item-button-container">
              <button className="load-data-content-item-button">▶︎ ロードする</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}