import React from "react";
import searchicon2 from "../../assets/img/searchicon2.svg";
import arrowdownselect2 from "../../assets/img/arrowdownselect2.svg";
import msgicon from "../../assets/img/msgicon.png";
import msgicon2 from "../../assets/img/msgicon2.png";
import msgicon3 from "../../assets/img/msgicon3.png";
import {Input} from '../UI'

const LeftMessagingPanel = () => {
  return (
    <div className="leftside">
      <div className="upermenu">
        <div className="row">
          <div className="col-6">
            <div className="leftm">
              <a href="#/" className="active">
                Conversations
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="rightm">
              <a href="#/">
                <span>3</span>New Connections
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="search search2">
        <div className="row">
          <div className="col-6">
            <div className="msg-search">
              <div className="input">
                <Input type="text" placeholder="Search conversations" />

                <button>
                  {" "}
                  <img src={searchicon2} className="searchicon" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="select">
              <div className="select">
                <select>
                  <option value="0">All</option>
                  <option value="1">Enrolled</option>
                  <option value="1">Leads</option>
                  <option value="2">Invitees</option>
                </select>
                <img src={arrowdownselect2} className="arrowdownselect" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="msgs">
        <a href="#/">
          <div className="row">
            <div className="col-3">
              <div className="divforimg">
                <img src={msgicon} alt="" />
                <div className="mincircle" />
              </div>
            </div>
            <div className="col-6">
              <h2>Dave Jefferson</h2>
              <p className="bolder">Hey, would you like</p>
            </div>
            <div className="col-3">
              <h3>Just Now</h3>
            </div>
          </div>
        </a>
        <a href="#/" className="active">
          <div className="row">
            <div className="col-3">
              <div className="divforimg ">
                <img src={msgicon2} alt="" />
                <div className="mincircle" />
              </div>
            </div>
            <div className="col-6">
              <h2>Dave Jefferson</h2>
              <p>Hello!</p>
            </div>
            <div className="col-3">
              <h3>10:42 AM</h3>
            </div>
          </div>
        </a>
        <a href="#/">
          <div className="row">
            <div className="col-3">
              <div className="divforimg activecircle">
                <img src={msgicon3} alt="" />
                <div className="mincircle" />
              </div>
            </div>
            <div className="col-6">
              <h2>Dave Jefferson</h2>
              <p>Lead</p>
            </div>
            <div className="col-3">
              <h3 className="opacitytime">10:42 AM</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LeftMessagingPanel;
