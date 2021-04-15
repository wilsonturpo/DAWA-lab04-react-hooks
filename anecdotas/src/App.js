import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)

  //Estados de las anécdotas
  const [anecdotes, setAnecdotes] = useState([]);

  //La anécdota más votada
  const [maxVoted, setMaxVoted] = useState()

  const handleNext = () => {
    const randomNumber = Math.floor(Math.random() * props.anecdotes.length);
    setSelected(randomNumber)
  }

  useEffect(()=>{
    var anc = []
    for (var i = 0; i < props.anecdotes.length; i++) {
      anc.push({
          name: props.anecdotes[i],
          votes:0
      });
    }
    setAnecdotes(anc)
    console.log(anecdotes);
  }, []);

  const handleVote = (selected)=>{
    anecdotes[selected].votes +=1
    var maxVotedIndex=0;
    var votoMaximo=0;

    for(var i = 0; i < anecdotes.length; i++) {
      var obj = anecdotes[i];

      if(obj.votes > votoMaximo){
        maxVotedIndex=i
        votoMaximo = obj.votes
      }
    }
    setMaxVoted({name:anecdotes[maxVotedIndex].name, votes:anecdotes[maxVotedIndex].votes})
    console.log(anecdotes)
  }

  return (
    <div style={{margin:20, background:"#2f86c4"}}>

      <p>{props.anecdotes[selected]}</p>
      
      <br></br> <br></br>

      <button className="btn btn-primary"
        onClick={()=>handleVote(selected)}>
        Vote
      </button>

      <button
        className="btn btn-success"
        onClick={handleNext}>
        Next Anecdote
      </button>

      <h2>Anécdote with most votes</h2>
      {
        maxVoted && 
        <p>{maxVoted.name} has {maxVoted.votes}</p>
      }
      
    </div>
  )
}

export default App;
