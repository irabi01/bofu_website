import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './pages/About';
import Services from './pages/Services'
import Showcase from './pages/Showcase';
import Contact from './pages/Contact';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation/>
          <Switch>
            <Route path="/" exact component = {Home}/>
            <Route path="/about" component = {About}/>
            <Route path="/services" component = {Services}/>
            <Route path="/showcases" component = {Showcase}/>
            <Route path="/contact" component = {Contact}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
