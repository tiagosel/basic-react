import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import Home from "./Home";
import About from "./About";

ReactDOM.render(
  <Router>
    <div>
      <App />

      <Route exact path="/" component={Home} />
      <Route path="/about/:minhaVariavel" component={About} />
    </div>
  </Router>,
  document.getElementById("root")
);
