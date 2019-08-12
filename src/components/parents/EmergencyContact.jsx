import React from 'react';

class EmergencyContact extends React.PureComponent {
    handChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
    }

    render() {
        return(
            <div className="box">
                <div className="bgofbox">
                    <div className="header">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>EMERGENCY CONTACT #1</h2>
                            </div>
                        </div>
                    </div>
                    <div className="formbody">
                        <form action="">

                            <div className="row">
                                <div className="col-md-6 col-5">
                                    <h3>Child</h3>
                                </div>
                                <div className="col-md-6 col-7">
                                    <input onChange={this.handChange} type="text" value="Johnny Johnson" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-5">
                                    <h3>Relationship</h3>
                                </div>
                                <div className="col-md-6 col-7">
                                    <input onChange={this.handChange} type="text" value="Sep 21 2018" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-5">
                                    <h3>Full Name</h3>
                                </div>
                                <div className="col-md-6 col-7">
                                    <input onChange={this.handChange} type="text" value="Male" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-5">
                                    <h3>Address</h3>
                                </div>
                                <div className="col-md-6 col-7">
                                    <input onChange={this.handChange} type="text" value="English, Mandarin" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-5">
                                    <h3>Phone</h3>
                                </div>
                                <div className="col-md-6 col-7">
                                    <input onChange={this.handChange} type="text" value="English, Mandarin" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmergencyContact;