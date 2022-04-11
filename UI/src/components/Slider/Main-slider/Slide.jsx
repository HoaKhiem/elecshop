import React from 'react'
import Button from '../../UI/Button/Button'
import './Slide.css'
import {Link} from 'react-router-dom'
const Slide = ({index,className, data, current}) => {
    return (
    <div style={{transform:`translateX(${(index - current) * 100}%)`}} className={`slide ${className}`}>
        <div className="slide-image">
            <img src={data.img} alt="slide-image" />
        </div>
        <div className="slide-blur"></div>
        <div className="slide-main">
            <div className="slide-title">
                <h4>{data.title}</h4>
            </div>
            <div className="slide-price">
                <p className="slide-price-current">${data.currentPrice}</p> <span className="slide-price-old">${data.oldPrice}</span>
            </div>
            <div className="slide-actions">
                <Link to='/services/'> <Button className='slide-btn slide-actions-btn1'>Get started</Button></Link>
                <Link to='/services'><Button className='slide-btn slide-actions-btn2'>Learn more <i className="fa-solid fa-angle-right slide-actions-icon"></i></Button></Link>
            </div>
        </div>
    </div>
  )
}

export default Slide