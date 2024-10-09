
function Notifications({message}) {
  const add_update_style = {
    color: 'green',
    backgroundColor: '#D8D8D8',
    border: '4px solid green',
    borderRadius: 5,
    fontSize: 20,
    margin: 10,
    padding: 10
  }
  const del_style = {
    color: 'red',
    backgroundColor: '#D8D8D8',
    border: '4px solid red',
    borderRadius: 5,
    fontSize: 20,
    margin: 10,
    padding: 10
  }

  
  const headerStyle = {
    padding: 0,
    margin: 0
  }

 
  if(message === null) {
    return null
  }

  return(
    
    <div style={message.includes('Added') || message.includes('Updated') ?  add_update_style : del_style}>
        <p style={headerStyle}>
            {message}
        </p>
    </div>
  )
}

export default Notifications