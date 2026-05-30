// ts/router.tsx
import { createMemoryRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import LogoPage from "./pages/LogoPage";
import Index from "./pages/Index";
import SettingsPage from "./pages/SettingsPage";

export const router = createMemoryRouter(
  [
    { path: "/", element: <LogoPage /> },
    { path: "/top", element: <Index /> },
    {
      element: <Layout />,
      children: [
        { path: "/settings", element: <SettingsPage />, handle: { mainTitle: "設定", subTitle: "Configuration" }, },
      ]
    },
  ],
  { initialEntries: ["/"] },
);
