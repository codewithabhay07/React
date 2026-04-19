import React, { useEffect, useState } from 'react'
import { use } from 'react';

const App = () => {
  // useefeect  ak react hooks hota hay like usestate
  // useEffect ka use react me bhut hota hay
  // thoda confusing hay but aap achee se samjhoge to aa jaaygan
  // basicalli eska work y hay ki hay 
  // y side effect handal karne k kam me aata hay
  // side effect --  api se data lana ,,, event listener lagana ,,,dom use karna lagana  bhut sare 
  // use me laane k lia ese import karte hay 
  // syntax ---------- useEffect(function,dependencies)

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

// No dependency 
  // useEffect(() => {
  //   console.log("No dependencies = har render pe chalega ");
  // })

// Empty defendencies
  // useEffect(()=>{
  //   console.log("Dependencies is empty   = keval ak baar chalega bhale hi state change hoti rhe");  
  // },[])

// With Dependency
  useEffect(()=>{
    console.log("y tabhi chalega jiski dependency useEffect me pass hogi uski value k update me y chalega "); 
  },[num , num2])
// multiple dependency ak hi array me pass kar sakte hay comma (,) lga k
// alg alg bhi bna sakte hay



  return (
    <div>
      <h1> num is : {num}</h1>
      <h1> num2 is : {num2}</h1>
      <button onMouseEnter={() => {
        setNum(num+1) 
      }}
      onMouseLeave={()=>{
        setNum2(num2+10)
      }}
      >hover</button>
    </div>
  )
}

export default App
