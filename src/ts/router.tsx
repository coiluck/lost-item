// ts/router.tsx
import { createMemoryRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import LogoPage from "./pages/LogoPage";
import Index from "./pages/Index";
import Settings from "./pages/Settings";

export const router = createMemoryRouter(
  [
    { path: "/", element: <LogoPage /> },
    { path: "/top", element: <Index /> },
    {
      element: <Layout />,
      children: [
        { path: "/settings", element: <Settings />, handle: { mainTitle: "設定", subTitle: "Configuration" }, },
      ]
    },
  ],
  { initialEntries: ["/"] },
);
