import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <>
                <div className="contact-info-area pt-100 pb-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="pe-7s-mail"></i>
                                    </div>
                                    <h3>Mail Here</h3>
                                   <p> <a href="mailto:uniqueassociates09@gmail.com">uniqueassociates09@gmail.com</a></p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="pe-7s-map-2"></i>
                                    </div>
                                    <h3>Visit Here</h3>
                                    <p>63-AA Sector D Bahria Town Lahore.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="pe-7s-call"></i>
                                    </div>
                                    <h3>Call Here</h3>
                                    <p> <a href="tel:(+92) 300-544-789">(+92) 300-5446-789</a></p>
                                          <p>  <a href="tel:(+92) 335-3313-300">(+92) 335-3313-300</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactInfo;