import axios from 'axios'
import React, { useState } from 'react'

const App =  () => {
  const [data, setData] = useState([])
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    // console.log(response.data)
    setData(response.data)
    
  }
  return (
    <div>
      <div>
        <button onClick={getData} >Get Data</button>
      </div>
      <div>
        {data.map((elem , idx) => {
         return (
           <div key={idx}>
              <h2>id : {idx + 1}</h2>
              <h3>author : {elem.author}</h3>

              {/* image show */}
              <img src={elem.download_url} alt="img" width={350} height={300} />
              <hr />
            </div>
          )
      })}
      </div>
    </div>
  )
}

export default App
