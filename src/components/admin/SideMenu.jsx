import React from 'react';
import {Link} from 'react-router-dom';
import DSfees from '../../assets/img/DSfees.svg';
import Promotion from '../../assets/img/Promotions.svg';
import Credit from '../../assets/img/Credits.svg';
import Invoice from '../../assets/img/Invoices.svg';
import EducatorPayout from '../../assets/img/EducatorPayouts.svg';
import Overview from '../../assets/img/Overview.svg';
import Enrollment from '../../assets/img/Enrollments.svg';
import PaymentMethod from '../../assets/img/paymentmethods.svg';
import Profile from '../../assets/img/Profiles.svg';
import InterestedProgram from '../../assets/img/InterestedPrograms.svg';
import ProgramOperation from '../../assets/img/ProgramOperations.svg';
import ProgramSettings from '../../assets/img/programsettings.svg';
import FamilyProfile from '../../assets/img/familyprofile.svg';


const SideMenu = () => {
    return (
      <>
      <div className="sidebar-heading">
        ACCOUNT
      </div>

      <li className="nav-item active">
        <Link className="nav-link" to="index.html">
          <img src={FamilyProfile} alt="" />
          <span>Pre-Screening</span>
        </Link>
        <Link className="nav-link" to="index.html">
          <img src={PaymentMethod} alt="" />
          <span>Applications</span>
        </Link>
          <Link className="nav-link" to="/admin/program-settings">
            <img src={ProgramSettings} alt="" />
            <span>Program Settings</span>
          </Link>
        <Link className="nav-link" to="index.html">
          <img src={ProgramOperation} alt="" />
          <span>Program Operations</span>
        </Link>
      </li>


      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">
        FAMILIES
      </div>

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to="index.html">
          <img src={InterestedProgram} alt="" />
          <span>Interested Programs</span>
        </Link>
        <Link className="nav-link" to="/admin/family-profiles">
          <img src={Profile} alt="" />
          <span>Profiles</span>
        </Link>
        <Link className="nav-link" to="index.html">
          <img src={PaymentMethod} alt="" />
          <span>Applications</span>
        </Link>
          <Link className="nav-link" to="index.html">
          <img src={Enrollment} alt="" />
          <span>Enrollments</span>
        </Link>
      </li>


      {/* <!-- Heading --> */}
      <div className="sidebar-heading">
        FINANCES
      </div>

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to="index.html">
          <img src={Overview} alt="" />
          <span>Overview</span>
        </Link>
        <Link className="nav-link" to="index.html">
          <img src={EducatorPayout} alt="" />
          <span>Educator Payouts</span>
        </Link>
        <Link className="nav-link" to="index.html">
          <img src={Invoice} alt="" />
          <span>Invoices</span>
        </Link>
          <Link className="nav-link" to="index.html">
          <img src={Credit} alt="" />
          <span>Credits </span>
        </Link>
        <Link className="nav-link" to="/admin/promotions">
          <img src={Promotion} alt="" />
          <span>Promotions </span>
        </Link>
        <Link className="nav-link" to="index.html">
          <img src={DSfees} alt="" />
          <span>DS Fees </span>
        </Link>
      </li>


      



      <div className="logoutbtn">
        <Link to="#/">Log Out</Link>
        <img src="img/logoutbg.svg" alt="" />
      </div>
         
   </>
   );
}

export default SideMenu;