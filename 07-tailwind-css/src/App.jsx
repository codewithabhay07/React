import React from 'react'

const App = () => {
  return (
    <div className='bg-red-600'>
      <div className='bg-gray-600 text-white p-5 '>
        <ul className='flex justify-around gap-8 '>
          <li className='hover:text-blue-600 hover:underline  transition'>Home</li>
          <li className='hover:text-blue-600 hover:underline transition'>About</li>
          <li className='hover:text-blue-600 hover:underline transition'>Contact</li>
          <li className='hover:text-blue-600 hover:underline transition'>Login</li>
          <li className='hover:text-blue-600 hover:underline transition'>Services</li>
        </ul>
      </div>
    </div>
   
  )
}

export default App
