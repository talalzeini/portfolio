import React from "react";

export default function Links() {
  return (
    <div>
      <div className="links">
        <h1 className="info">
          <a href="html/about.html" className="link">
            About Me
          </a>
        </h1>
        <h2 className="info">
          <a href="html/projects.html" className="link">
            Projects
          </a>
        </h2>
        <h3 className="info">
          <a href="html/resume.docx" download="resume.docx" className="link">
            Resume
          </a>
        </h3>
        <h4 className="info">
          <a href="https://tzeini.web.app" className="link">
            Tree
          </a>
        </h4>
      </div>
    </div>
  );
}
