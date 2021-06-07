import React from 'react'

const Course=({q})=>{
    return(
      <div>
      <Header a={q.name}/>
      <Content h={q.parts}/>
      <Total h={q.parts}/>
    
      </div>
    )
  }
   
  const Header=({a1})=>{
    return(
      <h2>{a1}</h2>
    )
  }
  const Content=({h})=>{
    return(
      <div>
        {
          h.map(p1=>{
            return(
              <Part key={p1.id} w={p1.name} w1={p1.exercises}/>
            )
          }

          )
        }
      </div>
    )
  }
  const Part=({w,w1})=>{
    return(
      <p>{w} {w1}</p>
    )
  }
  const Total=({h})=>{
    const i=h.map((can)=>{return(can.exercises)})
    const sol=i.reduce((i,e)=>{return i+e})
    return(
      <strong><p>total of {sol} exercises</p></strong>
    )

    
    
  }
  export default Course