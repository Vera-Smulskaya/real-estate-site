import React, { Component } from "react";

import Edit from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export class ButtonEdit extends Component {
  render() {
    const { path } = this.props;
    return (
      <IconButton component={Link} to={path} size="small" >
        <Edit color="primary" />
      </IconButton>
    );
  }
}
