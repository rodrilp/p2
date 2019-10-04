import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from './Game';
import Botonera from './Botonera'
import {questionAnswer} from './redux/actions'



export class App extends Component {

  render() {
    console.log(this.props);
    return (
      <div className = 'App'>
        <div className = 'Navbar'>
          <h1>QUIZ GAME</h1>
        </div>
        <Game question = {this.props.questions[this.props.currentQuestion]}
              currentQuestion = {this.props.currentQuestion}
              onQuestionAnswer={(answer) => {
                this.props.dispatch(questionAnswer(this.props.currentQuestion, answer));
              }}
        />
        <Botonera/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
  ...state
  };
}

export default connect(mapStateToProps)(App);