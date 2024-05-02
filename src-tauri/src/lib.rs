pub mod client;

use discord_rich_presence::DiscordIpcClient;
use std::sync::Mutex;

pub struct App {
    client: Mutex<DiscordIpcClient>,
}

impl Default for App {
    fn default() -> Self {
        App {
            client: Mutex::new(DiscordIpcClient::new("").unwrap()),
        }
    }
}
