import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";

function TigoCafe() {
  return (
    <>
      <TCInside />
    </>
  );
}

export default TigoCafe;

function TCInside() {
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
      <h1 className="Title">Tigo Café</h1>;
      <h1 className="Subtitle">Advertising</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="text-container-core pages">
          <h1 className="Subtitle"> Tigo Amazon Café</h1>
        </div>
      </div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="container-vid">
          {" "}
          <ReactPlayer
            url={"https://vimeo.com/317085570"}
            controls={true}
            width="100%"
            onReady={handleVideoReady}
          />
        </div>
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
            Client: Tigo
            <br />
            Product: Amazon Prime
            <br />
            Producer: Gloria Films
            <br />
            Director: Federico Gianotti
          </p>
        </div>
        <div className="text-container-core usmall">
          <p>
            Post-production:
            <br />
            <br />
            VFX: Owl Studio <br />
            Art-Director: Esteban Ponce <br />
            Animation: Ernesto Cabada
          </p>
        </div>
      </div>
      <div className="container-core-blank"></div>
    </>
  );
}
