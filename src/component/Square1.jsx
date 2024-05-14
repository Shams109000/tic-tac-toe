import React from 'react'
import './tic.css'
function Square1(props) {
  return (
    <div className='box'onClick={props.onClick}>
        {props.value}
        </div>
  )
}

export default Square1