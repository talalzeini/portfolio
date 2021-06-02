import React from "react";
import Parking from "./games/Parking";
import ThreeSixtySix from "./games/ThreeSixtySix";
import Blocks from "./games/Blocks";
import ColorSwitch from "./games/ColorSwitch";
import TicTacToe from "./games/TicTacToe";
import CovidFight from "./games/CovidFight";
export default function Games() {
  return (
    <div style={{ marginTop: "150px" }}>
      <h1 className="name">GAMES</h1>
      <a href="https://github.com/talalzeini" className="subTitle">
        Github
      </a>
      <div className="education-images" style={{ marginTop: "50px" }}>
        <div style={{ display: "block" }}>
          <Parking />
          <ThreeSixtySix />
          <Blocks />
          <ColorSwitch />
          <TicTacToe />
          <CovidFight />
        </div>
      </div>
    </div>
  );
}
