import React from "react";
import mainImage from "../../images/mainimage.jpg";

export default function Box() {
  return (
    <div>
      <div className="box">
        <div className="yourInfo">
          <img id="profile-image" className="profile-image" src={mainImage} />
          <h1 className="name">TALAL EL ZEINI</h1>
          <h2 className="info">Web Developer</h2>
          <h4 className="info">Game Developer</h4>
          <h4 className="info">Student</h4>
          <h4 id="age" className="info">
            20
          </h4>
        </div>
        <div className="media">
          <li className="media-icons">
            <a id="insta-icon" href="https://www.instagram.com/talalzeini/">
              <i className="fab fa-instagram-square" aria-hidden="true"></i>
            </a>
          </li>
          <li className="media-icons" style={{ marginLeft: "15px" }}>
            <a id="linked-icon" href="https://www.linkedin.com/in/talalzeini/">
              <i className="fab fa-linkedin" aria-hidden="true"></i>
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
            <a id="twitter-icon" href="https://www.twitter.com/talalzeini/">
              <i className="fab fa-twitter-square" aria-hidden="true"></i>
            </a>
          </li>
          <li className="media-icons" style={{ marginRight: "15px" }}>
            <a
              id="wp-icon"
              href="https://api.whatsapp.com/send?phone=14088180894"
            >
              <i className="fab fa-whatsapp-square" aria-hidden="true"></i>
            </a>
          </li>
          <li className="media-icons">
            <a id="git-icon" href="https://www.github.com/talalzeini/">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
