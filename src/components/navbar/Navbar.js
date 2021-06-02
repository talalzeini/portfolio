import React from "react";
import { withRouter } from "react-router-dom";
import "./Navbar.css";
import CornerLink from "./CornerLink";
import AboutLink from "./AboutLink";
import HomeLink from "./HomeLink";
import ProjectsLink from "./ProjectsLink";
import { useLocation } from "react-router-dom";
// HOME
const hideHome = (props) => {
  const { location } = props;
  if (location.pathname.match(/about/) || location.pathname.match(/projects/)) {
    return <HomeLink />;
  }
  return null;
};
const HomeLinkToHide = withRouter(hideHome);
// ABOUT
const hideAbout = (props) => {
  const { location } = props;
  if (!location.pathname.match(/about/)) {
    return <AboutLink />;
  }
  return null;
};
const AboutLinkToHide = withRouter(hideAbout);
// PROJECTS
const hideProjects = (props) => {
  const { location } = props;
  if (!location.pathname.match(/projects/)) {
    return <ProjectsLink />;
  }
  return null;
};
const ProjectsLinkToHide = withRouter(hideProjects);
export default function Navbar() {
  return (
    <>
      <nav>
        <div className="menu-wrap">
          <CornerLink />
          <input id="this" type="checkbox" className="toggler" />
          <div className="hamburger">
            <div></div>
          </div>
          <div className="menu">
            <div className="pageLinks">
              <HomeLinkToHide />
              <AboutLinkToHide />
              <ProjectsLinkToHide />
              <a
                href="html/resume.docx"
                download="resume.docx"
                className="pageLink"
              >
                Resume
              </a>
              <a href="https://tzeini.web.app" className="pageLink">
                Tree
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
