import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <Header />
            <Slider />
          </Route>
          <Route path="/">
            <Header />
            <Hero />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
