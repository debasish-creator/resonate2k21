import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Journal from "./components/Journal/Journal";
import Widecards from "./components/WideCards/WideCards";
import Widecard from "./components/WideCards/WideCard";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Widecards />
          <Widecards />
          {/* <Widecard /> */}
        </Route>
        <Route path="/journal">
          <Journal />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
