import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Caroussel() {
  return (
    <Carousel>
      <div>
        <link
          rel="stylesheet"
          href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"
        />
        <img src="https://ibb.co/DwJfhcB" alt="test" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://ibb.co/3zC5Xx1" alt="test" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://ibb.co/RSfkYhg" alt="test" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://ibb.co/BBvbj0X" alt="test" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="https://ibb.co/CJvR0fj" alt="test" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src="https://ibb.co/YfCX1Kw" alt="test" />
        <p className="legend">Legend 3</p>
      </div>
      {/* <div>
                    <img src="" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="" />
                    <p className="legend">Legend 3</p>
                </div> */}
    </Carousel>
  );
}

ReactDOM.render(<Caroussel />, document.querySelector(".caroussel"));
