import React from 'react';
import aboutusheroimg from '../../assets/img/aboutusheroimg.png';

const Banner = () => {
    return (
        <div className="container-fluid aboutushero">
            <img src={aboutusheroimg} className="imghero" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>About Us</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;