import React from "react";
import { Link } from "react-router-dom";
export default function AboutLink() {
  return (
    <div>
      {" "}
      <Link className="pageLink" to="/about">
        About
      </Link>
    </div>
  );
}
