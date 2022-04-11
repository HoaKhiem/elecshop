import React from 'react'
import './Services.css'
import Button from '../../UI/Button/Button'
import {Link} from 'react-router-dom'
const Services = () => {
  return (
    <div className='services-container'>
      <section className="services-section services-section-intro">
        <div className="services-section-intro-img">
          <img src="/images/girl-on-happiness.jpg" alt="service-main-image" />
        </div>
        <div className="services-section-content">
          <h4 className="services-section-title">Elec-store Services</h4>
          <p className="services-section-des">Make your happiness</p>
        </div>
      </section>
      <section className="services-section services-section-card">
        <div className="services-img services-section-card-img">
          <img src="/images/service-appleCard.jpg" alt="services-card" />
        </div>
        <div className="services-section-card-content">
          <p className="services-section-card-brand"><i className="fa-brands fa-apple"></i>Card</p>
          <h5 className="services-section-card-title">Easier Life</h5>
          <div className="services-section-card-action">
            <Link to='/services/card'><Button className='services-section-card-btn'>Get started <i className="fa-solid fa-angle-right"></i></Button></Link>
          </div>
        </div>
      </section>
      <div className="services-intro">
        <div className="services-intro-container services-intro-card">
          <div className="services-intro-card-title">
            <h3>The simplicity of Apple</h3>
            <h3>In a credit card.</h3>
          </div>
          <div className="services-intro-card-content">
            <p>With Apple Card, we completely reinvented
              the credit card. Your information lives on 
              your iPhone, beautifully laid out and easy 
              to understand. We eliminated fees1 and 
              built tools to help you pay less interest,
              and you can apply in minutes to see if you
              are approved with no impact to your credit 
              score.2 Advanced technologies like Face ID, 
              Touch ID, and Apple Pay give you a new 
              level of privacy and security. And with 
              every purchase you get Daily Cash back. 
              Apple Card. It’s everything a credit card 
              should be.</p>
          </div>
        </div>
        <div className="services-intro-container services-intro-card-horizontal">
          <div className="services-intro-card-left">
            <div className="services-intro-card-title">
              <h4>Money saving</h4>
            </div>
            <div className="services-intro-card-text">
              <p>Get up to 5% Daily Cash</p>
              <p>back when you</p>
              <p>shop at Elec Store</p>
            </div>
          </div>
          <div className="services-intro-card-right">
            <div className="services-intro-card-right-img">
              <img src="/images/apple-card-01.jpg" alt="card" />
            </div>
          </div>
        </div>
        <div className="services-intro-container services-intro-card-horizontal services-intro-card-horizontal-reverse">
          <div className="services-intro-card-left services-intro-card-left-2">
            <div className="services-intro-card-title services-intro-card-title-2">
              <h4>No Plastic, just Titanium</h4>
            </div>
            <div className="services-intro-card-link">
              <Link to='/services/card' className='services-card-link-link'>Start now <i className="fa-solid fa-chevron-right"></i></Link>
            </div>
          </div>
          <div className="services-intro-card-right services-intro-card-right-2">
            <div className="services-intro-card-right-img-2">
              <img src="/images/apple-card-02.png" alt="card" />
            </div>
          </div>
        </div>
      </div>
      <section className="services-section services-section-repair">
        <div className="services-section-intro-img">
          <img src="/images/service-repair.jpg" alt="service-main-image" />
        </div>
        <div className="services-section-content">
          <h4 className="services-section-title">Repair Services</h4>
          <p className="services-section-des">Oh, it's new again</p>
          <div className="services-section-card-action">
            <Link to='/services/repair/book'><Button className='services-section-card-btn'>Get started <i className="fa-solid fa-angle-right"></i></Button></Link>
          </div>
        </div>
      </section>
      <div className="services-intro">
        <div className="services-intro-container services-intro-repair">
          <div className="services-intro-repair-header">
            <h4>What we can do?</h4>
          </div>
          <ul className="services-intro-repair-menu">
            <li className="services-intro-repair-item">
              <div className="services-intro-repair-item-title">
                <p>Software Repair</p>
              </div>
              <div className="services-intro-repair-item-icon">
                <i className="fa-solid fa-bug-slash"></i>
              </div>
            </li>
            <li className="services-intro-repair-item">
              <div className="services-intro-repair-item-title">
                <p>Equipment Repair</p>
              </div>
              <div className="services-intro-repair-item-icon">
                <i className="fa-solid fa-toolbox"></i>
              </div>
            </li>
            <li className="services-intro-repair-item">
              <div className="services-intro-repair-item-title">
                <p>Supplies Replacement</p>
              </div>
              <div className="services-intro-repair-item-icon">
                <i className="fa-solid fa-screwdriver-wrench"></i>
              </div>
            </li>
          </ul>
        </div>
        <div className="services-intro-container services-intro-repair-sub">
          <div className="services-intro-repair-sub-left">
            <div className="services-intro-repair-sub-left-title">
              <h4>Things are great again</h4>
            </div>
            <div className="services-intro-repair-sub-left-text">
              <p>With a team of experienced instructors,</p>
              <p>we guarantee your product will be</p>
              <p>repaired quickly and perfectly</p>
            </div>
            <div className="services-intro-repair-sub-left-action">
              <Link to='/services/repair' className='services-intro-repair-sub-left-link'>Book now <i className="fa-solid fa-chevron-right"></i></Link>
            </div>
          </div>
          <div className="services-intro-repair-sub-right">
            <div className="services-intro-repair-sub-right-img">
              <img src="/images/iphone-repair.png" alt="iphone repair" />
            </div>
          </div>
        </div>
      </div>
      <section className="services-section services-section-repair">
        <div className="services-section-intro-img">
          <img src="/images/service-warranty.jpg" alt="service-main-image" />
        </div>
        <div className="services-section-content">
          <h4 className="services-section-title">Warranty Services</h4>
          <p className="services-section-des">Your device, our responsibility</p>
          <div className="services-section-card-action">
            <Link to='/services/warranty/book'><Button className='services-section-card-btn'>Get started <i className="fa-solid fa-angle-right"></i></Button></Link>
          </div>
        </div>
      </section>
      <div className="services-intro">
        <div className="services-intro-container">
          <div className="services-intro-warranty-header">
            <h4>How can i get warranty?</h4>
          </div>
          <ul className="services-intro-warranty-steps">
            <li className="services-intro-warranty-step">
              <div className="services-intro-warranty-title">Checkout <Link className='services-intro-warranty-link' to='/services/warranty/policy'>Policy</Link></div>
              <div className="services-intro-warranty-icon">
                <i className="fa-solid fa-circle-check"></i>
              </div>
            </li>
            <li className="services-intro-warranty-step">
              <div className="services-intro-warranty-title">Visit Elec Store</div>
              <div className="services-intro-warranty-icon">
                <i className="fa-solid fa-truck"></i>
              </div>
            </li>
            <li className="services-intro-warranty-step">
              <div className="services-intro-warranty-title">Get yours back</div>
              <div className="services-intro-warranty-icon">
              <i className="fa-solid fa-face-smile-wink"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="services-intro-container">
        <div className="services-intro-warranty-header2">
          <h4>Always bring the best</h4>
          <h4>for you</h4>
        </div>
        <div className="services-intro-warranty-text">
          <p>With a high sense of responsibility,</p>
          <p> we will definitely bring you satisfaction</p>
          <div className="services-intro-warranty-link-container">
            <Link className='services-intro-warranty-link2' to='/services/warranty/booking'>Book now <i className="fa-solid fa-chevron-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services