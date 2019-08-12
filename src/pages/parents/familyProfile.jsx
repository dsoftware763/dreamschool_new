import React from 'react';
import ChildProfile from '../../components/parents/ChildProfile';
import {StepIndicator} from '../../components/UI';

class ParentFamilyPage extends React.Component {

    handChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
    }

    saveProfile = (e) => {
      if (e.target.name === "next") {
        this.props.history.push('/parents/family-profile/guardians')
      }
    }
    
    render() {
        return (
          <div className="container-fluid">
              <div className="cont">
                  {/* <PageHeading {...{name: 'Family Profile', sub: 'My Children'}} /> */}
                  <h1>Family Profile <span>My Children</span></h1>
              </div>
              <StepIndicator value={12}/>

              <div className="cont">
                  <div className="row mt-50px">
                          <ChildProfile />
                          <ChildProfile />
                          <a href="#/" className="addchild">
                              <h3>Add Child</h3>
                          </a>

                  </div>
              </div>

              <div className="row mb-5">
                  <div className="col-md-12">
                      <div className="cont">
                          <div className="buttons">
                              <button onClick={this.saveProfile} name="save" className="savebtn">SAVE</button>
                              <button onClick={this.saveProfile} name="next" className="nextbtn">NEXT</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        );
    }
}

export default ParentFamilyPage;