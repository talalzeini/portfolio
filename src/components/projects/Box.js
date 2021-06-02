import React from "react";
import gamerImage from "../../images/gamer.jpg";
export default function Box() {
  return (
    <>
      <div className="box" style={{ marginTop: "250px" }}>
        <div className="yourInfo">
          <img className="profile-image" src={gamerImage} alt="" />
          <h1 className="name">Projects</h1>
          <h2 className="info">Websites</h2>
          <h4 className="info">Programs</h4>
          <h4 className="info">Games</h4>
          <h4 id="age" className="info">
            20
          </h4>
        </div>
        <div className="media">
          <li className="media-icons">
            <a id="insta-icon" href="https://www.instagram.com/talalzeini/">
              <i className="fab fa-bootstrap" aria-hidden="true"></i>
            </a>
          </li>
          <li className="media-icons" style={{ marginLeft: "15px" }}>
            <a>
              <i className="fab fa-html5" aria-hidden="true"></i>
            </a>
          </li>
          <li
            className="media-icons"
            style={{
              textAlign: "center",
              margin: "0 auto",
              marginRight: "15px",
              marginLeft: "15px",
            }}
          >
            <a>
              <i className="fab fa-python" aria-hidden="true"></i>
            </a>
          </li>
          <li className="media-icons" style={{ marginRight: "15px" }}>
            <a>
              <i className="fab fa-css3-alt" aria-hidden="true"></i>
            </a>
          </li>
          <li className="media-icons">
            <a>
              <i className="fab fa-js-square" aria-hidden="true"></i>
            </a>
          </li>
        </div>
      </div>
      <div className="scroll-down"></div>
    </>
  );
}
