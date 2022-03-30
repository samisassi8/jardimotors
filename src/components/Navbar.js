import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Dropdown from "./Dropdown";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="company logo" />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <button
          onClick={() => {
            setClick(!click);
          }}
          className="nav-btn"
        >
          {click ? <CgClose /> : <GiHamburgerMenu />}
        </button>
        <Link to="/tondeuse">Tondeuse</Link>
        <Link to="/tondeuse-auto-portee">Tondeuse auto portée</Link>
      </div>
    </nav>
  );
}
