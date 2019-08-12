import React from 'react';
import arrowleftbox from "../../assets/img/arrowleftbox.svg";
import PropTypes from 'prop-types';

const BoxBlue = ({boxName, boxCount, boxNew}) => (
    <div className="boxorange bluebox bluebox2">
        <h2>{boxName}</h2>
        <div className="inlinebox">
            <h3>{boxCount}</h3>
        </div>
        <div className="inlinebox">
            <p>+{boxNew}</p>
            <p>This Week</p>
        </div>
        <img src={arrowleftbox} className="arrowright" alt="" />
    </div>
);

BoxBlue.propTypes = {
    boxName: PropTypes.string,
    boxCount: PropTypes.number,
    boxNew: PropTypes.number
};

BoxBlue.defaultProps = {
    boxName: "",
    boxCount: 0,
    boxNew: 0
};

export default BoxBlue;