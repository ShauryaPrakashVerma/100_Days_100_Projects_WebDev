import React from 'react'

const Navbar = (props) => {

  function changeTheme() {
    props.setTheme('light')
  }

  return (
    <div>
          <button onClick={changeTheme} className='bg-green-700 px-4 py-2 rounded m-5 active:scale-90 active:bg-green-900'>Change Theme</button>
    </div>
  )
}

export default Navbar