import React from "react";

import "../styles/header.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to="/" className="lien-accueil"><img src={logo} alt="Logo"></img></NavLink>
      <nav>
        <NavLink to="/Home" className="lien-menu" style={({ isActive }) => isActive ? { textDecoration: "underline" } : { textDecoration: "unset" }}>Accueil</NavLink>
        <NavLink to="/APropos" className="lien-menu" style={({ isActive }) => isActive ? { textDecoration: "underline" } : { textDecoration: "unset" }}>À Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;