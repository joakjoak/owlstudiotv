import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";
import ImageGallery from "../ImageGallery";

function FruitBox() {
  return (
    <>
      <FruitBoxInside />
    </>
  );
}

export default FruitBox;

function FruitBoxInside() {
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
    "../images/fruitbox/naranja1.png",
    "../images/fruitbox/naranja2.png",
  ];

  return (
    <>
      <div className="overlay-container">
        <div className="loader"></div>
      </div>
      <h1 className="Title">Fruit-Box</h1>;
      <h1 className="Subtitle">Advertising - Kraneo</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="text-container-core pages">
          <h1 className="Subtitle"> El Sabor que Estabas Esperando</h1>
          <p>
            Completely in CGI we created this wonderful natural diorama for the
            new Fruitbox campaign. Natural and Refreshing!
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
            url={"https://vimeo.com/325901563"}
            controls={true}
            width="100%"
            onReady={handleVideoReady}
          />
        </div>
      </div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <ImageGallery images={imageSources} />
      </div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <h1 className="credit-class">Credits:</h1>;
      <div className="container-core">
        <div className="text-container-core uright usmall">
          <p>
            Client: FruitBox <br />
            Product: FruitBox Piña <br />
            Agency: Kraneo <br />
            Producer: Tiki Taka - Owl Studio <br />
            Director: Nalini Alfonseca - Esteban Ponce
          </p>
        </div>
        <div className="text-container-core usmall">
          <p>
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
