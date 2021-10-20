import React from 'react';
import PropTypes from 'prop-types';
import PhotoForm from '../../components/PhotoForm';
import Banner from '../../../../components/Banner';
import { Link } from 'react-router-dom';

AddEdit.propTypes = {
    
};

function AddEdit(props) {
    return (
        <div>
            <Banner />
            <Link to="/photos">Back to home photos</Link>
            <PhotoForm />
        </div>
    );
}

export default AddEdit;