use tauri::Manager;

mod savedata;
mod settings;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            // settings.json から screenMode を読んで、表示前にフルスクリーンを適用
            let data = settings::read_all(app.handle());
            let is_fullscreen = data
                .get("screenMode")
                .and_then(|v| v.as_str())
                .map(|s| s == "fullscreen")
                .unwrap_or(false);

            if let Some(window) = app.get_webview_window("main") {
                window.set_fullscreen(is_fullscreen).unwrap();
                window.show().unwrap();
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            settings::settings_get,
            settings::settings_set,
            savedata::savedata_get,
            savedata::savedata_set,
            savedata::savedata_delete,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
