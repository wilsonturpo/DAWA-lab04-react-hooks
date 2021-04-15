import React, { useState } from 'react';

const Button = (props) => {

  return (
    <button 
        style={{margin:10}} 
        onClick={props.value}
        className={props.color}
    >{props.text}</button>
  )
}

export default Button;
