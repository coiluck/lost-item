// ts/components/SaveLoadItem.tsx
import { useState } from 'react';
import { se } from '../audio/audio';
import '../../css/components/SaveLoadItem.css';

interface SaveLoadItemProps {
  number: string;
  chapterLabel: string;
  content: string;
  time: string;
  buttonText: string;
  imageSrc?: string;
  onButtonClick: () => void;
  onDeleteClick: () => void;
}

// ゴミ箱アイコン
function TrashIcon({ size = '1rem' }: { size?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      style={{ width: size, height: size }}
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  );
}

export default function SaveLoadItem({
  number,
  chapterLabel,
  content,
  time,
  buttonText,
  imageSrc,
  onButtonClick,
  onDeleteClick,
}: SaveLoadItemProps) {
  const [isDeleteAsked, setIsDeleteAsked] = useState(false);
  return (
    <div className="saveload-component-item">
      <div className="saveload-component-item-left">
        <span className="saveload-component-item-left-label">No.</span>
        <span className="saveload-component-item-left-number">{number}</span>
      </div>
      <div className="saveload-component-item-right">
        <div className="saveload-component-item-image-container">
          {imageSrc && (
            <img
              className="saveload-component-item-image"
              src={imageSrc}
              alt={`${chapterLabel} ${number}`}
            />
          )}
        </div>
        <div className="saveload-component-item-text-container">
          <div className="saveload-component-item-text-title">
            <span>{chapterLabel}</span>
          </div>
          <div className="saveload-component-item-text-content">{content}</div>
          <div className="saveload-component-item-text-time">{time}</div>
        </div>
        <div className="saveload-component-item-button-container">
          <button
            className="saveload-component-item-button-main"
            onClick={() => { onButtonClick(); se.play("click"); }}
          >
            ▶︎ {buttonText}
          </button>
          <button
            className="saveload-component-item-button-sub"
            title="削除"
            onClick={() => setIsDeleteAsked(true)}
          >
            <TrashIcon size={'1rem'} />
          </button>
        </div>
      </div>

      {isDeleteAsked && (
        <div className="saveload-component-item-delete-asked-overlay fade-in">
          <div className="saveload-component-item-delete-asked-content">
            <p>このセーブデータを削除しますか？</p>
            <div className="saveload-component-item-delete-asked-buttons">
              <button onClick={() => setIsDeleteAsked(false)}>キャンセル</button>
              <button
                className="danger"
                onClick={() => {
                  setIsDeleteAsked(false);
                  onDeleteClick();
              }}>
                削除する
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}