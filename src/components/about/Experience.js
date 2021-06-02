import React from "react";
import planeImage from "../../images/myplane.png";
import languagesImage from "../../images/languages.jpg";
import soccerImage from "../../images/soccer.jpg";
import amazonImage from "../../images/amazon.png";
import codeImage from "../../images/codeucate.jpg";
import targetImage from "../../images/target.jpg";
export default function Experience() {
  return (
    <div>
      <div style={{ marginTop: "150px" }}>
        <h1 className="name">EXPERIENCE</h1>
        <a href="projects.html" className="subTitle">
          Resume
        </a>
        <div className="education-images" style={{ marginTop: "50px" }}>
          <div style={{ display: "block" }}>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "left", float: "left" }}>
                <img src={codeImage} />
                <p>
                  Codeucate
                  <br />
                  <br />I collaborated with the Codeucate team, and contributed
                  to the web application wecodeucate.org using JavaScript and
                  Bootstrap.{" "}
                </p>
              </div>
            </div>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "center", float: "left" }}>
                <img src={targetImage} />
                <p>
                  Target
                  <br />
                  <br />
                  Maintained accurate and attractive merchandise displays,
                  ensuring strategic placement of products in order to maximize
                  purchases.
                </p>
              </div>
            </div>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "right ", float: "right" }}>
                <img src={amazonImage} />
                <p>
                  Amazon
                  <br />
                  <br />
                  Communicated with customers about their order and quickly
                  prepared their orders for delivery, as a Whole Foods Amazon
                  Shopper.
                </p>
              </div>
            </div>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "left", float: "left" }}>
                <img src={soccerImage} />
                <p>
                  Languages
                  <br />
                  <br />
                  Speaking more than one language fuels the brain. Thankfully, I
                  was able to become a trilingual person. More precisely, I can
                  speak Arabic, English and French.
                </p>
              </div>
            </div>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "right ", float: "right" }}>
                <img
                  className="plane-image"
                  style={{ background: "transparent" }}
                  src={planeImage}
                />
                <p>
                  Travel
                  <br />
                  <br />
                  Traveling enhances creativity. Before moving to the United
                  States of America, I had the privilege of taking a trip to
                  Turkey, Portugal, Greece, and even Paris.{" "}
                </p>
              </div>
            </div>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "center", float: "left" }}>
                <img src={languagesImage} />
                <p>
                  Languages
                  <br />
                  <br />
                  Speaking more than one language fuels the brain. Thankfully, I
                  was able to become a trilingual person. More precisely, I can
                  speak Arabic, English and French.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
