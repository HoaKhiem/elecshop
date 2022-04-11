import ServicesItem from './ServicesItem'
const Services = () => {
  return (
    <div className='services'>
        <div className="services-container">
          <ServicesItem/>
          <ServicesItem/>
          <ServicesItem/>
          <ServicesItem/>
        </div>
        <div className="services-actions">
          <div className="services-actions-button">View All</div>
        </div>
    </div>
  )
}

export default Services