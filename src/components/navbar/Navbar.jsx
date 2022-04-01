import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Dropdown from "./Dropdown";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { AiFillPhone } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";

export default function Navbar() {
  const [click, setClick] = useState(false);

  return (
    <nav>
      <div className="nav__dropdown">
        <button
          onClick={() => {
            setClick(!click);
          }}
        >
          {click ? <CgClose /> : <GiHamburgerMenu />}
        </button>
        <div className={click ? "dropdownShow" : "hidden"}>
          <h2>Les services</h2>
          <Link onClick={() => setClick(false)} to="/tondeuse">
            Tondeuse
          </Link>
          <Link onClick={() => setClick(false)} to="/tondeuse-auto-portee">
            Tondeuse auto portée
          </Link>
          <Link onClick={() => setClick(false)} to="/debroussailleuse">
            Débroussailleuse
          </Link>
          <Link onClick={() => setClick(false)} to="/moto-culteur">
            Moto culteur
          </Link>
          <Link onClick={() => setClick(false)} to="/groupe-electrogene">
            Groupe électrogène
          </Link>
          <Link onClick={() => setClick(false)} to="/taille-haie">
            Taille haie
          </Link>
          <Link onClick={() => setClick(false)} to="/souffleur">
            Souffleur
          </Link>
        </div>
      </div>
      <Link to="/" className="nav__logo">
        <img src={logo} alt="jardimotors" />
        <h1>JARDIMOTORS</h1>
      </Link>
      <div className="nav__icon">
        <button>
          <AiFillPhone />
        </button>
        <Link to="/infos">
          <SiGooglemaps />
        </Link>
      </div>
    </nav>
  );
}
