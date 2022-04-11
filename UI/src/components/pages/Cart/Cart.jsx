import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../UI/Button/Button'
import './Cart.css'
import CartItem from './CartItem'
const Cart = () => {
  return (
    <div className='cart'>
       <div className="cart-header">
          <h5>Review your bag</h5>
        </div>
        <ul className="cart-list">
          <CartItem select={true}/>
          <CartItem select={true}/>
        </ul>
        <div className="cart-footer-container">
          <div className="cart-footer">
            <div className="cart-footer-prices">
              <div className="cart-footer-price">
                <div className="cart-footer-prices-left">
                  <p>Subtotal</p>
                </div>
                <div className="cart-footer-prices-right">
                  $ <p>2,716.95</p>
                </div>
              </div>
              <div className="cart-footer-price">
                <div className="cart-footer-prices-left">
                  <p>Shipping</p>
                </div>
                <div className="cart-footer-prices-right">
                  <p>FREE</p>
                </div>
              </div>
            </div>
            <div className="cart-footer-total">
              <div className="cart-footer-total-left">
                <h5>Total</h5>
              </div>
              <div className="cart-footer-total-right">
                <h5>$</h5><h5 className='cart-footer-total-right-price'>2,716.95</h5>
              </div>
            </div>
            <div className="cart-footer-action">
              <Link to='/payment?cart=123' className='cart-link'><Button className='cart-footer-btn'>Checkout</Button></Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cart