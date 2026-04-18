import React from 'react'


const getData = async () => {

const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
// const response = await fetch('https://jsonplaceholder.typicode.com/todos')
// console.log(response)
// console.log(await response.json());
const data = await response.json()
console.log(data);

}

const  App = () => {
  return (
    <div>
      <button onClick={getData}> Get Data </button>
    </div>
  )
}

export default  App


  // use : fetch api method  = in built method hay y
// js k ander pahle se bani hoti hay
// chuki abhi deta promise k form me mil rha hay esko handal karne k lia
// we use : async ,await
// ab esk ause karne  k baad jo  hame responce mila hay usk ander date json formate me hota hay
// last me 
// /1 eslia htaya jisse ham dekha sake ki us api me kitne logo ka data hay
