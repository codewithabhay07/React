
import React from 'react'

const App = () => {

// getItems
// data ko paate kaise hay
// esme ham jo bhi data hamara  local storage me save rhta hay use ham only key de k paa sakte hay  print kara sakte hay ki kya value /data diya gya tha

//  jaise ki hamne yha pe 3 data local storage me save kiaa huaa hay ab enko paate kaise dekhte hay
localStorage.setItem('user','abhay')
localStorage.setItem('age','21')
localStorage.setItem('profession','software engineer')

// ab dikhega kha  eslia ham ese ak variable me sabe karege or console me jaa k dekhege

// aise bhi kar sakte hay
// aab aap samj gay na 
const user = localStorage.getItem('user')
console.log(user);

// thoda stylish dikhne k lia eska use kiaa 

const age =  localStorage.getItem('age')
console.log(`age : ${age}`);

const pro =  localStorage.getItem('profession')
console.log(`profession : ${pro}`);


  return (
    <div>
      
    </div>
  )
}

export default App
