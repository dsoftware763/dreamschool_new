import React from 'react';
import PropTypes from 'prop-types';

function TextArea(props) {

    return (
        <textarea {...props}></textarea>
    );
} 

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

TextArea.defaultProps = {
    
  };
export default TextArea;

