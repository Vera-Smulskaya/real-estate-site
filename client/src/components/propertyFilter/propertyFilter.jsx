import React, { Component } from "react";

import { Button } from "../button/button.jsx";

import { DropDown } from "../dropDown/DropDown.jsx";

import Input from "../input/input.jsx";

import { Subtitle } from "../subtitle/subtitle.jsx";

import "./propertyFilter.css";

export class PropertyFilter extends Component {
  state = {
    type: this.props.values.type,
    minArea: this.props.values.minArea,
    maxArea: this.props.values.maxArea,
    deal: this.props.values.deal,
    bedrooms: this.props.values.bedrooms,
    bathrooms: this.props.values.bathrooms,
    location: this.props.values.location,
    minPrice: this.props.values.minPrice,
    maxPrice: this.props.values.maxPrice,
    minYear: this.props.values.minYear,
    prevValues: this.props.values,
  };

  changeFilterParam(name, value) {
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const copyState = JSON.parse(JSON.stringify(this.state));
    delete copyState.prevValues;
    for (const key in copyState) {
      if (copyState[key] !== this.state.prevValues[key]) {
        this.setState({ prevValues: copyState });
        this.props.onSubmit(copyState);
        return;
      }
    }
  };

  typeOptions() {
    const { type } = this.props.options;
    return type.map((type) => {
      switch (type) {
        case "single":
          return { value: type, label: "Single-family" };
        case "townhouse":
          return { value: type, label: "Townhouse" };
        case "apartment":
          return { value: type, label: "Apartment" };
        default:
          return null;
      }
    });
  }

  statusOptions() {
    const { deal } = this.props.options;
    return deal.map((deal) => {
      switch (deal) {
        case "sale":
          return { value: deal, label: "Sale" };
        case "rent":
          return { value: deal, label: "Rent" };
        default:
          return null;
      }
    });
  }

  locationOptions() {
    const { location } = this.props.options;
    return location.map((location) => {
      switch (location) {
        case "CA":
          return { value: location, label: location };
        case "FL":
          return { value: location, label: location };
        case "UA":
          return { value: location, label: location };
        default:
          return null;
      }
    });
  }

  render() {
    const {
      type,
      deal,
      bedrooms,
      bathrooms,
      minArea,
      maxArea,
      minPrice,
      maxPrice,
      location,
      minYear,
    } = this.state;

    return (
      <form className="property-filter">
        <Subtitle>PROPERTY SEARCH</Subtitle>
        <ul className="property-filter__list">
          <li>
            <DropDown
              name="type"
              placeholder="Type"
              value={type}
              options={this.typeOptions()}
              onChange={(name, value) => this.changeFilterParam(name, value)}
            />
          </li>
          <li>
            <DropDown
              name="deal"
              placeholder="Status"
              value={deal}
              options={this.statusOptions()}
              onChange={(name, value) => this.changeFilterParam(name, value)}
            />
          </li>
          <li className="property-filter__min-max-property">
            <label className="property-filter__mini-drop-down">
              <Input
                type="number"
                size="large"
                value={minArea || ""}
                min={0}
                name="minArea"
                placeholder="Min. Area"
                onChange={(name, value) => this.changeFilterParam(name, value)}
              />
            </label>
            <label className="property-filter__mini-drop-down">
              <Input
                type="number"
                size="large"
                value={maxArea || ""}
                min={0}
                name="maxArea"
                placeholder="Max. Area"
                onChange={(name, value) => this.changeFilterParam(name, value)}
              />
            </label>
          </li>
          <li>
            <Input
              type="number"
              size="large"
              value={bedrooms || ""}
              min={0}
              name="bedrooms"
              placeholder="Bedrooms"
              onChange={(name, value) => this.changeFilterParam(name, value)}
            />
          </li>
          <li>
            <Input
              type="number"
              size="large"
              value={bathrooms || ""}
              min={0}
              name="bathrooms"
              placeholder="Bathrooms"
              onChange={(name, value) => this.changeFilterParam(name, value)}
            />
          </li>
          <li className="property-filter__min-max-property">
            <label className="property-filter__mini-drop-down">
              <Input
                type="number"
                size="large"
                value={minPrice || ""}
                min={0}
                name="minPrice"
                placeholder="Min. Price"
                onChange={(name, value) => this.changeFilterParam(name, value)}
              />
            </label>
            <label className="property-filter__mini-drop-down">
              <Input
                type="number"
                size="large"
                value={maxPrice || ""}
                min={0}
                name="maxPrice"
                placeholder="Max. Price"
                onChange={(name, value) => this.changeFilterParam(name, value)}
              />
            </label>
          </li>
          <li>
            <DropDown
              name="location"
              placeholder="Location"
              value={location}
              options={this.locationOptions()}
              onChange={(name, value) => this.changeFilterParam(name, value)}
            />
          </li>
          <li>
            <Input
              type="number"
              size="large"
              value={minYear || ""}
              min={0}
              name="minYear"
              placeholder="Min. Year Built"
              onChange={(name, value) => this.changeFilterParam(name, value)}
            />
          </li>
          <li className="property-filter__search">
            <Button size="l" rounding="both" clickEvent={this.handleSubmit}>
              SEARCH
            </Button>
          </li>
        </ul>
      </form>
    );
  }
}
