import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Projects";
export default function App() {
  return (
    <>
      <Route exact path="/" title="Home Talal" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
    </>
  );
}
