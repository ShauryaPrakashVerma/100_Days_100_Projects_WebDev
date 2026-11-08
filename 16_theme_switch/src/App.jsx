import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, settheme] = useState("light")

  return (
    <div className='h-screen bg-black text-white'>
      <Navbar theme={theme} />
    </div>
    
  )
}

export default App