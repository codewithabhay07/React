import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    // console.log(response)
    setUserData(response.data)
    // console.log(response.data)
  }
  useEffect(()=>{
    getData()
  },[index])

  // let printUserData = "No User Available"
  let printUserData =<h3 className='text-gray-400 text-semibold absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 '>Loading...</h3>
  if (userData.length > 0) {
    printUserData = userData.map((elem,idx) => {


      return <div key={idx}>
        <a href={elem.url} target='_blank'>
           <div className='h-64 w-68 bg-white rounded-xl overflow-hidden  '>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h2 className='font-bold text-lg flex justify-center ' >{elem.author}</h2>
        </a>
      </div>
    })
  } 

  return (
    <div className='bg-black h-screen text-white p-5 overflow-auto '>
      {/* <h1 className='fixed text-6xl bg-amber-50 text-black'>{index}</h1> */}
  {/* <button onClick={getData} 
        className='bg-green-600 text-white px-5 py-2 rounded mb-3 active:scale-95 '>Get Data
      </button> */} 
      <div className='flex flex-wrap gap-4 p-2 px-8 h-[90%]' >
        { printUserData}
      </div>
      <div className='flex justify-center items-center p-4 gap-6' >
        <button style={{opacity : index==1 ? 0.5 : 1}}
          onClick={()=>{
            if(index > 1)   
              setIndex(index-1) 
              setUserData([])      
          }}
         className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'> 
          prav 
        </button>
        <h4>Page : {index}</h4>
        <button 
          onClick={()=>{
            setUserData([]) 
            setIndex(index+1)   
                    
          }}
          className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'> 
          next 
        </button>
      </div>
    </div>
  )
}

export default App
