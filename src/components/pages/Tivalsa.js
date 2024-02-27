import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";

function Tivalsa() {
  return (
    <>
      <TivalsaIn />
    </>
  );
}

export default Tivalsa;

function TivalsaIn() {
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
      <h1 className="Title">Tivalsa</h1>;
      <h1 className="Subtitle">Advertising</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages"></div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="container-vid">
          {" "}
          <ReactPlayer
            url={"https://vimeo.com/724670743"}
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
