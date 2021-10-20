import React from "react";
import PropTypes from "prop-types";
import ImageSelector from "./ImageSelector";

ImageSelectField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,

  label: PropTypes.string,
};

ImageSelectField.defaultPropTypes = {
  label: "",
};

function ImageSelectField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;
  const handleImageUrlChange = (newImg) => {
    console.log(newImg)
    form.setFieldValue(name, newImg);
  };
  return (
    <div>
      {label && <label htmlFor={label}>{name}</label>}
      <ImageSelector
        name={name}
        imageUrl={value}
        onImageChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />
    </div>
  );
}

export default ImageSelectField;
