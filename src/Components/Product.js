import React, { Component } from 'react'
import '../sass/Product.scss'

export class Product extends Component {
    render() {
        return (
            <a href="#!">
                <div className='productWrape'>
                    <img className='productImg' src={this.props.productImg} alt='product'></img>
                    <h5 className='productTitle'>{this.props.productTitle}</h5>
                    <p  className='productDesc'>{this.props.productDesc}</p>
                    <p  className='productPrice'>${this.props.productPrice}</p>
                </div>
            </a>
        )
    }
}

export default Product
