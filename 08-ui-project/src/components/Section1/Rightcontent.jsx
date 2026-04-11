import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  console.log(props)
  return (
    <div id='right' className='h-full w-2/3 rounded-4xl p-4 flex overflow-x-auto flex-nowrap gap-10 '>
      {props.users.map(function(elem,idx){

        return  <Rightcard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} />
      })}
     
    </div>
  )
}

export default Rightcontent
