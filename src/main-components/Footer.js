import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <>
           

            <footer className="footer pt-50">

                <div className="container pb-50">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer-logo">
                                <img src="assets/Images/logo.png" width="94px" alt="" />
                            </div>
                            <div className="footer-desc foot-desc1">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                            <div className="footer-social-links">
                                <span><Link to="" className="foot-social-link"><i className="fa-brands fa-facebook-f"></i></Link></span>
                                <span><Link to="" className="foot-social-link"><i className="fa-brands fa-instagram"></i></Link></span>
                            <span><Link to="" className="foot-social-link"><i className="fa-brands fa-twitter"></i></Link></span>
                        </div>
                    </div>
                    <div className="col-lg-4 pt-foot">
                        <div className="row">
                            <div className="col-6">
                                <div className="footer-head">
                                    <h4>About Us</h4>
                                </div>
                                <div className="link-list">
                                    <ul>
                                        <li><Link to="">About Us</Link></li>
                                        <li><Link to="">Services</Link></li>
                                        <li><Link to="">Contact Us</Link></li>
                                        <li><Link to="">Company</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 ">
                                <div className="footer-head">
                                    <h4>Company</h4>
                                </div>
                                <div className="link-list">
                                    <ul>
                                        <li><Link to="">Partnership</Link></li>
                                        <li><Link to="">Terms of Use</Link></li>
                                        <li><Link to="">Privacy</Link></li>
                                        <li><Link to="">Sitemap</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 pt-foot">
                        <div className="footer-head">
                            <h4>Get in Touch</h4>
                        </div>
                        <div className="footer-desc ">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                        <div className="footer-email">
                            <form action="">
                                <input placeholder="Email" type="email" name="email" className="footer-input" />
                                <button type="submit" className="subscribe">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright text-center">
                    <p>Copyright © 2022 VISOMS6 TECHNOLOGY PVT.LTD</p>
                </div>
            </div>

        </footer>
    </>
  )
}
