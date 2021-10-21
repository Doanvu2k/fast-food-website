import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';
import Banner from '../../../../components/Banner';
import { useSelector } from 'react-redux';

Main.propTypes = {
    
};

function Main(props) {
    const photos = useSelector(state => state.photos)
    return (
        <div>
            <Banner />
            <Link to="/photos/add">Add new photo</Link>
            <div className="flex">
                {photos.map((photo,index) => (
                    <div className="text-center" key={index}>
                        <img src={photo.image} alt="" />
                        <p>{photo.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;