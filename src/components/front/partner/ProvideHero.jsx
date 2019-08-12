import React from 'react';
import bgheroprovide from '../../../assets/img/bgheroprovide.png';
import bgheroprovideright from '../../../assets/img/bgheroprovideright.png';

const ProvideHero = () => {
    return (
        <div className="container-fluid providehero">
            <img className="leftsidebg" src={bgheroprovide} alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>Dreaming about opening your own </p>
                        <p>preschool, daycare, or activity program?</p>
                        <p><span>We want to hear all about it.</span> </p>
                    </div>
                </div>
            </div>
            <img className="rightsidebg" src={bgheroprovideright} alt=""/>
        </div>
    );
}
export default ProvideHero;