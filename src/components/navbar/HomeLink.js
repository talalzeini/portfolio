import React from "react";
import { Link } from "react-router-dom";
export default function HomeLink() {
  return (
    <div>
      {" "}
      <Link className="pageLink" to="/">
        Home
      </Link>
    </div>
  );
}
