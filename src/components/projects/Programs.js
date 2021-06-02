import React from "react";
import Assembly from "./programs/Assembly";
import Cpp from "./programs/Cpp";
import Python from "./programs/Python";
export default function Programs() {
  return (
    <div style={{ marginTop: "150px" }}>
      <h1 className="name">PROGRAMS</h1>
      <a href="https://github.com/talalzeini" className="subTitle">
        Github
      </a>
      <div className="education-images" style={{ marginTop: "50px" }}>
        <div style={{ display: "block" }}>
          <Cpp />
          <Python />
          <Assembly />
        </div>
      </div>
    </div>
  );
}
