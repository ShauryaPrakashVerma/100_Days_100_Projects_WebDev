// import React from "react";

// const App = () => {
//   async function getData()  = async(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     console.log(response);.json
//     console.log("Hello");
//   }

//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//     </div>
//   );
// };

// export default App;


// --------------------------------------------------------------------------------------------------------

// import React from 'react'
// import axios from 'axios'

// const getData = async () => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  
//   console.log(response.data)
// }

// const App = () => {
//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//     </div>
//   )
// }

// export default App

// -----------------------------------------------------------------------------------------------------------------------

import React, { useState } from 'react'
import axios from 'axios'


const App = () => {
  const [data, setdata] = useState([])

  const getData = async () => {
    const response =await axios.get("https://picsum.photos/v2/list")
    setdata(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx){
          return <h3>Hello { idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App