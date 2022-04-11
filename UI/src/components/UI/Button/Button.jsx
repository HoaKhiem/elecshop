import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
    <button type={props.type} onClick={props.onClick} className={props.className? `btn ${props.className}`:`btn`}>
        {props.children}
    </button>
  )
}

export default Button