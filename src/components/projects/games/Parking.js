import React from "react";
import parkingImage from "../../../images/park.png";
export default function Parking() {
  return (
    <div className="education-image" style={{ display: "inline-block" }}>
      <div style={{ textAlign: "left", float: "left" }}>
        <img src={parkingImage} alt="" />
      </div>
    </div>
  );
}
