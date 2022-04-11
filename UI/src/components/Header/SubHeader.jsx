import React from 'react'
import grid from './grid.png'
import './SubHeader.css'
import {NavLink} from 'react-router-dom'
const SubHeader = ({type, isResponsive}) => {
    switch(type){
        case "product":
            return (
                <div className={`sub-header ${isResponsive && 'sub-header-responsive'}`}>
                    <ul className={`sub-header-list ${isResponsive && 'sub-header-list-responsive'}`}>
                        <li className="sub-header-item">
                           <NavLink activeClassName='sub-header-active' className="sub-link" to="/products">
                                <img src={grid} alt="sub-header-grid-icon" />
                            </NavLink>
                        </li>
                        <li className="sub-header-item">
                            <NavLink activeClassName='sub-header-active' className="sub-link" to="/products/iphone">iPhone</NavLink>
                        </li>
                        <li className="sub-header-item">
                            <NavLink activeClassName='sub-header-active' className="sub-link" to="/products/ipad">iPad</NavLink>
                        </li>
                        <li className="sub-header-item">
                            <NavLink activeClassName='sub-header-active' className="sub-link" to="/products/mac">Mac</NavLink>
                        </li>
                        <li className="sub-header-item">
                            <NavLink activeClassName='sub-header-active' className="sub-link" to="/products/watch">Watch</NavLink>
                        </li>
                        <li className="sub-header-item">
                            <NavLink activeClassName='sub-header-active' className="sub-link" to="/products/airpods">AirPods</NavLink>
                        </li>
                        <li className="sub-header-item">
                            <NavLink activeClassName='sub-header-active' className="sub-link" to="/products/accessories">Accessories</NavLink>
                        </li>
                    </ul>
                </div>
            )
        case "service":
            return (
                <div className={`sub-header ${isResponsive && 'sub-header-responsive'}`}>
                    <ul className={`sub-header-list ${isResponsive && 'sub-header-list-responsive'}`}>
                        <li className="sub-header-item">
                            <NavLink activeClassName='sub-header-active' className="sub-link" to="/services/repair">Repair</NavLink>
                        </li>
                        <li className="sub-header-item">
                            <NavLink activeClassName='sub-header-active' className="sub-link" to="/services/warranty">Warranty</NavLink>
                        </li>
                        <li className="sub-header-item">
                            <NavLink activeClassName='sub-header-active' className="sub-link" to="/services/warranty">Apple card</NavLink>
                        </li>
                    </ul>
                </div>
            )
    }
}

export default SubHeader