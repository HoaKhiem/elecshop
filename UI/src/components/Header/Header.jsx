import React, { useState } from 'react'
import logo from './logo.png'
import './Header.css'
import Button from '../UI/Button/Button'
import {NavLink, Link} from 'react-router-dom'
import SubHeader from './SubHeader'
const Header = () => {
    //fake login
    const isLoggedIn = false;
    //set State for manage two sub-headers
    const [isOpenProductSubHeader, setIsOpenProductSubHeader] = useState(false);
    const [isOpenServiceSubHeader, setIsOpenServiceSubHeader] = useState(false);
    const [productHeaderIcon, setProductHeaderIcon] = useState('fa-angle-down');
    const [serviceHeaderIcon, setServiceHeaderIcon] = useState('fa-angle-down');
    const [isResponsive, setIsResponsive] = useState(false);
    //function to handler display product sub-header
    const productSubHeaderVisibleHander = () => {
        //first, change arrow icon on main-heaer
        if(productHeaderIcon === 'fa-angle-down'){
            setProductHeaderIcon('fa-angle-up')
        }else{
            setProductHeaderIcon('fa-angle-down');
        }
        //logic to toggle the sub-header
        if(!isOpenServiceSubHeader){
            setIsOpenProductSubHeader(!isOpenProductSubHeader)
        }else{
            setIsOpenServiceSubHeader(false);
            setIsOpenProductSubHeader(!isOpenProductSubHeader);
            setServiceHeaderIcon('fa-angle-down');
        }
    }
    //function to handler display service sub-header (similiar to handler display product sub-header)
    const serviceSubHeaderVisibleHander = () => {
        if(serviceHeaderIcon === 'fa-angle-down'){
            setServiceHeaderIcon('fa-angle-up')
        }else{
            setServiceHeaderIcon('fa-angle-down');
        }
        if(!isOpenProductSubHeader){
            setIsOpenServiceSubHeader(!isOpenServiceSubHeader);
        }else{
            setIsOpenProductSubHeader(false);
            setIsOpenServiceSubHeader(!isOpenServiceSubHeader);
            setProductHeaderIcon('fa-angle-down');
        }
    }
    const setResponsiveHandler = () => {
        setIsResponsive(!isResponsive);
    }
    return <React.Fragment>
    <header className={`header ${isResponsive && 'responsive'}`}>
        {
            !isResponsive && <div className="nav-hide-logo">
                <NavLink className="link" to="/"><img src={logo} alt="logo" /></NavLink>
            </div>
        }
        <ul className={`header-left ${isResponsive && 'header-left-responsive'}`}>
            <li className="header-left-item header-left-logo">
                <NavLink className="link" to="/"><img src={logo} alt="logo" /></NavLink>
            </li>
            <li className="header-left-item header-left-link">
                <NavLink activeClassName='active' className="link" to="/products">Product</NavLink>
                <i className={`fa-solid ${productHeaderIcon} header-left-icon`} onClick={productSubHeaderVisibleHander}></i>
            </li>
            <li className="header-left-item header-left-link">
                <NavLink activeClassName='active' className="link" to="/services">Services</NavLink>
                <i className={`fa-solid ${serviceHeaderIcon} header-left-icon`} onClick={serviceSubHeaderVisibleHander}></i>
            </li>
            <li className="header-left-item header-left-link">
                <NavLink activeClassName='active' className="link" to="/about">About Us</NavLink>
            </li>
            <li className="header-left-item header-left-link">
                <NavLink activeClassName='active' className="link" to="/support">Support</NavLink>
            </li>
        </ul>
        <ul className={`header-right ${isResponsive && 'header-right-responsive'}`}>
            <li className="header-right-item">
                <form className="header-right-form">
                    <input type="text" autoComplete='off' placeholder='Search...' name="search" id="search" />
                    <button className='header-right-form-submit' type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </li>
            {
                //is user is logged in, we display cart icon and user image instaed of login and signup button
                isLoggedIn && <React.Fragment>
                <li className="header-right-item header-right-cart">
                    <Link className='link' to="/cart">
                        <i className="fa-solid fa-bag-shopping header-right-bag"></i>
                        <span className='header-right-bag-noti'>3</span>
                    </Link>
                </li>
                <li className="header-right-item">
                    <Link className='link' to="/user">
                        <img className='header-right-user' src="/images/avt.jpg" alt="user-avatar" />
                    </Link>
                </li>
             </React.Fragment>
            }
            {
                //is user is logged in, show them login and signup button
                !isLoggedIn && <React.Fragment>
                    <li className="header-right-item">
                        <Link className='link' to="/login">
                            <Button className="header-login-btn">
                               Login
                            </Button>
                        </Link>
                    </li>
                    <li className="header-right-item">
                        <Link to="/signup" className='link'>
                            <Button className="header-signup-btn">
                                Sign Up
                            </Button>
                        </Link>
                    </li>
                </React.Fragment>
            }
        </ul>
        <div className="header-bars">
            <i onClick={setResponsiveHandler} className={!isResponsive ?`fa-solid fa-bars-staggered`: `fa-solid fa-xmark`}></i>
        </div>
    </header>
    {/* --------------------Display sub-header based on condition ------------------------------------*/}
    {
        isOpenProductSubHeader && <SubHeader isResponsive={isResponsive} type="product"/>
    }
    {
        isOpenServiceSubHeader && <SubHeader isResponsive={isResponsive} type="service"/>
    }
    </React.Fragment>
}

export default Header