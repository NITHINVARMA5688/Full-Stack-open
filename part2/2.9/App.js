import React,{useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',number:'040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const  [newNumber,setNewNumber] =useState('')
  const [nithin,setNithin]=useState(persons)
  const handleGN=(event)=>{
      setNewName(event.target.value)
  }
  const handleGN1=(event)=>{
    setNewNumber(event.target.value)
  }
  const handleGN2=(event)=>{
   var r =event.target.value.toLowerCase()
   setNithin(persons.filter((u)=>{return u.name.toLowerCase().includes(r)}))
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
    setNithin(nithin.concat(people))
    setNewName('')
    setNewNumber('')
  }
  }
return(
  <div>
      <h2>Phonebook</h2>
      <h4>filter shown with<input onChange={handleGN2}/></h4>
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
          nithin.map(l=>{return(
            <h3 key={l.name}>{l.name} {l.number}</h3>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default App
    