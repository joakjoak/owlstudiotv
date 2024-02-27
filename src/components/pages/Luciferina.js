import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";
import ImageGallery from "../ImageGallery";

function Luciferina() {
  return (
    <>
      <LuciferinaInside />
    </>
  );
}

export default Luciferina;

function LuciferinaInside() {
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
    "../images/fruitbox/pina1.png",
    "../images/fruitbox/pina2.png",
    "../images/fruitbox/pina3.png",
    "../images/fruitbox/pina4.png",
  ];

  return (
    <>
      <div className="overlay-container">
        <div className="loader"></div>
      </div>
      <h1 className="Title">Luciferina</h1>;
      <h1 className="Subtitle">Movie - Horror</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="text-container-core pages">
          <h1 className="Subtitle"> Who seeks the devil finds it.</h1>
          <p>
            We made an entire digital womb/baby and some more VFX for the horror
            movie Luciferina.
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
            url={"https://vimeo.com/339492678"}
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
