import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import App from "./components/main/App";
const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return children || null;
};

export default withRouter(ScrollToTop);

ReactDOM.render(
  <Router>
    <Switch>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Switch>
  </Router>,
  document.getElementById("root")
);
