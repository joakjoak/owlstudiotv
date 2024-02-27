import React, { useState } from "react";
import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="image-gallery-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="gallery-image"
          onClick={() => openModal(image)}
        />
      ))}

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <img
            src={selectedImage}
            alt="Fullscreen"
            className="fullscreen-image"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
