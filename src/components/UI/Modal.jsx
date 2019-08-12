import React from 'react';
import PropTypes from 'prop-types';


const Modal = (props) => {
    const {open, children, heading, onClose} = props;
    let display = open ? {display: 'block'} : {display: 'none'}
    return (
            <div className="modal" id="myModal" style={display}>
                <div className="modal-dialog">
                    <div className="modal-content">
            
                        {heading && 
                            <div className="modal-header">
                                <h4 className="modal-title">{heading}</h4>
                                <button type="button" className="close" onClick={onClose}><img src="img/popupclose.svg" alt=""/></button>
                            </div>
                        }

                        <div className="modal-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
    );
}
Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    heading: PropTypes.string
}

Modal.defaultProps = {
    open: false
}

export default Modal;