import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";

function Toyota() {
  return (
    <>
      <ToyotaIn />
    </>
  );
}

export default Toyota;

function ToyotaIn() {
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
      <h1 className="Title">Toyota</h1>;
      <h1 className="Subtitle">Advertising - Landia NY</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="text-container-core pages">
          <h1 className="Subtitle">The Book of Names</h1>
        </div>
      </div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="container-vid">
          {" "}
          <ReactPlayer
            url={"https://vimeo.com/231010527"}
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
            Client: Toyota
            <br />
            Product: Book of Names
            <br />
            Producer: Landia NY
            <br />
            Director: Alejandro Taylor
          </p>
        </div>
        <div className="text-container-core usmall">
          <p>
            Post-Production:
            <br></br>
            <br></br>
            VFX: Owl Studio
          </p>
        </div>
      </div>
      <div className="container-core-blank"></div>
    </>
  );
}
