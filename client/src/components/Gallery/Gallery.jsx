import React, { Component } from 'react'
import "./gallery.css"
import { LeftArrow } from "./leftArrow.jsx"
import { RightArrow } from "./rightArrow.jsx"
import {GallerySlider } from "./gallerySlider.jsx"

let sectionIndex = 0;

export class Gallery extends Component {
    
    state = {
        currentIndex: 0
    }

    showNext = () => {
        const { pictures } = this.props;

        let track = document.querySelector('.gallery__slider_container'); 
        sectionIndex++ ; 

        if (sectionIndex < pictures.length - 2) {
            track.style.transform = `translateX(${(sectionIndex-1)*(-273)}px)`}
        if ((pictures.length - sectionIndex) === 2) { 
            track.style.transform = `translateX(${(sectionIndex-2)*(-273)}px)`}
        if ((pictures.length - sectionIndex) <= 1) { 
            track.style.transform = `translateX(${(sectionIndex-3)*(-273)}px)`}

        this.setState(prev => ({ currentIndex: prev.currentIndex + 1 })); 
    }

    showPrev = () => {
        const { pictures } = this.props;
        const track = document.querySelector('.gallery__slider_container');
        sectionIndex--;      

        if (sectionIndex === 0) { 
            track.style.transform = `translateX(${(sectionIndex)*(-273)}px)`}
        if (sectionIndex === 1) { 
            track.style.transform = `translateX(${(sectionIndex-1)*(-273)}px)`}
        if (sectionIndex >= 2 && sectionIndex <= pictures.length - 2 ) { 
            track.style.transform = `translateX(${(sectionIndex-2)*(-273)}px)`}

        this.setState(prev => ({ currentIndex: prev.currentIndex - 1 }));
    }

    setIndex = (index) => {
        this.setState({currentIndex:index});
        sectionIndex = index;
    }

    render() {
        const { pictures } = this.props;
        const { currentIndex } = this.state;

        return <div className="gallery">
                    <div className="gallery__main">
                        <LeftArrow currentIndex={currentIndex} pictures={pictures} onClick={this.showPrev} />

                        <img className="gallery__main_img" 
                        src={pictures[currentIndex]} 
                        alt="First view with the property" />
                        
                        <RightArrow currentIndex={currentIndex} pictures={pictures} onClick={this.showNext} />
                    </div>                   
                        <GallerySlider currentIndex={currentIndex} pictures={pictures} onChange={this.setIndex} />
                </div>
    }
}
