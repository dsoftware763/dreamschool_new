import React from "react"
import searchicon2 from "../../assets/img/searchicon2.svg"
import whaticon from "../../assets/img/whaticon.svg"
import orangecircle from "../../assets/img/orangecircle.svg"
import greencircle from "../../assets/img/greencircle.svg"
import ppicon from "../../assets/img/halfppicon.svg"
import ppicon3 from "../../assets/img/ppicon3.svg"
import ppicon4 from "../../assets/img/ppicon4.svg"
import {Input} from '../UI'
import Pagination from '../pagination/pagination'
const EnrolledTable = 
() => {
    return (
        <div className="cont">
        <div className="row">
          <div className="search">
            <div className="input">
              <Input type="text" placeholder="Search by name" />

              <button>
                <img
                  src={searchicon2}
                  className="searchicon"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <div className="tablecont">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Student</th>
                  <th scope="col">
                    Start Date
                    <span className="whatisit">
                      <img src={whaticon} alt="" />

                      <div className="infobox">
                        <p>
                          <img src={orangecircle} alt="" />
                          Currently attending
                        </p>
                        <p>
                          <img src={greencircle} alt="" />
                          Deposit paid, start date pending
                        </p>
                      </div>
                    </span>
                  </th>
                  <th scope="col">End Date</th>
                  <th scope="col">Days of Week</th>
                  <th scope="col">Program Plan</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Owen Thompson</th>
                  <td>
                    <img
                      src={orangecircle}
                      className="circle"
                      alt=""
                    />
                    Dec 3, 2019
                  </td>
                  <td>June 3, 2019</td>
                  <td>Mon, Tue, Thur</td>
                  <td>
                    <img src={ppicon} className="ppimg" alt="" />
                    Plan A
                  </td>
                  <td>
                    <a href="#/">VIEW</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Owen Thompson</th>
                  <td>
                    <img
                      src={greencircle}
                      className="circle"
                      alt=""
                    />
                    Dec 3, 2019
                  </td>
                  <td>June 3, 2019</td>
                  <td>Mon, Tue, Thur</td>
                  <td>
                    <img src={ppicon3} className="ppimg" alt="" />
                    Plan A
                  </td>
                  <td>
                    <a href="#/">VIEW</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Owen Thompson</th>
                  <td>
                    <img
                      src={greencircle}
                      className="circle"
                      alt=""
                    />
                    Dec 3, 2019
                  </td>
                  <td>June 3, 2019</td>
                  <td>Mon, Tue, Thur</td>
                  <td>
                    <img src={ppicon4} className="ppimg" alt="" />
                    Plan A
                  </td>
                  <td>
                    <a href="#/">VIEW</a>
                  </td>
                </tr>
              </tbody>
            </table>

            <Pagination />
          </div>
        </div>
      </div>
    )
}

export default EnrolledTable;