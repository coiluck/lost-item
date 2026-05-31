// ts/pages/Index.tsx
import { useNavigate } from "react-router-dom";
import "../../css/pages/Index.css";

interface MenuItem {
  id: string;
  labelJa: string;
  labelEn: string;
  path: string;
};

const MENU_ITEMS: MenuItem[] = [
  { id: "start", labelJa: "はじめから", labelEn: "New Game", path: "/game" },
  { id: "continue", labelJa: "つづきから", labelEn: "Continue", path: "/load" },
  { id: "gallery", labelJa: "ギャラリー", labelEn: "Gallery", path: "/gallery" },
  { id: "settings", labelJa: "設定", labelEn: "Settings", path: "/settings" },
];

function Index() {
  const navigate = useNavigate();

  return (
    <div className="page fade-in">
      <div className="top-container">
        <div className="top-text-container">
          <h1>それはあなたのものですか</h1>
          <nav>
            {MENU_ITEMS.map((item, index) => (
              <button
                key={item.id}
                className="top-menu-item"
                style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}
                onClick={() => navigate(item.path, { state: { from: "/top" } })}
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

        <div className="top-background"></div>
      </div>

      <footer className="top-footer">
        <span className="top-footer-copy">© 2025 KOKONE Project</span>
        <span className="top-footer-ver">ver 1.0.0</span>
      </footer>
    </div>
  );
}

export default Index;
