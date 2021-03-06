import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image'
// import Images from '../../constants/images.js'
import SlideBanner from 'components/Button/SliceBanner';
import products from '../../features/Product/products'
import ProductItem from '../../features/Product/ProductItem'
ProductSlide.propTypes = {
    listBanner: PropTypes.func,
};
ProductSlide.defaultPropTypes = {
    listBanner : []
}
function ProductSlide(props) {
    const slideRef = useRef();
    const properties = {
        arrows: false,
        transitionDuration: 300
    }
    const pre = () => {
        slideRef.current.goBack()
    }
    const next = () => {
        slideRef.current.goNext()
    }
    return (
        <div className="relative">
            
            <SlideBanner right={true} onClickArrow={pre}/>
            <SlideBanner right={false} onClickArrow={next}/>
            <Slide ref={slideRef} {...properties}>
                <div className="sm:grid grid-cols-1  md:grid grid-cols-2  gap-4 lg:grid-cols-3 w-auto px-5  py-15 ">
                    {products.map((product)=>(
                        <ProductItem key={product.id} product={product}/>
                    ))}
                </div>
            </Slide>
        </div>
    );
}

export default ProductSlide;
