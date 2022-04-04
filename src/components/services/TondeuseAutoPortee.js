import React from "react";
import "./display_left.css";
import tondeuseAutoPortee from "../../assets/tondeuseAutoPortee.jpg";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

export default function TondeuseAutoPortee() {
  return (
    <div id="tondeuseAutoPortee">
      <Flip left>
        <h3>Motoculteur</h3>
      </Flip>
      <div className="services___left">
        <div className="service_picture">
          <Bounce left>
            <img src={tondeuseAutoPortee} alt="tondeuse auto portee" />
          </Bounce>
        </div>
        <div className="description">
          <ul>
            <li>révision</li>
            <li>
              réparation multiples ( moteur, carburation, transmission, système
              de coupe, courroies, batterie)
            </li>
            <li>affûtage</li>
            <li>crevaison</li>
            <li>graissage</li>
          </ul>
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
}
