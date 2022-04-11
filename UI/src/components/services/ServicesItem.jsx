import React from 'react'
import {Link} from 'react-router-dom'
import './Services.css'
const ServicesItem = () => {
  return (
    <div className='services-item'>
        <div className="services-item-img">
            <img src="https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="services-item-image" />
        </div>
        <div className="services-item-content">
            <div className="services-item-content-header">
                <i className="fa-brands fa-apple services-item-content-header-icon"></i>
                <p>Music</p>
            </div>
            <div className="services-item-content-title">
                <h4>90 mlilion songs in your phone</h4>
            </div>
            <div className="services-item-content-action">
                <Link className="services-item-content-action-link" to='/services/abc'>
                    <span className="services-item-content-action-link-text">Lean more</span>
                    <i className="fa-solid fa-angle-right services-item-content-action-link-icon"></i>
                </Link>
            </div>
        </div>
        <div className="services-item-logo">
            <img src="https://icon-library.com/images/android-music-icon/android-music-icon-0.jpg" alt="services-item-logo" />
        </div>
        <div className="services-item-blur"></div>
    </div>
  )
}

export default ServicesItem