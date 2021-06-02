import React from "react";

import highSchoolImg from "../../images/lycee.jpg";
import flagImage from "../../images/lebanon.jpg";
import wvcImage from "../../images/wvc.jpg";
export default function Education() {
  return (
    <div style={{ marginTop: "150px" }}>
      <h1 className="name">EDUCATION</h1>
      <a href="../html/resume.docx" download="resume.docx" className="subTitle">
        Resume
      </a>
      <div className="education-images" style={{ marginTop: "50px" }}>
        <div style={{ display: "block" }}>
          <div className="education-image" style={{ display: "inline-block" }}>
            <div style={{ textAlign: "left", float: "left" }}>
              <img src={highSchoolImg} />
              <p>
                High School
                <br />
                <br />I went to a French school back in my home country.
              </p>
            </div>
          </div>
          <div className="education-image" style={{ display: "inline-block" }}>
            <div style={{ textAlign: "center", float: "left" }}>
              <img src={flagImage} />
              <p>
                Origin
                <br />
                <br />I grew up in Lebanon until I moved to California in August
                2019.
              </p>
            </div>
          </div>
          <div className="education-image" style={{ display: "inline-block" }}>
            <div style={{ textAlign: "right", float: "right" }}>
              <img src={wvcImage} alt="" />
              <p>
                College
                <br />
                <br />
                I'm currently taking many courses at West Valley College.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
