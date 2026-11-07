import React from "react";

const Navbar = () => {
  return (
    <div className="bg-green-700 flex justify-between h-18 px-20 items-center">
      <h1 className="text-3xl font-bold">Navbar</h1>
      <div className="flex gap-15">
        <a href="">Home</a>
        <a href="">Contact</a>
        <a href="">Careers</a>
        <a href="">About</a>
      </div>
    </div>
  );
};

export default Navbar;
