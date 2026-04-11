import React from 'react'

import Section1 from './components/Section1/Section1.jsx'
import Section2 from './components/Section2/Section2.jsx'

const App = () => {
  const users = [
    {
      img : 'https://media.istockphoto.com/id/1333959194/photo/shot-of-a-young-female-engineer-using-a-digital-tablet-while-working-in-a-server-room.jpg?s=612x612&w=0&k=20&c=k03VM-2rF6aa6fWuHxBR11eU3W4uyLgvOr-IO-KLkTA=',
      color:'orange',
      intro : '',
      tag : 'Satisfied'
    },
    {
       img : 'https://media.istockphoto.com/id/2209158011/photo/female-it-professional-in-datacenter-with-confident-expression-wearing-security.jpg?s=2048x2048&w=is&k=20&c=Ov7sZReiRUw82xq6lBANgvtpZD3q6QrTXW6C48x4qOg=',
       color:'pink',
      intro : '',
      tag : 'UnderServed'
    },
    {
       img : 'https://plus.unsplash.com/premium_photo-1661764406095-b2aabae753ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
       color:'lightgreen',
      intro : '',
      tag : 'graduate'
    },
     {
       img : 'https://media.istockphoto.com/id/1475088044/photo/cheerful-mid-adult-woman-along-with-her-coworkers-working-on-a-laptop-in-an-office-cubicle.jpg?s=1024x1024&w=is&k=20&c=1R8CsRpZLgY80TTF9Gr9Xpm26ku24EGWWG63rOlSpfE=',
       color:'blue',
      intro : '',
      tag : 'professional'
    },
    {
      img:'https://images.unsplash.com/photo-1653688257016-205206ae74e2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'aqua',
      intro:'',
      tag:'Farzin Yarahmadi'
    }
  ]
  return (
    <div>
       <Section1 users={users} />
       <Section2 />
    </div>
  )
}

export default App
