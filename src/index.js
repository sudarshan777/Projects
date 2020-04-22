import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
//import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./login";
import Home from "./home";

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById("root")
);

// const routing = (
//   <Router>
//     <div>
//       <Route exact path="/" component={Login} />
//       <Route exact path="/home" component={Home} />
//     </div>
//   </Router>
// );

// ReactDOM.render(routing, document.getElementById("root"));
