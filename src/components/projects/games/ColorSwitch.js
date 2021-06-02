import React from "react";
import colorSwitchImage from "../../../images/switch.png";
export default function colorSwitch() {
  return (
    <div className="education-image" style={{ display: "inline-block" }}>
      <div style={{ textAlign: "left", float: "left" }}>
        <img src={colorSwitchImage} alt="" />
      </div>
    </div>
  );
}
