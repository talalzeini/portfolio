import React from "react";
import { Link } from "react-router-dom";
export default function ProjectsLink() {
  return (
    <div>
      {" "}
      <Link className="pageLink" to="/projects">
        Projects
      </Link>
    </div>
  );
}
