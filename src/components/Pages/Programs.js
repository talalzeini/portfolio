import React, { Component } from "react";
import "../styles/websites.css";

class Programs extends Component {
  render() {
    return (
      <div className="section">
        <h1 className="name">PROGRAMS</h1>
        <hr className="hr-25" />
        <div className="linksSeperator">
          <div className="website-link">
            <h2>Python</h2>
          </div>
          <div className="website-link">
            <h2>Introduction to C++</h2>
          </div>
          <div className="website-link">
            <h2>Data Structures in C++</h2>
          </div>
          <div className="website-link">
            <h2>Assembly</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Programs;
