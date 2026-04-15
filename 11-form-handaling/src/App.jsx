import React from 'react'

const App = () => {

  const FormHandlar = (e) => {
    e.preventDefault()
    console.log("form dubmitted")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        FormHandlar(e)
      }} >
        <input type="text" placeholder='Enter your name' />
        <button>button</button>
      </form>
    </div>
  )


}

export default App



// 👉 Ye ek form hai jisme user apna naam likhta hai
// 👉 Jab user button click karta hai, form submit hota hai

// 🔹 Important part:
// onSubmit → jab form submit hota hai, ye function chalata hai
// FormHandlar(e) → ye function run hota hai
// e.preventDefault() → page reload hone se rokta hai
// 🔹 Result:

// 👉 Button dabate hi page reload nahi hota
// 👉 Console me "form dubmitted" print hota hai

// 🧠 Ek line me:

// 👉 User button click kare → function chale → page reload na ho → console me message aay
