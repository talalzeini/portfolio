import Footer from "./components/Layout/Footer";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Programs from "./components/Pages/Programs";
import Websites from "./components/Pages/Websites";
import "./components/styles/global.css";
import "./components/styles/variables.css";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Websites />
      <Programs />
      <Footer />
    </div>
  );
}

export default App;

// npm i @fortawesome/free-solid-svg-icons
// npm i @fortawesome/free-regular-svg-icons
// npm i @fortawesome/free-brands-svg-icons
// npm i react-router-dom
// npm i gh-pages --save-dev
