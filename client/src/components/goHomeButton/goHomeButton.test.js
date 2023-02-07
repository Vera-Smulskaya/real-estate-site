import React from "react";

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { GoHomeButton } from "./GoHomeButton";

describe("should be..", () => {
  test("should be the text in the dom", () => {
    const { getByText } = render(
      <BrowserRouter>
        <GoHomeButton />
      </BrowserRouter>
    );

    const searched = getByText("back to search");
    expect(searched).toHaveTextContent("back to search");
  });
  test("should have the name of the icon", () => {
    const { getByText } = render(
      <BrowserRouter>
        <GoHomeButton />
      </BrowserRouter>
    );

    const searched = getByText("search.svg");
    expect(searched).toBeInTheDocument();
  });
});
