import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from './Game';
import Botonera from './Botonera'
import Mark from './Mark'
import {questionAnswer, changeQuestion, submit} from './redux/actions'



export class App extends Component {

  render() {
    //console.log(this.props);
    console.log(this.props.questions)
    if(!this.props.finished){
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
          <Botonera question = {this.props.questions[this.props.currentQuestion]}
                    currentQuestion = {this.props.currentQuestion}
                    length = {this.props.questions.length}
                    finished = {this.props.finished}
                    onChangequestion = {(next) =>this.props.dispatch(changeQuestion(next))}
                    onSubmit = {() => this.props.dispatch(submit(this.props.questions))}/>
        </div>
      )
    }else {
      console.log(this.props.finished)
      return (
        <div className = 'App'>
          <div className = 'Navbar'>
            <h1>QUIZ GAME</h1>
          </div>
        <Mark score = {this.props.score}/>
        </div>
        
      )
    }
    
    
  }
}


function mapStateToProps(state) {
  return {
  ...state
  };
}

export default connect(mapStateToProps)(App);