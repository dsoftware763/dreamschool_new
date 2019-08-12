import React from 'react';
import mainheroimg from '../../assets/img/mainheroimg.png';
import mainherodown from '../../assets/img/mainherodown.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
        <div className="container-fluid mainhero">
            <img src={mainheroimg} className="imgright" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h1>The early childhood experience you've been dreaming of</h1>
                    <p>We are a community network that helps families find the best childhood programs and solutions. </p>
                    <div className="btns">
                        <p className="btnfind"><Link to="/search">Find a Dreamschool</Link></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <img src={mainherodown} className="mainherodown" alt=""/>
        </>
    );
}

export default Hero;