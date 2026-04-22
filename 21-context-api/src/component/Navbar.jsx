import React from 'react'
import Nav2 from './Nav2'

const Navbar = ({children,theme}) => {
    console.log();
    
  return (
    <div className='navbar'>
      <h2>Sheryians</h2>
      {children}
      <Nav2 theme= {theme} />
    </div>
  )
}

export default Navbar
// in parameter props ki jgh ham direct object k form me parameter me value pass kar sakte hay then uska direct name de sakte hay