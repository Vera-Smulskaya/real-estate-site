import React, { Component } from "react";

import "./formError.css";

export class FormError extends Component {
  render() {
    const { error } = this.props;

    return error && <span className="form-error">{error}</span>;
  }
}
