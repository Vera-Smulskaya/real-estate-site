import "./logo.css";
import React, { Component } from "react";
import { ReactComponent as LogoSvg } from "./logo.svg";

export class Logo extends Component {
  render() {
    return (
      <div className={`logo_color_${this.props.color}`}>
        <LogoSvg />
      </div>
    );
  }
}
