import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../main/Footer";
import Box from "./Box";
import Websites from "./Websites";
import { Helmet } from "react-helmet";
import Programs from "./Programs";
import Games from "./Games";
const title = "Talal • Projects";
export default function Projects() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <Box />
      <Websites />
      <Programs />
      <Games />
      <Footer />
    </>
  );
}
