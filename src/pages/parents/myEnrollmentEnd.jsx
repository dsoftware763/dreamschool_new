import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from '../../components/calendar/Calendar';

const MyEnrollmentEnd = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <h1>End Enrollment</h1>
      </div>
    </div>

    <div className="cont">
      <div className="fullbox">
      <div className="header">
        <h2>Select End Date</h2>
      </div>

      <div className="container-fluid calendarcf">
        <Calendar />
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="buttons">
            <Link to="/parents/my-enrollments/view" href="#/" className="savebtn">
                  END
            </Link>
            <Link to="/parents/my-enrollments/view" className="nextbtn">
                  CANCEL
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
);

export default MyEnrollmentEnd;
