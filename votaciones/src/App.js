import React, { Fragment, useState } from 'react';
import Statistics from './components/Statistics';
import Button from './components/Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //Estado de total
  const [total, setTotal] = useState(0)

  //Estado de promedio
  const [average, setAverage] = useState(0)

  //Estado de porcentaje positivo
  const [positive, setPositive] = useState(0)



  //Función de Good
  const handleGood = () =>{
    setGood( good + 1)
    setTotal( total + 1)
    setAverage(average + 1)
  }


  //Función de Neutral
  const handleNeutral = ()=>{
    setNeutral(neutral + 1)
    setTotal( total + 1)
    setAverage(average + 0)
  }

  //Función de Bad
  const handleBad = () =>{
    setBad( bad + 1)
    setTotal( total + 1)
    setAverage(average -1)
  }

  return (
    <Fragment>
      <div style={{background:"#d97a32"}}>
        <h1>Give feedback</h1>
        <div>
          <Button text="Good" value={handleGood} color="btn btn-success"/> 
          <Button text="Neutral" value={handleNeutral} color="btn btn-primary"/>
          <Button text="Bad" value={handleBad} color="btn btn-danger"/>
        </div>

      </div>
      <div style={{background:"#98b8eb"}}>
      <Statistics 
        good={good} 
        neutral={neutral}
        bad={bad}
        all={total}
        average={average && average / total}
        positive={good && good*100 / total}
      />
      </div>
      
    </Fragment>
    
  )
}

export default App;

/*
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
      <p>All: {total}</p>

      <p>Average: {average && average / total}</p>            
      <p>Positive: {good && good*100 / total}</p>

      
    </div>
*/