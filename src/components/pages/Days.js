import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";

function Days() {
  return (
    <>
      <DaysIn />
    </>
  );
}

export default Days;

function DaysIn() {
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
      <h1 className="Title">Day's</h1>;
      <h1 className="Subtitle">Advertising - Barraca Post</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="text-container-core pages">
          <h1 className="Subtitle">Verano</h1>
          <p>Summer promotion of the product</p>
        </div>
      </div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="container-vid">
          {" "}
          <ReactPlayer
            url={"https://vimeo.com/96614818"}
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
            Client: Kotex
            <br />
            Product: Kotex Verano
            <br />
            Agency: Grey
            <br />
            Producer: Barraca Post
            <br />
            Director: Esteban Ponce
          </p>
        </div>
        <div className="text-container-core usmall">
          <p>
            Post-Production:
            <br></br>
            <br></br>
            VFX: Esteban Ponce
            <br />
            Art-Director: Esteban Ponce
            <br />
            Animation: Esteban Ponce
            <br />
            Compositing: Bernardo Pichardo
          </p>
        </div>
      </div>
      <div className="container-core-blank"></div>
    </>
  );
}
