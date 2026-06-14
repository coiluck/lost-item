// ts/pages/Index.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { resetGameEngine } from "../engine/useGameEngine";
import { bgm, se } from "../audio/audio";
import "../../css/pages/Index.css";

interface MenuItem {
  id: string;
  labelJa: string;
  labelEn: string;
  path: string;
  se: string;
};

const MENU_ITEMS: MenuItem[] = [
  { id: "start", labelJa: "はじめから", labelEn: "New Game", path: "/game", se: "button-sub" },
  { id: "continue", labelJa: "つづきから", labelEn: "Load Data", path: "/load", se: "button-sub" },
  { id: "collections", labelJa: "コレクション", labelEn: "Collection", path: "/collections", se: "button-sub" },
  { id: "settings", labelJa: "設定", labelEn: "Configuration", path: "/settings", se: "button-main" },
];

function Index() {
  const navigate = useNavigate();

  const handleClick = (item: MenuItem) => {
    if (item.id === "start") resetGameEngine();
    navigate(item.path, { state: { from: "/top" } });
  };

  useEffect(() => {
    bgm.fadeOut(500);
  }, []);

  return (
    <div className="page fade-in">
      <div className="top-container">
        <div className="top-text-container">
          <nav>
            {MENU_ITEMS.map((item, index) => (
              <button
                key={item.id}
                className="top-menu-item"
                style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}
                onClick={() => { handleClick(item); se.play(item.se); }}
              >
                <span className="top-menu-item-indicator" aria-hidden="true">
                  <span className="top-menu-item-diamond" />
                </span>
                <span className="top-menu-item-labels">
                  <span className="top-menu-item-ja">{item.labelJa}</span>
                  <span className="top-menu-item-en">{item.labelEn}</span>
                </span>
                <span className="top-menu-item-line" aria-hidden="true" />
              </button>
            ))}
          </nav>
        </div>

        <div className="top-background">
          <img src="/assets/images/background/bushitu_evening.jpg" alt="top-background" />
        </div>
      </div>

      <footer className="top-footer">
        <span className="top-footer-copy">© 2026 KOKONE Project</span>
        <span className="top-footer-ver">ver 1.0.0</span>
      </footer>
    </div>
  );
}

export default Index;
