import React, { useState } from 'react'
import Navbar from './component/Navbar'

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <div>
      <Navbar theme={theme} >
        <h2>this is navbar</h2>
         <h3>this is navbar2</h3>
      </Navbar>
    </div>
  )
}

export default App
  