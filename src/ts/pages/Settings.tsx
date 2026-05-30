// ts/pages/Settings.tsx
import { useNavigate, useLocation } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClose = () => {
    if (location.state?.from === "game") {
      // ゲームに戻る処理
    } else {
      navigate("/top");
    }
  };

  return (
    <div className="page">
      <h1>設定</h1>
      <button onClick={handleClose}>戻る</button>
    </div>
  );
}

export default Settings;
