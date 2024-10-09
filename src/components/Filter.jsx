function Filter({filterContact, handleFilter}) {
    
    return (
      <div>filter shown with 
        <input 
                type="text" 
                value={filterContact}
                onChange={handleFilter}           
        />
      </div>
    )
}

export default Filter