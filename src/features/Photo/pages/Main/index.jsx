import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';
import Banner from '../../../../components/Banner';

Main.propTypes = {
    
};

function Main(props) {
    return (
        <div>
            <Banner />
            <Link to="/photos/add">Hello</Link>
        </div>
    );
}

export default Main;