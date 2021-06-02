import React from "react";
import cssImage from "../../images/css.png";
import htmlImage from "../../images/html.png";
import jsImage from "../../images/js.png";
import cImage from "../../images/c.png";
import cppImage from "../../images/c++.png";
import cSharpImage from "../../images/c-sharp.png";
import reactImage from "../../images/react.png";
import bootstrapImage from "../../images/bootstrap.jpg";
import firebaseImage from "../../images/firebase.png";
import swiftImage from "../../images/swift.jpg";
import piImage from "../../images/pi.png";
import unityImage from "../../images/unity.jpg";
export default function Skills() {
  return (
    <div>
      <div style={{ marginTop: "150px" }}>
        <h1 className="name">MY SKILLS</h1>
        <a href="projects.html" className="subTitle">
          Projects
        </a>
        <div className="education-images" style={{ marginTop: "50px" }}>
          <div style={{ display: "block" }}>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "left", float: "left" }}>
                <img src={cppImage} />
                <p>
                  C++
                  <br />
                  <br />I mastered the basics of C++ by taking a introductory
                  course at WVC.
                </p>
              </div>
            </div>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "center", float: "left" }}>
                <img src={cImage} />
                <p>
                  C<br />
                  <br />I took a C programming class at WVC to improve my
                  skills.
                </p>
              </div>
            </div>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "right", float: "right" }}>
                <img src={cSharpImage} />
                <p>
                  C#
                  <br />
                  <br />I learned the basic of C# by making games using the
                  Unity Engine.
                </p>
              </div>
            </div>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "right", float: "right" }}>
                <img src={htmlImage} />
                <p>
                  HTML
                  <br />
                  <br />
                  Started my web development journey by mastering HTML.
                </p>
              </div>
            </div>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "right", float: "right" }}>
                <img src={jsImage} />
                <p>
                  JavaScript
                  <br />
                  <br />
                  Gained more programming skills and experience by learning
                  JavaScript.
                </p>
              </div>
            </div>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "right", float: "right" }}>
                <img src={cssImage} />
                <p>
                  CSS
                  <br />
                  <br />
                  Improved my web design skills by practicing CSS everyday.
                </p>
              </div>
            </div>

            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "right", float: "right" }}>
                <img src={reactImage} />
                <p>
                  React.js
                  <br />
                  <br />
                  Improved my web development skills by learning React.js on my
                  own.
                </p>
              </div>
            </div>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "right", float: "right" }}>
                <img src={bootstrapImage} />
                <p>
                  Bootstrap
                  <br />
                  <br />
                  Used and learned bootstrap in my first internship and in many
                  projects.
                </p>
              </div>
            </div>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "right", float: "right" }}>
                <img src={firebaseImage} />
                <p>
                  Firebase
                  <br />
                  <br />
                  Mastered the use of Firebase Authentication and Database
                </p>
              </div>
            </div>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "right", float: "right" }}>
                <img src={swiftImage} />
                <p>
                  Swift
                  <br />
                  <br />
                  Learned the basics of Swift by making games and iOS
                  applications.
                </p>
              </div>
            </div>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "left", float: "left" }}>
                <img src={piImage} />
                <p>
                  Raspberry Pi
                  <br />
                  <br />
                  Strengthened my skills by using the Raspberry Pi in two of my
                  CS classes.
                </p>
              </div>
            </div>
            <div
              className="education-image"
              style={{ display: "inline-block" }}
            >
              <div style={{ textAlign: "center", float: "left" }}>
                <img src={unityImage} />
                <p>
                  Unity Engine
                  <br />
                  <br />
                  Started to learn game development by making games using Unity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
