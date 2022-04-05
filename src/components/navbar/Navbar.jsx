import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { AiFillPhone } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";

export default function Navbar({ services }) {
  const [click, setClick] = useState(false);

  console.log("services:", services);

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
          {services?.map((service, index) => (
            <HashLink
              key={index}
              to={"/services/#" + service.title.toLowerCase()}
              onClick={() => setClick(false)}
            >
              <p>{service.title}</p>
            </HashLink>
          ))}
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
