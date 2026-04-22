import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
  const {courseId} = useParams()
  return (
    <div>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] underline whitespace-nowrap font-semibold capitalize'> CourseDetails: {courseId} </h1>
    </div>
  )
}

export default CourseDetails
