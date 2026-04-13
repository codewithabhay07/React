import React, { useState } from 'react'

const App = () => {
const [num, setnum] = useState(10)
function increaseNum(){
    setnum(num+1)
}
function decreaseNum(){
    setnum(num-1)
}
function jumpNum(){
  setnum(num+5)
}

  return (
    <div>
       <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button><br />
      <button onClick={jumpNum}>jump by 5</button>
    </div>
  )
}

export default App
