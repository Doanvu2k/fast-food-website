import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

SelectField.propTypes = {
  form: PropTypes.object,
  field: PropTypes.object,
  // field truyen sang do minh tu truyen
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  breakDown: PropTypes.bool,
  options: PropTypes.array,
};
SelectField.defaultPropTypes = {
    label: "",
    placeholder: "",
    disabled: false,
    breakDown: false,
    options: []
}
function SelectField(props) {
    const { field,label,placeholder,disabled,breakDown, options} = props 
    const { name,value } = field
    const selectedOption = options.find(option => option.value === value)
    const handleSelectOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        }
        field.onChange(changeEvent)
    }
    const customStyles = {
        control: (styles) => ({...styles, borderRadius: '20px', border: '2px dotted grey', padding: '1px 5px'})
    }
    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            {breakDown && <br />}
            <Select 
                id={name}
                {...field}
                value={selectedOption}
                onChange={handleSelectOptionChange}
                placeholder={placeholder}
                isDisabled={disabled}
                styles={customStyles}
                options={options}
            />
        </div>
    );
}

export default SelectField;