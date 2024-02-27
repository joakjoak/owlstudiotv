import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";
import ImageGallery from "../ImageGallery";

function Vitamin() {
  return (
    <>
      <VitaminIn />
    </>
  );
}

export default Vitamin;

function VitaminIn() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoReady = () => {
    setVideoLoaded(true);
    setTimeout(() => {
      const overlay = document.querySelector(".overlay-container");
      overlay.style.opacity = 0;

      setTimeout(() => {
        overlay.style.display = "none";
      }, 1000);
    }, 2000);
  };

  const imageSources = ["../images/vitamin/1.png", "../images/vitamin/2.png"];

  return (
    <>
      <div className="overlay-container">
        <div className="loader"></div>
      </div>
      <h1 className="Title">Vitamin Water</h1>;
      <h1 className="Subtitle">Advertising - Cravero</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="text-container-core pages">
          <h1 className="Subtitle">
            The Original from New York llegó a Buenos Aires
          </h1>
          <p>Directed and composed by Owl.</p>
        </div>
      </div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="container-vid">
          {" "}
          <ReactPlayer
            url={"https://vimeo.com/170045581"}
            controls={true}
            width="100%"
            onReady={handleVideoReady}
          />
        </div>
      </div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <ImageGallery images={imageSources} />
      </div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <h1 className="credit-class">Credits:</h1>;
      <div className="container-core">
        <div className="text-container-core uright usmall">
          Agency & Production:
          <br></br>
          <br></br>
          Client: The Coca-Cola Company
          <br />
          Product: Vitamin Water
          <br />
          Agency: Cravero <br />
          Producer: Barraca Post <br />
          Director: Esteban Ponce
        </div>
      </div>
      <div className="container-core-blank"></div>
    </>
  );
}
