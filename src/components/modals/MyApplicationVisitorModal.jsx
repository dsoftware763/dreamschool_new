import React from "react"
import {Input} from '../UI'

const MyApplicationVisitorModal = () => {
    return (
          <div className="box" style={{maxWidth: 440}}>
            <div className="bgofbox">
              <div className="header">
                <div className="row">
                  <div className="col-md-12">
                    <h2>REGULAR VISITOR OR RESIDENT</h2>
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
                      <Input type="text" value="Johnny Johnson" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Relationship</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <Input type="text" value="Johnny Johnson" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Credentials</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <Input type="text" value="Johnny Johnson" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Status</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <Input type="text" value="Sep 21 2018" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-5">
                      <h3>Supporting Document</h3>
                    </div>
                    <div className="col-md-6 col-7">
                      <Input type="text" value="English, Mandarin" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
    )
}

export default MyApplicationVisitorModal