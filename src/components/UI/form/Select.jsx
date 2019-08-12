import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {

    return (
        <select {...props}>
            {props.options && props.options.map((option, index) => {
                return <option key={index} value={option.value}>{option.label}</option>
            })}
        </select>
    );
} 

Select.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array
};

Select.defaultProps = {
   
};
export default Select;

