import React from 'react'

const App = () => {

  // yha pe hamne kuch data ko set kiaa hay apne local storage me
localStorage.setItem('user','abhay')
localStorage.setItem('age','21')
localStorage.setItem('profession','software engineer')
localStorage.setItem('college','jbkp')
localStorage.setItem('year','4th')
localStorage.setItem('sem','8th')


// ab clear kya karta hay sabhi data  ko jo bhi local storage me save hay un sab ko delete kar deta hay

// you use only on line

localStorage.clear()

  return (
    <div>
      
    </div>
  )
}

export default App
