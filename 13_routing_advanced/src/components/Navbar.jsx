import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-4 bg-cyan-900">
      <h2 className="text-xl font-bold">Navbar</h2>
      <div className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar
