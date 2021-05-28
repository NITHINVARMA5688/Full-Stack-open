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
        <button onClick={x}>good</button>&nbsp;<button onClick={y}>neutral</button>&nbsp;<button onClick={z}>bad</button>
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
    <p>
      good {props.a}<br></br>
      neutral {props.b}<br></br>
      bad{props.b}<br></br>
      all {s}<br></br>
      average{s1}<br></br>
      positive{s2}<br></br>
    </p>
  )
}


export default App