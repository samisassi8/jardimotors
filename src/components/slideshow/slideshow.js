import React from "react";
import { Slide } from "react-slideshow-image";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";
import img5 from "../../assets/img/img5.jpg";
import "./slideshow.css";
import "react-slideshow-image/dist/styles.css";

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        <div className="each-slide">
          <div>
            <img src={img1} alt="img1" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={img2} alt="img2" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={img3} alt="img3" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={img4} alt="img4" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={img5} alt="img5" />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
