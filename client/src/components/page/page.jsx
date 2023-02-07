import React, { Component } from "react";
import { Footer } from "../footer/footer.jsx";
import HeaderMain from "../header/header.jsx";
import "./page.css";

export class Page extends Component {
  className() {
    return this.props.withSidebar ? "page__sidebar" : "page__content";
  }

  render() {
    const { children, title } = this.props;
    const view = this.className();

    return (
      <div className="page">
        <HeaderMain title={title} />
        <article className={view}>{children}</article>
        <Footer />
      </div>
    );
  }
}
