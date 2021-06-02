import React from "react";
import MathQuizImage from "../../../images/math-quiz.png";
export default function MathQuiz() {
  return (
    <div className="website-image">
      <img src={MathQuizImage} style={{ marginBottom: "20px" }} />
      <p>
        Math Quiz
        <br />
        <br />
        <a href="https://talalzeini.github.io/math-quiz" className="demoLink">
          Demo
        </a>
        <a href="https://github.com/talalzeini/math-quiz" className="codeLink">
          Code
        </a>
      </p>
    </div>
  );
}
