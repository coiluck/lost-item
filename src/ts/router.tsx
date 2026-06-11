// ts/router.tsx
import { createHashRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import LogoPage from "./pages/LogoPage";
import Index from "./pages/Index";
import SettingsPage from "./pages/SettingsPage";
import LoadDataPage from "./pages/LoadDataPage";
import SaveDataPage from "./pages/SaveDataPage";
import GamePage from "./pages/GamePage";
import CollectionsPage from "./pages/CollectionsPage";

export const router = createHashRouter(
  [
    { path: "/", element: <LogoPage /> },
    { path: "/top", element: <Index /> },
    { path: "/game", element: <GamePage /> },
    {
      element: <Layout />,
      children: [
        { path: "/settings", element: <SettingsPage />, handle: { mainTitle: "設定", subTitle: "Configuration" }, },
        { path: "/load", element: <LoadDataPage />, handle: { mainTitle: "ロード", subTitle: "Load Data" }, },
        { path: "/save", element: <SaveDataPage />, handle: { mainTitle: "セーブ", subTitle: "Save Data" }, },
        { path: "/collections", element: <CollectionsPage />, handle: { mainTitle: "コレクション", subTitle: "Collection" }, },
      ]
    },
  ],
);
