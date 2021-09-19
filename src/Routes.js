import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Journal from "./components/Journal/Journal";
import Widecards from "./components/WideCards/WideCards";
import Widecard from "./components/WideCards/WideCard";
import Quotes from "./pages/Quotes/Quotes";
import Book from "./pages/Book/Book";
import Home from "./pages/Home/Home";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
          {/* <Widecard /> */}
        </Route>
        <Route path="/journal">
          <Journal />
        </Route>
        <Route path="/book">
          <Book />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
