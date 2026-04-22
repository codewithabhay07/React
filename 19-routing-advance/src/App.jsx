import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './page/Home'
import About from './page/About'
import Product from './page/product'
import { Route, Routes } from 'react-router-dom'
import NotFound from './page404/NotFound'
import Man from './nasted/Man'
import Woman from './nasted/Woman'
import Kids from './nasted/Kids'
import Gift from './nasted/Gift'
import Offer from './nasted/Offer'
import Courses from './page/Courses'
import CourseDetails from './daynamic/CourseDetails'
import Navbar2 from './navigate/Navbar2'



const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId'  element={<CourseDetails />} />
        <Route path='/product' element={<Product />}> 
          <Route path='man' element={<Man />} />
          <Route path='woman' element={<Woman />} />
          <Route path='kids' element={<Kids />} />
          <Route path='gift' element={<Gift />} />
          <Route path='offer' element={<Offer />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
