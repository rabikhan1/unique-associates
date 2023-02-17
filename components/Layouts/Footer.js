import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <>
                <footer className="footer-area">
                    <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img 
                                                    src="/images/Unique-logo.jpeg" 
                                                    alt="Logo" 
                                                />
                                            </a>
                                        </Link>
                                    </div>

                                    <p>A Name You Can Trust</p>

                                    <ul className="social-links">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://linkedin.com/" target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li> 
                                    </ul>
                                </div>
                            </div>

                           
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget ml-4">
                                    <h3>Quick Links</h3>

                                    <ul className="list">
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>About</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy-policy">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/terms-conditions">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Get in Touch</h3>

                                    <ul className="get-in-touch">
                                        <li><i className="icofont-home"></i> 63-AA Sector D Bahria Town Lahore.</li>
                                        <li>
                                            <i className="icofont-live-support"></i> 
                                            <a href="tel:(+92) 300-544-789">(+92) 300-5446-789</a>
                                            <a href="tel:(+92) 335-3313-300">(+92) 335-3313-300</a>
                                        </li>
                                        <li>
                                            <i className="icofont-envelope"></i> 
                                            <a href="mailto:uniqueassociates09@gmail.com">uniqueassociates09@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </footer>
            </>
        );
    }
}

export default Footer;