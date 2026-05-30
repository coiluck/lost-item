import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useSettingsStore } from "./stores/settingsStore";
import "../css/default.css";

export default function App() {
  const { loadAudioSettings, loadTextSettings, loadOthersSettings } = useSettingsStore();

  useEffect(() => {
    loadAudioSettings();
    loadTextSettings();
    loadOthersSettings();
  }, []);

  return <RouterProvider router={router} />;
}
