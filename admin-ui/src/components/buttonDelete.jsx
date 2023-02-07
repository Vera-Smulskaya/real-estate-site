import React, { Component } from "react";
import Close from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export class ButtonDelete extends Component {
  
  render() {
    const { path } = this.props;
    return (
      <IconButton component={Link} to={path} size="small">
        <Close color="primary" />
      </IconButton>
    );
  }
}
