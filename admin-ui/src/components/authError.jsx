import { Component } from "react";
import { Button, Link } from "@mui/material";
import { Error } from "../components/error.jsx";

export class AuthError extends Component {
  render() {
    const { error } = this.props;

    return (
      <>
        <Error errorTitle="Error 401">{error}</Error>
        <Button variant="contained" size="lg" sx={{ margin: "20px 40px" }}>
          <Link underline="hover" to="/api/auth/logout" color="#ffffff">
            Try again
          </Link>
        </Button>
      </>
    );
  }
}
