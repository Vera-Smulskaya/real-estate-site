import React, { Component } from "react";
import "./propertyCard.css";
import { PropertyDetails } from "../propertyDetails/propertyDetails.jsx";
import { PriceLabel } from "../priceLabel/priceLabel.jsx";
import { Link } from "react-router-dom";

export class PropertyCard extends Component {
  handleClick = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const {
      prop_id,
      preview,
      mode,
      deal,
      type,
      price,
      title,
      description,
      bedrooms,
      bathrooms,
      year,
      area,
      city,
      state,
    } = this.props;

    return (
      <Link
        to={`/${prop_id}`}
        className={`container_${mode}`}
        onClick={this.handleClick}
      >
        <>
          <section className="label__info">
            <img className="property-photo" src={preview} alt="Property view" />
            <PriceLabel price={price} deal={deal} type={type} />
          </section>
          <section className={`description_${mode}`}>
            <h3 className="description-title">{title}</h3>
            <h4 className="description-address">
              {city}, {state}
            </h4>
            <p className="description-text">
              {description.length < 215
                ? `${description}`
                : `${description.substring(0, 215)}...`}
            </p>
            <PropertyDetails
              area={area}
              bedrooms={bedrooms}
              bathrooms={bathrooms}
              year={year}
              mode={mode}
            />
          </section>
        </>
      </Link>
    );
  }
}
