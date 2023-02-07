import React from "react";
import { render, screen } from "@testing-library/react";
import { ContactInfo } from "./contactInfo";

describe("ContactInfo component", () => {
  let props = {};

  beforeEach(() => {
    props = {
      type: "tel",
      border: true,
      className: "footer-contact__info",
      children: "+0 123-456-7890",
    };
  });

  test("display the markup of the component ContactInfo", () => {
    render(<ContactInfo {...props} />);
    screen.debug();
  });

  test("find element link in component ContactInfo", () => {
    render(<ContactInfo {...props} />);
    expect(screen.queryByRole("link")).toBeInTheDocument();
  });

  test("link `tel` check in component ContactInfo", () => {
    render(<ContactInfo {...props} />);
    expect(screen.queryByRole("link")).toHaveAttribute(
      "href",
      "tel:+0 123-456-7890"
    );
  });

  test("checking phoneIcon in component ContactInfo", () => {
    render(<ContactInfo {...props} />);
    expect(screen.getByRole("phoneIcon")).toBeInTheDocument();
  });

  test("link `mail` check in component ContactInfo", () => {
    props.type = "mail";
    props.children = "info@example.com";
    render(<ContactInfo {...props} />);
    expect(screen.queryByRole("link")).toHaveAttribute(
      "href",
      "mailto:info@example.com"
    );
  });

  test("checking emailIcon in component ContactInfo", () => {
    render(<ContactInfo {...props} type="mail" />);
    expect(screen.getByRole("emailIcon")).toBeInTheDocument();
  });

  test("link `adress` check in component ContactInfo", () => {
    props.type = "adress";
    props.children = "24th Street, New York, USA";
    render(<ContactInfo {...props} />);
    expect(screen.queryByRole("link")).toHaveAttribute(
      "href",
      "https://www.google.com/maps/place/24th+street+new+york+usa"
    );
  });

  test("checking adressIcon in component ContactInfo", () => {
    render(<ContactInfo {...props} type="adress" />);
    expect(screen.getByRole("adressIcon")).toBeInTheDocument();
  });
});
