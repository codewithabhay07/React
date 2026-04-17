
import React from 'react'

const App = () => {

// yha pe hamne kuch data ko set kiaa hay apne local storage me
localStorage.setItem('user','abhay')
localStorage.setItem('age','21')
localStorage.setItem('profession','software engineer')

// yha pe hamne us dataa ko dekha hay ya paaya hay ki save hay ya nahi
const user = localStorage.getItem('user')
console.log(user);

const age =  localStorage.getItem('age')
console.log(`age : ${age}`);

const pro =  localStorage.getItem('profession')
console.log(`profession : ${pro}`);



// ab ham data ko local storage se delete/remove kaise  karege y jaante hay

// esk lia hame same getitems jaise hi method ka use karna hoga
// removeItem() or  jo data remove karna hay uski kiy ka nam 

// abhi hamne 3 data ko localstorage me save kiaa hay upar
// ab aaise hi 3 or bna lete hay



localStorage.setItem('college','jbkp')
localStorage.setItem('year','4th')
localStorage.setItem('sem','8th')



// ab removeItems kaise use karte hay
localStorage.removeItem('age')


localStorage.removeItem('profession')
console.log(localStorage.getItem('profession'))          

localStorage.removeItem('year')
console.log(localStorage.getItem('profession'))


  return (
    <div>
      
    </div>
  )
}

export default App
