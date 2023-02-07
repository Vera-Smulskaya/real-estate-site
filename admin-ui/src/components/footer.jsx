import { Component } from "react";
import { AppBar, Box } from "@mui/material";

export class Footer extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <AppBar
          position="fixed"
          color="primary"
          sx={{ top: "auto", bottom: 0, p: 2 }}
        >
          © Godel Mastery 2022-2023
        </AppBar>
      </Box>
    );
  }
}
