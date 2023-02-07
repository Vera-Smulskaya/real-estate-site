import { Component } from "react";
import { Box } from "@mui/material";

export class TabSubPage extends Component {
  render() {
    const { children } = this.props;
    return (
      <Box>
        <Box sx={{ p: 2 }}>{children}</Box>
      </Box>
    );
  }
}
