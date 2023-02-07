import { Component } from "react";
import { List } from "@mui/material";
import { AgentItem } from "../components/agentItem";

export class AgentList extends Component {
  render() {
    const { agents } = this.props;

    return (
      <List
        sx={{
          maxWidth: "95%",
          bgcolor: "background.paper",
          "&:empty::before": {
            content: '"Sorry... No agents found 😅"',
            display: "block",
          },
        }}
      >
        {agents.map((agent) => (
          <AgentItem key={agent.id} {...agent} />
        ))}
      </List>
    );
  }
}
