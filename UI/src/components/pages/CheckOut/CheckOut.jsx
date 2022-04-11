import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import Select from '../../UI/Select/Select'
import SelectItem from '../../UI/Select/SelectItem'
import CartItem from '../Cart/CartItem'
import axios from 'axios'
import "./CheckOut.css"
import Button from '../../UI/Button/Button'
const CheckOut = () => {
  //fake logged in
  const loggedIn = true;
  const [addLocationMode, setAddloCationMode] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [provine, setProvine] = useState(null);
  const [district, setDistrict] = useState(null);
  const [ward, setWard] = useState('Ward');
  //set selected payment medhod
  const [selectedPayment, setSelectedPayment] = useState('');

  //Visa expies end
  const visaExpies1Ref = useRef('');
  const visaExpies2 = useRef('');
  const [visaExpies_1, setVisExpies_1] = useState('');
  const [visaExpies_2, setVisaExpies_2] = useState('');

  //refs and states to contain user delivery information
  const [name, setName] = useState('');
  const nameRef = useRef('');
  const [phone, setPhone] = useState('');
  const phoneRef = useRef('');
  const [specificAddress, setSpecificAddress] = useState('');
  const specificAddressRef = useRef('');
  
  //refs and states to contain user payment information
  const [nameOnCard, setNameOnCart] = useState('');
  const nameOnCardRef = useRef('');
  const [cardNumber, setCardNumber] = useState('');
  const cardNumberref = useRef('');
  const [secureCode, setSecureCode] = useState('');
  const secureCodeRef = useRef('');
  const [zipCode, setZipCode] = useState('');
  const zipCodeRef = useRef();

  //fetch all provinces
  useEffect(() => {
    const getAllProvinces = async () => {
      const results = await axios.get('https://provinces.open-api.vn/api/?depth=3');
      setProvinces(results.data);
    }
    getAllProvinces();
  }, [])
  //visaExpies change handler fucntion
  const visaExpiesChangeHandler = (index) => {
    switch(index){
      case 1:
        const expies = visaExpies1Ref.current.value.trim();
        if(expies.length === 2){
          visaExpies2.current.focus();
          setVisExpies_1(expies);
        }
        break;
      case 2:
        const expies_2 = visaExpies2.current.value.trim();
        if(expies_2.length === 2){
          visaExpies2.current.blur();
          setVisaExpies_2(expies_2);
        }
        break;
    }
  }
  return (
    <div className="checkout">
      <div className='checkout-header'>
        <h5>Checkout</h5>
        <p>$2,199.00</p>
      </div>
      <ul className="checkout-list">
        <CartItem select={false}/>
        <CartItem select={false}/>
      </ul>
      <div className="checkout-payment">
        <div className="checkout-payment-header">
          <h5>Payments:</h5>
        </div>
        <div className="checkout-options">
          <div className={`checkout-option ${selectedPayment === 'visa' && 'checkout-active'}`} onClick={() => setSelectedPayment('visa')}>
              <i className="fa-brands fa-cc-visa visa-icon"></i>
              <p>Pay with Visa</p>
          </div>
          <div className={`checkout-option ${selectedPayment === 'paypal' && 'checkout-active'}`} onClick={() => setSelectedPayment('paypal')}>
            <i className="fa-brands fa-cc-paypal paypal-icon"></i>
              <p>Pay with Paypal</p>
          </div>
          <div className={`checkout-option ${selectedPayment === 'momo' && 'checkout-active'}`} onClick={() => setSelectedPayment('momo')}>
              <img src="/images/momo.png" alt="momo" />
              <p>Pay with MoMo</p>
          </div>
          <div className={`checkout-option ${selectedPayment === 'afterreceived' && 'checkout-active'}`} onClick={() => setSelectedPayment('afterreceived')}>
              <img src="/images/delivery.svg" alt="delivery" />
              <p>Pay after received</p>
          </div>
        </div>
        {(selectedPayment === 'visa' || selectedPayment === 'paypal') && <div className="checkout-payments">
          <div className="checkout-payment-visa">
            <div className="checkout-payment-visa-left">
              <form className="checkout-payment-visa-left-form">
                <div className="checkout-payment-visa-left-form-row">
                  <label htmlFor="visa-name">Name on card:</label>
                  <input type="text" name="visa-name" id="visa-name" className='checkout-input'/>
                </div>
                <div className="checkout-payment-visa-left-form-row">
                  <label htmlFor="visa-name">Card number:</label>
                  <input type="text" name="visa-number" id="visa-number" className='checkout-input'/>
                </div>
                <div className="checkout-payment-visa-left-form-row checkout-payment-visa-left-form-row-hoz">
                  <div className="checkout-payment-visa-left-form-row-left">
                    <label htmlFor="visa-expies">Expies end:</label>
                    <div className="visa-expies-inputs">
                      <input onChange={() => visaExpiesChangeHandler(1)} type="number" ref={visaExpies1Ref}/>
                      /
                      <input onChange={() => visaExpiesChangeHandler(2)} type="number" ref={visaExpies2}/>
                    </div>
                  </div>
                  <div className="checkout-payment-visa-left-form-row-right">
                    <label htmlFor="visa-secure">Secure code:</label>
                    <input type="number" name="visa-secure" id="visa-secure" className='checkout-input'/>
                  </div>
                </div>
                <div className="checkout-payment-visa-left-form-row">
                  <label htmlFor="visa-name">Zip/Postal code:</label>
                  <input type="number" name="visa-number" id="visa-number" className='checkout-input'/>
                </div>
              </form>
            </div>
            <div className="checkout-payment-visa-right">
              <div className="checkout-payment-visa-right-img">
                <img src="/images/visa-font.png" alt="" />
              </div>
              <div className="checkout-payment-visa-right-img">
                <img src="/images/visa-back.png" alt="" />
              </div>
            </div>
          </div>
        </div>}
      </div>
      <div className="checkout-infor">
        <div className="checkout-infor-header">
          <h5>Delivery information: </h5>
        </div>
        <div className="checkout-options">
          <ul className="checkout-options-list">
            {loggedIn && <li className="checkout-options-item">
              <div className="checkout-options-item-top">
                <div className="checkout-options-item-row">
                  <div className="checkout-options-item-icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className="checkout-options-item-info">
                    <p>Dinh Van Khiem</p>
                  </div>
                </div>
                <div className="checkout-options-item-row">
                  <div className="checkout-options-item-icon">
                    <i className="fa-solid fa-square-phone"></i>
                  </div>
                  <div className="checkout-options-item-info">
                    <p>0869271134</p>
                  </div>
                </div>
              </div>
              <div className="checkout-options-item-bottom">
                <div className="checkout-options-item-row">
                  <div className="checkout-options-item-icon">
                    <i className="fa-solid fa-location-pin"></i>
                  </div>
                  <div className="checkout-options-item-info">
                    <p>40B - Xóm Hượp - Vân Sơn - Tân Lạc - Hòa Bình</p>
                  </div>
                </div>
              </div>
            </li>}
            {(!loggedIn || addLocationMode) && <div className="checkout-options-item checkout-options-item-location">
              <div className="checkout-form">
                <div className="checkout-row">
                  <label htmlFor="name">Your full name:</label>
                  <input type="text" name="name" id="name" className="checkout-input" />
                </div>
                <div className="checkout-row">
                  <label htmlFor="phone">Your phone number:</label>
                  <input type="number" name="phone" id="phone" className="checkout-input" />
                </div>
                <div className="checkout-row">
                  <div className="checkout-row-header">
                    <p>Choose your location</p>
                  </div>
                  <div className="checkout-row-provinces">
                    <div className="checkout-row-provinces-item">
                      <Select textSize='12px' className='checkout-row-select' text={provine ? provine : 'Provine'}>
                        {
                          provinces.map(provine => <SelectItem key={provine.code} onClick ={() => setProvine(provine.name)} className='checkout-row-select-item' text={provine.name}></SelectItem>)
                        }
                      </Select>
                    </div>
                    <div className="checkout-row-provinces-item">
                      <Select textSize='12px' className='checkout-row-select' text={district ? district : 'District'}>
                        {
                          provine && provinces.filter(prv => prv.name === provine)[0].districts.map(pr => <SelectItem onClick={() => setDistrict(pr.name)} key={pr.code} text={pr.name} className='checkout-row-select-item'/>)
                        }
                      </Select>
                    </div>
                    <div className="checkout-row-provinces-item">
                      <Select textSize='12px' className='checkout-row-select' text={ward ? ward : 'Ward'}>
                        {
                          district && provinces.filter(prv => prv.name === provine)[0].districts.filter(pr => pr.name === district)[0].wards.map(wa => <SelectItem className='checkout-row-select-item' onClick={() => setWard(wa.name)} key={wa.code} text={wa.name}/>)
                        }
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="checkout-row">
                  <label htmlFor="phone">Specific address:</label>
                  <input type="number" name="phone" id="phone" className="checkout-input" placeholder='Ex: house number, village...' />
                </div>
                {loggedIn && <div className="checkout-row checkout-row-btn">
                    <Button onClick={() => setAddloCationMode(false)} className='checkout-btn checkout-btn-cancel'>Cancel</Button>
                    <Button className='checkout-btn checkout-btn-save'>Save</Button>
                </div>}
              </div>
            </div>}
            {(loggedIn && !addLocationMode) && <div onClick={() => setAddloCationMode(!addLocationMode)} className="checkout-options-item checkout-options-item-add">
              <div className="checkout-options-icon checkout-options-item-add-icon">
                <i className="fa-solid fa-circle-plus"></i>
              </div>
              <div className="checkout-options-title checkout-options-item-add-text">
                <h5>ADD New Location</h5>
              </div>
            </div>}
          </ul>
        </div>
      </div>
      <div className="checkout-action">
        <Button className='checkout-action-btn disabled'>Order <i className="fa-solid fa-arrow-right-long"></i></Button>
      </div>
    </div>
  )
}

export default CheckOut