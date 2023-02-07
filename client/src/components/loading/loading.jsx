import React, { Component } from "react";
import loading from "../loading/loading.webp";
import "./loading.css";

export class Loading extends Component {
  render() {
    return (
      <div className="spiner">
        <img src={loading} alt="loading" className="spiner__image" />
      </div>
    );
  }
}
