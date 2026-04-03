import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
  
    <div className="parent">  
      <Card name="Baruk Granda" age={21} img = "https://images.unsplash.com/photo-1773698403328-e6891737b7dd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card name="Victoria Dokukina" age={23} img="https://plus.unsplash.com/premium_photo-1773830841671-37b43b9f847f?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card name="Lonela Mat" age={28} img="https://images.unsplash.com/photo-1774011211544-dfd53584118b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App



