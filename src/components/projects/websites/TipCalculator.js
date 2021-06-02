import React from "react";
import TipCalculatorImage from "../../../images/piz.png";
export default function TipCalculator() {
  return (
    <div className="website-image">
      <img src={TipCalculatorImage} style={{ marginBottom: "20px" }} />
      <p>
        Tip Calculator
        <br />
        <br />
        <a href="https://talalzeini.github.io/tip-calculator" className="demoLink">
          Demo
        </a>
        <a href="https://github.com/talalzeini/tip-calculator" className="codeLink">
          Code
        </a>
      </p>
    </div>
  );
}
