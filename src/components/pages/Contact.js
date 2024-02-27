import React from "react";
import "../../App.css";
import "../Navbar.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = new L.Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41], // icon center
  popupAnchor: [1, -34], // popup position
  iconSize: [25, 41], // icon size
  shadowSize: [41, 41], // shadow size
  shadowAnchor: [12, 41], // shadow center
});

function Contact() {
  return (
    <>
      <ContactInside />
    </>
  );
}

export default Contact;

function ContactInside() {
  return (
    <>
      <h1 className="Title">Contact us:</h1>;
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core">
        <div className="contact-container">
          <div className="contact-circular-image">
            <img src="../images/esteban.png" alt="Circular" />
          </div>
          <div className="contact-separator"></div>
          <div className="contact-title">
            <p>Esteban Ponce</p>
          </div>
          <div className="contact-text">
            <p>
              Esteban Ponce<br></br>
              +54 9 11 3327 1303<br></br>
              esteban@owlstudio.tv
            </p>
          </div>
        </div>
        {/* <div className="contact-container">
          <div className="contact-circular-image">
            <img src="../images/patricio.webp" alt="Circular" />
          </div>
          <div className="contact-separator"></div>
          <div className="contact-title">
            <p>Patricio Estrella</p>
          </div>
          <div className="contact-text">
            <p>
              Esta es la pequeña descripción de uno de los personajes... en este
              caso, Patricio Estrella.
            </p>
          </div>
        </div> */}

        <div className="text-container-core leftie">
          <p>
            -Santa Fé 1484, piso 14 <br />
            Ciudad Autónoma de Buenos Aires
            <br />
            Argentina
            <br />
            Código Postal: 1400
          </p>
        </div>
      </div>
      <div className="container-core-blank"></div>
      <div className="container-sep">
        <div className="separator"></div>
      </div>
      <div className="container-core-blank"></div>
      <div className="container-core">
        {/* <img src="../images/mapa.png" alt="Circular" /> */}
        <MapContainer center={[-34.596, -58.388]} zoom={17}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-34.596, -58.388]} icon={defaultIcon}>
            <Popup>Here!</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="container-core-blank"></div>
    </>
  );
}
