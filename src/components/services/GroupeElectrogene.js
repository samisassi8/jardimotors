import React from "react";
import groupeElectrogene from "../../assets/groupeElectrogene.jpeg";
import "./display_left.css";

export default function GroupeElectrogene() {
  return (
    <div>
      <h3>Groupe électrogène</h3>
      <div className="services___right">
        <img src={groupeElectrogene} alt="groupe électrogène" />
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
