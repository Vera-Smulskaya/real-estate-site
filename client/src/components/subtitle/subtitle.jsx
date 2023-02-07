import { Component } from "react";
import "./subtitle.css";

export class Subtitle extends Component {
  render() {
    const { children } = this.props;

    return <h2 className="subtitle">{children}</h2>;
  }
}
