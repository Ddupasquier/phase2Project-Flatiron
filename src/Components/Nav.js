import React from "react";
import { Link } from "react-router-dom";
// import "../sidenav.css";
// import "../sidenav.js";

function Nav() {
  return (
    <div id="mySidenav" class="sidenav">
      <Link to="/welcome">Welcome</Link>
      <br />
      <Link to="/addmovie">Add Movie</Link>
      <br />
      <Link to="/movies">Movies</Link>
    </div>
  );
}

export default Nav;
