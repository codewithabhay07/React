import  { useState } from 'react'

const App = () => {

const [title, setTitle] = useState('')
const [details, setDetails] = useState('')
const [task, setTask] = useState([])

const SubmitHandlar = (e) => {
  e.preventDefault()
 
  const copyTask = [...task];
  copyTask.push({title,details})
  setTask(copyTask)
  
  setTitle('')
  setDetails('')
  }
const deleteNote = (idx) => {
  const copyTask = [...task]
  
  copyTask.splice(idx,1)
  setTask(copyTask)
  
 
}

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      
     <form 
     onSubmit={(e)=>{
      SubmitHandlar(e)
     }}
     className='flex flex-col p-10 gap-4 items-start lg:w-1/2'
     > 
       <h1 className=' text-4xl font-bold' >Add Notes</h1>
        <input 
         className='px-5 py-2 w-full  border-2 rounded  outline-none font-medium '
         type="text" 
         placeholder='Enter notes heading'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}
        />
        <textarea 
         className='px-5 py-2 w-full h-32 flex items-start flex-row  border-2 rounded outline-none font-medium'
         type="text"
         placeholder='Write details here'
         value={details}
         onChange={(e)=>{
         setDetails(e.target.value)
         }}
        />
      
      <button
        className='bg-white text-black w-full px-5 py-2  rounded outline-none  font-medium active:scale-95'
        >Add note
      </button>
      
     </form>
     <div className='flex flex-wrap lg:w-1/2 lg:border-l-2 p-10 gap-5'>
      <h1 className=' text-4xl font-bold' >Recent Notes</h1>
      <div className='flex flex-wrap items-start justify-start h-[90%] gap-5 mt-5 overflow-auto' >
         {task.map(function (elem,idx){
            
          return  <div key={idx} className='flex justify-between flex-col relative h-52 w-40 py-9 pb-5 px-5 rounded-2xl bg-[url("https://static.vecteezy.com/system/resources/previews/036/392/169/large_2x/neutral-kraft-paper-notes-with-decoration-tapes-flat-illustration-png.png")] bg-cover  text-black'>
            {/* <h2 className='absolute top-6 right-2 text-xs rounded-full '  > <X size={16} color="#0a0a0a" strokeWidth={3} /> </h2> */}
            <div>
              <h3 className=' leading-tight text-lg font-bold'>{elem.title}</h3>
            <p className='mt-4 leading-tight font-xs font-semibold text-gray-800'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='items-center w-full bg-red-400 text-white py-1 text-xs rounded font-bold cursor-pointer active:scale-95'>Delete</button>
          </div>  
           
         })}

        
      </div>
      
     </div>
     
    </div>
  )
}

export default App

{/* <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div> */}
        