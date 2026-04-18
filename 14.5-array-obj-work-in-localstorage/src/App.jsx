import React from 'react'

const App = () => {

// ab hamne   local storage k saare method k baare me padha liya hay
//set get  remove and clear 


// ab ham yha pe y dekhege ki aray or obj k sath kaise work karta hay local storage

// ab ham yha pe ak obj bnate hay

const user = {
  name : "abhay",
  age : 22 ,
  profession : "full stack developer"
}

// ab esko local storage me save kar k dekhte hay kya save hota hay

// localStorage.setItem('info',user)  //esse obj save to huaa per dikhega nahi 

// [object Object]  es form dikhega 

// y  store save nahi ho rha q ki esme data key value k form me sabe hota hay to hame  hmesa value ko string form me rakhna chahia agr value string nahi hui to ham data ko nahi dekh paayga data save hi nahi hoga 

// obj  ko string me conver karne k lia ak method ka use hota hay
// JSON.stringify

// esk use se ham data ko dekh sakte hay
 localStorage.setItem('info',JSON.stringify(user))

let check =  localStorage.getItem('info')
console.log(typeof(check));



// or aap chahe to ese string se object me convert karne k lia JSON.parse ka use karna padta hay


let checkreturn =  JSON.parse(localStorage.getItem("info"))
console.log(typeof(checkreturn));


// this is compleate 


  return (
    <div>
      App
    </div>
  )
}

export default App
