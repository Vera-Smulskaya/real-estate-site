import React, { Component } from "react";
import { PropertyDetails } from "../propertyDetails/propertyDetails.jsx";
import "./title.css";
import { ReactComponent as TownHouseSvg } from "../priceLabel/townhouse.svg";
import { ReactComponent as ApartmentSvg } from "../priceLabel/Apartment.svg";

export class Title extends Component {
  chooseImage = (type) => {
    switch (type) {
      case "apartment":
        return <ApartmentSvg className="type-building-icon" />;
      case "townhouse":
        return <TownHouseSvg className="type-building-icon" />;
      default:
        return null;
    }
  };

  apartOrHouse = (type) => {
    switch (type) {
      case "apartment":
        return "Apartment";
      case "townhouse":
        return "Townhouse";
      default:
        return null;
    }
  };

  numberFormat = (price) => {
    const numbFmt = price.toLocaleString("ru-RU");
    return `$ ${numbFmt}`;
  };

  render() {
    const {
      area, 
      bedrooms, 
      bathrooms, 
      year,
      id,
      location,
      name,
      type,
      price,
    } = this.props;

    return (
      <section className="title title__section">
        <h2 className="title__name">
          <span>{name}</span>
          <span>{this.numberFormat(price)}</span>
        </h2>
        <p className="title__location">
          {location[0]}, {location[1]}
        </p>
        <ul className="title__details details">
          <li className="details__type-card">
            {this.chooseImage(type)} {this.apartOrHouse(type)}
          </li>
          <li>
            <PropertyDetails
              area={area} bedrooms={bedrooms} bathrooms={bathrooms} year={year}
              mode="list"
            />
          </li>
          <li className="details__id-card">ID: {id}</li>
        </ul>
      </section>
    );
  }
}
