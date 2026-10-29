import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)

  useEffect(() => {
    console.log('useEffect is running')
  },[num])
  

  return (
    <div>
      <h1>Value of num1 is {num}</h1>
      <h1>Value of num2 is {num2}</h1>
      <button onMouseEnter={() => {
        setnum(num + 1)
      }}
        onDoubleClick={() => {
          setnum2(num2 + 10)
        }}>Click</button>
    </div>
  )
}

export default App