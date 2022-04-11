import React from 'react'
import './ProductMenuItem.css'
import {Link} from 'react-router-dom'
import Button from '../../../UI/Button/Button'
const ProductMenuItem = ({data}) => {
  return (
    <div className={`productMenuItem-container`}>
        <div className={`productMenuItem-top`}>
            <div className="productMenuItem-title">
                <h4>{data.name}</h4>
            </div>
            <div className="productMenuItem-price">
                <span>From</span>
                <span className="productMenuItem-price-current">${data.currentPrice}</span>
                <span className="productMenuItem-price-old">${data.oldPrice}</span>
            </div>
            <div className="productMenuItem-actions">
                <Link to={`/products/${data.name.toLowerCase()}`}><Button className='productMenuItem-actions-btn'>Shop Now</Button></Link>
            </div>
        </div>
        <div className="productMenuItem-bottom">
            <div className="productMenuItem-bottom-img">
                <img src={data.img} alt="product" />
            </div>
        </div>
    </div>
  )
}

export default ProductMenuItem