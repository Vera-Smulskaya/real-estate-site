import { Component } from "react";
import { Box } from "@mui/material";
import { HeaderAdmin } from "./header/header";
import { Footer } from "./footer";
import { ToggleAdmin } from "./toggleAdmin";

export class FullScreenPage extends Component {
  render() {
    const { user, children, withToggler } = this.props;
    const isManager =
      user.email === "alex.roy.manager@gmail.com" ? (
        <ToggleAdmin
          title="Properties Agents"
          link="/admin/"
          isVisible={withToggler}
        />
      ) : (
        <ToggleAdmin
          title="Properties"
          link="/admin/"
          isVisible={withToggler}
        />
      );

    return (
      <Box>
        <HeaderAdmin name={user.name}></HeaderAdmin>
        {isManager}
        <Box sx={{ p: 2, pb: 4 }}>{children}</Box>
        <Footer />
      </Box>
    );
  }
}
