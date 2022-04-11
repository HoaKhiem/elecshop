import React from 'react'
import './Sales.css'
import '../UI/Button/Button'
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'
const SaleProduct = ({product}) => {
  return (
    <div className='sales-product'>
        <div className="sales-product-image">
            <img src={product.img} alt="sale-product-image" />
        </div>
        <div className="sales-product-name">
           {product.tag.length < 0 && <div className="sales-product-tag"><span>{product.tag}</span></div>}
            <Link to={`/products/${product.id}`} className='sales-product-link'><h4>{product.name}</h4></Link>
        </div>
        <div className="sales-product-memory">
            <div className="sales-product-memory-wrapper">
                <p>{product.ram > 0 && product.ram} GB</p>
            </div>
        </div>
        <div className="sales-product-price">
            <p>$297</p> <span>$390</span>
        </div>
        <div className="sales-product-actions">
            <Link to={`/products/select/${product.id}`}><Button className='sales-product-actions-btn'>Buy Now</Button></Link>
        </div>
    </div>
  )
}

export default SaleProduct