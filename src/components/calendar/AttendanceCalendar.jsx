import React from "react"
import dataarrowleft from "../../assets/img/dataarrowleft.svg"
import dataarrowright from "../../assets/img/dataarrowright.svg"
import greencheck from "../../assets/img/greencheck.svg"
import markicon from "../../assets/img/markicon.svg"
import plusicon from "../../assets/img/plusicon.svg"
import arrowtoppopup from "../../assets/img/arrowtoppopup.png"
import minicheck from "../../assets/img/minicheck.svg"
import miniplus from "../../assets/img/miniplus.svg"
import miniiks from "../../assets/img/miniiks.svg"
import iksicon from "../../assets/img/iksicon.svg"
import minusicon from "../../assets/img/minusicon.svg"
import miniminus from "../../assets/img/miniminus.svg"

const AttendanceCalendar = () => {
    return (
        <div className="cont">
          <div className="row">
            <div className="data">
              <p>
                <a href="#/">
                  <img
                    src={dataarrowleft}
                    className="leftarrow"
                    alt=""
                  />
                </a>
                This Week <span>(Jan 1-8, 2019)</span>
                <a href="#/">
                  <img
                    src={dataarrowright}
                    className="rightarrow"
                    alt=""
                  />
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="attendance-calendar">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" />
                        <th scope="col">June 3, 2019</th>
                        <th scope="col">June 4, 2019</th>
                        <th scope="col">June 5, 2019</th>
                        <th scope="col">June 6, 2019</th>
                        <th scope="col">June 7, 2019</th>
                        <th scope="col">June 8, 2019</th>
                        <th scope="col">June 9, 2019</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <h2>Owen Thompson</h2>
                        </th>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <span className="choose">
                                <img src={markicon}alt="" />
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">
                          <h2>Clarissa Thompson</h2>
                        </th>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={plusicon}alt="" />
                              <p>Fee: 50%</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={plusicon}alt="" />
                              <p>Fee: 50%</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={plusicon}alt="" />
                              <p>Fee: 50%</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={plusicon}alt="" />
                              <p>Fee: 50%</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={plusicon}alt="" />
                              <p>Fee: 50%</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <span className="choose">
                                <img src={markicon}alt="" />
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">
                          <h2>Beesan Sun</h2>
                        </th>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={plusicon}alt="" />
                              <p>Fee: 50%</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <span className="choose">
                                <img src={markicon}alt="" />
                              </span>
                            </div>
                          </div>
                          <div className="boxforc">
                            <img
                              src={arrowtoppopup}
                              className="arrowtoppopup"
                              alt=""
                            />
                            <h3>Mark:</h3>
                            <p>
                              <img src={minicheck}alt="" />
                              Present
                            </p>
                            <p>
                              <img
                                src={miniminus}
                                className="minus"
                                alt=""
                              />
                              Reduced Day
                            </p>
                            <p>
                              <img src={miniplus}className="plus" alt="" />
                              Extended Day
                            </p>
                            <p>
                              <img src={miniiks}alt="" />
                              Absent
                            </p>
                            <a href="#/">SAVE</a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">
                          <h2>Sally Kyune</h2>
                        </th>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={minusicon}alt="" />
                              <p>Discount: -25%</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <span className="choose">
                                <img src={markicon}alt="" />
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">
                          <h2>Peter June</h2>
                        </th>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={minusicon}alt="" />
                              <p>Discount: -25%</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={iksicon}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={iksicon}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={minusicon}alt="" />
                              <p>Discount: -25%</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={iksicon}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={minusicon}alt="" />
                              <p>Discount: -25%</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <span className="choose">
                                <img src={markicon}alt="" />
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">
                          <h2>Hector Johns</h2>
                        </th>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={iksicon}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <span className="choose">
                                <img src={markicon}alt="" />
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">
                          <h2>Morgan Michaels</h2>
                        </th>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={iksicon}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <img src={greencheck}alt="" />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="vertical">
                            <div className="child">
                              <span className="choose">
                                <img src={markicon}alt="" />
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    )
}

export default AttendanceCalendar