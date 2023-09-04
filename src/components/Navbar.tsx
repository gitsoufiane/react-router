import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navlinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav>
      <NavLink style={navlinkStyles} to={"/about"}>
        About
      </NavLink>
      <NavLink style={navlinkStyles} to={"/"}>
        Home
      </NavLink>
    </nav>
  );
}
