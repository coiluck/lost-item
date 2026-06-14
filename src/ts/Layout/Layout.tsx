// ts/Layout/Layout.tsx
import { useMatches, useNavigate, useLocation, Outlet } from "react-router-dom";
import { se } from "../audio/audio";
import "../../css/layouts/Layout.css";

type LayoutProps = {
  mainTitle: string;
  subTitle: string;
};

export default function Layout() {
  const matches = useMatches();
  const props = matches.at(-1)?.handle as LayoutProps | undefined;
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    se.play("click");
    if (location.state?.from === "game") {
      navigate(-1);
    } else {
      navigate("/top");
    }
  };

  return (
    <div className="layout-container fade-in">
      <header className="layout-header">
        <div className="layout-header-left">
          <h2 className="layout-title">{props?.mainTitle}</h2>
          <span className="layout-subtitle">{props?.subTitle}</span>
        </div>
        <button className="layout-header-right" onClick={handleClose}>
          ← 戻る
        </button>
      </header>
      <main className="layout-main-content">
        <Outlet />
      </main>
    </div>
  );
}