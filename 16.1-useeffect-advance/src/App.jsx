import React, { useEffect, useState } from 'react'

const App = () => {

const [a, setA] = useState(0)
const [b, setB] = useState(0)

const aIncrease = () =>{
  console.log("Value of A is change ");
}

const bIncrease = () =>{
  console.log("Value of B is change");
}

useEffect(()=>{
  aIncrease()
},[a])

useEffect(()=>{
  bIncrease()
},[b])

  return (
    <div className='card' >
      <h1>Value of A is : {a}</h1>

      <div>
        <button onClick={()=>{ setA(a+1) }}>Increase A</button>
        <button onClick={()=>{ setA(a-1) }}>Decrease A</button>
      </div>
      <h1>Value of B is : {b}</h1>

      <div>
        <button onClick={()=>{ setB(b+1) }}>Increase B</button>
        <button onClick={()=>{ setB(b-1) }}>Decrease B</button>
      </div>

    </div>
  )
}

export default App
