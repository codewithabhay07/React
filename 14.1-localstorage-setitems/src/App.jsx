import React from 'react'

const App = () => {


// setItem 
// setItems ka use kar k ham data ko localStorage me save kar sakte hay
// esme data obj ki trh key value pair me save hota hay ('key','value')
// ab aap kisi bhi browser  ko inspect kar k application me jaa k  localStorage vale file me jaa k dekh sakte hay
// example

localStorage.setItem('user','abhay')

// ham same key ka use kark  value ko apdate me kar sakte hay 
// local storage data ko over right kar deta hay



localStorage.setItem('user','aman')

// ab agr key alg ho  value same ho to data  save ho jaayga q ki uski key alg hay over right nahi hoga

localStorage.setItem('user2','aman')

// multiple local storage bna sakte hay  bs key alg honi chahia


localStorage.setItem('age','21')
localStorage.setItem('profession','software engineer')




  return (
    <div>
      App
    </div>
  )
}

export default App
