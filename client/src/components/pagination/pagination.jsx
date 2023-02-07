import { Component } from "react";
import { Button } from "../button/button.jsx";
import "./pagination.css";

export class Pagination extends Component {
  pageSeparating(pagesNumber) {
    let collection = [];
    for (let i = 1; i <= pagesNumber; i++) {
      collection.push(i);
    }
    return collection;
  }

  sliceVisiblePages(pages, page) {
    const availablePages = this.pageSeparating(pages);
    const currentPageIndex = page - 1;
    let visiblePages = availablePages.slice();
    if (availablePages.length > 5) {
      if (availablePages.slice(-3).includes(page)) {
        visiblePages = availablePages.slice(-5);
      } else {
        visiblePages =
          currentPageIndex < 3
            ? availablePages.slice(0, 5)
            : availablePages.slice(currentPageIndex - 2, currentPageIndex + 3);
      }
    }
    return visiblePages;
  }

  renderPrevPage(page, onChange) {
    if (this.props.page === 1) {
      return null;
    }
    return (
      <Button
        role="prevPageButton"
        size="m"
        rounding="both"
        clickEvent={() => onChange(page - 1)}
      >
        {"<"}
      </Button>
    );
  }

  renderNextPage(pages, page, onChange) {
    if (this.props.page === pages) {
      return null;
    }
    if (pages === 0) {
      return null;
    }
    return (
      <Button
        role="nextPageButton"
        size="m"
        rounding="both"
        clickEvent={() => onChange(page + 1)}
      >
        {">"}
      </Button>
    );
  }

  renderButton(button, page, onChange) {
    return (
      <Button
        size="m"
        rounding="none"
        clickEvent={() => onChange(button)}
        isDisabled={button === page}
      >
        {button}
      </Button>
    );
  }

  render() {
    const { pages, page, onChange } = this.props;
    const visiblePages = this.sliceVisiblePages(pages, page);

    if (pages === 1) {
      return null;
    }

    return (
      <nav className="Pagination">
        {this.renderPrevPage(page, onChange)}
        <ol className="PaginationList">
          {visiblePages.map((button) => (
            <li className="PaginationItem" key={button}>
              {this.renderButton(button, page, onChange)}
            </li>
          ))}
        </ol>
        {this.renderNextPage(pages, page, onChange)}
      </nav>
    );
  }
}
