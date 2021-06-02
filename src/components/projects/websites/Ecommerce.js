import React from "react";
import EcommerceImage from "../../../images/ecommerce.png";
export default function Ecommerce() {
  return (
    <div className="website-image">
      <img src={EcommerceImage} style={{ marginBottom: "20px" }} />
      <p>
        E-commerce Website
        <br />
        <br />
        <a
          href="https://talalzeini.github.io/ecommerce-website"
          className="demoLink"
        >
          Demo
        </a>
        <a
          href="https://github.com/talalzeini/ecommerce-website"
          className="codeLink"
        >
          Code
        </a>
      </p>
    </div>
  );
}
