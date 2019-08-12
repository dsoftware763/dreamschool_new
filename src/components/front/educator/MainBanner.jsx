import React from 'react';
import mail from '../../../assets/img/mail.png';
import schedule from '../../../assets/img/schedule.png';
import Wix6 from '../../../assets/img/Wix6.jpg';

const MainBanner = () => {
    return (
        <div className="container-fluid teacherhero" style={{backgroundImage: `url(${Wix6})`}}>
       
            <div className="profile-container">
                <div className="col-md-12">
                    <a className="btn2" data-remote="true" href="#/">
                        <img src={mail} alt=""/>Request Information
                    </a>
                    <a className="btn1" data-remote="true" href="#/">
                        <img src={schedule} alt=""/>Apply to Enroll
                    </a>  
                </div>
            </div>
        </div>
    );
}

export default MainBanner;