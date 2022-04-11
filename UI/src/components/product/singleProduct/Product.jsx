import React from 'react'
import './Product.css'
import Button from '../../UI/Button/Button'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
const ProductColor = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-shadow: inset 0px 1px 1px rgba(0,0,0,0.25);
  background-color: ${props => props.color};
  margin: 0 3px;
`
const Product = ({data, className}) => {
  return (
    <div className={`product ${className}`}>
      {
        (data.tag.length > 0 || data.quantity === 0) && <div className="product-tag">{data.quantity > 0 ? <p>{data.tag}</p> : <p>SOLD OUT</p>}</div>
      }
      <div className="product-image">
        <Link to={`/products/details?id=${data.id}`} className='product-link-black'><img src={data.img} alt="product-image" /></Link>
      </div>
      <div className="product-colors">
       {
         data.colors.length > 0 && data.colors.map(color => <ProductColor key={color} color={color}/>)
       }
      </div>
      <div className="product-name">
        <div className="product-name-name">
          <Link to={`/products/details?id=${data.id}`} className='product-link-black'><h4>{data.name}</h4></Link>
        </div>
        {data.ram > 0 &&
          <div className="product-name-ram">
            <span>{data.ram}GB</span>
          </div>
        }
      </div>
      <div className="product-price">
        <p className="product-price-current">${data.currentPrice}</p>
        <div className="product-price-old">${data.oldPrice}</div>
      </div>
      <div className="product-actions">
        <Link to={`/products/select/${data.id}`} className='product-link'><Button className='product-actions-btn'>Buy Now</Button></Link>
      </div>
    </div>
  )
}

export default Product