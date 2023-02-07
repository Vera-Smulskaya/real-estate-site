import React from "react";
import { Pagination } from "./pagination.jsx";
import { render, screen, fireEvent } from "@testing-library/react";

let pagination;

beforeEach(() => {
  pagination = new Pagination();
});

describe("page separating", () => {
  test("0 pages returns empty array", () => {
    expect(pagination.pageSeparating(0)).toEqual([]);
  });

  test("returns array of sequential numbers from 1 to N", () => {
    let result = pagination.pageSeparating(3);

    const SEQUENTIAL_NUMBERS_FROM_1_TO_3 = [1, 2, 3];
    expect(result).toEqual(SEQUENTIAL_NUMBERS_FROM_1_TO_3);
  });
});

describe("slice visible pages", () => {
  test("0 pages returns empty array", () => {
    expect(pagination.sliceVisiblePages(0, 0)).toEqual([]);
  });

  test("returns all pages if pages count is 5", () => {
    expect(pagination.sliceVisiblePages(5, 1)).toEqual([1, 2, 3, 4, 5]);
  });

  test("returns 2 pages on both sides from the current page", () => {
    expect(pagination.sliceVisiblePages(20, 10)).toEqual([8, 9, 10, 11, 12]);
  });

  test("returns all pages if pages count less than 5", () => {
    expect(pagination.sliceVisiblePages(3, 2)).toEqual([1, 2, 3]);
  });

  test("returns 5 pages if current page is on the beginning edge", () => {
    expect(pagination.sliceVisiblePages(9, 1)).toEqual([1, 2, 3, 4, 5]);
  });

  test("returns 5 pages if current page is on the beginning edge 2", () => {
    expect(pagination.sliceVisiblePages(9, 2)).toEqual([1, 2, 3, 4, 5]);
  });

  test("returns 5 pages if current page is on the end edge", () => {
    expect(pagination.sliceVisiblePages(9, 9)).toEqual([5, 6, 7, 8, 9]);
  });

  test("returns 5 pages if current page is on the end edge", () => {
    expect(pagination.sliceVisiblePages(9, 8)).toEqual([5, 6, 7, 8, 9]);
  });
});

describe("render Pagination", () => {
  test("render prevPageButton if current page is not 1", () => {
    render(<Pagination pages={3} page={2} />);
    const prevButton = screen.queryByRole("prevPageButton");
    expect(prevButton).toBeInTheDocument();
  });

  test("not render prevPageButton if there are many pages & current page is 1", () => {
    render(<Pagination pages={3} page={1} />);
    const prevButton = screen.queryByRole("prevPageButton");
    expect(prevButton).toBeNull();
  });

  test("not render prevPageButton if number of pages is 1", () => {
    render(<Pagination pages={1} page={1} />);
    const prevButton = screen.queryByRole("prevPageButton");
    expect(prevButton).toBeNull();
  });

  test("render nextPageButton if there are many pages & current page is 1", () => {
    render(<Pagination pages={6} page={1} />);
    const nextButton = screen.queryByRole("nextPageButton");
    expect(nextButton).toBeInTheDocument();
  });

  test("not render nextPageButton if number of pages is 1", () => {
    render(<Pagination pages={1} page={1} />);
    const nextButton = screen.queryByRole("nextPageButton");
    expect(nextButton).toBeNull();
  });

  test("not render nextPageButton if number of pages equal to current page", () => {
    render(<Pagination pages={5} page={5} />);
    const nextButton = screen.queryByRole("nextPageButton");
    expect(nextButton).toBeNull();
  });

  test("not render nextPageButton if number of pages is 0", () => {
    render(<Pagination pages={0} />);
    const nextButton = screen.queryByRole("nextPageButton");
    expect(nextButton).toBeNull();
  });

  test("not render PageButton if number of pages is 1", () => {
    render(<Pagination pages={1} />);
    const button = screen.queryByRole("button");
    expect(button).toBeNull();
  });

  test("button has correct classes for rounding & size", () => {
    render(<Pagination pages={5} page={3} />);
    const renderButtons = screen.queryAllByRole("button");
    expect(renderButtons[1]).toHaveClass("Btn__border-round-none");
    expect(renderButtons[2]).not.toHaveClass("Btn__border-round-left");
    expect(renderButtons[0]).not.toHaveClass("Btn Btn__l_size");
    expect(renderButtons[4]).toHaveClass("Btn Btn__m_size");
  });

  test("button is disabled if its name is equal to current page", () => {
    render(<Pagination pages={6} page={2} />);
    const button = screen.queryByRole("button", { name: "2" });
    expect(button).toBeDisabled();
  });

  test("buttons render correct names for visible pages", () => {
    render(<Pagination pages={8} page={4} />);
    for (let i = 2; i <= 6; i++) {
      const button = screen.queryByRole("button", { name: `${i}` });
      expect(button).not.toBeNull();
    }
    expect(screen.queryByRole("button", { name: "1" })).toBeNull();
    expect(screen.queryByRole("button", { name: "7" })).toBeNull();
  });
});

describe("pages changing by clicking", () => {
  test("click on next page button increase number of current page by 1", () => {
    const handleClick = jest.fn();
    render(<Pagination pages={8} page={4} onChange={handleClick} />);
    fireEvent.click(screen.queryByRole("nextPageButton"));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick.mock.calls[0][0]).toBe(5);
  });

  test("click on previous page button decrease number of current page by 1", () => {
    const handleClick = jest.fn();
    render(<Pagination pages={9} page={6} onChange={handleClick} />);
    fireEvent.click(screen.queryByRole("prevPageButton"));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick.mock.calls[0][0]).toBe(5);
  });

  test("click changes number of current page on the number of clicked page", () => {
    const handleClick = jest.fn();
    render(<Pagination pages={9} page={5} onChange={handleClick} />);
    fireEvent.click(screen.queryByRole("button", { name: "3" }));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick.mock.calls[0][0]).toBe(3);
  });
});
