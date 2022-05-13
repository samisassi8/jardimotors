import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { AiFillPhone } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import { IoLogoFacebook } from "react-icons/io";

export default function Navbar({ services }) {
  const [click, setClick] = useState(false);
  const [scroll, handleScroll] = useState(false);

  // console.log("services:", services);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        handleScroll(true);
      } else handleScroll(false); // if not 1px down
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className={scroll && "nav_bg_blur"}>
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
              targetOffset="150"
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
        <a href="tel:+330672337277">
          <AiFillPhone />
        </a>
        <a href="https://www.facebook.com/jardimotors.henrion">
          <IoLogoFacebook />
        </a>
        <Link to="/infos">
          <SiGooglemaps />
        </Link>
      </div>
    </nav>
  );
}
