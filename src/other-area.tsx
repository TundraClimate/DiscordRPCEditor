import { Button } from "@suid/material";

export const OtherArea = () => {
  return (
    <div class="other-area">
      <Button
        color="inherit"
        size="large"
        variant="outlined"
        startIcon="&#8635;"
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
