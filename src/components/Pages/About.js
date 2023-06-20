import {
  faGithubSquare,
  faLinkedin,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "../Common/Image";
import "../styles/about.css";

class About extends Component {
  render() {
    return (
      <div className="about-section">
        <div className="about-content">
          <div className="my-title">
            <h1 className="name">ABOUT ME</h1>
            <hr className="hr-50" />
          </div>

          <div className="about-image">
            <Image />
          </div>
          <div className="icons">
            <a href="https://github.com/talalzeini">
              <FontAwesomeIcon icon={faGithubSquare} className="icon" />
            </a>
            <a href="https://bit.ly/3qT5lzr">
              <FontAwesomeIcon icon={faYoutubeSquare} className="icon" />
            </a>
            <a href="https://linkedin.com/in/talalzeini">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </div>
          <div className="about-title">
            <h1>
              <b>A dedicated Front-end Developer based in San Jose</b>
            </h1>
            <p class="about-paragraph">
              My name is Talal and I'm a highly aspiring computer science
              student with a passion for building things that live on the
              internet. I started learning how to code right after I graduated
              from high school, and since then, coding has become an engaging
              hobby for me which helped me develop and design countless software
              projects showcased in an interactive portfolio website built using
              HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
