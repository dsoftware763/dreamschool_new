import React from 'react';
import {Input} from '../../../components/UI/form';
const BasicInfo = ()  => {
    return (
        <div className="box" style={{maxWidth: 440}}>
                    <div className="bgofbox">
                    <div className="header">
                    <div className="row">
                        <div className="col-md-6 col-5">
                            <h2>MY PROGRAM</h2>
                        </div>
                    </div>
                    </div>
                    <div className="formbody">
                    <form action="">
                        <div className="row">
                        <div className="col-md-6 col-5">
                            <h3>Program Name</h3>
                        </div>
                        <div className="col-md-6 col-7">
                            <Input 
                                name="programName" 
                                value="Johnny Johnson" 
                                onChange={() => {}}
                            />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6 col-5">
                            <h3>Program Type</h3>
                        </div>
                        <div className="col-md-6 col-7">
                            <Input 
                                name="programType"
                                value="Type A"
                            />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6 col-5">
                            <h3>Phone Number</h3>
                        </div>
                        <div className="col-md-6 col-7">
                            <Input 
                                name="phone"
                                value="987654321" 
                            />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6 col-5">
                            <h3>Email</h3>
                        </div>
                        <div className="col-md-6 col-7">
                            <Input 
                                name="email"
                                value="email@example.com" 
                            />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6 col-5">
                            <h3>Educator Name</h3>
                        </div>
                        <div className="col-md-6 col-7">
                            <Input name="educatorName" value="Emily Booth" />
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-5">
                                <h3>Educator Title</h3>
                            </div>
                            <div className="col-md-6 col-7">
                                <Input
                                    name="educatorTitle"
                                    value="Program Director"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-5">
                                <h3>Curricullum</h3>
                            </div>
                            <div className="col-md-6 col-7">
                                <Input
                                    name="curricullam"
                                    value="Play Based"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-5">
                                <h3>Age Group</h3>
                            </div>
                            <div className="col-md-6 col-7">
                                <Input
                                    name="educatorTitle"
                                    value="age"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-5">
                                <h3>Capacity</h3>
                            </div>
                            <div className="col-md-6 col-7">
                                <Input
                                    name="educatorTitle"
                                    value="5"
                                />
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
    );
}
export default BasicInfo;