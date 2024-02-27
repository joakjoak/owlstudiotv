import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";

function Elena() {
  return (
    <>
      <ElenaIn />
    </>
  );
}

export default Elena;

function ElenaIn() {
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
      <h1 className="Title">Elena</h1>;<h1 className="Subtitle">Music Clip</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="text-container-core pages">
          <h1 className="Subtitle">Roses</h1>
          <p>
            With an incredible level of detail, we had the pleasure of making
            some fire and 40,000 digital roses blooming to give the image of
            Elena's new song.
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
            url={"https://vimeo.com/317094253"}
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
          Agency & Production:
          <br></br>
          <br></br>
          Client: Elena
          <br />
          Product: Roses
        </div>
        <div className="text-container-core usmall">
          <p>
            Post-Production:
            <br></br>
            <br></br>
            VFX: Esteban Ponce <br />
            Art-Director: Alejandro Taylor
            <br />
            Animation: Ernesto Cabada
            <br />
            Compositing: Alejandro Taylor
          </p>
        </div>
      </div>
      <div className="container-core-blank"></div>
    </>
  );
}
