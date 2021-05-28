import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const x=()=>{setGood(good+1)}
  const y=()=>{setNeutral(neutral+1)}
  const z=()=>{setBad(bad+1)}
  
  return (
    <div>
      <h1>give feedback</h1>
      <p>
       <Button varma={x} nithin='good'/>
       <Button varma={y} nithin='neutral'/>
       <Button varma={z} nithin='bad'/>
      </p>
      <h2>Statistics</h2>
      <Statistics a={good} b={neutral} c={bad}/>
    </div>
  )
}
const Statistics=(props)=>{
  if(props.a===0 && props.b===0 && props.c===0)
  return(
    <h2>No feedback given</h2>
  )
  const s=props.a+props.b+props.c
  const s1=props.a-props.b/s
  const s2=props.a*100/s
  return(
    <div>
      <Statistic nani={props.a}text='good'/>
      <Statistic nani={props.b}text='neutral'/>
      <Statistic nani={props.c}text='bad'/>
      <Statistic nani={s}text='all'/>
      <Statistic nani={s1}text='average'/>
      <Statistic nani={s2}text='positive'/>
    </div>
  )
}
const Button=(props)=>{
  return(
    <button onClick={props.varma}>{props.nithin}</button>
  )
}
const Statistic=(props)=>{
  return(
    <p>{props.text} {props.nani}</p>
  )
}

export default App