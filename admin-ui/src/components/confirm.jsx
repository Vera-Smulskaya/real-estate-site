import { Component } from "react";
import { Button, Stack } from "@mui/material";
import { ModalWindow } from "./modalWindow";

export class Confirm extends Component {
  render() {
    const {
      open,
      message = "Are you sure?",
      onClose,
      onConfirm,
      confirmButtonText = "Ok",
    } = this.props;
    return (
      <ModalWindow open={open}>
        <p>{message}</p>
        <Stack sx={{ margin: "20px auto" }} direction="row" spacing={2}>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onConfirm}>{confirmButtonText}</Button>
        </Stack>
      </ModalWindow>
    );
  }
}
