import React from 'react'
import { Link } from 'react-router-dom'
import About from '../pages/About'

const Navbar = () => {
  return (
    <div className='bg-black h-15 text-white flex items-center justify-between p-10'>
        <h2 className='text-4xl font-bold'>Navbar</h2>
          <div className='flex gap-10'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link>
              <Link to='/product'>Product</Link>

        </div>
    </div>
  )
}

export default Navbar