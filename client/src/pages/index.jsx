import { Component } from "react";
import { withRouter } from "react-router-dom";
import { PropertyList } from "../components/propertyList/propertyList.jsx";
import { Page } from "../components/page/page.jsx";
import { PropertyFilter } from "../components/propertyFilter/propertyFilter.jsx";
import { Sidebar } from "../components/sidebar/sidebar.jsx";
import { Loading } from "../components/loading/loading.jsx";
import queryStr from "query-string";

class Index extends Component {
  state = {
    properties: null,
    page: null,
    pages: null,
    mode: "grid",
    filterOptions: {
      type: [],
      deal: [],
      location: [],
    },
    filterValues: {},
    isLoading: true,
  };

  buildQueryString() {
    const filterParams = !this.state.filterValues
      ? ""
      : Object.keys(this.state.filterValues)
          .map((key) =>
            this.state.filterValues[key] === null ||
            this.state.filterValues[key] === ""
              ? ""
              : encodeURIComponent(key) +
                "=" +
                encodeURIComponent(this.state.filterValues[key])
          )
          .join("&") + "&";

    const pageParams = !this.state.page ? "page=1" : `page=${this.state.page}`;

    let queryString = "?" + filterParams + pageParams;

    return queryString;
  }

  parseQueryString() {
    let queryParams = queryStr.parse(window.location.search);
    let { page, ...filterValues } = queryParams;
    return [Number(page), filterValues];
  }

  calcFilterOptions(properties) {
    const filterOptions = { type: [], deal: [], location: [] };

    const unicLocations = new Set();
    properties.forEach((property) => unicLocations.add(property.state));

    const unicDeals = new Set();
    properties.forEach((property) => unicDeals.add(property.deal));

    const unicTypes = new Set();
    properties.forEach((property) => unicTypes.add(property.type));

    filterOptions.type = [...unicTypes];
    filterOptions.deal = [...unicDeals];
    filterOptions.location = [...unicLocations];

    return filterOptions;
  }

  async fetchData(queryString) {
    await fetch("/api/properties/" + queryString)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          properties: result.properties,
          pages: result.pages,
          filterOptions: this.calcFilterOptions(result.properties),
        });
      });
  }

  updateUrl() {
    const url = this.buildQueryString();
    window.history.pushState({}, "", url);
  }

  componentDidMount() {
    const [page, filterValues] = this.parseQueryString(window.location.search);

    this.setState(
      (prevState) => ({ ...prevState, filterValues: filterValues, page: page }),
      () => {
        const queryString = this.buildQueryString(this.state.filterValues);

        this.fetchData(queryString).then((state) => {
          this.setState({
            ...state,
            isLoading: false,
          });
        });
      }
    );
  }

  changePage(newPage) {
    window.scrollTo(0, 0);
    this.setState(
      (prevState) => ({
        ...prevState,
        page: newPage,
      }),
      () => {
        const queryString = this.buildQueryString(newPage);
        this.updateUrl(queryString);
        this.fetchData(queryString);
      }
    );
  }

  updateFilterValues(newFilterValues) {
    window.scrollTo(0, 0);
    this.setState(
      (prevState) => ({
        ...prevState,
        filterValues: newFilterValues,
      }),
      () => {
        const queryString = this.buildQueryString(newFilterValues);

        this.updateUrl(queryString);
        this.fetchData(queryString);
      }
    );
  }

  showLoader(isLoading) {
    return isLoading && <Loading />;
  }

  render() {
    const {
      properties,
      filterValues,
      filterOptions,
      isLoading,
      page,
      pages,
      mode,
    } = this.state;

    if (!properties) {
      return;
    }

    return (
      <Page title="PROPERTIES" withSidebar>
        {this.showLoader(isLoading)}

        <PropertyList
          properties={properties}
          page={page}
          pages={pages}
          mode={mode}
          changePage={(page) => this.changePage(page)}
          changeMode={(mode) => this.setState({ mode: mode })}
        />

        <Sidebar>
          <PropertyFilter
            values={filterValues}
            options={filterOptions}
            onSubmit={(nextValues) => this.updateFilterValues(nextValues)}
          />
        </Sidebar>
      </Page>
    );
  }
}

export default withRouter(Index);
