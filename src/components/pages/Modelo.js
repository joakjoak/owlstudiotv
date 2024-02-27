import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";

function Modelo() {
  return (
    <>
      <ModeloIn />
    </>
  );
}

export default Modelo;

function ModeloIn() {
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
  return (
    <>
      <div className="overlay-container">
        <div className="loader"></div>
      </div>
      <h1 className="Title">Modelo</h1>;
      <h1 className="Subtitle">Advertising</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages"></div>
      <h1 className="Subtitle">El Antiplaner</h1>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="container-vid">
          {" "}
          <ReactPlayer
            url={"https://vimeo.com/646141624"}
            controls={true}
            width="100%"
            onReady={handleVideoReady}
          />
        </div>
      </div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-blank"></div>
    </>
  );
}
