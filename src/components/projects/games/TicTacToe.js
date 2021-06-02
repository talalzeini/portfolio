import React from "react";
import TicTacToeImage from "../../../images/xo.png";
export default function TicTacToe() {
  return (
    <div className="education-image" style={{ display: "inline-block" }}>
      <div style={{ textAlign: "left", float: "left" }}>
        <img src={TicTacToeImage} alt="" />
      </div>
    </div>
  );
}
