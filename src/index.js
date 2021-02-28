import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Navbar from './Components/Navbar'
import ContentSlider from './Components/ContentSlider'
import Categories from './Components/ProductCategory'
import FeaturedProduct from './Components/FeaturedProduct'
import FavoriteBanner from './Components/FavoriteBanner'
import MediaGallery from './Components/MediaGallery'
import SubscriptionBanner from './Components/SubscriptionBanner'
import Footer from './Components/Footer'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <ContentSlider />
    <Categories />
    <FeaturedProduct />
    <FavoriteBanner />
    <MediaGallery />
    <SubscriptionBanner />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
