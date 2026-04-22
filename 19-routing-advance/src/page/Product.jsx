import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      
      <div className='flex justify-center mt-1 gap-10 py-4 bg-cyan-200 text-blue-600 underline'>
        <Link className='text-xl font-semibold ' to='/product/man'>Man</Link>
        <Link className='text-xl font-semibold' to='/product/woman'>Woman</Link>
        <Link className='text-xl font-semibold' to='/product/kids'>Kids</Link>
        <Link className='text-xl font-semibold' to='/product/gift'>Gift</Link>
        <Link className='text-xl font-semibold' to='/product/offer'>Offer</Link>        
      </div>
      

      <Outlet />
    </div>
  )
}

export default Product
