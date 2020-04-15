import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./login";
import Home from "./home";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
