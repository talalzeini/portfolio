import React from "react";
import "../main/App.css";
import Navbar from "../navbar/Navbar";
import Box from "./Box";
import Footer from "../main/Footer";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import { Helmet } from "react-helmet";

const title = "Talal • About";
export default function About() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <Box />
      <Education />
      <Skills />
      <Experience />
      <Footer />
    </>
  );
}
