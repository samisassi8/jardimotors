import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import "./home.css";
import Slideshow from "./slideshow/slideshow";

export default function Home() {
  return (
    <div className="home__container">
      <Fade top cascade>
        <Link to="/services">
          <h1 className="home__title">JARDIMOTORS</h1>
        </Link>
        <Slideshow className="slideShow" />
        <ul className="home__info">
          <li>HENRION Stéphane</li>
          <li>Un professionnel à votre service</li>
          {/* <li>A Ruvigny</li> */}
          <li>Réparation - Entretien</li>
          <li>Matériel de motoculture</li>
          <li>TOUTES MARQUES</li>
        </ul>
      </Fade>
    </div>
  );
}
