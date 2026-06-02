// ts/pages/LoadDataPage.tsx
import { useState, useEffect } from 'react';
import SaveLoadItem from '../components/SaveLoadItem';
import '../../css/pages/LoadDataPage.css';

interface SaveData {
  slot: number;
  savedAt: string;
  rootChapter: string;
  preview: { speaker: string; text: string };
}

export default function LoadDataPage() {
  const SLOTS_PAGE = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [slotPageIndex, setSlotPageIndex] = useState<number>(1);
  const [activeSlotIndex, setActiveSlotIndex] = useState<number>(0);

  const [saveData, setSaveData] = useState<SaveData[]>([]);
  useEffect(() => {
    // あとで
  }, []);

  return (
    <div className="page fade-in">
      <div className="load-data-header">
        {SLOTS_PAGE.map((slot) => (
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
        <SaveLoadItem
          number="01"
          chapterLabel="第一章"
          content="公園に着くと、彼女はベンチの屋根代わりに使っているのかビニール傘を頭の上に差したまま、それでも律儀に弦を爪弾いていた。ギターケースを膝で抱えて、楽器だけは濡らさないようにしながら。"
          time="Mar 1, 2026 12:00"
          buttonText="ロードする"
          onButtonClick={() => { /* ロード処理 */ }}
        />
      </div>
    </div>
  );
}