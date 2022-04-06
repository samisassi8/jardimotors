import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <small>© copyright 2022</small>
      <Link to="./MentionsLegales">Mentions légales</Link>
      <a href="https://www.linkedin.com/in/samibrahimdev/">
        <small>Made by Sami</small>
      </a>
    </footer>
  );
}
