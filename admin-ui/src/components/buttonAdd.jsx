import React, { Component } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export class ButtonAdd extends Component {
  render() {
    const { children, path } = this.props;

    return (
      <Button
        component={Link}
        to={path}
        variant="text"
        size="medium"
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "100px",
        }}
      >
        {children}
      </Button>
    );
  }
}
