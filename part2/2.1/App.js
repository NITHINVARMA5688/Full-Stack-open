import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id:1,
    parts: [
      {
        id:1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id:2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id:3,
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  

  return (
    <div>
     <Course e={course}/>
    </div>
  )
}

const Course=({e})=>{
  return(
    <div>
    <Header f={e.name}/>
    <Content u={e.parts}/>

    </div>
  )
}

const Header=({f})=>{
  return(
    <h2>
      {f}
    </h2>
  )
}
const Content=({u})=>{
  return(
    <div>
      {
      u.map(x=>{return(
            <Part key={x.id} nani={x.name} nani1={x.exercises}/>)
          }
        )
      }
    </div>
  )
}
const Part=({nani,nani1})=>{
return(
  <p>{nani} {nani1}</p>
)
}
export default App