import React, { Component } from 'react'

class GallerySliderItem extends Component {

    className() {
        const { current } = this.props;

        return current ? 
            "gallery__slider_img gallery__slider_img_active" : 
            "gallery__slider_img gallery__slider_img_disabled"
    }

    render() {
        const { picture, onClick } = this.props;

        return <img className={this.className()}
            src={picture}  
            alt="Slider with apartment's images" 
            onClick={onClick} />
    }
}

export class GallerySlider extends Component {

    render() {
    const { pictures, currentIndex } = this.props;

    return  <div className="gallery__slider">
                <div className='gallery__slider_container'>
                    { pictures.map((picture,index) =>
                        <GallerySliderItem key={picture} picture={picture} current={currentIndex === index} 
                        onClick={() => this.props.onChange(index)}/>)  
                    }
                </div>
            </div>
    }
}