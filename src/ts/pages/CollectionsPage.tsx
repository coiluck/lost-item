// ts/pages/CollectionsPage.tsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ENDINGS,
  getEndingMeta,
  getUnlockedEndings,
  isEnding,
} from '../save/endingStorage';
import '../../css/pages/CollectionsPage.css';

export default function CollectionsPage() {
  const location = useLocation();
  // GamePage から渡される、今回新たに解放したエンディングID。
  const justUnlocked =
    typeof location.state?.unlocked === 'string' && isEnding(location.state.unlocked)
      ? (location.state.unlocked as string)
      : null;

  const [unlocked, setUnlocked] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      const ids = await getUnlockedEndings();
      setUnlocked(ids);
    };

    load();
  }, []);

  const justUnlockedMeta = justUnlocked ? getEndingMeta(justUnlocked) : undefined;

  return (
    <div className="page fade-in">
      {justUnlockedMeta && (
        <div className="collections-unlocked-banner">
          <span className="collections-unlocked-label">エンディング解放</span>
          <span className="collections-unlocked-title">
            {justUnlockedMeta.titleJa}（{justUnlockedMeta.titleEn}）
          </span>
        </div>
      )}

      <div className="collections-content">
        {ENDINGS.map((ending) => {
          const isUnlocked = unlocked.includes(ending.id);
          const isNew = ending.id === justUnlocked;
          return (
            <div
              key={ending.id}
              className={
                'collections-item' +
                (isUnlocked ? ' unlocked' : ' locked') +
                (isNew ? ' new' : '')
              }
            >
              <span className="collections-item-title">
                {isUnlocked ? ending.titleJa : '？？？'}
              </span>
              <span className="collections-item-subtitle">
                {isUnlocked ? ending.titleEn : 'Locked'}
              </span>
              <span className="collections-item-description">
                {isUnlocked ? ending.description : 'まだ到達していないエンディングです。'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
