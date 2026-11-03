import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, settheme] = useState('light')

  return (
    <div className='h-screen bg-black text-white'>
      <Navbar theme={theme}>
        <h3>Hello ji</h3>
        <h3>Life is enjoy!!</h3>
      </Navbar>
    </div>
  )
}

export default App