import React, { useState } from "react";
import NavBar from "../Common/NavBar";
import AstonautImage from "../assets/images/bitmoji/astonaut.webp";
import PlaneImage from "../assets/images/bitmoji/plane.webp";
import "../styles/landing.css";

const Landing = () => {
  const [receivedData, setReceivedData] = useState("");

  const handleDataReceived = (data) => {
    setReceivedData(data);
  };

  const imageSource = receivedData === false ? AstonautImage : PlaneImage;

  return (
    <div className="landing-section">
      <NavBar onDataReceived={handleDataReceived} />
      <div className="landing-content">
        <div className="landing-image">
          <img src={imageSource} alt="Plane" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
