import { Component } from "react";
import "./description.css";

export class Description extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="text_description">
        <p>{children}</p>
      </div>
    );
  }
}
