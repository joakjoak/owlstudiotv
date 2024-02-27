import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";
import ImageGallery from "../ImageGallery";

function Peugeot2() {
  return (
    <>
      <Peugeot2In />
    </>
  );
}

export default Peugeot2;

function Peugeot2In() {
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
    "../images/peugeot/5.png",
    "../images/peugeot/6.png",
    "../images/peugeot/7.png",
  ];

  return (
    <>
      <div className="overlay-container">
        <div className="loader"></div>
      </div>
      <h1 className="Title">Peugeot 308</h1>;
      <h1 className="Subtitle">Advertising - Havas World Wide</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="text-container-core pages">
          <h1 className="Subtitle">Love at First Sight</h1>
          <p>With some invisible vfx we helped telling this little story.</p>
        </div>
      </div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="container-vid">
          {" "}
          <ReactPlayer
            url={"https://vimeo.com/147547140"}
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
            Client: Peugeot
            <br />
            Product: New Peugeot 308
            <br />
            Agency: Havas World Wide
            <br />
            Director: Javier Usandivaras
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
            Art-Director: Pol <br />
            Animation: Esteban Ponce
          </p>
        </div>
      </div>
      <div className="container-core-blank"></div>
    </>
  );
}
