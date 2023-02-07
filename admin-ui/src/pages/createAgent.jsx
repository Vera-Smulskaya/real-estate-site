import React, { Component } from "react";
import { Typography } from "@mui/material";
import { ModalWindow } from "../components/modalWindow.jsx";
import { withRouter } from "react-router-dom";
import AgentForm from "../components/agentForm/agentForm.jsx";

export class CreateAgent extends Component {
  close() {
    this.props.history.push("/agents");
  }

  async createNewAgent(values) {
    values.updatedAt = new Date();
    values.createdAt = new Date();

    await fetch("/api/agents", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => data.json())
      .catch((err) => {
        this.setState({
          error: err,
        });
      });
  }

  render() {
    const isOpened = this.props.match.path === "/agents/create";
    return (
      <ModalWindow open={isOpened}>
        <Typography
          color="#54575c"
          variant="h5"
          textAlign="center"
          gutterBottom
        >
          Fill the form to create a new agent:
        </Typography>
        <AgentForm
          onSubmit={(values) => {
            this.createNewAgent(values);
          }}
          onClose={() => this.close()}
        />
      </ModalWindow>
    );
  }
}

export default withRouter(CreateAgent);
