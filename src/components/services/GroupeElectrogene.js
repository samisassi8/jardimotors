import React from "react";
import "./display_left.css";
import groupeElectrogene from "../../assets/groupeElectrogene.jpeg";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

export default function Tondeuse() {
  return (
    <div>
      <Flip left>
        <h3>Groupe électrogène</h3>
      </Flip>
      <div className="services___left">
        <div className="service_picture">
          <Bounce left>
            <img src={groupeElectrogene} alt="groupe électrogène" />
          </Bounce>
        </div>
        <div className="description">
          <ul>
            <li>Interventions diverses:</li>
            <li>Lié au câble</li>
            <li>l'état des courroies</li>
            <li>aide au démarage du moteur (thermique ou électrique)</li>
            <li>Remplacement des bougies, pignons, lames, chaines...</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
