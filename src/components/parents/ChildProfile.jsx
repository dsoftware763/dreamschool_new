import React from 'react';
import {Input} from '../UI'

class ChildProfile extends React.PureComponent {
    handChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
    }

    render() {
        return(
    <div className="box" style={{maxWidth: 440}}>
                <div className="bgofbox">
                <div className="header">
                  <div className="row">
                    <div className="col-md-5">
                      <h2>CHILD 1</h2>
                    </div>
                    <div className="col-md-7">
                      <a href="#/" className="active">Profile</a>
                      <a href="#/">Instructions</a>
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
                          <Input onChange={this.handChange} type="text" value="Johnny Johnson" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-5">
                        <h3>Birth Date</h3>
                      </div>
                      <div className="col-md-6 col-7">
                          <Input onChange={this.handChange} type="text" value="Sep 21 2018" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-5">
                        <h3>Gender</h3>
                      </div>
                      <div className="col-md-6 col-7">
                          <Input onChange={this.handChange} type="text" value="Male" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-5">
                        <h3>Language(s)</h3>
                      </div>
                      <div className="col-md-6 col-7">
                          <Input onChange={this.handChange} type="text" value="English, Mandarin" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-5">
                        <h3>Allergies</h3>
                      </div>
                      <div className="col-md-6 col-7">
                          <Input onChange={this.handChange} type="text" value="None" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-5">
                        <h3>Immunized</h3>
                      </div>
                      <div className="col-md-6 col-7">
                          <Input onChange={this.handChange} type="text" value="Yes" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-5">
                        <h3>Medication</h3>
                      </div>
                      <div className="col-md-6 col-7">
                          <Input onChange={this.handChange} type="text" value="None" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              </div>
        )
    }
}

export default ChildProfile;