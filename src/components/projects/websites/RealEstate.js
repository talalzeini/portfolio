import React from "react";
import RealEstateImage from "../../../images/properties.png";
export default function RealEstate() {
  return (
    <div className="website-image">
      <img src={RealEstateImage} style={{ marginBottom: "20px" }} />
      <p>
        Real Estate Website
        <br />
        <br />
        <a href="https://talalzeini.github.io/real-estate" className="demoLink">
          Demo
        </a>
        <a href="https://github.com/talalzeini/real-estate" className="codeLink">
          Code
        </a>
      </p>
    </div>
  );
}
