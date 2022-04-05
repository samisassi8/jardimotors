import React from "react";
import "./services/display_right.css";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

export default function Services({ services }) {
  // {services} est égal à props.service. On a destructuré le props.service dans le constructeur de App.js (ligne 36)
  return (
    <div>
      <h1>Nos Services</h1>
      {services?.map((service) => (
        <div id={service.title.toLowerCase()}>
          <Flip left>
            <h3>{service.title}</h3>
          </Flip>
          <div className="services___right">
            <div className="description">
              <ul>
                {service.description.map((desc) => (
                  <li>{desc}</li>
                ))}
              </ul>
            </div>
            <div className="service_picture">
              <Bounce right>
                <img src={service.img} alt={service.title} />
              </Bounce>
            </div>
          </div>
          <div className="border"></div>
        </div>
      ))}
    </div>
  );
}
