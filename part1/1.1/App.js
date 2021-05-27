import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header c={course} />
      <Content x1={part1} x2={part2} x3={part3} y1={exercises1} y2={exercises2} y3={exercises3} />
      <Total T={exercises1+exercises2+exercises3}/>
    </div>  )
}

const Header=prop=>{
  return(
    <div>
      <h1>{prop.c}</h1>
    </div>
  );
}
const Content=props=>{
  return(
    <div>
      <p>
        {props.x1} {props.y1}
      </p>
      <p>
        {props.x2} {props.y2}
      </p>
      <p>
        {props.x3} {props.y3}
      </p>
    </div>
  )
}

const Total=t=>{
  return(
    <div>
      <p>No:Of:Exercises:{t.T}</p>
    </div>
  )
}

export default App