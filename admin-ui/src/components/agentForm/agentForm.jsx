import { Box, FormGroup, InputLabel, Button, TextField } from "@mui/material";

import React, { Component } from "react";

export default class AgentForm extends Component {
  state = {
    values: this.props.dafaultValues || {
      name: "",
      email: "",
      locationtion: "",
      phone: "",
      photo: "",
    },
    btnName: "Create",
  };

  componentDidMount() {
    if (
      this.props.btnName !== this.state.btnName &&
      this.props.btnName !== undefined
    ) {
      this.setState({
        btnName: this.props.btnName,
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit, onClose } = this.props;
    onClose();

    onSubmit(this.state.values);
  };

  handleChange =
    (name) =>
    ({ target: { value } }) => {
      const newValues = {
        ...this.state.values,
        [name]: value,
      };
      this.setState({
        values: newValues,
      });
    };

  render() {
    const { name, email, location, phone, photo } = this.state.values;
    const { onClose } = this.props;
    const { btnName } = this.state;

    const labelStyle = {
      width: "70px",
      margin: "5px 10px 5px",
    };

    const boxStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };

    const textFieldStyle = {
      backgroundColor: "#f7faf8",
      margin: "10px",
      borderRadius: "4px",
    };

    const btnStyle = {
      backgroundColor: "none",
      margin: "10px",
      textTransform: "none",
      fontSize: "22px",
      justifyContent: "",
    };

    return (
      <form>
        <FormGroup sx={{ backgroundColor: "", maxWidth: "700px" }}>
          <Box sx={boxStyle}>
            <InputLabel sx={labelStyle}>Name</InputLabel>
            <TextField
              sx={textFieldStyle}
              color="primary"
              value={name}
              onChange={this.handleChange("name")}
            ></TextField>
          </Box>
          <Box sx={boxStyle}>
            <InputLabel sx={labelStyle}>Email</InputLabel>
            <TextField
              required
              sx={textFieldStyle}
              color="primary"
              value={email}
              onChange={this.handleChange("email")}
            ></TextField>
          </Box>
          <Box sx={boxStyle}>
            <InputLabel sx={labelStyle}>Location</InputLabel>
            <TextField
              sx={textFieldStyle}
              color="primary"
              value={location}
              onChange={this.handleChange("location")}
            ></TextField>
          </Box>
          <Box sx={boxStyle}>
            <InputLabel sx={labelStyle}>Phone</InputLabel>
            <TextField
              sx={textFieldStyle}
              color="primary"
              type="number"
              value={phone}
              onChange={this.handleChange("phone")}
            ></TextField>
          </Box>
          <Box sx={boxStyle}>
            <InputLabel sx={labelStyle}>Photo</InputLabel>
            <TextField
              sx={textFieldStyle}
              color="primary"
              value={photo}
              onChange={this.handleChange("photo")}
            ></TextField>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Button sx={btnStyle} onClick={onClose}>
              Cancel
            </Button>
            <Button sx={btnStyle} onClick={this.handleSubmit}>
              {btnName}
            </Button>
          </Box>
        </FormGroup>
      </form>
    );
  }
}
