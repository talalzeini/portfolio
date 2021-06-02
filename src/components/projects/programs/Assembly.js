import React from "react";
import assemblyImage from "../../../images/assembly.png";
export default function Assembly() {
  return (
    <div className="education-image" style={{ display: "inline-block" }}>
      <div style={{ textAlign: "center", float: "left" }}>
        <img src={assemblyImage} />
        <p>
          Assembly
          <br />
          <br />
          <a href="https://github.com/talalzeini/ASM" className="programLink">
            Code
          </a>
        </p>
      </div>
    </div>
  );
}
