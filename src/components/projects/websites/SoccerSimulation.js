import React from "react";
import SoccerSimulationImage from "../../../images/soccer.png";
export default function Ecommerce() {
  return (
    <div className="website-image">
      <img src={SoccerSimulationImage} style={{ marginBottom: "20px" }} />
      <p>
        Soccer Simulation Game
        <br />
        <br />
        <a href="https://talalzeini.github.io/soccer-game" className="demoLink">
          Demo
        </a>
        <a href="https://github.com/talalzeini/soccer-game" className="codeLink">
          Code
        </a>
      </p>
    </div>
  );
}
