// ts/pages/SaveDataPage.tsx
import { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/core';
import SaveLoadItem from '../components/SaveLoadItem';
import { createInitialState, useGameEngine } from '../engine/useGameEngine';
import {
  SLOTS_PAGE,
  SLOTS_PER_PAGE,
  readSlot,
  writeSlot,
  formatSavedAt,
  type SaveSlot,
} from '../save/saveStorage';
import '../../css/pages/SaveDataPage.css';

export default function SaveDataPage() {
  const { getState } = useGameEngine(createInitialState());
  const [slotPageIndex, setSlotPageIndex] = useState<number>(1);
  const [slots, setSlots] = useState<(SaveSlot | null)[]>([]);

  const loadPage = (page: number) =>
    Promise.all(Array.from({ length: SLOTS_PER_PAGE }, (_, i) => readSlot(page, i + 1)));

  useEffect(() => {
    let cancelled = false;
    void loadPage(slotPageIndex).then((loaded) => {
      if (!cancelled) setSlots(loaded);
    });
    return () => { cancelled = true; };
  }, [slotPageIndex]);

  const handleSave = async (slot: number) => {
    await writeSlot(slotPageIndex, slot, getState());
    setSlots(await loadPage(slotPageIndex));
  };

  const handleDelete = async (slot: number) => {
    await invoke('savedata_delete', { page: slotPageIndex, slot });
    setSlots(await loadPage(slotPageIndex));
  };

  return (
    <div className="page fade-in">
      <div className="save-data-header">
        {SLOTS_PAGE.map((page) => (
          <button
            key={page}
            onClick={() => setSlotPageIndex(page)}
            className={slotPageIndex === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </div>
      <div className="save-data-content">
        {slots.map((data, i) => {
          const slot = i + 1;
          const number = String(slot).padStart(2, '0');
          if (!data) {
            return (
              <SaveLoadItem
                key={slot}
                number={number}
                chapterLabel="NO DATA"
                content="セーブデータがありません"
                time="----"
                buttonText="セーブする"
                onButtonClick={() => handleSave(slot)}
                onDeleteClick={() => handleDelete(slot)}
              />
            );
          }
          const bg = data.state.snapshot.background;
          return (
            <SaveLoadItem
              key={slot}
              number={number}
              chapterLabel={data.state.rootChapter}
              content={data.state.snapshot.text || '(テキストなし)'}
              time={formatSavedAt(data.savedAt)}
              imageSrc={bg ? `/assets/images/background/${bg.file}` : undefined}
              buttonText="セーブする"
              onButtonClick={() => handleSave(slot)}
              onDeleteClick={() => handleDelete(slot)}
            />
          );
        })}
      </div>
    </div>
  );
}
