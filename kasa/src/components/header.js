import React from "react";

import "../styles/header.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav>
        <NavLink to="/" className="lien-menu" style={({ isActive }) => isActive ? { textDecoration: "underline" } : { textDecoration: "unset" }}>Accueil</NavLink>
        <NavLink to="/APropos" className="lien-menu" style={({ isActive }) => isActive ? { textDecoration: "underline" } : { textDecoration: "unset" }}>À Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;