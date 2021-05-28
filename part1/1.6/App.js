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
      <h2>Staistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App