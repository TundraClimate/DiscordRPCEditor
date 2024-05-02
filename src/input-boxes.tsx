import { Box, TextField, Stack, Checkbox } from "@suid/material";
import {
  setPid,
  setPsize,
  setPmax,
  setLkey,
  setSkey,
  setLText,
  setSText,
  setB1n,
  setB1l,
  setB2n,
  setB2l,
  setDetails,
  setState,
  setTime,
} from "./activity";

const createInput = (label: string, handleInput: (e: string) => void) => {
  return (
    <TextField
      class="input-box"
      size="small"
      label={label}
      onChange={(e) => {
        handleInput(e.target.value);
        console.log(e.target.value);
      }}
    />
  );
};

export const PartyBox = () => {
  return (
    <Box class="box-party">
      <h4>Party</h4>
      <Stack spacing={2}>
        {createInput("Party ID", (e) => {
          setPid(e);
        })}
        {createInput("Party size", (e) => {
          if (!isNaN(Number(e))) setPsize(Number(e));
          else setPsize(null);
        })}
        {createInput("Party max", (e) => {
          if (!isNaN(Number(e))) setPmax(Number(e));
          else setPmax(null);
        })}
      </Stack>
    </Box>
  );
};

export const ImageBox = () => {
  return (
    <Box class="box-image">
      <h4>Image</h4>
      <Stack spacing={2}>
        {createInput("Large image key", (e) => {
          setLkey(e);
        })}
        {createInput("Small image key", (e) => {
          setSkey(e);
        })}
      </Stack>
    </Box>
  );
};

export const ITextBox = () => {
  return (
    <Box class="box-itext">
      <h4>ImageText</h4>
      <Stack spacing={2}>
        {createInput("Large image text", (e) => {
          setLText(e);
        })}
        {createInput("Small image text", (e) => {
          setSText(e);
        })}
      </Stack>
    </Box>
  );
};

export const ButtonBox = () => {
  return (
    <Box class="box-button">
      <h4>Button</h4>
      <Stack spacing={1.7}>
        {createInput("Button1 name", (e) => {
          setB1n(e);
        })}
        {createInput("Button1 link", (e) => {
          setB1l(e);
        })}
        {createInput("Button2 name", (e) => {
          setB2n(e);
        })}
        {createInput("Button2 link", (e) => {
          setB2l(e);
        })}
      </Stack>
    </Box>
  );
};

export const TextBox = () => {
  return (
    <Box class="box-text">
      <h4>Text</h4>
      <Stack spacing={2}>
        {createInput("Details", (e) => {
          setDetails(e);
        })}
        {createInput("State", (e) => {
          setState(e);
        })}
      </Stack>
    </Box>
  );
};

export const CBoxBox = () => {
  return (
    <Box class="box-cbox">
      <Stack direction="row">
        <h4>Option</h4>
        <p class="opt-text">Display time</p>
        <Checkbox
          class="opt-check"
          sx={{ color: "gray" }}
          onChange={(e) => setTime(e.target.checked)}
        />
      </Stack>
    </Box>
  );
};
