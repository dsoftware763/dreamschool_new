import React from 'react';
import Line from '../charts/Line';
import arrowdownselect from '../../assets/img/arrowdownselect.svg';

const EarningsOverview = () => (
  <div className="col-xl-6">
    <div className="tablebox">
      <div className="tableheader">
        <div className="row">
          <div className="col-md-7">
            <h2>EARNINGS OVERVIEW</h2>
          </div>
          <div className="col-md-5">
            <div className="select">
              <select>
                <option value="0">This Month:</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <img
                src={arrowdownselect.svg}
                className="arrowdownselect"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tablebody padded">
        <h2 className="graph-header">
          <span>$14,200</span> Cumulative
        </h2>
        <div className="chart-area">
          <Line />
        </div>
      </div>
    </div>
  </div>
);

export default EarningsOverview;
