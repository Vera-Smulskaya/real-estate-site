import { Component } from "react";
import { AgentList } from "../components/agentList.jsx";
import { AuthError } from "../components/authError.jsx";
import { FullScreenPage } from "../components/fullScreenPage.jsx";
import { ButtonAdd } from "../components/buttonAdd.jsx";
import { Loading } from "../components/loading.jsx";
import DeleteAgent from "./deleteAgent.jsx";
import EditAgent from "./editAgent.jsx";
import { Switch, Route } from "react-router-dom";
import CreateAgent from "./createAgent.jsx";

export class Agents extends Component {
  state = {
    agents: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchAgents();
  }

  fetchAgents() {
    this.setState({ isLoading: true });

    fetch(`/api/agents`)
      .then((data) => data.json())
      .then((data) => this.setState({ agents: data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { agents, error, isLoading } = this.state;
    const { user } = this.props;
    const content = isLoading ? <Loading /> : <AgentList agents={agents} />;

    if (error) {
      return <AuthError error={error} />;
    }

    return (
      <FullScreenPage user={user} withToggler={true}>
        {content}
        <Switch>
          <Route path="/agents/create">
            <CreateAgent />
          </Route>
          <Route path="/agents/:agent_id/delete">
            <DeleteAgent agents={agents} onDelete={() => this.fetchAgents()} />
          </Route>

          <Route path="/agents/:agent_id/edit">
            {!isLoading && (
              <EditAgent agents={agents} onEdit={() => this.fetchAgents()} />
            )}
          </Route>
        </Switch>

        <ButtonAdd path="/agents/create">+ Add new agent</ButtonAdd>
      </FullScreenPage>
    );
  }
}
