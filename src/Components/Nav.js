import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
  <nav>
      <NavLink to="/home">Home </NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="whatever path we want">Whatever </NavLink>
  </nav>
  )
}

export default Nav;
