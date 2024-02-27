import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";
import ImageGallery from "../ImageGallery";

function Tecnomaster() {
  return (
    <>
      <TecnomasterIn />
    </>
  );
}

export default Tecnomaster;

function TecnomasterIn() {
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
    "../images/tecnomaster/2.png",
    "../images/tecnomaster/3.png",
  ];

  return (
    <>
      <div className="overlay-container">
        <div className="loader"></div>
      </div>
      <h1 className="Title">Acondicionadores Tecnomaster</h1>;
      <h1 className="Subtitle">Advertising - Kraneo</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="text-container-core pages">
          <h1 className="Subtitle">Horror Movie</h1>
          <p>
            Owl Studio worked on the development of the terror scene, working to
            create a realistic flame effect.
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
            url={"https://vimeo.com/230095919"}
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
            Client: Plaza Lamas
            <br />
            Product: AC Tecnomaster
            <br />
            Agency: Havas World Wide
            <br />
            Producer: Nalini Alfonseca
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
