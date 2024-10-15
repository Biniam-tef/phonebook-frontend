import { useState, useEffect } from 'react'
import phone from './services/phones'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notifications from './components/Notifications'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterContact, setFilterContact] = useState('')
  const [message, setMessage] = useState(null)
  

  useEffect(() => {
    phone.getData().then(phoneData => {
      if (JSON.stringify(persons) !== JSON.stringify(phoneData)) {
        setPersons(phoneData);  
      }
    });
  }, [persons])

  const handleNames = (event) => {
    setNewName(event.target.value)
  }

  const handleNumbers = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilterContact( event.target.value)
  }
  
  const addPhone = (event) => {
    event.preventDefault() 
    if(persons.filter(person => person.name === newName).length !== 0) {
      //Get the id to be upadated
      const updatePhone = persons.find(v => v.name === newName)
      const updateId = persons.find(v => v.name === newName).id
      
      const nameReplace = window.confirm(`${newName} is already added to the phone, replace the old number with a new one?`)
      if(nameReplace) {
        
        phone.update(updateId, {...updatePhone, 'number': newNumber})
        .then(res => {
          setPersons(persons.map(person => person.id !== updateId ? person : res))
          setMessage(`Updated ${newName}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
    
          setNewName('')
          setNewNumber('')
        })
        .catch(err => {
          console.log(err.message, err.response)
          return setMessage(`Information of ${newName} has already been removed from server`)
        })
      }
    
    }
    //Adding new contact
    else {
      const newPhone = {'name' : newName, 'number' : newNumber}
      phone.createData(newPhone)
      .then(newAddress => {
        setPersons([...persons, newAddress])
        setMessage(`Added ${newName}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)

      setNewName('')
      setNewNumber('')
      })
      .catch(err => console.log(err, 'There is an error'))
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notifications message={message}/>
      <Filter 
             filterContact={filterContact}
             handleFilter={handleFilter}
      />
      <h2>add a new</h2>
      <PersonForm 
            addPhone={addPhone}
            newName={newName}
            handleNames={handleNames}
            newNumber={newNumber}
            handleNumbers={handleNumbers}
      />
      
      <h2>Numbers</h2>
      <Persons 
               persons={persons}
               setPersons={setPersons} 
               filterContact={filterContact} 
               message={message} 
               setMessage={setMessage}/>
     
    </div>
  )
}

export default App