import React from 'react'
import './Spinner.css'
const Spinner = ({width,height,color, size, spaceColor='transparent'}) => {
  return (
    <div style={{
        width: width,
        height: height
    }} className='spinner'>
        <div style={{
            border: `${size} solid ${color}`,
            borderLeft: `${size} solid ${spaceColor}`,
            borderRight: `${size} solid ${spaceColor}`
        }} className="spinner-circle"></div>
    </div>
  )
}

export default Spinner