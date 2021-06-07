import React from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }

  ]
  
  

  return (
    <div>
    {
      courses.map((q)=>{
        return(
          <Course key={q.id} w={q}/>
        )
      })
    }
    </div>
  )
}
   const Course=({w})=>{
     return(
       <div>
       <Header a={w.name}/>
       <Content h={w.parts}/>
       <Total h={w.parts}/>
     
       </div>
     )
   }
    
   const Header=({a})=>{
     return(
       <h2>{a}</h2>
     )
   }
   const Content=({h})=>{
     return(
       <div>
         {
           h.map(g=>{
             return(
               <Part key={g.id} wo={g.name} wo1={g.exercises}/>
             )
           }

           )
         }
       </div>
     )
   }
   const Part=({wo,wo1})=>{
     return(
       <p>{wo} {wo1}</p>
     )
   }
   const Total=({h})=>{
     const k=h.map((can)=>{return(can.exercises)})
     const sol=k.reduce((k,q)=>{return k+q})
     return(
       <strong><p>total of {sol} exercises</p></strong>
     )

     
     
   }
export default App