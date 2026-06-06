// ts/utils/screenMode.ts
import { getCurrentWindow } from "@tauri-apps/api/window";

export type ScreenMode = "fullscreen" | "window";

export async function applyScreenMode(mode: ScreenMode) {
  const win = getCurrentWindow();
  await win.setFullscreen(mode === "fullscreen");
}