import React from "react";
import Feature from "./__feature/__feature.jsx";
import "./features.css";
import { Subtitle } from "../subtitle/subtitle.jsx";

export function Features({ features }) {
  return (
    <section className="features">
      <Subtitle>Features</Subtitle>
      <ul className="features__list">
        {Object.keys(features).map((key) => (
          <Feature key={key} name={key} text={features[key]} />
        ))}
      </ul>
    </section>
  );
}
