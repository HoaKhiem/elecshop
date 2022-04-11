import React from 'react'
import './SelectSlide.css'
const SelectSlide = ({img}) => {
  return (
    <div className={`select-slide-container`}>
        <div className="select-slide-img">
            <img src={img} alt='Product image' />
        </div>
    </div>
  )
}

export default SelectSlide