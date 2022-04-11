import React, { useState } from 'react'
import './Select.css'
const Select = (props) => {
    const [dropItems, setDropItems] = useState(false);
    const closeDropdown = () => {
        setDropItems(!dropItems);
    }
  return (
    <div className={`select-container ${props.className}`}>
        <div onClick={() => setDropItems(!dropItems)} className='select'>
            <div className="select-content">
                <div className="select-title">
                    <p style={{fontSize:props.textSize}}>{props.text}</p>
                </div>
                <div className="select-icon">
                    <i className={`fa-solid fa-chevron-${dropItems ? 'up':'down'}`}></i>
                </div>
            </div>
        </div>
        {
            dropItems && <div onClick={closeDropdown} className="select-items">{props.children}</div>
        }
    </div>
  )
}

export default Select