import React, { Component } from "react";
import "./goHomeButton.css";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as SearchSvg } from "./search.svg";
export class GoHomeButton extends Component {
  render() {
    return (
      <Link to="/" className="link-property">
        <p className="back-btn">
          <SearchSvg /> back to search
        </p>
      </Link>
    );
  }
}

export default withRouter(GoHomeButton);
