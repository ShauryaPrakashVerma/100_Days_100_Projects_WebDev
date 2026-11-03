import React from "react";

const Nav2 = (props) => {
  return (
    <div className="w-full h-20 bg-green-600 px-15 flex justify-between items-center">
      <h2 className="text-3xl font-bold">Navbar</h2>
      <div className="flex gap-8 items-center text-xl">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
          <h4>{props.theme}</h4>
          {props.children[0]}
          {props.children[1]}
    </div>
  );
};

export default Nav2;
