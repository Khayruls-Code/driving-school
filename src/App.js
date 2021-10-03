import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Notfound from "./components/Notfound/Notfound";
import About from "./components/About/About";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='*'>
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
