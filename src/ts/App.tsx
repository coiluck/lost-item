import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useSettingsStore } from "./stores/settingsStore";
import { bgm, se } from "./audio/audio";
import { setMasterGain } from "./audio/audioContext";
import "../css/default.css";

export default function App() {
  const { loadAudioSettings, loadTextSettings, loadOthersSettings } = useSettingsStore();

  useEffect(() => {
    void (async () => {
      await Promise.all([loadAudioSettings(), loadTextSettings(), loadOthersSettings()]);
      const { masterVolume, bgmVolume, seVolume } = useSettingsStore.getState();
      setMasterGain(masterVolume);
      bgm.setVolume(bgmVolume);
      se.setVolume(seVolume);
    })();
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const { screenMode, setScreenMode } = useSettingsStore.getState();
      if (screenMode === "fullscreen") {
        void setScreenMode("window");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return <RouterProvider router={router} />;
}
