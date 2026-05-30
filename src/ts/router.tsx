// ts/router.tsx
import { createMemoryRouter } from "react-router-dom";
import LogoPage from "./pages/LogoPage";
import Index from "./pages/Index";
import Settings from "./pages/Settings";

export const router = createMemoryRouter(
  [
    { path: "/", element: <LogoPage /> },
    { path: "/top", element: <Index /> },
    { path: "/settings", element: <Settings /> },
  ],
  { initialEntries: ["/"] },
);
