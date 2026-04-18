import React from 'react'

// 📘 API CALL – COMPLETE NOTES
// 🔹 API kya hoti hai?

// 👉 API (Application Programming Interface) ek medium hai
// jo client (frontend) aur server ke beech communication karata hai

// 🔥 API CALL KA FLOW

// 👉 Yaad rakho:

// Client → API → Server → Response → Client

// 🔹 API Call karne ke tareeke
// 1. fetch (built-in)

// 👉 Browser me already hota hai

// fetch('https://api.example.com/data')
//   .then(res => res.json())
//   .then(data => console.log(data))

// ✔️ Simple
// ❌ Error handling tough

// 2. axios (most used 🔥)

// 👉 External library (install karni padti hai)

// npm install axios
// import axios from 'axios'

// axios.get('https://api.example.com/data')
//   .then(res => console.log(res.data))

// ✔️ Easy syntax
// ✔️ Automatic JSON
// ✔️ Best for React

// 3. async/await (modern way ⚡)

// 👉 Clean aur readable code

// async function getData() {
//   const res = await fetch('https://api.example.com/data')
//   const data = await res.json()
//   console.log(data)
// }
// 🔹 HTTP Methods (important)
// Method	Kaam
// GET	Data lena
// POST	Data bhejna
// PUT	Update
// DELETE	Delete
// 🔥 POST Request Example
// fetch('https://api.example.com/posts', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     title: 'Hello',
//     body: 'Learning API'
//   })
// })
// 🔹 React me API call

// 👉 useEffect ke andar call hota hai

// import { useEffect, useState } from 'react'
// import axios from 'axios'

// const App = () => {
//   const [data, setData] = useState([])

//   useEffect(() => {
//     axios.get('https://api.example.com/users')
//       .then(res => setData(res.data))
//   }, [])

//   return (
//     <div>
//       {data.map(user => <h1 key={user.id}>{user.name}</h1>)}
//     </div>
//   )
// }
// ⚠️ Common Mistakes

// ❌ await bhool jana
// ❌ fetch me .json() nahi lagana
// ❌ galat URL
// ❌ React me dependency mistake

// 🧠 Quick Revision Trick

// 👉 3 cheeze yaad rakho:

// fetch
// axios
// async/await

// 👉 2 kaam:

// GET = lena
// POST = bhejna
// 🔥 Final Line (Exam ke liye)

// API call ka use server se data lene aur bhejne ke liye kiya jata hai using methods like fetch, axios, and async/await.

const App = () => {
  return (
    <div>
      App
    </div>
  )
}

export default App
