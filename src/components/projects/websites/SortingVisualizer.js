import React from "react";
import sortingVisualizerImage from "../../../images/sorting.png";
export default function SortingVisualizer() {
  return (
    <div className="website-image">
      <img src={sortingVisualizerImage} style={{ marginBottom: "20px" }} />
      <p>
        Sorting Visualizer
        <br />
        <br />
        <a
          href="https://talalzeini.github.io/sorting-visualizer"
          className="demoLink"
        >
          Demo
        </a>
        <a
          href="https://github.com/talalzeini/sorting-visualizer"
          className="codeLink"
        >
          Code
        </a>
      </p>
    </div>
  );
}
