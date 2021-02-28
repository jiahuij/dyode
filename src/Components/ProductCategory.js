import React, { Component } from 'react'
import womenImg from '../imgs/Womens.png'
import manImg from '../imgs/Mens.png'
import AcceImg from '../imgs/Accessories.png'
import Category from './SingleCategory'
import '../sass/ProductCategory.scss'

export class ProductCategory extends Component {
    render() {
        return (
            <div className='categoryWrape'>
                <div className='group'>
                    <Category title="Women's" img={womenImg} />
                    <Category title="Men's" img={manImg}/>
                </div>
                <a href='/'>
                     <div className="category long" style={{ backgroundImage: `url(${AcceImg})` }}>
                        <p className="categoryTitle">Accessories</p> 
                    </div>
                </a>
            </div>
        ) 
    }
}

export default ProductCategory
