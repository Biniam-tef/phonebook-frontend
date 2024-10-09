import axios from 'axios'
function Persons({persons, setPersons, filterContact, setMessage}) {
  
  const filterName = persons.filter(person => (person.name.toLowerCase()).includes(filterContact.toLowerCase()))
  console.log(filterName)  
                                          
  
  const handleDelete = (id) => {
    const delName = persons.find(v => v.id === id)
    
    if(window.confirm(`Delete ${delName.name}?`)) {
      axios.delete(`http://localhost:3001/api/persons/${id}`) 
      .catch(error => console.error(error));
      setMessage(`Deleted ${delName.name}`)
      setPersons(persons => persons.filter(v => v.id !== id))
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }
    return (
      <div>
         {
          filterName.length === 0 ? persons.map(person => <p key={person.id}>{person.name} {person.number}</p>) :
          filterName.map(filter => {
             return (
              <div key={filter.id}>
                  <span>{filter.name} {filter.number}</span>
                  <button onClick={() => handleDelete(filter.id)}>Delete</button>
              </div>
             )})
        }

      </div>
    )
}

export default Persons