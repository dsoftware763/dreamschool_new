import React from 'react';
import ParentGuardian from '../../components/parents/ParentGuardian';

class ParentGuardiansPage extends React.Component {

    handChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
    }

    saveProfile = (e) => {
        if (e.target.name === "next") {
            this.props.history.push('/parents/family-profile/contacts')
        } else if (e.target.name === "back") {
            this.props.history.push('/parents/family-profile')
        }
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="cont">
                    <h1>Family Profile <span>Parent / Guardian Contact</span></h1>
                </div>
                <div className="completeline">
                    <p>12% Complete</p>
                    <div className="complete">
                        <div className="completed">

                        </div>
                        <div className="circle1 activeblue"></div>
                        <div className="circle2"></div>
                        <div className="circle3"></div>
                        <div className="circle4"></div>
                    </div>
                </div>

                <div className="cont">
                    <div className="row mt-50px">
                        <div className="col-lg-4">
                            <ParentGuardian />
                        </div>
                        <div className="col-lg-4">
                            <ParentGuardian />
                        </div>

                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-md-12">
                        <div className="buttons">
                            <button onClick={this.saveProfile} name="save" className="savebtn">SAVE</button>
                            <button onClick={this.saveProfile} name="back" className="nextbtn">BACK</button>
                            <button onClick={this.saveProfile} name="next" className="nextbtn">NEXT</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ParentGuardiansPage;