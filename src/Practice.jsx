import React, { Component } from 'react'
//import './App.css';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'
import Game from './Game.jsx';
import Botonera from './Botonera.jsx'
import Mark from './Mark.jsx'
import {Link} from "react-router-dom"
import Image from 'react-bootstrap/Image'
import {questionAnswer, changeQuestion, changeIndividual, submit, initQuestion, reset} from './redux/actions.jsx'

export class Practice extends Component {
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
          <div className = 'App'>
            <div className = 'Navbar'>
              <h1>QUIZ GAME</h1>
              <Link to="/"><Image className = "home" src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEUAAAD///9oaGiHh4eKiorv7++SkpI2NjZvb2/6+vrQ0NBbW1tycnJlZWVra2tgYGDm5uZVVVW+vr57e3vExMQtLS1QUFAWFhYMDAyrq6vd3d1LS0ufn58iIiLX19eysrIOHgysAAAC0ElEQVRoge3b7XaCMAwG4IwNRGQTp84Ndbv/uxzCnEiTNin92M7p+1t5TjFtg1Z4iBb4j3TzWmy3xWsTnG7LM/Q5l21Y+gSjnELSNdylDkevYJJNKFqRAVZB6GWmygDPS//0ssRkgFJsS2lKtrClNCkDvPil17QMsPZJb3SydI6JaO2YxeMW0HSF3SKpNT7NkUU2n2bJne2efubJ3brmmkbWbSrc9ZxJC2S2zaKXLxK5W9dYtcahebUtthn0sjZb03DmGING92dTMhe0cfXEY15TjbRhx6Bj3EtMtNXdHmK653paOqvuY6hzLW1T2+PUWltLzxpzP25besbnfI3u89bQ1rU9jqbOadpyPk9Dz2+Kxp8xbJJRtUbQc2t7HGo9x2n5XmVh4/TsWXUffI6htKgn4QTtWzDauYzbCM3uPSVB+lSFdltht6i1NqV9yYg9pb3J6nPJhHa0euJZ62gnOwadDU17HfMla4L2V2G3jGsNgsp3NoSVx/Yv7Wx/NiWb0h7WbSqrezqg/Gv3tLtuiJehZ4KAFXZLX2sX2mEfxk090I/hZYDHC72LIQPsOnofh94/QKRBd8OGIhZdwFss+g0OsegDvMei3yFSgQOcIfgiek0JH7HoD2hi0Q34bPp1KbuFNI8yvQ75ZeeKspTuhv06gr27NkhN0Nasa86aUVtYlYtQ7qKsJn143lZ9Pj21S/XncP02Rx/3+jz5oZ8USKU9tWqJTnSiMfpYqd8r5yfkhc5p4lBXK9lu7eh9rrxoiKS5sqPJkw+S5sqOLig6F2x3iU50ohOd6EQnOtGJTvTfp9WfBZzQ6kVU+ssP/cWgWz+0+g8o5EiMcj0X9EJ9N0Ird9wFrd5v9AzS9IIOaGTQKD39mno+fcAek9FDX83RLX1E/2VHnLI7jX8IomnWz0X7k+SUXXfVqthmQ9ZIify8qM5M2RYV9Z3Ev/yz5Ox8A9xjKTgJhFYlAAAAAElFTkSuQmCC"/></Link>
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
                    onChangeNumber = {(next) => this.props.dispatch(changeIndividual(next))}
                    onChangequestion = {(next) =>this.props.dispatch(changeQuestion(next))}
                    onSubmit = {() => this.props.dispatch(submit(this.props.questions))}
                    onReset = {() => {
                      this.loadQuizzes()
                      this.props.dispatch(reset())}}
          />
        </div>
        )
      }else {
        console.log(this.props.finished)
        return (
          <div className = 'app'>
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

export default connect(mapStateToProps)(Practice);
