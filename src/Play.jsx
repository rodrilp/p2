import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'
import Game from './Game.jsx';
import Botonera from './Botonera.jsx';
import Mark from './Mark.jsx';
import {questionAnswer, changeQuestion, changeIndividual, submit, initQuestion, reset} from './redux/actions.jsx';

export class Play extends Component {

    loadQuizzes(){
      fetch('https://quiz.dit.upm.es/api/quizzes/random10wa?token=32403b83b30b3e467e6c')
      .then((response) =>{
        return response.json();
      })
      .then((data) => this.props.dispatch(initQuestion(data)))
    }

    componentDidMount(){
      this.loadQuizzes();
    }  

    render() {
        //console.log(this.props);
    console.log(this.props.questions)
    if(this.props.questions.length>0){
      if(!this.props.finished){
        return (
          <div>
            <div className = 'Navbar'>
              <h1>QUIZ GAME</h1>
            </div>
            <div className = "play">
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
                        onChangeNumber = {(next) => this.props.dispatch(changeIndividual(next))}
                        onChangequestion = {(next) =>this.props.dispatch(changeQuestion(next))}
                        onSubmit = {() => this.props.dispatch(submit(this.props.questions))}
                        onReset = {() => {
                          this.loadQuizzes()
                          this.props.dispatch(reset())}}
              />
            </div>
          </div>
        )
      }else {
        console.log(this.props.finished)
        return (
          <div className = 'App'>
            <div className = 'Navbar'>
              <h1>QUIZ GAME</h1>
            </div>
          <Mark score = {this.props.score}
                onReset = {() => {
                  this.loadQuizzes()
                  this.props.dispatch(reset())}}/>
          </div>
          
        )
      }
    }else{
      return(
        <div className='padre'>
          <div className = 'Navbar'>
              <h1>QUIZ GAME</h1>
          </div>
          <div className= 'spinner'>
            <p className = 'text'>Cargando las preguntas...</p>  
            <p className='rueda'><Spinner animation="border" variant="primary"/></p>
          </div>
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

export default connect(mapStateToProps)(Play);
