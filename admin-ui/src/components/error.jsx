import { Component } from "react";
import { Alert, AlertTitle } from "@mui/material";

export class Error extends Component {
  render() {
    const { errorTitle, children } = this.props;
    return (
      <Alert
        severity="error"
        color="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        <AlertTitle>{errorTitle}</AlertTitle>
        {children}
      </Alert>
    );
  }
}
