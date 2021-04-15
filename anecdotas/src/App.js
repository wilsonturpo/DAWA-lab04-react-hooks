import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const handleNext = () => {
    const randomNumber = Math.floor(Math.random() * props.anecdotes.length);
    setSelected(randomNumber)
  }

  return (
    <div style={{margin:20}}>
      {props.anecdotes[selected]}
      <br></br> <br></br>
      <button
        onClick={handleNext}>
        Next Anecdote
      </button>
    </div>
  )
}

export default App;
