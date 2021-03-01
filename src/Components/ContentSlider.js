import React, { Component } from 'react'

// resources
import slideImg1 from '../imgs/Hero1.png'
import slideImg2 from '../imgs/Hero2.png'
import slideImg3 from '../imgs/Hero3.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../sass/ContentSlider.scss'

//Single Slider Content Component
import SingleSlide from './SingleContentSlide'

//Carousel library for slider
var Carousel = require('react-responsive-carousel').Carousel


export class ContentSlider extends Component {
    render() {
    
        return (
            <Carousel showArrows={false} autoPlay={true} showThumbs={false} showStatus={false}>
                <SingleSlide clas='wrape' img={slideImg1} header="Shop New Arrivals" subTitle="Our coolest new items are waiting for you!" color="#10504F"  />
                <SingleSlide clas='wrape' img={slideImg2} header="Our Fave Tees" subTitle="Shop all of our favorites."color="#FFFFFF"/>
                <SingleSlide clas='wrape' img={slideImg3} header="Men’s Tees" subTitle="Find the perfect shirt." color="#FFFFFF"/>
            </Carousel>
        )
    }
}

export default ContentSlider
