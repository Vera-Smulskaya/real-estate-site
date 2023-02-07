import React from "react";

import { render, screen } from "@testing-library/react";

import { PriceLabel } from "./priceLabel";

describe("should be..", () => {
  test("should be the text 'For Sale' in the dom", () => {
    const { getByText } = render(
      <PriceLabel type="apartment" deal="sale" price={1000} />
    );
    const searched = getByText(/For Sale/i);
    expect(searched).toHaveTextContent("For Sale");
  });
  test("should be the text 'For Rent' in the dom", () => {
    const { getByText } = render(
      <PriceLabel type="apartment" deal="rent" price={7000} />
    );
    const searched = getByText(/For Rent/i);
    expect(searched).toHaveTextContent("For Rent");
  });
  test("should be empty in the dom if the 'deal' prop is not 'rent' or 'sale' ", () => {
    const { getByRole } = render(
      <PriceLabel type="apartment" deal="qwerty" price={7000} />
    );
    const searched = getByRole("saleOrRent");
    expect(searched).toBeEmptyDOMElement();
  });
  test("should be 'apartment' icon in the dom", () => {
    const { getByRole } = render(
      <PriceLabel type="apartment" deal="sale" price={7000} />
    );
    const searched = getByRole("apartmentIcon");
    expect(searched).toBeInTheDocument();
  });
  test("should be 'townhouse' icon in the dom", () => {
    const { getByRole } = render(
      <PriceLabel type="townhouse" deal="sale" price={7000} />
    );
    const searched = getByRole("townhouseIcon");
    expect(searched).toBeInTheDocument();
  });
  test("should be no property icon in the dom", () => {
    const { getByRole } = render(
      <PriceLabel type="qwerty" deal="sale" price={7000} />
    );
    const searched = getByRole("chooseImage");
    expect(searched).not.toHaveTextContent(/.svg/i);
  });
});
