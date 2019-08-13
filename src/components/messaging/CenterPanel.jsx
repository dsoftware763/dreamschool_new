import React from "react";
import msgicon2 from "../../assets/img/msgicon2.png";
import msgicon3 from "../../assets/img/msgicon3.png";
import leftmsgarrow from "../../assets/img/leftmsgarrow.png";
import rightmsgarrow from "../../assets/img/rightmsgarrow.png";
import sendmsgbtn from "../../assets/img/sendmsgbtn.svg";
import {Input} from '../UI'

const CenterMessagingPanel = () => {
  return (
    <div className="centerm">
      <div className="paddingmsg">
        <div className="leftsidemsg">
          <div className="row">
            <div className="col-2">
              <div className="divforimg activecircle">
                <img src={msgicon2} alt="" />
                <div className="mincircle" />
              </div>
            </div>
            <div className="col-10">
              <div className="msg">
                <p>
                  <img src={leftmsgarrow} className="leftmsgarrow" alt="" />
                  Hey Emily, I was hoping you could stop the bullying that’s
                  happening to my kid at your daycare.{" "}
                </p>

                <p className="time">10:03 AM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="floatright">
          <div className="rightsidemsg">
            <div className="row">
              <div className="col-10">
                <div className="msg">
                  <p>
                    <img src={rightmsgarrow} className="rightmsgarrow" alt="" />
                    Sorry, can’t do anything about that. Your kid is a loser.
                  </p>

                  <p className="time">10:03 AM</p>
                </div>
              </div>

              <div className="col-2">
                <div className="divforimg">
                  <img src={msgicon3} alt="" />
                  <div className="mincircle" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="leftsidemsg">
          <div className="row">
            <div className="col-2">
              <div className="divforimg activecircle">
                <img src={msgicon2} alt="" />
                <div className="mincircle" />
              </div>
            </div>
            <div className="col-10">
              <div className="msg">
                <p>
                  <img src={leftmsgarrow} className="leftmsgarrow" alt="" />
                  Excuse me? What did you just say?{" "}
                </p>

                <p className="time">10:03 AM</p>
              </div>
            </div>
          </div>
        </div>

        <h4 className="timedate">TODAY</h4>

        <div className="floatright">
          <div className="rightsidemsg">
            <div className="row">
              <div className="col-10">
                <div className="msg">
                  <p>You heard me. </p>

                  <p>
                    <img src={rightmsgarrow} className="rightmsgarrow" alt="" />
                    Suzie is kind of annoying, no offense.
                  </p>

                  <p className="time">10:03 AM</p>
                </div>
              </div>

              <div className="col-2">
                <div className="divforimg">
                  <img src={msgicon3} alt="" />
                  <div className="mincircle" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="leftsidemsg">
          <div className="row">
            <div className="col-2">
              <div className="divforimg activecircle">
                <img src={msgicon2} alt="" />
                <div className="mincircle" />
              </div>
            </div>
            <div className="col-10">
              <div className="msg">
                <p>That is very rude. I want to speak to your manager.</p>
                <p>
                  <img src={leftmsgarrow} className="leftmsgarrow" alt="" />
                  And how dare you? I’m going to get you fired.
                </p>

                <p className="time">10:03 AM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="floatright">
          <div className="rightsidemsg">
            <div className="row">
              <div className="col-10">
                <div className="msg">
                  <p>
                    <img src={rightmsgarrow} className="rightmsgarrow" alt="" />I am
                    my own manager, Susan.
                  </p>

                  <p className="time">10:03 AM</p>
                </div>
              </div>

              <div className="col-2">
                <div className="divforimg">
                  <img src={msgicon3} alt="" />
                  <div className="mincircle" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="leftsidemsg">
          <div className="row">
            <div className="col-2">
              <div className="divforimg activecircle">
                <img src={msgicon2} alt="" />
                <div className="mincircle" />
              </div>
            </div>
            <div className="col-10">
              <div className="msg">
                <p>
                  <img src={leftmsgarrow} className="leftmsgarrow" alt="" />
                  Well, you know what? Suzie is not going to attend your school
                  anymore.
                </p>

                <p className="time">10:03 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sendmsg">
        <div className="row">
          <div className="col-12">
            <div className="search">
              <div className="input">
                <Input type="text" placeholder="Search conversations" />

                <button>
                  {" "}
                  <img src={sendmsgbtn} className="searchicon" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterMessagingPanel;
