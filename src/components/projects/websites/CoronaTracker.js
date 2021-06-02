import React from "react";
import CoronaTrackerImage from "../../../images/tracorona.png";
export default function CoronaTracker() {
  return (
    <div className="website-image">
      <img src={CoronaTrackerImage} style={{ marginBottom: "20px" }} />
      <p>
        Corona Tracker
        <br />
        <br />
        <a href="https://talalzeini.github.io/tracorona.live" className="demoLink">
          Demo
        </a>
        <a href="https://github.com/talalzeini/tracorona.live" className="codeLink">
          Code
        </a>
      </p>
    </div>
  );
}
