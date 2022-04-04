import React from "react";
import "./display_right.css";
import motoculteur from "../../assets/motoculteur.jpeg";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

export default function Motoculteur() {
  return (
    <div id="motoculteur">
      <Flip left>
        <h3>Motoculteur</h3>
      </Flip>
      <div className="services___right">
        <div className="description">
          <ul>
            <li>révision</li>
            <li>
              réparation multiples ( moteur, carburation, transmission
              ,courroies
            </li>
          </ul>
        </div>
        <div className="service_picture">
          <Bounce right>
            <img src={motoculteur} alt="motoculteur" />
          </Bounce>
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
}
