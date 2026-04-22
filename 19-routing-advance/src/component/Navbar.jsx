import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-cyan-800 py-4 px-8'>
      <h2 className='font-bold text-2xl'>Sheryians</h2>
      <div className=' flex items-center gap-10'>
        <Link to='/'> Home</Link>
        <Link to='/about'> About</Link>
        <Link to='/courses'> Courses</Link>
        <Link to='/product'> Product</Link>
        
      </div>
    </div>
  )
}

export default Navbar
