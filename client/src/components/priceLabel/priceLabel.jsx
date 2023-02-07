import React from "react";
import { ReactComponent as ApartmentSvg } from "./Apartment.svg";
import { ReactComponent as TownHouseSvg } from "./townhouse.svg";

export function numberFormat(price) {
  const numbFmt = price.toLocaleString("ru-RU");
  return `$ ${numbFmt}`;
}

export function chooseImage(type) {
  switch (type) {
    case "apartment":
      return (
        <ApartmentSvg role="apartmentIcon" className="type-building-icon" />
      );
    case "townhouse":
      return (
        <TownHouseSvg role="townhouseIcon" className="type-building-icon" />
      );
    default:
      return null;
  }
}
export function saleOrRent(deal) {
  switch (deal) {
    case "sale":
      return "For Sale";
    case "rent":
      return "For Rent";
    default:
      return null;
  }
}

export function PriceLabel({ price, deal, type }) {
  return (
    <div>
      <div role="chooseImage" className="price__label-block">
        {chooseImage(type)}
        <p role="saleOrRent" className="type-building">
          {saleOrRent(deal)}
        </p>
        <p className="price">{numberFormat(price)}</p>
      </div>
    </div>
  );
}
