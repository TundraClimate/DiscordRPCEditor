import "./App.css";
import { IDArea } from "./id-area";
import {
  PartyBox,
  ImageBox,
  ITextBox,
  ButtonBox,
  TextBox,
  CBoxBox,
} from "./input-boxes";
import { OtherArea } from "./other-area";
import { Box, Stack } from "@suid/material";

export const App = () => {
  return (
    <div>
      <Box class="headbar" />
      <h1>DiscordRPCEditor</h1>
      <IDArea />
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Stack spacing={1}>
          <PartyBox />
          <ImageBox />
          <ITextBox />
        </Stack>
        <Stack spacing={1}>
          <ButtonBox />
          <TextBox />
          <CBoxBox />
          <OtherArea />
        </Stack>
      </Stack>
    </div>
  );
};
