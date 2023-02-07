import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AgentForm from "../components/agentForm/agentForm";
import { ModalWindow } from "../components/modalWindow";

class EditAgent extends Component {
  constructor(props) {
    super(props);
    const { match, agents } = this.props;
    const agentId = parseInt(match.params.agent_id);
    this.agent = agents.find((agent) => agent.id === agentId);
  }

  close() {
    this.props.history.push("/agents");
  }

  edit(values) {
    const agentId = parseInt(this.props.match.params.agent_id);

    fetch(`/api/agents/${agentId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...values,
      }),
    })
      .then((data) => data.json())
      .then(({ success }) => {
        if (success) {
          this.props.onEdit();
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.close();
      });
  }

  render() {
    const isOpened = this.props.match.path === "/agents/:agent_id/edit";

    return (
      <ModalWindow open={isOpened} btnName="Edit">
        <AgentForm
          dafaultValues={this.agent}
          btnName="Edit"
          onClose={() => this.close()}
          onSubmit={(values) => {
            this.edit(values);
          }}
        ></AgentForm>
      </ModalWindow>
    );
  }
}

export default withRouter(EditAgent);
