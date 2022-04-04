import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { Anchor } from "antd";
import { HashLink } from "react-router-hash-link";
// import Dropdown from "./Dropdown";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { AiFillPhone } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
// const { Link } = Anchor;

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
          {/* <Anchor> */}
          {/* <Link to="#tondeuse" title="tondeuse" /> */}
          {/* <Link
              to="#../services/tondeuseAutoPortee"
              title="tondeuse auto portée"
            />
            <Link
              to="#../services/debrouissailleuse"
              title="débroussailleuse"
            />
            <Link to="#..services/motoculteur" title="motoculteur" />
            <Link
              to="#../services/groupeElectrogene"
              title="groupe électrogène"
            />
            <Link to="#../services/tailleHaie" title="taille haie" />
            <Link to="#../services/souffleur" title="souffleur" /> */}
          {/* </Anchor> */}
          <HashLink onClick={() => setClick(false)} to="/services/#tondeuse">
            Tondeuse
          </HashLink>
          <HashLink
            onClick={() => setClick(false)}
            to="/services/#tondeuseAutoPortee"
          >
            Tondeuse auto portée
          </HashLink>
          <HashLink
            onClick={() => setClick(false)}
            to="/services/#debrouissailleuse"
          >
            Débroussailleuse
          </HashLink>
          <HashLink onClick={() => setClick(false)} to="/services/#motoculteur">
            Moto culteur
          </HashLink>
          <HashLink
            onClick={() => setClick(false)}
            to="/services/#groupeElectrogene"
          >
            Groupe électrogène
          </HashLink>
          <HashLink onClick={() => setClick(false)} to="/services/#tailleHaie">
            Taille haie
          </HashLink>
          <HashLink onClick={() => setClick(false)} to="../services/#souffleur">
            Souffleur
          </HashLink>
        </div>
      </div>
      <Link to="/" className="nav__logo">
        <img src={logo} alt="jardimotors" />
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
