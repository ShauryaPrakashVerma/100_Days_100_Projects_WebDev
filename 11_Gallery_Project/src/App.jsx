import React from 'react'
import axios from 'axios'

const App = () => {

  const getData =async () => {
    var data = await axios.get("https://picsum.photos/v2/list?page=2&limit=100")
    console.log(data.data)
  }

  return (
    <div className='bg-black h-screen p-4 text-white'>
      <button className='bg-green-600 active:scale-105 active:bg-green-900 px-6 py-2 rounded text-white'
      onClick={getData}>
        Get Data
      </button>
    </div>
  )
}

export default App
