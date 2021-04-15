import React, { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //Función de Good
  const handleGood = () =>{
    setGood( good + 1)
  }


  //Función de Neutral
  const handleNeutral = ()=>{
    setNeutral(neutral + 1)
  }

  //Función de Bad
  const handleBad = () =>{
    setBad( bad + 1)
  }


  return (
    <div style={{margin:20}}>
      <h1>Give feedback</h1>
      <div>
        <button onClick={handleGood} style={{margin:10}}>Good</button> 
        <button onClick={handleNeutral} style={{margin:10}}>Neutral</button>
        <button onClick={handleBad} style={{margin:10}}>Bad</button>
      </div>

      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  )
}

export default App;
