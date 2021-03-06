import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [added,setAdded]=useState(Array(6).fill(0))
  
  
  
  const add=()=>{
    const copy=[...added]
    copy[selected]+=1
    setAdded(copy)
  }
  const answer=()=>{setSelected(Math.floor((Math.random() * 5)))}
 
  return (
    <div>
      <h1>Anectode of the day</h1>
      <Display message={anecdotes[selected]} count={added[selected]}/>
      <p><Button fun={add} text='votes'/>&nbsp;
      <Button fun={answer} text='nextanecdote'/></p>
      <h3>Anecdote with most votes</h3>
      <Max  messages={anecdotes} votes={added} />
    </div>
  )
}

const Display=({message,count})=>
{
  return(
    <div>
      <h3>{message}<br/>
      has {count} votes</h3>
    </div>
  )
}

const Button=({fun,text})=>{
  return(
      <button onClick={fun}>{text}</button>
  )
}

const Max=({messages,votes})=>{
  const p=Math.max(...votes)
  const q=votes.indexOf(p)
  return(
    <Display message={messages[q]} count={votes[q]}/>
  )

}

export default App