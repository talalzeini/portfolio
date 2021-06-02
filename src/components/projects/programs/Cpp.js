import React from "react";
import cppImage from "../../../images/c++.jpg";
export default function Cpp() {
  return (
    <div className="education-image" style={{ display: "inline-block" }}>
      <div style={{ textAlign: "left", float: "left" }}>
        <img src={cppImage} alt="" />
        <p>
          C++
          <br />
          <br />
          <a href="https://github.com/talalzeini/4A" className="programLink">
            Code
          </a>
        </p>
      </div>
    </div>
  );
}
