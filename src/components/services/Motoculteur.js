import React from "react";
import "./display_right.css";
import motoculteur from "../../assets/motoculteur.jpeg";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

export default function Tondeuse() {
  return (
    <div>
      <Flip left>
        <h3>Motoculteur</h3>
      </Flip>
      <div className="services___right">
        <div className="description">
          <ul>
            <li>Interventions diverses:</li>
            <li>Lié au câble</li>
            <li>l'état des courroies</li>
            <li>aide au démarage du moteur (thermique ou électrique)</li>
            <li>Remplacement des bougies, pignons, lames, chaines...</li>
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
