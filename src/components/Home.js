import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import "./home.css";
import Slideshow from "./slideshow/slideshow";
=======
>>>>>>> 18f3b85... project ended

export default function Home() {
  return (
    <div className="home__container">
      <Fade top cascade>
        <Link to="/services">
<<<<<<< HEAD
          <h1 className="home__title">JARDIMOTORS</h1>
        </Link>
        <Slideshow />
        <ul>
          <li>HENRION Stéphane</li>
          <li>Un professionnel à votre service</li>
          {/* <li>A Ruvigny</li> */}
          <li>Réparation - Entretien</li>
          <li>Matériel de motoculture</li>
          <li>TOUTES MARQUES</li>
        </ul>
=======
          <h1>JARDIMOTORS</h1>
        </Link>
>>>>>>> 18f3b85... project ended
      </Fade>
    </div>
  );
}
