import React from "react";
import Book from "./pages/Book/Book";
import Cards from "./components/Cards/Cards";
import WideCards from "./components/WideCards/WideCards";
import Quotes from "./pages/Quotes/Quotes";
import Journal from "./components/Journal/Journal";
import Routes from "./Routes";
import TodoContainer from "./pages/TodoList/TodoContainer";
import Quizes from "./pages/Quiz/Quizes";
import Home from "./pages/Home/Home";
import styled from "styled-components";
import YourJournal from "./pages/YourJournal/YourJournal";

function App() {
  return (
    <div>
      {/* <Book /> */}
      {/* <Cards /> */}
      {/* <WideCards /> */}
      {/* <Quotes /> */}
      {/* <Journal /> */}

      <Routes />

      {/* <TodoContainer /> */}
      {/* <Quizes /> */}
      {/* <Quizes /> */}
      {/* <Quizes /> */}
      {/* <Home /> */}
      {/* <YourJournal /> */}
    </div>
  );
}

export default App;

// const Bodycolor = styled.div`
//   background-color: #17144bff;
// `;
