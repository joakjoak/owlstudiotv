import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";
import ImageGallery from "../ImageGallery";

function Ciel() {
  return (
    <>
      <CielIn />
    </>
  );
}

export default Ciel;

function CielIn() {
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

  const imageSources = [
    "../images/ciel/1.png",
    "../images/ciel/2.png",
    "../images/ciel/3.png",
  ];

  return (
    <>
      <div className="overlay-container">
        <div className="loader"></div>
      </div>
      <h1 className="Title">Ciel</h1>;
      <h1 className="Subtitle">Advertising - REBOLUCION</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="text-container-core pages">
          <h1 className="Subtitle">Hidrata tu Cuerpo y Mente</h1>
          <p>
            We improved the scenes, animated the water and the bottle to finish
            the advertisement.
          </p>
        </div>
      </div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="container-vid">
          {" "}
          <ReactPlayer
            url={"https://vimeo.com/176107678"}
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
          <p>
            Agency & Production:
            <br></br>
            <br></br>
            Client: The Coca-Cola Company
            <br />
            Product: Ciel
            <br />
            Director: Gabriel García Sainz
            <br />
            Producer: REBOLUCION
          </p>
        </div>
        <div className="text-container-core usmall">
          <p>
            Post-production:
            <br />
            <br />
            VFX: Owl Studio
            <br />
            Animation: Esteban Ponce
          </p>
        </div>
      </div>
      <div className="container-core-blank"></div>
    </>
  );
}
