import React from "react";
import pythonImage from "../../../images/python.jpg";
export default function Python() {
  return (
    <div className="education-image" style={{ display: "inline-block" }}>
      <div style={{ textAlign: "center", float: "left" }}>
        <img src={pythonImage} alt="" />
        <p>
          Python
          <br />
          <br />
          <a href="https://github.com/talalzeini/5A" className="programLink">
            Code
          </a>
        </p>
      </div>
    </div>
  );
}
