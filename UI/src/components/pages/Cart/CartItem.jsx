import React from 'react'
import "./CartItem.css"
import Select from '../../UI/Select/Select'
import SelecItem from '../../UI/Select/SelectItem'
import Button from '../../UI/Button/Button'
import { Link } from 'react-router-dom'
const CartItem = ({select}) => {
  return (
    <li className='cartItem-container'>
      <div className="cartItem-left">
        <div className="cartItem-left-img">
          <img src="/images/iPadPro12.9-black.png" alt="" />
        </div>
      </div>
      <div className="cartItem-right">
        <div className="cartItem-right-header">
          <div className="cartItem-right-header-left">
            <div className="cart-right-header-left-name">
              <h4>iPad Pro M1 12.9 inch</h4>
            </div>
            <div className="cart-right-header-left-tags">
              <ul className="cart-right-header-left-tags-list">
                <li className="cart-right-header-left-tags-item">2TB</li>
                <li className="cart-right-header-left-tags-item">Wifi</li>
              </ul>
            </div>
          </div>
          <div className="cartItem-right-header-right">
            <div className="cartItem-right-header-right-title">
              <p>Price</p>
            </div>
            <div className="cartItem-right-header-right-price">
              $<h4>2.199,00</h4>
            </div>
          </div>
        </div>
        {select && <div className="cartItem-actions">
          <div className="cartItem-actions-left">
          <Select className='cartItem-actions-left-select' text='1'>
            <SelecItem className='cartItem-actions-left-select-item' text='1'/>
            <SelecItem className='cartItem-actions-left-select-item' text='2'/>
            <SelecItem className='cartItem-actions-left-select-item' text='3'/>
            <SelecItem className='cartItem-actions-left-select-item' text='4'/>
            <SelecItem className='cartItem-actions-left-select-item' text='5'/>
          </Select>
          </div>
          <div className="cartItem-actions-right">
            <div className="cartItem-actions-right-checkout">
              <Link to='/payment/:id' className='cart-link'><Button className='cartItem-actions-right-checkout-btn'>Checkout <i className="fa-solid fa-angle-right"></i></Button></Link>
            </div>
            <div className="cartItem-actions-right-remove">
              <p>Remove</p>
            </div>
          </div>
        </div>}
        {
          !select && <div className='cartItem-quantity'>
            <div className="cartItem-quantity-quantity">
              x<span>1</span>
            </div>
          </div>
        }
        <div className="cartItems-cost">
          <div className="cartItem-cost-ship">
            <div className="cartItem-cost-ship-icon">
              <i className="fa-solid fa-truck"></i>
            </div>
            <div className="cartItem-cost-ship-text">
              <p>Shipping</p>
            </div>
          </div>
          <div className="carttItem-cost-free">
            <p>FREE</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem