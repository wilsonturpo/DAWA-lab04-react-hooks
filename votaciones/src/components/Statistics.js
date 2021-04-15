import React, { useState } from 'react';
import Button from './Button';

const Statistics = (props) => {

  return (
    <div style={{margin:20}}>   

      <h2>Statistics</h2>      

      {props.all ==0 ? (
        <p>No feedback given</p>
      ) : (
        <ul>
            <li>Good: {props.good}</li>
            <li>Neutral: {props.neutral}</li>
            <li>Bad: {props.bad}</li>
            <li>All: {props.all}</li>

            <li>Average: {props.average}</li>            
            <li>Positive: {props.positive}</li>
        </ul>
      )}

      
    </div>
  )
}

export default Statistics;
