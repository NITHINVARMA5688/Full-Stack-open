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
      <Filter b1={handleGN2}/>
     <PersonForm k1={addY} p1={newName} r1={handleGN}  l1={newNumber} t1={handleGN1}/>
      <h2>Numbers</h2>
      <Persons member={nithin}/>
    </div>
  )
}
const Filter=({b1})=>{
  return(
    <h4>filter shown with<input onChange={b1}/></h4>
  )
}
const PersonForm=({k1,p1,r1,l1,t1})=>{
  return(
    <form onSubmit={k1}>
    <div>
      name: <input value={p1} onChange={r1}/>
      number: <input value={l1} onChange={t1}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}
const Persons=({member})=>{
  return(
    <div>
        {
          member.map(t1=>{return(
            <h3 key={t1.name}>{t1.name} {t1.number}</h3>
              )
            }
          )
        }
      </div>
  )
}
export default App
    