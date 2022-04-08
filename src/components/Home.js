import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home__container">
      <Fade top cascade>
        <Link to="/services">
          <h1>JARDIMOTORS</h1>
        </Link>
        <ul>
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
