import React from "react";

import { render, screen } from "@testing-library/react";

import { ViewModeToggle } from "./ViewModeToggle";

describe("should be..", () => {
  test("should be the text in the dom", () => {
    const { getByText } = render(<ViewModeToggle />);
    const searhedText = getByText(/View mode:/i);
    expect(searhedText).toHaveTextContent("View mode:");
  });

  test("to be in the document", () => {
    const component = render(<ViewModeToggle />);
    let searchedClass = component.container.querySelector(".btn-icon");
    expect(searchedClass).toBeInTheDocument();
  });

  test("not to be undefined", () => {
    const component = render(<ViewModeToggle />);
    let searchedClassUndefined = component.container.querySelector(".btn-icon");
    expect(searchedClassUndefined).not.toBeUndefined();
  });
  test("quantity of the buttons", () => {
    const component = render(<ViewModeToggle />);
    let searchedButtons = component.container.getElementsByTagName("Button");
    expect(searchedButtons.length).toBe(2);
  });
  test("the btn 'list' is disabled and btn 'grid' enabled when mode is 'list'", () => {
    const { getAllByRole } = render(<ViewModeToggle mode="list" />);

    const searched = getAllByRole("button");

    console.log(searched);
    // screen.debug()
    expect(searched[0]).not.toBeDisabled();
    expect(searched[1]).toBeDisabled();
  });
  test("the button 'grid' is disabled and btn 'list' enabled when mode is 'grid'", () => {
    const { getAllByRole } = render(<ViewModeToggle mode="grid" />);

    const searched = getAllByRole("button");

    expect(searched[1]).not.toBeDisabled();
    expect(searched[0]).toBeDisabled();
  });
});
