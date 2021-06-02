import React from "react";
import CodingSensation from "./websites/CodingSensation";
import CoronaTracker from "./websites/CoronaTracker";
import Ecommerce from "./websites/Ecommerce";
import MathQuiz from "./websites/MathQuiz";
import QuizGenerator from "./websites/QuizGenerator";
import RealEstate from "./websites/RealEstate";
import SortingVisualizer from "./websites/SortingVisualizer";
import SoccerSimulation from "./websites/SoccerSimulation";
import TipCalculator from "./websites/TipCalculator";

export default function Websites() {
  return (
    <div style={{ marginTop: "150px" }}>
      <h1 className="name">WEBSITES</h1>
      <a href="https://tzeini.web.app" className="subTitle">
        Tree
      </a>
      <div className="website-images" style={{ marginTop: "50px" }}>
        <CodingSensation />
        <SortingVisualizer />
        <CoronaTracker />
        <QuizGenerator />
        <MathQuiz />
        <RealEstate />
        <Ecommerce />
        <SoccerSimulation />
        <TipCalculator />
      </div>
    </div>
  );
}
