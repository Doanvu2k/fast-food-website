import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from '../Product/ProductCard'
import BlogCart from '../Blog/index'
import Banner from '../../components/Banner';
import BlogSlide from '../Blog/BlogSlide'
import ProductSlide from '../../components/Button/ProductSlide'

import ImageBanner from '../../components/Banner/BannerImage/ImageBanner'

Home.propTypes = {
    
};

function Home(props) {
    return (
        <div classNameb="block h-32">
        <div>
            <Banner/>

            <div className="item-center justify-center">
                <ImageBanner/>
            </div>
            
            <div className="py-6 bg-gray-300">
                <div className=" text-3xl mx-24 py-8">MY PRODUCTS</div>
                <ProductSlide/>
            </div>
            <div className="py-6">
                <div className=" text-3xl mx-24 py-8">LATEST BLOGS</div>
                <BlogSlide/>
            </div>
            
            
        </div>
        </div>
    );
}

export default Home;