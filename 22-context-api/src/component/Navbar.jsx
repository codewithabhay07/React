
import { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext';



const Navbar = (props) => {
  const data =  useContext(ThemeDataContext) 
  // console.log(data);
  
   
  return (
    <div className='navbar'>
      <h2>Sheryians</h2>
      <h2>{data}</h2>
      <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar
