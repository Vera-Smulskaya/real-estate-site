import React, { Component } from 'react'
import { ReactComponent as Svg} from "./leftArrow.svg"

export class LeftArrow extends Component {
    render() {
        const { currentIndex } = this.props;
        if (currentIndex <= 0) {return null}

        return <Svg onClick={() => this.props.onClick(currentIndex-1)} className="gallery__arrow-left" />;
    }
}