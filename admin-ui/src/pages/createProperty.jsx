import { Component } from "react";
import { withRouter } from "react-router-dom";
import { Typography } from "@mui/material";
import { ModalWindow } from "../components/modalWindow.jsx";
import { PropertyForm } from "../components/propertyForm";

export class CreateProperty extends Component {
  close() {
    this.props.history.push("/properties");
  }

  async createNewProperty(values) {
    const userEmail = this.props.user.email;
    const response = await fetch("/api/agents");
    const agents = await response.json();
    const agent = await agents.find((agent) => agent.email === userEmail);

    values.AgentId = agent.id;
    values.updatedAt = new Date();
    values.createdAt = new Date();

    await fetch("/api/properties", {
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
    const isOpened = this.props.match.path === "/properties/create";

    return (
      <ModalWindow open={isOpened}>
        <Typography variant="h6" gutterBottom>
          Fill the form to create new property:
        </Typography>
        <PropertyForm
          onSubmit={(values) => this.createNewProperty(values)}
          onClose={() => this.close()}
        />
      </ModalWindow>
    );
  }
}

export default withRouter(CreateProperty);
