import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";

function CruzDeMalta() {
  return (
    <>
      <CruzDeMaltaIn />
    </>
  );
}

export default CruzDeMalta;

function CruzDeMaltaIn() {
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
      <h1 className="Title">Cruz de Malta</h1>;
      <h1 className="Subtitle">Advertising - Gloria Films</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="text-container-core pages">
          <h1 className="Subtitle">Nueva Cruz de Malta</h1>
          <p>Animation and color by Owl.</p>
        </div>
      </div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="container-vid">
          {" "}
          <ReactPlayer
            url={"https://vimeo.com/292385701"}
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
            Client: Cruz de Malta
            <br />
            Product: Nueva Cruz de Malta
            <br />
            Producer: Gloria Films
          </p>
        </div>
      </div>
      <div className="container-core-blank"></div>
    </>
  );
}
