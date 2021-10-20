import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'react-slideshow-image'
// import Images from '../../constants/images.js'
import SlideBanner from '../Button/SliceBanner.jsx';
import Images from 'constants/images.js';
Banner.propTypes = {
    listBanner: PropTypes.func,
};
Banner.defaultPropTypes = {
    listBanner : []
}
function Banner(props) {
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
                {Images.map((img,index) => (
                    <div className="each-slide" key={index}>
                        <img src={img} alt="" className="selector"/>
                    </div>
                ))}
            </Slide>
        </div>
    );
}

export default Banner;