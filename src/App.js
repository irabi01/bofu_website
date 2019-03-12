import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation/>
          <Switch>
            <Route path="/" exact component = {Home}/>
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
