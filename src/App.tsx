import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { createSignal } from "solid-js";
import { Button, TextField, Box, Stack } from "@suid/material";

export const App = () => {
  const [appId, setAppId] = createSignal("");
  const [isConnected, setConnected] = createSignal(false);
  const handleInput = (e: string) => {
    setAppId(e);
  };

  const handleConnect = () => {
    if (!isConnected()) {
      invoke("connect", { id: appId() });
    }
    setConnected(true);
  };

  const handleDisconnect = () => {
    if (isConnected()) {
      invoke("disconnect");
    }
    setConnected(false);
  };

  return (
    <div>
      <Box class="headbar" />
      <h1>DiscordRPCEditor</h1>
      <div class="appid-box">
        <TextField
          class="appid-input"
          onChange={(e) => handleInput(e.currentTarget.value)}
          size="small"
          disabled={isConnected()}
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
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Stack spacing={1}>
          <Box class="box-party">Box</Box>
          <Box class="box-image">Box</Box>
          <Box class="box-itext">Box</Box>
        </Stack>
        <Stack spacing={1}>
          <Box class="box-button">Box</Box>
          <Box class="box-text">Box</Box>
          <Box class="box-cbox">Box</Box>
          <div class="update-area">
            <Button color="inherit" size="large" variant="outlined">
              &#8635;update activity
            </Button>
            <Button color="primary" variant="outlined">
              Develop Portal🔗
            </Button>
          </div>
        </Stack>
      </Stack>
    </div>
  );
};
