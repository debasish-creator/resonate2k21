import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Home />
      
    </Router>
  );
}

export default App;
