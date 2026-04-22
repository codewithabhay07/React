import React, { useState } from 'react'
import Navbar from './component/Navbar'

const App = () => {
  const [theme, setTheme] = useState('')
  return (
    <div>
      <h1>This is : {theme}</h1>

      <Navbar theme={theme} setTheme= {setTheme} />
    </div>
  )
}

export default App
