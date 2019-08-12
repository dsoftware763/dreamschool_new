import React from 'react';

const StepIndicator = (props) => {
    return (
        <div className="completeline">
            <p>{props.value}% Complete</p>
            <div className="complete">
            <div className="completed"></div>
            <div className="circle1 activeblue"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
            </div>
        </div>
    );
}
export default StepIndicator;