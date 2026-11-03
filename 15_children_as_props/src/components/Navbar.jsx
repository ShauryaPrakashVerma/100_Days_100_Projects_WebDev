import React, { useContext } from "react";
import Nav2 from "./Nav2";
import { ThemeDataContext } from "../context/ThemeContext";

const Navbar = (props) => {

  const data = useContext(ThemeDataContext)
  console.log(data);
  return (
    <div>
      <Nav2 theme={props.theme}>
        {props.children}
      </Nav2>
      {props.children[0]}
      {props.children[1]}

      <h1>{ data}</h1>
    </div>
  );
};

export default Navbar;
