import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./login";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
