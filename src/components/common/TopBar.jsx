import React from 'react';
import PropTypes from 'prop-types';
import noticon from '../../assets/img/noticon.svg';
import arrowtop from '../../assets/img/arrowtop.png';
import minarrow from '../../assets/img/minarrow.svg';
import notimg1 from '../../assets/img/notimg1.svg';
import notimg2 from '../../assets/img/notimg2.svg';
import notimg3 from '../../assets/img/notimg3.svg';
import notimg4 from '../../assets/img/notimg4.svg';
import notimg5 from '../../assets/img/notimg5.svg';
import msgicon from '../../assets/img/msgicon.svg';
import calendaricon from '../../assets/img/calendaricon.svg';
import keisha from '../../assets/img/keisha.svg';
import { Link } from 'react-router-dom';
import ProgramSearchInput from '../common/ProgramSearchInput';

const TopBar = ({ ConsoleRoute }) => (
  <nav className="navbar navbar-expand navbar-light bg-white topbar static-top shadow">

    {/* <!-- Sidebar Toggle (Topbar) --> */}
    <button id="sidebarToggleTop" type="button" className="btn btn-link d-md-none rounded-circle mr-3">
      <i className="fa fa-bars" />
    </button>


    {/* <!-- Topbar Navbar --> */}
    <ul className="navbar-nav top-navbar ml-auto">


      <li className="w-100"><div className="v-center"><ProgramSearchInput /></div></li>

      <div className="topbar-divider d-none d-sm-block" />

      {/* <!-- Nav Item - Alerts --> */}
      <li className="nav-item dropdown no-arrow mx-1">
        <a className="nav-link dropdown-toggle" href="#/" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src={noticon} alt="" />
          <div className="bluecircletop" />

        </a>
        {/* <!-- Dropdown - Alerts --> */}
        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
          <img className="arrowtop" src={arrowtop} alt="" />
          <div className="boxofit">
            <h6 className="dropdown-header">
              <div className="row">
                <div className="col-7">
                    Notifications
                </div>
                <div className="col-5">
                  <div className="recent">
                    <div className="pbno">4</div>
                      Recent
                    <img src={minarrow} className="minarrow" alt="" />
                  </div>
                </div>
              </div>
            </h6>
            <a className="dropdown-item d-flex align-items-center" href="#/">
              <div className="mr-3">
                <div className="">
                  <img src={notimg1} alt="" />
                </div>
              </div>
              <div>
                <span className="titleofnot">Change in Program Profile</span>
                <div className="descofnot">Emily’s Dreamschool</div>
              </div>
              <p className="hours">1 hour ago</p>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#/">
              <div className="mr-3">
                <div className="">
                  <img src={notimg2} alt="" />
                </div>
              </div>
              <div>
                <span className="titleofnot">Tour Request Accepted</span>
                <div className="descofnot">Ladybug Dreamschool</div>
              </div>
              <p className="hours">3 hour ago</p>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#/">
              <div className="mr-3">
                <div className="">
                  <img src={notimg3} alt="" />
                </div>
              </div>
              <div>
                <span className="titleofnot">Enrollment Application Accepted</span>
                <div className="descofnot">Emily’s Dreamschool</div>
              </div>
              <p className="hours">4 hour ago</p>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#/">
              <div className="mr-3">
                <div className="">
                  <img src={notimg4} alt="" />
                </div>
              </div>
              <div>
                <span className="titleofnot">Enrollment Paid</span>
                <div className="descofnot">To Emily’s Dreamschool</div>
              </div>
              <p className="hours">5 hour ago</p>
            </a>

            <a className="dropdown-item d-flex align-items-center clicked" href="#/">
              <div className="mr-3">
                <div className="">
                  <img src={notimg1} alt="" />
                </div>
              </div>
              <div>
                <span className="titleofnot">Change in Program Profile</span>
                <div className="descofnot">Emily’s Dreamschool</div>
              </div>
              <p className="hours">1 hour ago</p>
            </a>
            <a className="dropdown-item d-flex align-items-center clicked" href="#/">
              <div className="mr-3">
                <div className="">
                  <img src={notimg5} alt="" />
                </div>
              </div>
              <div>
                <span className="titleofnot">Change in Program Profile</span>
                <div className="descofnot">Emily’s Dreamschool</div>
              </div>
              <p className="hours">1 hour ago</p>
            </a>

          </div>
        </div>
      </li>


      <div className="topbar-divider d-none d-sm-block" />


      <li className="nav-item dropdown no-arrow">
        <Link className="nav-link nameofc" to={`${ConsoleRoute}/messages`}>
          <img src={msgicon} alt="" />
          <div className="bluecircletop" />
        </Link>
      </li>


      <div className="topbar-divider d-none d-sm-block" />


      <li className="nav-item dropdown no-arrow">
        <Link className="nav-link nameofc" to={`${ConsoleRoute}/calendar`}>
          <img src={calendaricon} alt="" />
          <div className="bluecircletop" />
        </Link>
      </li>
      <div className="topbar-divider d-none d-sm-block" />
      <li className="nav-item dropdown no-arrow">
        <a className="nav-link dropdown-toggle nameofc" href="#/" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img className="img-profile rounded-circle" src={keisha} alt="Profile" />
          <div className="bluecircle" />
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">Keisha Thompson</span>
        </a>
      </li>


    </ul>

  </nav>

);

TopBar.propTypes = {
  ConsoleRoute: PropTypes.string
}

TopBar.defaultProps = {
  ConsoleRoute: '/'
}

export default TopBar;