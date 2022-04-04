import React from "react";
import "./display_right.css";
import tondeuse from "../../assets/tondeuse.jpg";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

export default function Tondeuse() {
  return (
    <div>
      <Flip left>
        <h3>Tondeuse</h3>
      </Flip>
      <div className="services___right">
        <div className="description">
          <ul>
            <li>réviions et entretien</li>
            <li>
              réparation multiples ( moteur, carburation transmission , etc)
            </li>
            <li>affûtage</li>
            <li>graissage</li>
          </ul>
        </div>
        <div className="service_picture">
          <Bounce right>
            <img src={tondeuse} alt="tondeuse" />
          </Bounce>
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
}
