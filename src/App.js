import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/About';
import Projects from './Components/Projects/Projects/Projects';
import Home from './Components/HomeMain/Home/Home';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
