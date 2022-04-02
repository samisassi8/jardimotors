import React from "react";
import motoculteur from "../../assets/motoculteur.jpeg";
import "./display_right.css";

export default function Motoculteur() {
  return (
    <div>
      <h3>Motoculteur</h3>
      <div className="services___right">
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
        <img src={motoculteur} alt="motoculteur" />
      </div>
    </div>
  );
}
