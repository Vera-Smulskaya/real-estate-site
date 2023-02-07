import React, { Component } from "react";
import "./propertyDetails.css";
import { ReactComponent as AreaSvg } from "./area.svg";
import { ReactComponent as BedsSvg } from "./beds.svg";
import { ReactComponent as BathsSvg } from "./baths.svg";
import { ReactComponent as YearSvg } from "./year.svg";

export class PropertyDetails extends Component {
  render() {
    const {  area, bedrooms, bathrooms, year, mode } = this.props;

    return (
      <ul className={`details-list_${mode}`}>
        <li>
          <AreaSvg className="details-list-item" />
          {area}ft<sup>2</sup>
        </li>
        <li>
          <BedsSvg className="details-list-item" />
          {bedrooms}
        </li>
        <li>
          <BathsSvg className="details-list-item" />
          {bathrooms}
        </li>
        <li>
          <YearSvg className="details-list-item" />
          {year}
        </li>
      </ul>
    );
  }
}
