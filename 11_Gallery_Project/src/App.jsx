import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setuserData] = useState([]);

  const getData = async () => {
    var response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=15 ",
    );
    setuserData(response.data);
    console.log(userData);
  };

  let printUserData = "No User Available";

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href="">
            <div className="h-40 w-44 bg-white key=">
              <img className="h-full object-cover" src={elem.download_url} alt="" />
              <h2 className="font-bold text-lg">{elem.author }</h2>
            </div>
          </a>
          
        </div>
        
      );
    });
  }

  return (
    <div className="bg-black h-screen p-4 text-white overflow-auto">
      <button
        className="bg-green-600 active:scale-105 active:bg-green-900 px-6 py-2 rounded text-white"
        onClick={getData}
      >
        Get Data
      </button>

      <div className="flex flex-wrap gap-4">{printUserData}</div>
    </div>
  );
};

export default App;
