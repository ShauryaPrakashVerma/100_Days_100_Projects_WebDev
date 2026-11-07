import React from "react";
import { Link } from 'react-router-dom'
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="bg-green-700 flex justify-between h-18 px-20 items-center">
      <h1 className="text-3xl font-bold">Navbar</h1>
      <div className="flex gap-15">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/about">About</Link>
        <ThemeToggle/>
      </div>
    </div>
  );
};

export default Navbar;
