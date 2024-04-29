pub mod client;

use discord_rich_presence::DiscordIpcClient;
use std::sync::{atomic::AtomicBool, Mutex};

pub struct App {
    client: Mutex<DiscordIpcClient>,
    is_client_created: AtomicBool,
}

impl Default for App {
    fn default() -> Self {
        App {
            client: Mutex::new(DiscordIpcClient::new("").unwrap()),
            is_client_created: AtomicBool::new(false),
        }
    }
}
