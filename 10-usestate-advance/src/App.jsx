import React, { useState } from 'react'

const App = () => {
  const [Users, setUsers] = useState({user:"sarthak",age:20})
  const btnClicked = ()=>{
  // setusers({...users,user:"aman",age:23})

  const newUsers = {...Users}
  newUsers.age = 22
  newUsers.user = "meethi"
    setUsers(newUsers)
  }
  return (
    <div>
      <h1>{Users.user} {Users.age}</h1>
     <button onClick={btnClicked}>click</button>

    </div>
  )
}

export default App