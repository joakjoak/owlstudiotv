import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";

function Alamaula1() {
  return (
    <>
      <Alamaula1In />
    </>
  );
}

export default Alamaula1;

function Alamaula1In() {
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
      <h1 className="Title">Alamaula</h1>;
      <h1 className="Subtitle">Advertising - Gloria Films</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="text-container-core pages">
          <h1 className="Subtitle">Vende lo que no Usas</h1>
        </div>
      </div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="container-vid">
          {" "}
          <ReactPlayer
            url={"https://vimeo.com/120603578"}
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
            Client: eBay
            <br />
            Product: Alamaula
            <br />
            Agency: Young & Rubicam
            <br />
            Producer: Gloria Films
            <br />
            Director: Rosca
          </p>
        </div>
        <div className="text-container-core usmall">
          <p>
            Post-Production:
            <br></br>
            <br></br>
            VFX: Owl Studio
            <br />
            Art-Director: Esteban Ponce
            <br />
            Animation: Ernesto Cabada
            <br />
            Compositing: Bernardo Pichardo
          </p>
        </div>
      </div>
      <div className="container-core-blank"></div>
    </>
  );
}
