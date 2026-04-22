import React from 'react'

const Navbar = (props) => {

  return (
    <div>
        
      <button 
      onClick={()=> props.setTheme("dark")  }
      onDoubleClick={()=> props.setTheme('light')}
      >Change Theme</button>
      
      {/* <button onDoubleClick={()=> props.setTheme("light")
      } >Change Theme</button> */}
    </div>
  )
}

export default Navbar
