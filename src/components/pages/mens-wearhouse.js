import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";
import ImageGallery from "../ImageGallery";

function MensWearhouse() {
  return (
    <>
      <MWInside />
    </>
  );
}

export default MensWearhouse;

function MWInside() {
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
      <h1 className="Title">Men's Wearhouse</h1>;
      <h1 className="Subtitle">Advertising - Sastre</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="text-container-core pages">
          <h1 className="Subtitle"> For those who care</h1>
          <p>
            When they called the NASA and they did not allow them to shoot in
            Cape Canaveral, they called us because we care...
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
            url={"https://vimeo.com/332331944"}
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
            Client: Men's Wearhouse<br></br>
            Product: Men's clothing
          </p>
        </div>
        <div className="text-container-core usmall">
          <p>
            Post-production:
            <br />
            <br />
            VFX: Owl Studio <br />
            Animation: Esteban Ponce
            <br />
          </p>
        </div>
      </div>
      <div className="container-core-blank"></div>
    </>
  );
}
