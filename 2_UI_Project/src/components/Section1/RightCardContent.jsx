import React from 'react'
import { ArrowRight } from "lucide-react";
const RightCardContent = (props) => {
  return (
    
    <div className="absolute top-0 left-0 h-full w-full p-7 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl font-semibold">{props.id+1}</h2>
        <div >
          <p className="text-lg leading-normal text mb-10 text-white text-shadow-2xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
            recusandae tempora repudiandae quis alias incidunt.
          </p>
          <div className="flex justify-between">
            <button style={{backgroundColor:props.color}} className=" text-white font-medium px-8 py-2 rounded-full">{props.tag}</button>
            <button style={{backgroundColor:props.color}} className=" text-white font-medium px-3 py-2 rounded-full">
                <ArrowRight />
            </button>
        </div>
        </div>
      </div>
  )
}

export default RightCardContent