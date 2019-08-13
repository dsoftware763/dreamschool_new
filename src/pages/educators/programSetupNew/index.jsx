import React from 'react';
import {Link} from 'react-router-dom';
import BasicInfo from './BasicInfo';

class ProgramSetupNew extends React.PureComponent {
    state = {
        step : 1
    }
    nextStep = () => {
        if(this.state.step < 4) {
            this.setState(state => ({
                step: state.step + 1
            }))
        }
    }
    previousStep = () => {
        if(this.state.step > 1) {
            this.setState(state => ({
                step: state.step - 1
            }))
        }
    }

    render() {
        const {step} = this.state;
        console.log(step)
        let form;
        switch(step) {
            case 1:
                form = <BasicInfo/>
                break;
            default:
                form = <BasicInfo/>
        }
        
        return (
            <div className="container-fluid">
                <span style={{
                    position: 'absolute',
                    width: '25px',
                    height: '25px',
                    borderRadius: '100%',
                    backgroundColor: step < 2 ? '#a0aed8' : '#4e73df',
                    color: '#ffffff',
                    textAlign: 'center',
                    top: '50%',
                    left: '5px',
                    cursor: 'pointer'
                }}
                onClick={this.previousStep}
                > &lt; </span>
                <span style={{
                    position: 'absolute',
                    width: '25px',
                    height: '25px',
                    borderRadius: '100%',
                    backgroundColor: step >= 4 ? '#a0aed8' : '#4e73df',
                    color: '#ffffff',
                    textAlign: 'center',
                    top: '50%',
                    right: '5px',
                    cursor: 'pointer'
                }}
                onClick={this.nextStep}
                > &gt; </span>
                <div className="cont">
                <h1>Program setup</h1>
                </div>
      
            <div className="completeline stepbar" style={{display: 'flex', paddingTop: 0, paddingBottom: 0}}>
                <div style={{display: 'flex', flex: 1, padding: '25px 0',  borderBottom: step == 1 ? '3px solid #4e73df' : 'none'}}>
                    <span style={{
                        margin: '0 2px', 
                        borderRadius: '100%', 
                        backgroundColor: '#4e73df',
                        color: '#ffffff',
                        width: '25px',
                        height: '25px',
                        textAlign: 'center',
                        display: 'inline-block'
                        }}>1</span>
                    <span>Basic Info</span>
                </div>
                <div style={{display: 'flex', flex: 1, padding: '25px 0', borderBottom: step == 2 ? '3px solid #4e73df' : 'none'}}>
                    <span style={{
                        margin: '0 2px', 
                        borderRadius: '100%', 
                        backgroundColor: '#4e73df',
                        color: '#ffffff',
                        width: '25px',
                        height: '25px',
                        textAlign: 'center',
                        display: 'inline-block'
                        }}>2</span>
                    <span>Program Intro</span>
                </div>
                <div style={{display: 'flex', flex: 1, padding: '25px 0', borderBottom: step == 3 ? '3px solid #4e73df' : 'none'}}>
                    <span style={{
                        margin: '0 2px', 
                        borderRadius: '100%', 
                        backgroundColor: '#4e73df',
                        color: '#ffffff',
                        width: '25px',
                        height: '25px',
                        textAlign: 'center',
                        display: 'inline-block'
                        }}>3</span>
                    <span>Gallery</span>
                </div>
                <div style={{display: 'flex', flex: 1, padding: '25px 0', borderBottom: step == 4 ? '3px solid #4e73df' : 'none'}}>
                    <span style={{
                        margin: '0 2px', 
                        borderRadius: '100%', 
                        backgroundColor: '#4e73df',
                        color: '#ffffff',
                        width: '25px',
                        height: '25px',
                        textAlign: 'center',
                        display: 'inline-block'
                        }}>4</span>
                    <span>Amenities & Schedule</span>
                </div>
                <div style={{display: 'flex', flex: 1, padding: '25px 0', borderBottom: step == 5 ? '3px solid #4e73df' : 'none'}}>
                    <span style={{
                        margin: '0 2px', 
                        borderRadius: '100%', 
                        backgroundColor: '#4e73df',
                        color: '#ffffff',
                        width: '25px',
                        height: '25px',
                        textAlign: 'center',
                        display: 'inline-block'
                        }}>5</span>
                    <span>Calendar</span>
                </div>
            </div>
      
            <div className="cont">
      
                <div className="row mt-50px">
                    {form}
                </div>
    
                <div className="row mb-5">
                    <div className="col-md-12">
                    <div className="buttons">
                        <Link to="#" className="nextbtn">
                            SAVE
                        </Link>
                        <Link to="#" className="nextbtn">
                            PUBLISH
                        </Link>
                       
                        <Link to="#" className="nextbtn">
                            PREVIEW
                        </Link>
                        <a href="#/" className="savebtn">REQUEST CHANGE</a>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}
export default ProgramSetupNew