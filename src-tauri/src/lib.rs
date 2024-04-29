use discord_rich_presence::DiscordIpcClient;
use std::sync::{atomic::AtomicBool, Mutex};

pub struct App {
    client: Mutex<Option<DiscordIpcClient>>,
    is_client_created: AtomicBool,
}

impl Default for App {
    fn default() -> Self {
        App {
            client: Mutex::new(None),
            is_client_created: AtomicBool::new(false),
        }
    }
}
