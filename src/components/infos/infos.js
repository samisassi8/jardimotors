import React from "react";
import "./infos.css";

export default function infos() {
  return (
    <div className="info_container">
      <div className="infos__coordonnees">
        <h3>Coordonnées</h3>
        <p>5 Rue de la Grève 10410 Ruvigny</p>
        <p>06 72 33 72 77</p>
      </div>
      <div className="google-map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2655.6066198026283!2d4.179980515653741!3d48.27194437923434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ee9e47c7da8639%3A0xf22516579ae88b7!2sJARDIMOTORS!5e0!3m2!1sfr!2sfr!4v1648815032256!5m2!1sfr!2sfr"
          allowFullScreen=""
          title="map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="info__container">
        <div>
          <h3>Horaires d'ouverture</h3>
          <ul>
            <li>Lun: 09:00 - 12:00, 14:00 - 18:00</li>
            <li>Mar: 09:00 - 12:00, 14:00 - 18:00</li>
            <li>Mer: 09:00 - 12:00, 14:00 - 18:00</li>
            <li>Jeu: 09:00 - 12:00, 14:00 - 18:00</li>
            <li>Ven: 09:00 - 12:00, 14:00 - 18:00</li>
            <li>Sam: 09:00 - 12:00, 14:00 - 18:00</li>
            <li>Dim: 09:00 - 12:00, 14:00 - 18:00</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
