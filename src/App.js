import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from './Game';

function App(props) {
  console.log(props)
  return (
    <div className='App'>
      <Game question={props.questions[props.currentQuestion]}
            onQuestionAnswer={answer => {
              this.props.dispatch(questionAnswer(this.props.currentQuestion, answer));
            }}
      />
    </div>
    
    
  );
}

function mapStateToProps(state) {
  return {
  ...state
  };
}
export default connect(mapStateToProps)(App);