import React from "react";
import "./display_right.css";
import tailleHaie from "../../assets/tailleHaie.jpg";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

export default function TailleHaie() {
  return (
    <div>
      <div className="border"></div>
      <Flip left>
        <h3>Taille haie</h3>
      </Flip>
      <div className="services___right">
        <div className="description">
          <ul>
            <li>révision</li>
            <li>
              réparation multiples (moteur, carburation, allumage, lanceurs{" "}
            </li>
            <li>affûtage</li>
            <li>graissage</li>
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
