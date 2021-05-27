import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  

  return (
    <div>
     <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
const Header=c=>{
  return(
    <h1>{c.course}</h1>
  )
}
const Content=(props)=>{
  const la=props.parts
  const LA=la.map((pa)=>{
    return(<p>{pa.name} {pa.exercises}</p>)
      }
    )
    return(<div>{LA}</div>)
}
const Total=(props)=>{
  const la=props.parts
  let ca=0
  for(const i of la){
    ca+=i.exercises
  }
  return(
    <p>No:Of:Exercises:{ca}</p>
  )
}

export default App