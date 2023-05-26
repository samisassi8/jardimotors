import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import "./home.css";
import Slideshow from "./slideshow/slideshow";

export default function Home() {
  return (
    <div className="home__container">
      {console.log("prout")}
      <Fade top cascade>
        <Link to="/services">
          <h1 className="home__title">JARDIMOTORS</h1>
        </Link>
      </Fade>
      <Slideshow className="slideShow" />
      <div className="home__info">
        <ul>
          <li>HENRION Stéphane</li>
          <li>Un professionnel à votre service</li>
          <li>Réparation - Entretien</li>
          <li>Matériel de motoculture</li>
          <li>TOUTES MARQUES</li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}
