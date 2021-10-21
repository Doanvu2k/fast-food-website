import React from "react";
import PropTypes from "prop-types";

InputField.propTypes = {
  // from fastfield truyen sang
  form: PropTypes.object,
  field: PropTypes.object,
  // field truyen sang do minh tu truyen
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  breakDown: PropTypes.bool,
  width: PropTypes.bool,
};
InputField.defaultPropTypes = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
  breakDown: false,
  width: false,
};
function InputField(props) {
  const { field,form, label, placeholder, disabled, type, breakDown, width } = props;
  const { name } = field;
  const { touched,errors } = form
  const showError = touched[name] && errors[name]
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      {breakDown && <br />}
      <input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={`border-2 border-gray-500 border-dotted rounded-full py-2 px-3 outline-none ${width ? 'w-48' : 'w-96'} ${showError && 'border-red-600'}`}
      />
      {showError && <p className="text-sm text-red-600 ml-2 mt-1">{errors[name]}</p>}
    </div>
  );
}

export default InputField;
