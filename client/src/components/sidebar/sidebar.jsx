import { Component } from "react";
// import { Subtitle } from "../subtitle/subtitle.jsx";
import "./sidebar.css";

export class Sidebar extends Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <aside className="sidebar">
          <div className="sidebar__container">
            <section className="sidebar__filter">{children}</section>
          </div>
        </aside>
      </>
    );
  }
}
