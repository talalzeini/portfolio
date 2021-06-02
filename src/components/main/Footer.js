import React from "react";
import lightImage from "../../images/light.png";
export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-info">
          <img
            className="statue-image"
            style={{ borderRadius: "0px", marginBottom: "10px" }}
            src={lightImage}
          />
          <a>TALAL EL ZEINI </a>
          <a>San Jose, CA, USA </a>
          <a>talalzeini@gmail.com </a>
          <a>+1 (408) 818 0894</a>
          <a>© 2020 Talal El Zeini</a>
        </p>
      </div>
    </footer>
  );
}
