// src-tauri/src/savedata.rs
use serde_json::Value;
use std::fs;
use std::path::PathBuf;
use tauri::{AppHandle, Manager};

// ── セーブデータ専用フォルダ ──
fn savedata_dir(app: &AppHandle) -> PathBuf {
    app.path()
        .app_config_dir()
        .expect("failed to resolve app config dir")
        .join("savedata")
}

// ── スロットごとの .json パスを解決（例: savedata/1-1.json） ──
fn slot_path(app: &AppHandle, page: u32, slot: u32) -> PathBuf {
    savedata_dir(app).join(format!("{page}-{slot}.json"))
}

// ── Tauri コマンド: スロットのセーブデータを取得 ──────────
/// 該当スロットの JSON を返す。ファイルが無ければ JSON null。
#[tauri::command]
pub fn savedata_get(app: AppHandle, page: u32, slot: u32) -> Value {
    let path = slot_path(&app, page, slot);
    if !path.exists() {
        return Value::Null;
    }
    let text = fs::read_to_string(&path).unwrap_or_else(|_| "null".into());
    serde_json::from_str(&text).unwrap_or(Value::Null)
}

// ── Tauri コマンド: スロットへセーブデータを保存 ──────────
/// 任意の JSON 値をスロット専用の .json ファイルに書き込む。
#[tauri::command]
pub fn savedata_set(app: AppHandle, page: u32, slot: u32, value: Value) -> Result<(), String> {
    let path = slot_path(&app, page, slot);

    // フォルダがなければ作成
    if let Some(parent) = path.parent() {
        fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }

    let text = serde_json::to_string_pretty(&value).map_err(|e| e.to_string())?;
    fs::write(&path, text).map_err(|e| e.to_string())
}

// ── Tauri コマンド: スロットのセーブデータを削除 ──────────
/// 該当スロットの .json ファイルを削除する。ファイルが無ければ何もしない。
#[tauri::command]
pub fn savedata_delete(app: AppHandle, page: u32, slot: u32) -> Result<(), String> {
    let path = slot_path(&app, page, slot);
    if !path.exists() {
        return Ok(());
    }
    fs::remove_file(&path).map_err(|e| e.to_string())
}
