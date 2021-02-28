import React, { Component } from 'react'
import '../sass/SingleContentSlide.scss'

export class SingleContentSlide extends Component {

//<div className="slider" style={{backgroundImage: `url(${this.props.img})`}}>
    render() {
        return (
            <div className='slider'>
                <img className='sliderImg' src={this.props.img} alt='slider'></img>
                <div className={this.props.clas} style={{'color':this.props.color}}>
                    <h1 className="header">{this.props.header}</h1>
                    <p className="subTitle">{this.props.subTitle}</p>
                    <button className="shopBtn">Shop Now</button>
                </div>
            </div>
        )
    }
}

export default SingleContentSlide
