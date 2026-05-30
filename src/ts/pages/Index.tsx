// ts/pages/Index.tsx
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>それはあなたのものですか</h1>
      <nav>
        <button onClick={() => navigate("/settings", { state: { from: "/top" } })}>設定</button>
      </nav>
    </div>
  );
}

export default Index;
