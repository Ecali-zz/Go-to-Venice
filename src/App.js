import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';

import Home from './Home';
import Contact from './Contact';
import About from './About';
import Error from './pagenotfound';

import Nav from './nav'

//import {Route, Link} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route component ={Error} />
          </Switch>
      </div>
    </Router>
    
  );
}


export default App;
