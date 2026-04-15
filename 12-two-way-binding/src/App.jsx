import React, { useState } from 'react'

const App = () => {

// state banayi jisme input ka data store hoga

const [title, setTitle] = useState("")

// form submit hone par ye function chalega

const formhandlar = (e) => {
  e.preventDefault()   // page reload hone se rokta hai
  console.log("form submitted by",title)   // console me naam print karega
  setTitle("")
  // input field ko empty kar deta hai
}
  return (
    <div>
      {/* form submit hone par formhandlar function call hoga */}
      <form onSubmit={(e)=>{
        formhandlar(e)
      }}>
        <input 
        type="text"
        placeholder='Enter your name '
          // input ki value state se control ho rahi hai
        value ={title}

        onChange={(e)=>{
          setTitle(e.target.value)
          // user jo type karega wo state me save hoga
        }}
         />
        {/* button click karte hi form submit hoga */}

        <button>submit</button>
      </form>
    </div>
  )
}

export default App




// 🔥 One Line Explanation

// 👉 User naam type karta hai → state me save hota hai → submit par console me print hota hai → input reset ho jata hai