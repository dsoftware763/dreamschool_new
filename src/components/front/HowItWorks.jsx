import React from 'react';
import howitworks1 from '../../assets/img/howitworks1.png';
import howitworks2 from '../../assets/img/howitworks2.png';
import hwi1 from '../../assets/img/hwi1.png';
import hwi2 from '../../assets/img/hwi2.png';
import hwi3 from '../../assets/img/hwi3.png';
import hwi4 from '../../assets/img/hwi4.png';

import { Link } from 'react-router-dom';

const HowItWorks = () => {
    return (
        <>
        <img src={howitworks2} className="howitworksbg" alt=""/>
        <div className="container-fluid howitworks">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>How it works</h1>
                        <div className="boxes">
                            <div className="box">
                                <div className="placeforimg">
                                    <div className="img">
                                        <img src={hwi1} alt=""/>
                                    </div>
                                </div>
                                <p>Find a preschool or educational program</p>
                            </div>
                            <div className="box">
                                <div className="placeforimg">
                                    <div className="img">
                                        <img src={hwi2} alt=""/>
                                    </div>
                                </div>
                                <p>Apply and enroll to the programs of your choice</p>
                            </div>
                            <div className="box">
                                <div className="placeforimg">
                                    <div className="img">
                                        <img src={hwi3} alt=""/>
                                    </div>
                                </div>
                                <p>Receive an acceptance to the program</p>
                            </div>
                            <div className="box">
                                <div className="placeforimg">
                                    <div className="img">
                                        <img src={hwi4} alt=""/>
                                    </div>
                                </div>

                                <p>Start your enriching childhood experience!</p>
                            </div>
                        </div>
                        <div className="btns">
                            <p className="btnfind"><Link to="/search">Find a Dreamschool</Link></p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        <img src={howitworks1} className="howitworksbg" alt=""/>
        </>
    );
}

export default HowItWorks;