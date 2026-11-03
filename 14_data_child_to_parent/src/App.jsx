import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  
    const [theme, setTheme] = useState("dark")

  return (
    <div className='h-screen bg-black text-white p-10'>
      <h1 className='text-5xl font-bold'>Theme is {theme}.</h1>
    
      <Navbar theme="light" setTheme={ setTheme} />
    </div>
  )
}

export default App