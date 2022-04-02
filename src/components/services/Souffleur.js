import React from "react";
import souffleur from "../../assets/souffleur.jpeg";
import "./display_left.css";

export default function Souffleur() {
  return (
    <div>
      <h3>Souffleur</h3>
      <div className="services___left">
        <img src={souffleur} alt="souffleur" />
        <p>
          Confiez-nous la réparation de votre tondeuse pour la remettre en
          marche,quelle que soit sa marque:
          <p>Amélioration des performances</p>
          <p>Interventions sur pannes diverses:</p>
          <p>Lié au cable</p>
          <p>l'état des courroies</p>
          <p>aide au démarage du moteur (thermique ou électrique)</p>
          <p>Remplacement des bougies, pignons, lames, chaines...</p>
        </p>
      </div>
    </div>
  );
}
