import React from "react";
import "./display_right.css";
import tailleHaie from "../../assets/tailleHaie.jpg";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

export default function Tondeuse() {
  return (
    <div>
      <div className="border"></div>
      <Flip left>
        <h3>Taille haie</h3>
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
            <img src={tailleHaie} alt="taille haie" />
          </Bounce>
        </div>
      </div>
    </div>
  );
}
