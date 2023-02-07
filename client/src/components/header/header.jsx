import "./header.css";
import { Component } from "react";
import { Logo } from "../logo/logo.jsx";

export default class HeaderMain extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <header>
        <div className="nav_header">
          <Logo color="white" />
          <h1 className="nav_text">{this.props.title}</h1>
        </div>
      </header>
    );
  }
}
