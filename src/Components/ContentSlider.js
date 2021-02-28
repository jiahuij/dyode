import React, { Component } from 'react'
import '../sass/ContentSlider.scss'
import slideImg1 from '../imgs/Hero1.png'
import slideImg2 from '../imgs/Hero2.png'
import slideImg3 from '../imgs/Hero3.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import SingleSlide from './SingleContentSlide'
var Carousel = require('react-responsive-carousel').Carousel


export class ContentSlider extends Component {
    render() {

        var header = "Shop New Arrivals";
        var subTitle = "Our coolest new items are waiting for you!";
    
    
        return (
            <Carousel showArrows={false} autoPlay={true} showThumbs={false} showStatus={false}>
                <SingleSlide clas='wrape' img={slideImg1} header={header} subTitle={subTitle} color="#10504F"  />
                <SingleSlide clas='wrape' img={slideImg2} header={header} subTitle={subTitle} color="#FFFFFF"/>
                <SingleSlide clas='wrape' img={slideImg3} header={header} subTitle={subTitle} color="#FFFFFF"/>
            </Carousel>
        )
    }
}

export default ContentSlider
