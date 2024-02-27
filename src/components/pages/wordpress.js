import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../../App.css";
import "../Navbar.css";
import ImageGallery from "../ImageGallery";

function Wordpress() {
  return (
    <>
      <WordpressInside />
    </>
  );
}

export default Wordpress;

function WordpressInside() {
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
    "../images/wordpress/wp1.png",
    "../images/wordpress/wp2.png",
    "../images/wordpress/wp3.png",
    "../images/wordpress/wp4.png",
    "../images/wordpress/wp5.png",
    "../images/wordpress/wp6.png",
  ];

  return (
    <>
      <div className="overlay-container">
        <div className="loader"></div>
      </div>
      <h1 className="Title">WordPress</h1>;
      <h1 className="Subtitle">Advertising - Interesting Development</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-pages">
        <div className="text-container-core pages">
          <h1 className="Subtitle"> Small World</h1>
          <p>
            For the new WordPres campaign it was necessary to make everyone very
            small, so we did it.
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
            url={"https://vimeo.com/317251690"}
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
            Agency & Production:
            <br></br>
            <br></br>
            Client: WordPress
            <br />
            Product: WordPress
            <br />
            Agency: Interesting Development
            <br />
            Producer: Landia
            <br />
            Director: Miguel Campana
          </p>
        </div>
        <div className="text-container-core usmall">
          <p>
            Post-production:
            <br />
            <br />
            VFX: Owl Studio / Sastre <br />
            Art-Director: Alejandro Taylor <br />
            Animation: Ernesto Cabada <br />
            Compositing: Alejandro Taylor
          </p>
        </div>
      </div>
      <div className="container-core-blank"></div>
    </>
  );
}
