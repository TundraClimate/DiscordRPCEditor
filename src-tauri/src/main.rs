// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use rpce::client;
use rpce::App;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            client::connect,
            client::disconnect
        ])
        .manage(App::default())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
