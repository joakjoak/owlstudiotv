import React, { useState } from "react";
import "../../App.css";
import "../Navbar.css";

function About() {
  return (
    <>
      {/* <HeroSection /> */}
      <AboutInside />
      {/* <GalleryOfThings /> */}
    </>
  );
}

export default About;

function AboutInside() {
  return (
    <>
      <h1 className="Title">About</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core">
        <div className="text-container-core usix">
          <p>
            Owl is a Creative Visual Effects Studio based in Santo Domingo and
            Buenos Aires. Founded in 2013 as a creative platform and playground
            for our own films and experiments, Owl today is using that same
            spirit but combining it with the resources of a production studio.
            On a project we can get involved at any stage of the creative
            process, ranging from concept, direction and art design to the
            actual production and finishing. We have built a digital
            infrastructure, which is flexible and strong designed to support
            rapid expansion and contraction based on project needs.
          </p>
        </div>
        <div className="image-container-core">
          <img src="../images/lexuza.webp" alt="Owl Studio"></img>
        </div>
      </div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-blank"></div>
    </>
  );
}

function GalleryOfThings() {
  const [currentGroup, setCurrentGroup] = useState(0);

  const totalGroups = 3; // Set the total number of groups

  const handlePrev = () => {
    setCurrentGroup((prevGroup) => (prevGroup - 1 + totalGroups) % totalGroups);
  };

  const handleNext = () => {
    setCurrentGroup((prevGroup) => (prevGroup + 1) % totalGroups);
  };

  return (
    <div className="gallery-container">
      <div
        className="group"
        // style={{ transform: `translateX(-${currentGroup * 100}vw)` }}
      >
        {/* Render only the current group */}
        {Array.from({ length: 1 }, (_, index) => (
          <div
            key={index}
            className={`group-item ${currentGroup === index ? "active" : ""}`}
          >
            {/* Content for the current group */}
            {currentGroup === 0 && (
              <>
                <div className="container-core-black">
                  <div
                    className="text-container-core usix"
                    style={{ color: "#fff" }}
                  >
                    <p>
                      Owl Studio is one of the leading providers of fluid
                      simulation, either for visualization or visual effects.
                      with clients throughout the continent. Liquid - Fire/Smoke
                      Particles - Cloth - Hair/Fur
                    </p>
                  </div>
                  <div className="image-container-core">
                    <img
                      src="../images/tecnomaster/1.png"
                      alt="Owl Studio"
                    ></img>
                  </div>
                </div>
              </>
            )}
            {currentGroup === 1 && (
              <>
                <div className="container-core-black">
                  <div className="image-container-core">
                    <img
                      src="../images/menswearhouse/1.png"
                      alt="Owl Studio"
                    ></img>
                  </div>
                  <div
                    className="text-container-core usix"
                    style={{ color: "#fff" }}
                  >
                    <p>
                      With the dosing of color, we are not only creating
                      beautiful images but also helping our clients to express
                      their vision in an exceptional way.
                    </p>
                  </div>
                </div>
              </>
            )}
            {currentGroup === 2 && (
              <>
                <div className="container-core-black">
                  <div
                    className="text-container-core usix"
                    style={{ color: "#fff" }}
                  >
                    <p>
                      We provide World class Visual Effects for films and
                      advertising
                    </p>
                  </div>
                  <div className="image-container-core">
                    <img src="../images/vw/vw3.webp" alt="Owl Studio"></img>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <button className="floating-button left" onClick={handlePrev}>
        &larr;
      </button>
      <button className="floating-button right" onClick={handleNext}>
        &rarr;
      </button>
      <div className="container-core-blank"></div>
    </div>
  );
}

// return (
//   <div className="gallery-container">
//     <div
//       className="group"
//       // style={{ transform: `translateX(-${currentGroup * 100}vw)` }}
//     >
//       {/* Render only the current group */}
//       {Array.from({ length: 1 }, (_, index) => (
//         <div
//           className={`group ${transitioning ? "group-transitioning" : ""}`}
//         >
//           {/* Content for the current group */}
//           {currentGroup === 0 && (
//             <>
//               <div className="container-core-black">
//                 <div
//                   className="text-container-core usix"
//                   style={{ color: "#fff" }}
//                 >
//                   <p>
//                     Owl Studio is one of the leading providers of fluid
//                     simulation, either for visualization or visual effects.
//                     with clients throughout the continent. Liquid - Fire/Smoke
//                     Particles - Cloth - Hair/Fur
//                   </p>
//                 </div>
//                 <div className="image-container-core">
//                   <img
//                     src="../images/tecnomaster/1.png"
//                     alt="Owl Studio"
//                   ></img>
//                 </div>
//               </div>
//             </>
//           )}
//           {currentGroup === 1 && (
//             <>
//               <div className="container-core-black">
//                 <div className="image-container-core">
//                   <img
//                     src="../images/menswearhouse/1.png"
//                     alt="Owl Studio"
//                   ></img>
//                 </div>
//                 <div
//                   className="text-container-core usix"
//                   style={{ color: "#fff" }}
//                 >
//                   <p>
//                     With the dosing of color, we are not only creating
//                     beautiful images but also helping our clients to express
//                     their vision in an exceptional way.
//                   </p>
//                 </div>
//               </div>
//             </>
//           )}
//           {currentGroup === 2 && (
//             <>
//               <div className="container-core-black">
//                 <div
//                   className="text-container-core usix"
//                   style={{ color: "#fff" }}
//                 >
//                   <p>
//                     We provide World class Visual Effects for films and
//                     advertising
//                   </p>
//                 </div>
//                 <div className="image-container-core">
//                   <img src="../images/vw/vw3.webp" alt="Owl Studio"></img>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//     </div>

//     <button className="floating-button left" onClick={handlePrev}>
//       &larr;
//     </button>
//     <button className="floating-button right" onClick={handleNext}>
//       &rarr;
//     </button>
//     <div className="container-core-blank"></div>
//   </div>
// );
// }
