import React, { useState } from 'react'
import Navbar from './components/Navbar'
import ThemeProvider from './ThemeContext/ThemeContext'

const App = () => {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={theme} setTheme={setTheme}>
      <div className={`h-screen ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
        <Navbar />
      </div>
    </ThemeProvider>
  )
}

export default App