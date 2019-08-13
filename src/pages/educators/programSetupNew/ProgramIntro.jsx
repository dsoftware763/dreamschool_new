import React from 'react';

class ProgramIntro extends React.PureComponent {
    render() {
        return (<>
            <div className="box" style={{maxWidth: 340}}>
                <div className="bgofbox">
                    <div className="header">
                        <div className="row">
                            <div className="col-md-6 col-5">
                                <h2>ABOUT OUR SCHOOL</h2>
                            </div>
                        </div>
                    </div>
                    <div className="about-school" style={{padding: '20px'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper augue vitae magna semper convallis. Vivamus tempor orci eu sapien ultricies, ut congue dui vehicula. Donec vitae luctus nisl. Nunc vel imperdiet risus. Curabitur nisl risus, dapibus nec nulla in, consequat porta lectus.</p>
                    </div>
                </div>
            </div>
            <div className="box" style={{maxWidth: 340}}>
                <div className="bgofbox">
                    <div className="header">
                        <div className="row">
                            <div className="col-md-6 col-5">
                                <h2>OUR EDUCATORS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="about-school" style={{padding: '20px'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper augue vitae magna semper convallis. Vivamus tempor orci eu sapien ultricies, ut congue dui vehicula. Donec vitae luctus nisl. Nunc vel imperdiet risus. Curabitur nisl risus, dapibus nec nulla in, consequat porta lectus.</p>
                    </div>
                </div>
            </div>
            <div className="box" style={{maxWidth: 340}}>
                <div className="bgofbox">
                    <div className="header">
                        <div className="row">
                            <div className="col-md-6 col-5">
                                <h2>LOCATION</h2>
                            </div>
                        </div>
                    </div>
                    <div className="about-school" style={{padding: '20px'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper augue vitae magna semper convallis. Vivamus tempor orci eu sapien ultricies, ut congue dui vehicula. Donec vitae luctus nisl. Nunc vel imperdiet risus. Curabitur nisl risus, dapibus nec nulla in, consequat porta lectus.</p>
                    </div>
                </div>
            </div>
        </>);
    }
}
export default ProgramIntro;