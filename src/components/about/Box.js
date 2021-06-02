import React from "react";
import aboutProfile from "../../images/aboutprofile.jpg";
export default function Box() {
  return (
    <div>
      <div className="box" style={{ marginTop: "250px" }}>
        <div className="yourInfo">
          <img
            className="profile-image"
            onMouseDown="scream()"
            src={aboutProfile}
          />
          <h1 className="name">ABOUT ME</h1>
          <h2 className="info">San Jose, CA, USA</h2>
          <h4 className="info">Student at WVC</h4>
          <h4 className="info">Lebanese</h4>
          <h4 id="age" className="info">
            20
          </h4>
        </div>
        <div className="media">
          <li className="media-icons">
            <a>
              <i className="fas fa-plane" aria-hidden="true"></i>
            </a>
          </li>
          <li className="media-icons" style={{ marginLeft: "15px" }}>
            <a>
              <i className="fa fa-soccer-ball-o" aria-hidden="true"></i>
            </a>
          </li>
          <li
            className="media-icons"
            style={{
              textAlign: "center",
              margin: "0 auto",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          >
            <a>
              <i className="fas fa-bullseye" aria-hidden="true"></i>
            </a>
          </li>
          <li className="media-icons" style={{ marginRight: "15px" }}>
            <a>
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
            </a>
          </li>
          <li className="media-icons">
            <a>
              <i className="fa fa-amazon" aria-hidden="true"></i>
            </a>
          </li>
        </div>
      </div>
      <div className="scroll-down"></div>
    </div>
  );
}
