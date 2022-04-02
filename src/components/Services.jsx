import React from "react";
import Tondeuse from "./services/Tondeuse";
import TondeuseAutoPortee from "./services/TondeuseAutoPortee";
import Debrouissailleuse from "./services/Debroussailleuse";
import Motoculteur from "./services/Motoculteur";
import GroupeElectrogene from "./services/GroupeElectrogene";
import TailleHaie from "./services/TailleHaie";
import Souffleur from "./services/Souffleur";

export default function Services() {
  return (
    <div>
      <h1>Nos Services</h1>
      <div>
        <Tondeuse id="tondeuse" />
        <TondeuseAutoPortee id="tondeuseAutoPortee" />
        <Debrouissailleuse id="debrouissailleuse" />
        <Motoculteur id="motoculteur" />
        <GroupeElectrogene id="groupeElectrogene" />
        <TailleHaie id="tailleHaie" />
        <Souffleur id="souffleur" />
      </div>
    </div>
  );
}
