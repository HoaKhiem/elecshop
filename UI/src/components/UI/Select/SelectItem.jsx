import React from 'react'
import './Select.css'
const SelectItem = ({text, className, onClick}) => {
  return (
    <div onClick={onClick} className={`select-item ${className}`}>{text}</div>
  )
}

export default SelectItem