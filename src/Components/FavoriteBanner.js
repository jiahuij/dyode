import React, { Component } from 'react'
import favoriteImg from '../imgs/favoriteImg.png'
import '../sass/FavoriteBanner.scss'
import SingleSlide from './SingleContentSlide'


export class FavoriteBanner extends Component {
    render() {
        return (
            <div className="BannerSlider">
                <SingleSlide clas='wrapeRight' img={favoriteImg} header="Our Favorite Tees"
                            subTitle="Everyday tees you need." color="#FFFFFF"  
                            />
            </div>

        )
    }
}

export default FavoriteBanner
