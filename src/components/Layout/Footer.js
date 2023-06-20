import React, { Component } from "react";
import StatueImage from "../assets/images/bitmoji/statue.webp";
import "../styles/footer.css";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div>
      <div className="footer-container section">
        <div className="footer-info">
          <img className="statue-image" src={StatueImage} alt="statue" />
          <a href="https://bit.ly/444uVQ4">Donate</a>
          <p>© {getCurrentYear()} Talal El Zeini</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
