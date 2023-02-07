import React, { Component } from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

export class DeleteAgentSelect extends Component {
  render() {
    const { agents, onChange, value } = this.props;

    return (
      <FormControl sx={{ m: 1, minWidth: 360 }}>
        <InputLabel>Agents</InputLabel>
        <Select id="select" value={value} label="Agents" onChange={onChange}>
          {agents.map((agent) => (
            <MenuItem value={agent.id} key={agent.id}>
              {agent.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}
