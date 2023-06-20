import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../styles/navbar.css";

const NavBar = ({ onDataReceived }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    onDataReceived(darkMode);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>
      <p className={`corner-name ${darkMode ? "active" : ""}`}>
        <a
          href="mailto:talalzeini@icloud.com"
          className="left"
          aria-label="Email Me Icon"
        >
          <i className="fa fa-comment"></i>
        </a>
        <a href="files/resume.pdf" aria-label="Download Resume Icon">
          <i className="fas fa-download"></i>
        </a>
      </p>
      <button
        onClick={toggleTheme}
        style={{
          fontSize: "20px",
          textAlign: "center",
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          cursor: "pointer",
          display: "block",
          margin: "15px auto",
        }}
      >
        <FontAwesomeIcon icon={darkMode ? faMoon : faMoon} />
      </button>
    </nav>
  );
};

export default NavBar;
