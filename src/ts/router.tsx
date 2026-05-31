// ts/router.tsx
import { createHashRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import LogoPage from "./pages/LogoPage";
import Index from "./pages/Index";
import SettingsPage from "./pages/SettingsPage";
import LoadDataPage from "./pages/LoadDataPage";

export const router = createHashRouter(
  [
    { path: "/", element: <LogoPage /> },
    { path: "/top", element: <Index /> },
    {
      element: <Layout />,
      children: [
        { path: "/settings", element: <SettingsPage />, handle: { mainTitle: "設定", subTitle: "Configuration" }, },
        { path: "/load", element: <LoadDataPage />, handle: { mainTitle: "ロード", subTitle: "Load Data" }, },
      ]
    },
  ],
);
