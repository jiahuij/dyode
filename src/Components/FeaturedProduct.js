import React, { useState } from 'react'

//resources
import img from '../imgs/product_img.png'
import leftArrow from '../imgs/left_arrow.png'
import rightArrow from '../imgs/right_arrow.png'
import Product from './Product'
import '../sass/FeaturedProduct.scss'

// Multi-item carousel library
import ItemsCarousel from 'react-items-carousel'

//universal unique id generating library
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [value, setValue] = useState(0); // integer state


  const updateWidthAndHeight = () => {
    setValue(value => value + 1); // update the state to force render
  
  };

// listening to screen size changes to choose number of product to display
  React.useEffect(() => { 
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
});



  const chevronWidth = 40;
  
  //product list
  var products = [
    {productTitle:"Product Title", productDesc:"Women's t-shirt", productPrice: '19.99', productImg:img},
    {productTitle:"Product Title", productDesc:"Women's t-shirt", productPrice: '19.99', productImg:img},
    {productTitle:"Product Title", productDesc:"Women's t-shirt", productPrice: '19.99', productImg:img},
    {productTitle:"Product Title", productDesc:"Women's t-shirt", productPrice: '19.99', productImg:img},
    {productTitle:"Product Title", productDesc:"Women's t-shirt", productPrice: '19.99', productImg:img},
    {productTitle:"Product Title", productDesc:"Women's t-shirt", productPrice: '19.99', productImg:img},
    {productTitle:"Product Title", productDesc:"Women's t-shirt", productPrice: '19.99', productImg:img}]

  // calculate number of product based on screenSize
  var numAProductDisplay = Math.round(window.innerWidth/500);

  return (
    <div >
        <h1 className='cursiveHeader'>Shop New Arrivals</h1>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={Math.min(Math.max(numAProductDisplay, 2), 4)}
        gutter={20}
        leftChevron={<button className='arrowBtn' ><img src={leftArrow} alt='Left Arrow'></img></button>}
        rightChevron={<button className='arrowBtn'><img src={rightArrow} alt='Right Arrow'></img></button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >

        {products.map(product => ( // Single Product Component
            <Product t={value} productTitle={product.productTitle} productDesc={product.productDesc}
            productPrice= {product.productPrice} productImg={product.productImg } key={uuidv4()} />

         ))}
       

      </ItemsCarousel>
    </div>
  );
};