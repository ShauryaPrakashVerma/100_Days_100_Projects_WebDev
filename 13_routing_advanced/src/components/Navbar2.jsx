import React from "react";
import { useNavigate } from "react-router-dom";


const Navbar2 = () => {

  let navigate = useNavigate()

  return (
    <div className="py-3 px-6 bg-cyan-700">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-emerald-500 px-5 py-2 cursor-pointer active:scale95"
      >
        Return to Homepage
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-emerald-500 px-5 py-2 cursor-pointer active:scale95"
      >
        Back
      </button>
    </div>
  );
};

export default Navbar2;
