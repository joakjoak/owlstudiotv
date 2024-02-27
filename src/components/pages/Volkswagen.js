import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";
import ImageGallery from "../ImageGallery";

function Volkswagen() {
  return (
    <>
      <VolkswagenIN />
    </>
  );
}

export default Volkswagen;

function VolkswagenIN() {
  const imageSources = [
    "../images/vw/vw1.webp",
    "../images/vw/vw2.webp",
    "../images/vw/vw3.webp",
  ];

  return (
    <>
      <h1 className="Title">Volkswagen</h1>;
      <h1 className="Subtitle">Stillframes</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="text-container-core pages">
          <h1 className="Subtitle"> Volkswagen Amarok</h1>
          <p>
            For a magazine report Volkswagen needed to connect two concepts for
            their 4x4 Amarok Pick-up: The countryside and the techonology. We
            created then different fields made up by chipset elements, unifying
            the rural enviroment with the modern world.
          </p>
        </div>
      </div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <ImageGallery images={imageSources} />
      </div>
      <div className="container-core-blank"></div>
    </>
  );
}
