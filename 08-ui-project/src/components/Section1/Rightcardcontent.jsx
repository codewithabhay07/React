import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-5 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-10 w-10 flex items-center justify-center'>{props.id+1}</h2>
        <div>
           <p className='text-lg text-shadow-2xs leading-relaxed text-white mb-14'> Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur</p>
           <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
            <button style={{backgroundColor:props.color}} className=' text-white font-medium px-3 py-2 rounded-full '><i className="ri-arrow-right-line"></i></button>
           </div>
        </div>
      </div>
  )
}

export default Rightcardcontent
