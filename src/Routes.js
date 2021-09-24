import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Journal from "./components/Journal/Journal";
import Widecards from "./components/WideCards/WideCards";
import Widecard from "./components/WideCards/WideCard";
import Quotes from "./pages/Quotes/Quotes";
import Book from "./pages/Book/Book";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quizes";
import Todo from "./pages/TodoList/TodoContainer";
import YourJournal from "./pages/YourJournal/YourJournal";
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
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/music">
          <Quotes />
        </Route>
        <Route path="/YourJournal">
          <YourJournal />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
