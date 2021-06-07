import React,{useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',number:'040-123456' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const  [newNumber,setNewNumber] =useState('')

  const handleGN=(event)=>{
      setNewName(event.target.value)
  }
  const handleGN1=(event)=>{
    setNewNumber(event.target.value)
  }

  const addY=(event)=>{
    event.preventDefault()
    const val=persons.some((g)=>{return g.name===newName})
    if(val===true){
      alert(`${newName} is already added to phonebook`)
     }
     else{
  
    const people={
      name:newName,
      number:newNumber
    }
    setPersons(persons.concat(people))
    setNewName('')
    setNewNumber('')
  }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addY}>
        <div>
          name: <input value={newName} onChange={handleGN}/>
          number: <input value={newNumber} onChange={handleGN1}/>
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