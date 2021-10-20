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
            <FormGroup>
              <Label for="titleId">Photo</Label>
              <div className="mt-3">
                <Button
                  type="button"
                  outline
                  color="primary"
                  className="btn-blue"
                >
                  Random photo
                </Button>
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
