import React from "react";
import blocksImage from "../../../images/blocks.png";
export default function Parking() {
  return (
    <div className="education-image" style={{ display: "inline-block" }}>
      <div style={{ textAlign: "left", float: "left" }}>
        <img src={blocksImage} alt="" />
      </div>
    </div>
  );
}
