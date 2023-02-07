import React from "react";
import { Button } from "./button.jsx";
import { render, screen, fireEvent } from "@testing-library/react";

describe("render button", () => {
  test("returns correct class if size is M", () => {
    render(<Button size="m" />);
    expect(screen.queryByRole("button")).toHaveClass("Btn Btn__m_size");
    expect(screen.queryByRole("button")).not.toHaveClass("Btn Btn__l_size");
  });

  test("returns correct class if size is L", () => {
    render(<Button size="l" />);
    expect(screen.queryByRole("button")).toHaveClass("Btn Btn__l_size");
    expect(screen.queryByRole("button")).not.toHaveClass("Btn Btn__m_size");
  });

  test("returns correct class if there is no rounding", () => {
    render(<Button rounding="none" />);
    expect(screen.queryByRole("button")).toHaveClass("Btn__border-round-none");
  });

  test("returns correct class rounding option is right", () => {
    render(<Button rounding="right" />);
    expect(screen.queryByRole("button")).toHaveClass("Btn__border-round-right");
  });

  test("returns correct class rounding option is left", () => {
    render(<Button rounding="left" />);
    expect(screen.queryByRole("button")).toHaveClass("Btn__border-round-left");
  });

  test("returns correct class rounding option is both", () => {
    render(<Button rounding="both" />);
    expect(screen.queryByRole("button")).toHaveClass("Btn__border-round-both");
  });
});

describe("click event on button", () => {
  test("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button clickEvent={handleClick} />);
    fireEvent.click(screen.queryByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick.mock.calls).toHaveLength(1);
  });
});
