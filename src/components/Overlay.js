import "./Overlay.css";
import React, { useState, useEffect } from "react";

function Overlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000); // Adjust the delay to match your loading duration

    return () => clearTimeout(timer);
  }, []);

  return visible ? (
    <div className="overlay-container">
      <div className="loader"></div>
    </div>
  ) : null;
}

export default Overlay;
