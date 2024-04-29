use crate::App;
use discord_rich_presence::{DiscordIpc, DiscordIpcClient};
use tauri::State;

#[tauri::command]
pub fn connect(state: State<'_, App>, id: String) {
    let client = DiscordIpcClient::new(id.as_str()).unwrap();
    *state.client.lock().unwrap() = client;
    let mut client = state.client.lock().unwrap();
    client.connect().unwrap();
}

#[tauri::command]
pub fn disconnect(state: State<'_, App>) {
    state.client.lock().unwrap().close().unwrap();
}
