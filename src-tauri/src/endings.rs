// src-tauri/src/endings.rs
use serde_json::{json, Value};
use std::fs;
use std::path::PathBuf;
use tauri::{AppHandle, Manager};

// ── 解放済みエンディング専用ファイルのパスを解決 ──
fn endings_path(app: &AppHandle) -> PathBuf {
    app.path()
        .app_config_dir()
        .expect("failed to resolve app config dir")
        .join("endings.json")
}

// ── 解放済みID配列を読む（ファイルが無ければ空配列） ──
fn read_all(app: &AppHandle) -> Value {
    let path = endings_path(app);
    if !path.exists() {
        return json!([]);
    }
    let text = fs::read_to_string(&path).unwrap_or_else(|_| "[]".into());
    serde_json::from_str(&text).unwrap_or_else(|_| json!([]))
}

// ── 配列を書き戻す ──
fn write_all(app: &AppHandle, data: &Value) -> Result<(), String> {
    let path = endings_path(app);
    if let Some(parent) = path.parent() {
        fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }
    let text = serde_json::to_string_pretty(data).map_err(|e| e.to_string())?;
    fs::write(&path, text).map_err(|e| e.to_string())
}

// ── Tauri コマンド: 解放済みエンディングID一覧を取得 ──
/// JSON 文字列配列を返す。未保存なら空配列。
#[tauri::command]
pub fn endings_get(app: AppHandle) -> Value {
    read_all(&app)
}

// ── Tauri コマンド: エンディングを解放済みとして記録 ──
/// 既に解放済みなら false、今回新たに解放したなら true を返す。
#[tauri::command]
pub fn endings_unlock(app: AppHandle, id: String) -> Result<bool, String> {
    let mut data = read_all(&app);

    // 壊れていたら（配列でなければ）リセット。
    if !data.is_array() {
        data = json!([]);
    }
    let arr = data.as_array_mut().unwrap();

    if arr.iter().any(|v| v.as_str() == Some(id.as_str())) {
        return Ok(false);
    }
    arr.push(Value::String(id));
    write_all(&app, &data)?;
    Ok(true)
}
