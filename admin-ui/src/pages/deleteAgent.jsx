import { Button } from "@mui/material";
import React, { Component } from "react";
import { ModalWindow } from "../components/modalWindow";
import { withRouter } from "react-router-dom";
import { Stack, Box } from "@mui/system";
import { DeleteAgentSelect } from "../components/deleteAgentSelect";
import { Loading } from "../components/loading";

class DeleteAgent extends Component {
  state = {
    selectedAgent: "",
    isLoading: false,
  };

  selectAgent(agentId) {
    this.setState({ selectedAgent: agentId });
  }

  close() {
    this.props.history.push("/agents");
  }

  delete() {
    const agentIdToDelete = this.getAgentIdToDelete();
    const { selectedAgent } = this.state;

    this.setState({ isLoading: true });

    fetch(`/api/agents/${agentIdToDelete}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        agentToAssignPropertiesId: selectedAgent,
      }),
    })
      .then((data) => data.json())
      .then(({ success }) => {
        if (success) {
          this.props.onDelete();
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        this.close();
      });
  }

  getAgentIdToDelete() {
    return parseInt(this.props.match.params.agent_id);
  }

  render() {
    const isOpened = this.props.match.path === "/agents/:agent_id/delete";
    const { agents } = this.props;
    const { selectedAgent, isLoading } = this.state;
    const agentIdToDelete = this.getAgentIdToDelete();
    const filteredAgents = agents.filter(
      (agent) => agent.id !== agentIdToDelete
    );

    return (
      <ModalWindow open={isOpened}>
        <Box sx={{ marginBottom: "20px" }}>
          <p>Are you sure?</p>
          <p>Transfer all agent's properties to:</p>
        </Box>

        <DeleteAgentSelect
          agents={filteredAgents}
          value={selectedAgent}
          onChange={(event) => this.selectAgent(event.target.value)}
        />
        <Stack sx={{ margin: "20px auto" }} direction="row" spacing={2}>
          <Button onClick={() => this.close()}>Cancel</Button>
          <Button onClick={() => this.delete()} disabled={!selectedAgent}>
            {isLoading ? <Loading size={16} /> : "Delete"}
          </Button>
        </Stack>
      </ModalWindow>
    );
  }
}

export default withRouter(DeleteAgent);
