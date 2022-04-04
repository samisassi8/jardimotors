import React from "react";
import "./display_left.css";
import souffleur from "../../assets/souffleur.jpeg";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

export default function Souffleur() {
  return (
    <>
      <div className="border"></div>
      <Flip left>
        <h3 id="souffleur">Souffleur</h3>
      </Flip>
      <div className="services___left">
        <div className="service_picture">
          <Bounce left>
            <img src={souffleur} alt="souffleur" />
          </Bounce>
        </div>
        <div className="description">
          <ul>
            <li>révision</li>
            <li>
              réparation multiples ( système de coupe, moteur, carburation,
              graissage etc)
            </li>
            <li>affûtage</li>
          </ul>
        </div>
      </div>
    </>
  );
}
