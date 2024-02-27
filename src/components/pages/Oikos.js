import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";

function Oikos() {
  return (
    <>
      <OikosIn />
    </>
  );
}

export default Oikos;

function OikosIn() {
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
      <h1 className="Title">Oikos</h1>;
      <h1 className="Subtitle">Advertising - APZ Media</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="text-container-core pages">
          <h1 className="Subtitle">Landscape Inside</h1>
          <p>
            For this celebration of the landscapes of Oikos we made several full
            CGI Shots analogous to nature.
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
            url={"https://vimeo.com/281470717"}
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
            Client: Oikos
            <br />
            Product: Nova <br />
            Agency: APZ Media <br />
            Producer: APZ Media <br />
            Director: Pablo Apiolazza
          </p>
        </div>
        <div className="text-container-core usmall">
          <p>
            Post-production:
            <br />
            <br />
            VFX: Owl Studio
            <br />
            Art-Director: Esteban Ponce <br />
            Animation: Ernesto Cabada <br />
            Compositing: Esteban Ponce
          </p>
        </div>
      </div>
      <div className="container-core-blank"></div>
    </>
  );
}
