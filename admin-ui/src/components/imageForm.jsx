import React, { Component } from "react";
import { Typography, TextField, Stack, Button } from "@mui/material";

export class ImageForm extends Component {
  state = {
    values: this.props.defaultValues || {
      name: "",
    },
    prevValues: {},
    isFormValid: true,
  };

  handleChange(name, value) {
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  }

  handleSubmit() {
    const { onSubmit, onClose } = this.props;
    const { name } = this.state.values;
    if (name === "") {
      this.setState({ isFormValid: false });
      return;
    }

    const copyValues = JSON.parse(JSON.stringify(this.state.values));
    delete copyValues.prevValues;

    for (const key in copyValues) {
      if (copyValues[key] !== this.state.prevValues[key]) {
        this.setState({
          isFormValid: true,
          prevValues: copyValues,
        });
        onSubmit(copyValues);
        onClose();
        return;
      }
    }
  }

  render() {
    const { values, isFormValid } = this.state;
    const { name } = values;
    const error = !isFormValid && (
      <Typography variant="subtitle2" gutterBottom>
        Please complete the form
      </Typography>
    );

    const { buttonName, onClose } = this.props;

    return (
      <Stack sx={{ width: "400px", margin: "auto" }} spacing={2}>
        <TextField
          label="Plan name"
          error={!isFormValid}
          required
          value={name}
          onChange={(event) => this.handleChange("name", event.target.value)}
        />
        {error}
        <Stack
          sx={{ margin: "20px auto", justifyContent: "center" }}
          direction="row"
          spacing={2}
        >
          <Button onClick={onClose} sx={{ width: "80px" }}>
            Cancel
          </Button>
          <Button onClick={() => this.handleSubmit()} sx={{ width: "80px" }}>
            {buttonName || "Create"}
          </Button>
        </Stack>
      </Stack>
    );
  }
}
