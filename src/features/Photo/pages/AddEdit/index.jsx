import React from 'react';
import PropTypes from 'prop-types';
import PhotoForm from '../../components/PhotoForm';
import Banner from '../../../../components/Banner';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPhoto } from 'features/Photo/photoSlice';

AddEdit.propTypes = {
    
};

function AddEdit(props) {
    const dispatch = useDispatch();
    const history = useHistory()
    const handleSubmit = (values) => {
        const action = addPhoto(values)
        dispatch(action)
        history.push('/photos')
    }
    return (
        <div>
            <Banner />
            <Link to="/photos">Back to home photos</Link>
            <PhotoForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default AddEdit;