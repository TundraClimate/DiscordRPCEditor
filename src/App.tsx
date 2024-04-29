import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { createSignal } from "solid-js";
import { Button, TextField } from "@suid/material";

export const App = () => {
  const [appId, setAppId] = createSignal("");
  const [isConnected, setConnected] = createSignal(false);
  const handleInput = (e: string) => {
    setAppId(e);
  };

  const handleConnect = () => {
    setConnected(true);
  };

  const handleDisconnect = () => {
    setConnected(false);
  };

  return (
    <div>
      <h1>DiscordRPCEditor</h1>
      <div class="appid-box">
        <TextField
          class="appid-input"
          onChange={(e) => handleInput(e.currentTarget.value)}
          size="small"
          variant="filled"
          label="Discord Client ID"
        />
        <Button
          color={isConnected() ? "inherit" : "success"}
          variant="contained"
          size="large"
          onClick={handleConnect}
        >
          connect
        </Button>
        <Button
          color={isConnected() ? "error" : "inherit"}
          variant="contained"
          size="large"
          onClick={handleDisconnect}
        >
          disconnect
        </Button>
      </div>
    </div>
  );
};
