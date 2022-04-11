import React from 'react'
import './Footer.css'
import logo from './logo.png'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-top">
            <div className="footer-top-title">
                <h3>What Are Your Wondering?</h3>
                <p>We are happy to answer all your questions</p>
            </div>
            <div className="footer-top-main">
                <ul className="footer-top-main-list">
                    <li className="footer-top-main-item">
                        <Link className='footer-top-main-link' to="/services/question">Is there any warranty service free?</Link>
                        <i className="fa-solid fa-location-arrow"></i>
                    </li>
                    <li className="footer-top-main-item">
                        <Link className='footer-top-main-link' to="/services/question">Is home delivery free?</Link>
                       <i className="fa-solid fa-location-arrow"></i>
                    </li>
                    <li className="footer-top-main-item">
                        <Link className='footer-top-main-link' to="/services/question">How do i return the product</Link>
                       <i className="fa-solid fa-location-arrow"></i>
                    </li>
                    <li className="footer-top-main-item">
                        <Link className='footer-top-main-link' to="/services/question">Promotions of elecstore</Link>
                       <i className="fa-solid fa-location-arrow"></i>
                    </li>
                    <li className="footer-top-main-item">
                        <Link className='footer-top-main-link' to="/services/question">Condition for warranty?</Link>
                       <i className="fa-solid fa-location-arrow"></i>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-contact">
                <div className="footer-bottom-contact-logo">
                   <img src={logo} alt="page logo" /> 
                </div>
                <div className="footer-bottom-contact-social">
                    <Link className='footer-top-main-link' to="https://www.facebook.com/codey2k1/"><i className="fa-brands fa-facebook-square footer-top-main-link-icon"></i></Link>
                    <Link className='footer-top-main-link' to="https://dribbble.com/_sang_tran?fbclid=IwAR3a0GgwinEdxvRKgeWVBNU5xf5chfAYbR_Rf5MH4bX2pSr3e_B-oU6pPh0#"><i className="fa-brands fa-dribbble-square footer-top-main-link-icon"></i></Link>
                </div>
            </div>
            <div className="footer-bottom-main">
               <div className="footer-bottom-main-content">
                    <div className="footer-bottom-main-section">
                        <h5 className="footer-bottom-main-title">Product</h5>
                        <Link className='footer-bottom-main-link' to="/products/iphone">iPhone</Link>
                        <Link className='footer-bottom-main-link' to="/products/ipad">iPad</Link>
                        <Link className='footer-bottom-main-link' to="/products/accessories">Accessories</Link>
                        <Link className='footer-bottom-main-link' to="/products/watch">Watch</Link>
                        <Link className='footer-bottom-main-link' to="/products/mac">Mac</Link>
                        <Link className='footer-bottom-main-link' to="/products/airpods">Airpods</Link>
                    </div>
                    <div className="footer-bottom-main-section">
                        <h5 className="footer-bottom-main-title">Service</h5>
                        <Link className='footer-bottom-main-link' to="/services/card">Apple Card</Link>
                        <Link className='footer-bottom-main-link' to="/services/repair">Appliance repair</Link>
                        <Link className='footer-bottom-main-link' to="/services/finess">Apple Finess+</Link>
                        <Link className='footer-bottom-main-link' to="/services/tv">Apple TV+</Link>
                        <Link className='footer-bottom-main-link' to="/services/arcade">Apple Arcade</Link>
                        <Link className='footer-bottom-main-link' to="/services/music">Apple Music</Link>
                        <Link className='footer-bottom-main-link' to="/services/icloudplus">Icloud+</Link>
                    </div>
                    <div className="footer-bottom-main-section">
                        <h5 className="footer-bottom-main-title">About Us</h5>
                        <Link className='footer-bottom-main-link' to="/about/career">Career Opportunities</Link>
                        <Link className='footer-bottom-main-link' to="/about/communication">Career Opportunities</Link>
                        <Link className='footer-bottom-main-link' to="/about/ourteam">Our team</Link>
                    </div>
                    <div className="footer-bottom-main-section">
                        <h5 className="footer-bottom-main-title">Support</h5>
                        <Link className='footer-bottom-main-link' to="/support/warranty">Warranty Policy</Link>
                        <Link className='footer-bottom-main-link' to="/support/return">Return policy</Link>
                        <Link className='footer-bottom-main-link' to="/support/feedback">Feedback</Link>
                    </div>
                </div>
                <div className="footer-bottom-main-copyright">
                    <p>Copyright © 2022 elecstore. All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer