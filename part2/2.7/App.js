import React,{useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
    

  const handleGN=(event)=>{
      setNewName(event.target.value)
  }

  const addY=(event)=>{
    event.preventDefault()
    const val=persons.some((g)=>{return g.name===newName})
    if(val===true){
      alert(`${newName} is already added to phonebook`)
     }
     else{
  
    const people={
      name:newName
    }
    setPersons(persons.concat(people))
    setNewName('')
  }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addY}>
        <div>
          name: <input value={newName} onChange={handleGN}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(r=>{return(
            <h3 key={r.name}>{r.name}</h3>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default App