import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label,Input,Button } from 'reactstrap';
import Select from 'react-select';

PhotoForm.propTypes = {
    
};

function PhotoForm(props) {
    const PHOTO_CATEGORY_OPTIONS = [{
        value:1,
        label: 'Category 1'
    },
    {
        value:2,
        label: 'Category 2'
    }
]
    return (
        <Form className="block w-96 mx-auto">
            <FormGroup>
                <Label for="titleId">Title</Label>
                <Input name="titleId" id="titleId" placeholder="Name title ..."/>
            </FormGroup>
            <FormGroup>
                <Label for="categoryId">Category</Label>
                <Select 
                    id="categoryId"
                    name="categoryId"
                    placeholder="Category Photo"
                    options={PHOTO_CATEGORY_OPTIONS}
                />
            </FormGroup>
            <FormGroup>
                <Label for="titleId">Photo</Label>
                <div className="mt-3"><Button type="button" outline color="primary" className="btn-blue">Random photo</Button></div>
                <div>
                    <img src="" alt="" />
                </div>
                
            </FormGroup>
            <FormGroup>
                <Button className="btn-blue my-3" color="primary">Add to album</Button>
            </FormGroup>
        </Form>
    );
}

export default PhotoForm;