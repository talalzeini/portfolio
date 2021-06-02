import React from "react";
import "../main/App.css";
import helloImage from "../../images/myplane.png";
import Navbar from "../navbar/Navbar";
import Box from "./Box";
import Links from "./Links";
import Footer from "../main/Footer";
import { Helmet } from "react-helmet";

const title = "Talal Zeini";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="landing-page" id="sexy">
        <Navbar />
        <div>
          <img src={helloImage} className="hello-image" />
          <div className="scroll-down"></div>
        </div>
      </div>
      <Box />
      <Links />
      <Footer />
    </>
  );
}
