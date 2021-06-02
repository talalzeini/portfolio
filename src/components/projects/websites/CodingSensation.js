import React from "react";
import csImage from "../../../images/cs.jpg";
export default function CodingSensation() {
  return (
    <div className="website-image" style={{ margin: "0 auto", background: "#fff" }}>
      <img src={csImage} style={{ marginBottom: "20px" }} />
      <p>
        Coding Sensation
        <br />
        <br />
        <a href="https://codingsensation.com" className="demoLink">
          Website
        </a>
        <a href="https://youtube.com/c/codingsensation" className="codeLink">
          About
        </a>
      </p>
    </div>
  );
}
