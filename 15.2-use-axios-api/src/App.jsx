import axios from 'axios'
import React from 'react'


const getData  = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  console.log(response.data);
  
}

const App = () => {
  return (
    <div>
      <button onClick={getData} > Get Data </button>
    </div>
  )
}

export default App

// esme ham axios api ka use karege 
// esme hame sabse pahle axios ko install karna pdta hay
// npm i axios   - terminal me 
// nstall karne k baad  hmae use import bhi karna hota hay 
// import axios from 'axios'
// /esme hame get method ka use karna hoga q ki hame api se se data lena hay
// api paste karege get method k ander
// esme bhi data promise k form me milega 
// eslia ham async await ka use karte hay
// esme direst data mil jaata hay 
// y  easy bhi hay fetch hay or thoda jyada safe bhi 
// safe like error manage / third party library hay /setup bhi easy hay