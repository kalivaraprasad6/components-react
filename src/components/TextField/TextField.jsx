import React from 'react'
import './TextField.css'
const TextField = (props) => {
  return (
    <div className='textField'>
      <span className='inputLabel'>{props.inputLabel}</span>
      <input className='inputField' type="text" name="name"/>
    </div>
  )
}

export default TextField
