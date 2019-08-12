import React from "react";
import MyApplicationVisitorModal from "../../components/modals/MyApplicationVisitorModal";
import {Input} from '../../components/UI'

const MyApplicationCredentials = () => {
  return (
    <div className="container-fluid">
      <div className="cont">
        <h1>
          My Application: <span>Profile</span>
        </h1>
      </div>

      <div className="completeline">
        <p>12% Complete</p>
        <div className="complete">
          <div className="completed" />
          <div className="circle1 activeblue" />
          <div className="circle2" />
          <div className="circle3" />
          <div className="circle4" />
        </div>
      </div>

      <div className="cont">

<div className="row mt-50px">
      <div className="box" style={{maxWidth: 440}}>
            <div className="bgofbox">
              <div className="header">
                <div className="row">
                  <div className="col-md-6 col-5">
                    <h2>DOCUMENTATION</h2>
                  </div>
                </div>
              </div>
              <div className="formbody">
                <form action="">
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3><span className="green-circle mr-2" />Vulnerable Sector Check</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <Input type="text" value="Johnny Johnson" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3><span className="green-circle mr-2" />Criminal Record Check</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <Input type="text" value="Johnny Johnson" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3><span className="orange-circle mr-2" />First Aid</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <Input type="text" value="Johnny Johnson" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3><span className="green-circle mr-2" />Infant and Child CPR</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <Input type="text" value="Sep 21 2018" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3><span className="orange-circle mr-2" />Immunization</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <Input type="text" value="English, Mandarin" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3><span className="grey-circle mr-2" />Registered Early Childhood Educator</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <Input type="text" value="None" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3><span className="orange-circle mr-2" />Registered Educator</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <Input type="text" value="None" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="footer pt-3 pb-3">
                  <div className="row">
                      <div className="col-md-12 text-center">
                        <span className="grey-circle mr-2" />
                        Not Applicable
                        <span className="green-circle mr-2 ml-4" />
                        Verified
                        <span className="orange-circle ml-4 mr-2" />
                        Pending Verification
                    </div>
                  </div>
              </div>
            </div>
          </div>
        
        <MyApplicationVisitorModal />

        <a href="#/" className="addchild">
            <h3>Add Visitor / Resident</h3>
        </a>
        </div>
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="buttons">
              <a href="#/" className="savebtn">
                SAVE
              </a>
              <a href="#/" className="nextbtn">
                NEXT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyApplicationCredentials;
