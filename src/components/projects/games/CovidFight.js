import React from "react";
import CovidFightImage from "../../../images/covid.png";
export default function CovidFight() {
  return (
    <div className="education-image" style={{ display: "inline-block" }}>
      <div style={{ textAlign: "left", float: "left" }}>
        <img src={CovidFightImage} alt="" />
      </div>
    </div>
  );
}
