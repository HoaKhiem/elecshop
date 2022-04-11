import React from 'react'
import './About.css'
import CountUp from 'react-countup'
import Skeleton from '../../UI/Loading/Skeleton/Skeleton';
const About = () => {
  return (
    <div className='about'>
      {/* <Skeleton component='about'/> */}
      <div className="about-header">
        <h4>About us</h4>
      </div>
      <div className="about-section about-section-1">
        <div className="about-section-1-title">
          <h5>We do the right thing, even when it’s not easy</h5>
        </div>
        <div className="about-section-1-content">
          <p>
          Elecstore conducts business ethically, honestly, 
          and in full compliance with the law. We believe 
          that how we conduct ourselves is as critical to 
          Apple’s success as making the best products in the 
          world. Our Business Conduct and Compliance policies 
          are foundational to how we do business and how we put 
          our values into practice every day.
          </p>
        </div>
      </div>
      <div className="about-section about-section-2">
        <div className="about-section-2-left">
          <div className="about-section-2-header">
            <h5>Action plans for every line of business.</h5>
          </div>
          <div className="about-section-2-content">
            Accountability measures across the company
             allow us to track progress and build a foundation 
             for lasting and durable change. And we are 
             listening to employee feedback, amplifying 
             underrepresented voices, and taking action to 
             meet our teams’ needs.
          </div>
        </div>
        <div className="about-section-2-right">
          <div className="about-section-2-img">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="about-section-2-img" />
          </div>
        </div>
      </div>
      <div className="about-section about-section-3">
        <ul className="about-section-3-list">
          <li className="about-section-3-item">
            <div className="about-section-3-title">
              <b>Holding ourselves accountable for progress.</b>
            </div>
            <div className="about-section-3-text">
              <p>
              From hiring to development and engagement, 
              we’re making sure every part of Apple is 
              increasing inclusion and representation.
              </p>
            </div>
          </li>
          <li className="about-section-3-item">
          <div className="about-section-3-title">
              <b>All managers take inclusive leadership training.</b>
            </div>
            <div className="about-section-3-text">
              <p>
              Equitable, inclusive experiences for all employees 
              begin with equipping our leaders with the resources 
              they need. And managers are offered expert-led courses 
              to support their ongoing education on topics including 
              race and justice, allyship, and more.
              </p>
            </div>
          </li>
          <li className="about-section-3-item">
          <div className="about-section-3-title">
              <b>Plans are reviewed and progress is tracked.</b>
            </div>
            <div className="about-section-3-text">
              <p>
              Inclusion and diversity measures are 
              built into our annual review process 
              for every leader, including those at the 
              highest levels of the company, to create 
              consistency in how we drive and track 
              progress.
              </p>
            </div>
          </li>
          <li className="about-section-3-item">
          <div className="about-section-3-title">
              <b>Employee feedback is put into action.</b>
            </div>
            <div className="about-section-3-text">
              <p>
              Our people are at the heart of our progress. 
              Their voices and ideas drive innovation in 
              everything we do — from informing racial 
              justice initiatives to the inclusive benefits 
              that support employees of all backgrounds 
              through every life stage.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="about-section-4">
        <div className="about-section-4-left">
          <div className="about-section-4-image about-section-4-image-1">
            <img src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80" alt="about-image" />
          </div>
          <div className="about-section-4-image about-section-4-image-2">
            <img src="https://images.unsplash.com/photo-1512439408685-2e399291a4e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=795&q=80" alt="about-image" />
          </div>
        </div>
        <div className="about-section-4-right">
          <div className="about-section-4-image about-section-4-image-3">
            <img src="https://images.unsplash.com/photo-1603714228681-b399854b8f80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80" alt="about-image" />
          </div>
          <div className="about-section-4-image about-section-4-image-4">
            <img src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="about-image" />
          </div>
        </div>
        <div className="about-section-4-content">
          <div className="about-section-4-title">
            <h4>
              Hiring practices with the highest standards.
            </h4>
          </div>
          <ul className="about-section-4-list">
            <li className="about-section-4-item">
              <div className="about-section-4-item-title">
                <b>True innovation takes many perspectives.</b>
              </div>
              <div className="about-section-4-item-text">
                <p> 
                To create products for everyone in the world, 
                we need a workforce with different backgrounds 
                and experiences. And we’re committed to far more.
                </p>
              </div>
            </li>
            <li className="about-section-4-item">
              <div className="about-section-4-item-title">
                <b>More robust diversity recruiting efforts for R&D and leadership.</b>
              </div>
              <div className="about-section-4-item-text">
                <p> 
                We are working to accelerate progress in 
                diversity hiring and recruiting across 
                technical, engineering, and leadership roles.
                </p>
              </div>
            </li>
            <li className="about-section-4-item">
              <div className="about-section-4-item-title">
                <b>Inclusive hiring standards and processes.</b>
              </div>
              <div className="about-section-4-item-text">
                <p> 
                We’re building more diverse interview panels 
                and candidate slates to ensure that diversity
                is reflected at every stage of the hiring 
                process.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="about-section about-section-5">
        <div className="about-section-5-item about-section-5-left">
          <div className="about-section-5-title">
            <h4><CountUp start={0} end={500} duration={3}/>K</h4>
          </div>
          <div className="about-section-5-text">
            <p>Number of iPhone, iPad, Airpods devices sold every year</p>
          </div>
        </div>
        <div className="about-section-5-item about-section-5-center">
          <div className="about-section-5-title">
            <h4><CountUp start={0} end={99} duration={3}/>%</h4>
          </div>
          <div className="about-section-5-text">
            <p>Customers leave good comments about products and services</p>
          </div>
        </div>
        <div className="about-section-5-item about-section-5-right">
          <div className="about-section-5-title">
            <h4><CountUp end={24} duration={3}/>/<CountUp end={7} duration={3}/></h4>
          </div>
          <div className="about-section-5-text">
            <p>Repair and maintenance services operate regularly to serve customers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About