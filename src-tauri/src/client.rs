use crate::App;
use discord_rich_presence::{activity, DiscordIpc, DiscordIpcClient};
use std::time;
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

#[tauri::command]
pub fn update(
    stat: State<'_, App>,
    pid: String,
    psize: i32,
    pmax: i32,
    lkey: String,
    skey: String,
    ltext: String,
    stext: String,
    b1n: String,
    b1l: String,
    b2n: String,
    b2l: String,
    details: String,
    state: String,
    is_time: bool,
) {
    let mut client = stat.client.lock().unwrap();
    let mut act = activity::Activity::new();
    if !state.is_empty() {
        act = act.state(state.as_str())
    }
    if !details.is_empty() {
        act = act.details(details.as_str());
    }
    if !lkey.is_empty() || !skey.is_empty() {
        let mut assets = activity::Assets::new();
        if !lkey.is_empty() {
            assets = assets.large_image(lkey.as_str());
        }
        if !skey.is_empty() {
            assets = assets.small_image(skey.as_str())
        }
        if !ltext.is_empty() {
            assets = assets.large_text(ltext.as_str())
        }
        if !stext.is_empty() {
            assets = assets.small_text(stext.as_str())
        }
        act = act.assets(assets);
    }
    if !b1n.is_empty() || !b2n.is_empty() {
        let mut buttons = vec![];
        if !b1n.is_empty() && !b1l.is_empty() {
            buttons.push(activity::Button::new(b1n.as_str(), b1l.as_str()))
        }
        if !b2n.is_empty() && !b2l.is_empty() {
            buttons.push(activity::Button::new(b2n.as_str(), b2l.as_str()))
        }
        act = act.buttons(buttons);
    }
    if !pid.is_empty() && psize != 0 && pmax != 0 {
        act = act.party(activity::Party::new().id(pid.as_str()).size([psize, pmax]));
    }
    if is_time {
        act = act.timestamps(
            activity::Timestamps::new().start(
                time::SystemTime::now()
                    .duration_since(time::UNIX_EPOCH)
                    .unwrap()
                    .as_millis() as i64,
            ),
        );
    }

    client.set_activity(act).unwrap();
}
