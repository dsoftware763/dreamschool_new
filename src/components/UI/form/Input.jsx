import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
    return (
        <input {...props}/>
    );
} 

Input.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

Input.defaultProps = {
    type: 'text'
  };
export default Input;

