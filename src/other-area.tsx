import { createSignal } from "solid-js";
import { Button } from "@suid/material";

export const OtherArea = () => {
  const [isCooldown, setCooldown] = createSignal(false);

  const handleUpdate = () => {
    if (!isCooldown()) {
      setCooldown(true);
      setTimeout(() => {
        if (isCooldown()) setCooldown(false);
      }, 1500);
    }
  };

  return (
    <div class="other-area">
      <Button
        color="inherit"
        size="large"
        variant={isCooldown() ? "contained" : "outlined"}
        startIcon="&#8635;"
        onClick={handleUpdate}
      >
        update activity
      </Button>
      <Button
        component="a"
        href="https://discord.com/developers/applications"
        target="_blank"
        color="primary"
        variant="outlined"
        endIcon="🔗"
      >
        Develop Portal
      </Button>
    </div>
  );
};
