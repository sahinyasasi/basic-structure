import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => (
  <Router>
    <Fragment>
      {/*<Route exact path='/' component={Landing} />*/}
      <h1>App</h1>
    </Fragment>
  </Router>
);
export default App;
