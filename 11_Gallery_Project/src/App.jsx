import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";


const App = () => {
  const [userData, setuserData] = useState([]);

  const [index, setindex] = useState(1)

  const getData = async () => {
    var response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}`,
    );
    setuserData(response.data);
    console.log(userData);
  };

  useEffect(() => {
    getData()
  }, [index])
  


  let printUserData = <h3 className="text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">Loading...</h3>;

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen p-4 text-white overflow-auto">

      <div className="flex flex-wrap gap-4 h-[90%]">{printUserData}</div>

      <div className="flex justify-center items-center p-4 gap-6">
        <button style={{opacity:index==1 ? 0.5 : 1}} className="bg-amber-400 text-black rounded px-4 py-2 text-sm cursor-pointer font-semibold active:scale-105"
          onClick={() => {
            setindex(index - 1 <= 1 ? 1 : index - 1)
            setuserData([])
            
          }}>Prev</button>
        
        <h3 className="border px-4 py-2 rounded-2xl">{ index}</h3>

        <button className="bg-amber-400 text-black rounded px-4 py-2 text-sm cursor-pointer font-semibold active:scale-105"
          onClick={() => {
            setindex(index + 1)
            setuserData([])

        }}>Next</button>
      </div>
    </div>
  );
};

export default App;
