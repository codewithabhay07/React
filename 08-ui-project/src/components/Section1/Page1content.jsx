import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  console.log()
  return (
    <div className='flex px-8 pb-10 h-[90vh]   items-center gap-10 '>
      <Leftcontent />
      <Rightcontent users = {props.users}/>
    </div>
  )
}

export default Page1content
