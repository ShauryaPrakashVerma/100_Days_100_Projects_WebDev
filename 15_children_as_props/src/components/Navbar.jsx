import React from "react";
import Nav2 from "./Nav2";

const Navbar = (props) => {
  console.log(props);
  return (
    <div>
      <Nav2 theme={props.theme}>
        {props.children}
      </Nav2>
      {props.children[0]}
      {props.children[1]}
    </div>
  );
};

export default Navbar;
