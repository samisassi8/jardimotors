import React from "react";
import tailleHaie from "../../assets/tailleHaie.jpg";

export default function TailleHaie() {
  return (
    <div>
      <h3>Taille haie</h3>
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
        <img src={tailleHaie} alt="taille Haie" />
      </div>
    </div>
  );
}
