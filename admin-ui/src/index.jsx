import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./pages/login";
import Properties from "./pages/properties";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Agents } from "./pages/agents.jsx";
import PropertyPage from "./pages/property.jsx";
import CreateProperty from "../src/pages/createProperty.jsx";

export default class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <CssBaseline />
        <BrowserRouter basename="/admin">
          <Switch>
            <Route path="/properties/:property_id/:currentDetailsSlug">
              <PropertyPage user={this.props.user} />
            </Route>
            <Route path="/properties/create">
              <CreateProperty user={this.props.user} />
            </Route>

            <Route path="/properties/:property_id">
              <PropertyPage user={this.props.user} />
            </Route>
            <Route path="/properties">
              <Properties user={this.props.user} />
            </Route>

            <Route path="/agents">
              <Agents user={this.props.user} />
            </Route>
            <Route path="/">
              <Login user={this.props.user} />
            </Route>
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
}

async function main() {
  const user = await fetch("/api/auth/status").then((res) => res.json());

  ReactDOM.createRoot(document.getElementById("root")).render(
    <App user={user} />
  );
}

main();
