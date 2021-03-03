import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <h1>Home page</h1>
          </Route>
          <Route path="/login" />
          <Route path="/checkout" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
