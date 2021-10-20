import ImageSelectField from 'components/ImageSelectField';
import InputField from 'components/InputField';
import SelectField from 'components/SelectField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormGroup, Label } from 'reactstrap';

PhotoForm.propTypes = {};

function PhotoForm(props) {
  const PHOTO_CATEGORY_OPTIONS = [
    {
      value: 1,
      label: "Category 1",
    },
    {
      value: 2,
      label: "Category 2",
    },
  ];
  const initialValues = {
      // khoi tao gia tri cho field co name la title
      title: '',
      category: null,
      image: ''
  }
  
  return (
    <Formik
        initialValues={initialValues}
    >
      {(formikProps) => {
        // do something here
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form className="block w-96 mx-auto">
            <FastField
              name="title"
              component={InputField}

              label="Title"
              placeholder="Eg: Wow nature"
              breakDown={true}
            />
            <FastField name="category" component={SelectField} label="Category" placeholder="Select category" options={PHOTO_CATEGORY_OPTIONS}/>
            <FastField name="image" component={ImageSelectField} label="Image"/>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
