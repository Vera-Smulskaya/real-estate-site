import React, { Component } from "react";
import { Box, CircularProgress } from "@mui/material";

export class Loading extends Component {
  render() {
    const { size } = this.props;

    return (
      <Box
        component="div"
        sx={{
          textAlign: "center",
        }}
      >
        <CircularProgress color="primary" size={size} />
      </Box>
    );
  }
}
