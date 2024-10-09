function PersonForm({addPhone, newName, handleNames, newNumber, handleNumbers}) {
    
    return (
      <div>
         <form id='phonebook'
            onSubmit={addPhone}>
        <div>
          <div>
             name: <input 
                 value={newName}
                 onChange={handleNames}
            />
          </div>
          <div>
             number: <input
                 value={newNumber}
                 onChange={handleNumbers}
            />
          </div>
          
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      </div>
    )
}

export default PersonForm