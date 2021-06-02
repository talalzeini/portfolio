import React from "react";
import QuizGeneratorImage from "../../../images/quizerator.png";
export default function QuizGenerator() {
  return (
    <div className="website-image">
      <img src={QuizGeneratorImage} style={{ marginBottom: "20px" }} />
      <p>
        Quiz Generator
        <br />
        <br />
        <a href="https://talalzeini.github.io/quiz-generator" className="demoLink">
          Demo
        </a>
        <a href="https://github.com/talalzeini/quiz-generator" className="codeLink">
          Code
        </a>
      </p>
    </div>
  );
}
