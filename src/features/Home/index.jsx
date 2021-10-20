import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Home.propTypes = {
    
};

function Home(props) {
    return (
        <div classNameb="block h-32">
        <Link to="/photos"> Photo </Link>
        <p>Heello</p>
        </div>
    );
}

export default Home;