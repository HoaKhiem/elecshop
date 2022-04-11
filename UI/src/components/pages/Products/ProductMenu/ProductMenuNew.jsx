import React from 'react'
import {Link} from 'react-router-dom'
import './ProductMenuNew.css'
const ProductMenuNew = ({data}) => {
  return (
    <div className="productMenu-new-container">
        <ul className="productMenu-new-list">
            <li className="productMenu-new-item">
                <div className="productNew-top">
                    <div className="productNew-top-title">
                        <h4>{data.name}</h4>
                    </div>
                    <div className="productNew-top-description">
                        <p>{data.description}</p>
                    </div>
                    <div className="productNew-top-price">
                        <p className="productNew-top-price-current">${data.currentPrice}</p>
                        <p className="productNew-top-price-old">${data.oldPrice}</p>
                    </div>
                    <div className="productNew-top-actions">
                        <Link className='productNew-top-link' to={`/products/select/${data.id}`}><span className='productNew-top-actions-text'>Buy now</span><i className="fa-solid fa-chevron-right"></i></Link>
                    </div>
                </div>
                <div className="productNew-bottom">
                    <div className="productNew-bottom-img">
                        <img src={data.img} alt="product" />
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default ProductMenuNew