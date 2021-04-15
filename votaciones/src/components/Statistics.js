import React, { useState } from 'react';

const Statistics = (props) => {

  return (
    <div style={{margin:20}}>    

      <h2>Statistics</h2>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.total}</p>

      <p>Average: {props.average}</p>            
      <p>Positive: {props.positive}</p>

      
    </div>
  )
}

export default Statistics;
