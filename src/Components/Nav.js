import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { CgCloseO } from "react-icons/cg";
import { sidenavData } from "../sidenavData";
import { IconContext } from "react-icons";
import navStyle from "../sidenav.css";

function Nav() {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <>
    <IconContext.Provider value={{color: 'white'}}>
      <div className="navbar">
        <Link to="#" className="nav-bars">
          <FiAlignJustify onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <CgCloseO />
            </Link>
          </li>
          {sidenavData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  );
}

export default Nav;
