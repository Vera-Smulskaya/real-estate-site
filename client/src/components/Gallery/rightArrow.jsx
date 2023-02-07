import React, { Component } from "react";
import { ReactComponent as Svg } from "./rightArrow.svg";

export class RightArrow extends Component {
  render() {
    const { pictures, currentIndex } = this.props;
    const lastPhotoIndex = pictures.length - currentIndex;

    if (lastPhotoIndex <= 1) {
      return null;
    }

    return (
      <Svg
        role="test"
        onClick={() => this.props.onClick(currentIndex + 1)}
        className="gallery__arrow-right"
      />
    );
  }
}
