import React from 'react'

const App = () => {

    const buttonWasClicked = ()=> {
        console.log("This button was clicked.")
    }
  return (
      <button onClick={buttonWasClicked}>
          Click here
    </button>
  )
}

export default App