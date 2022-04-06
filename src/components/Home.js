import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home__container">
      <Fade top cascade>
        <Link to="/services">
          <h1>JARDIMOTORS</h1>
        </Link>
      </Fade>
    </div>
  );
}
