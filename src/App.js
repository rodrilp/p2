import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
}
from "react-router-dom"
import Home from './Home';
import Play from './Play';
import Practice from './Practice';



export class App extends Component {
  render() {
    
      return (
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/play/" component ={Play}/>
          <Route path="/practice" component={Practice}/>
        </Router>
        
      )
  }
}


function mapStateToProps(state) {
  return {
  ...state
  };
}

export default connect(mapStateToProps)(App);