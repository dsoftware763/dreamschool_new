import React from 'react';

const ProgramSetup = () => {
    return (
        <div className="container-fluid">
        <div className="cont">
          <h1>Owen Thompson</h1>
        </div>
        <div className="cont">
        <div className="row mt-50px">
          <div className="box" style={{maxWidth: 340}}>
            <div className="bgofbox">
              <div className="header">
                <div className="row">
                  <div className="col-md-6 col-5">
                    <h2>ENROLLMENR DETAILS</h2>
                  </div>
                </div>
              </div>
              <div className="formbody">
                <form action="">
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Start Date</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="Feb 21 2018" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>End Date</h3>
                    </div>
                    <div className="col-md-6 col-7">
                        <input type="text" value="Feb 21 2018" />   
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Plan</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="Plan A" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Days of Week</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="Tues, Thurs" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Available Spot</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="Yes" />
                    </div>
                  </div>
              
                </form>
              </div>
            </div>
          </div>
          <div className="box" style={{maxWidth: 340}}>
            <div className="bgofbox">
            <div className="header">
              <div className="row">
                <div className="col-md-6 col-5">
                  <h2>STUDENT</h2>
                </div>
              </div>
            </div>
            <div className="formbody">
              <form action="">
                <div className="row">
                  <div className="col-md-6 col-5">
                    <h3>Full Name</h3>
                  </div>
                  <div className="col-md-6 col-7">
                    <input type="text" value="Johnny Johnson" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-5">
                    <h3>Birth Date</h3>
                  </div>
                  <div className="col-md-6 col-7">
                    <input type="text" value="Sep 21 2018" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-5">
                    <h3>Gender</h3>
                  </div>
                  <div className="col-md-6 col-7">
                    <input type="text" value="Male" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-5">
                    <h3>Language(s)</h3>
                  </div>
                  <div className="col-md-6 col-7">
                    <input type="text" value="English, Mandarin" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-5">
                    <h3>Allergies</h3>
                  </div>
                  <div className="col-md-6 col-7">
                    <input type="text" value="None" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-5">
                    <h3>Immunized</h3>
                  </div>
                  <div className="col-md-6 col-7">
                    <input type="text" value="Yes" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-5">
                    <h3>Medication</h3>
                  </div>
                  <div className="col-md-6 col-7">
                    <input type="text" value="None" />
                  </div>
                </div>
              </form>
            </div>
            </div>
          </div>
          <div className="box" style={{maxWidth: 340}}>
            <div className="bgofbox">
              <div className="header">
                <div className="row">
                  <div className="col-md-6 col-5">
                    <h2>Contacts</h2>
                  </div>
                </div>
              </div>
              <div className="formbody">
                <form action="#">
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Full Name</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="Keisha Thompson" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Address</h3>
                    </div>
                    <div className="col-md-6 col-7">
                        <input type="text" value="113 Spedna Awe" />   
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Cell Phone</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="905484843" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Work Phone</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="04567892" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Company</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <input type="text" value="New" />
                    </div>
                  </div>
              
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="buttons">
              <a href="#/" className="savebtn">
                END ENROLLMENT
              </a>
            </div>
          </div>
        </div>
        </div>
      
      </div>
    );
}
export default ProgramSetup;