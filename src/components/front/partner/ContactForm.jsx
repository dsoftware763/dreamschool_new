import React from 'react';
import pformbgleft from '../../../assets/img/pformbgleft.png';
import pformbgright from '../../../assets/img/pformbgright.png';
import {Input} from '../../UI'

const ContactForm = () => {
    return (
        <div className="providesubmitf container-fluid">
            <img src={pformbgleft} className="leftsidebg" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Want to chat in person? </h1>
                        <p>Get in touch to explore your dreams! </p>
                        <form className="submit-form" id="new_teacher" acceptCharset="UTF-8" method="post">
                            <Input name="utf8" type="hidden" value="&#x2713;" />
                            <Input type="hidden" name="authenticity_token" value="GGjOwSyVGMaLXG7g8leKgWMJe5PM7i533ZcH9fnJZBEMdMyiG8IfPF5FbVMZ70mqzbuXq25z3dNteS5r5pCLug==" />
                            <h2>Schedule a 15 minute chat</h2>
                            <p>with our team to discuss your vision!</p>
                            <Input placeholder="Name" className="input_fields" type="text" name="teacher[name]" id="teacher_name" />
                            <Input placeholder="Email" className="input_fields" type="email" value="" name="teacher[email]" id="teacher_email" />
                            <Input placeholder="Telephone Number" className="input_fields telephone_no" type="tel" name="teacher[telephone_no]" id="teacher_telephone_no" />
                            <Input placeholder="Postal Code" className="input_fields postal_code" type="text" name="teacher[postal_code]" id="teacher_postal_code" />
                            <Input type="submit" name="commit" value="SUBMIT" className="btn-default submit-btn" data-disable-with="SUBMIT" />
                             <p style={{marginBottom: "7px"}}><span>By performing this action, you agree to our <a className="term-link" target="_blank" href="terms-of-use.html">Terms of Use</a> and <a className="term-link" target="_blank" href="privacy-policy.html">Privacy Policy</a></span></p>
                        </form>        
                    </div>
                </div>
            </div>
        <img src={pformbgright} className="rightsidebg" alt=""/>
    </div>
    );
}

export default ContactForm;