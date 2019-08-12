import React from "react";
import { Link } from "react-router-dom"
import ImageActiveA from "../../assets/img/imgactivea.png";

const ApplicationList = () => {
  return (
    <div className="cont">
      <div className="tablecont">
        <div className="table-responsive">
          <ul>
            <li className="active">
              <a href="#/">
                <img src={ImageActiveA} className="foractive" alt="" />
                PENDING RESPONSE
              </a>
            </li>
            <li>
              <a href="#/">
                <img src={ImageActiveA} className="foractive" alt="" />
                ACCEPTED
              </a>
            </li>
            <li>
              <a href="#/">
                <img src={ImageActiveA} className="foractive" alt="" />
                WAITLISTED
              </a>
            </li>
            <li>
              <a href="#/">
                <img src={ImageActiveA} className="foractive" alt="" />
                REJECTED
              </a>
            </li>
          </ul>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Program</th>
                <th scope="col">Child</th>
                <th scope="col">Plan</th>
                <th scope="col">Duration</th>
                <th scope="col">Application Date</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Ladybug and Unicorn Daycare</th>
                <td>Logan Michaels</td>
                <td>Plan A</td>
                <td>Jan 1 - Oct 1 2019</td>
                <td>Jan 23, 2019</td>
                <td>
                  <Link to="/parents/applications/view" href="#/">VIEW</Link>
                </td>
              </tr>
              <tr>
                <th scope="row">Ladybug and Unicorn Daycare</th>
                <td>Logan Michaels</td>
                <td>Plan A</td>
                <td>Jan 1 - Oct 1 2019</td>
                <td>Jan 23, 2019</td>
                <td>
                  <Link to="/parents/applications/view" href="#/">VIEW</Link>
                </td>
              </tr>
              <tr>
                <th scope="row">Ladybug and Unicorn Daycare</th>
                <td>Logan Michaels</td>
                <td>Plan A</td>
                <td>Jan 1 - Oct 1 2019</td>
                <td>Jan 23, 2019</td>
                <td>
                  <Link to="/parents/applications/view" href="#/">VIEW</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationList