import React from "react";
import "./footer.css";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.facebook.com/jardimotors.henrion">
          <IoLogoFacebook />
        </a>
        <Link to="./MentionsLegales">Mentions légales</Link>
        <a href="https://www.linkedin.com/in/samibrahimdev/">Made by Sami</a>
      </div>
    </footer>
  );
}
