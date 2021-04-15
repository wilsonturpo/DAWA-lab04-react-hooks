import React, { useState } from 'react';
import Button from './Button';

const Statistics = (props) => {

  return (
    <div style={{margin:20}}>   

      <h2>Statistics</h2>      

      {props.all ==0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
            <p>Good: {props.good}</p>
            <p>Neutral: {props.neutral}</p>
            <p>Bad: {props.bad}</p>
            <p>All: {props.all}</p>

            <p>Average: {props.average}</p>            
            <p>Positive: {props.positive}</p>
        </div>
      )}

      
    </div>
  )
}

export default Statistics;
