import React, { Component } from 'react'
import Question from "./Question.jsx"
import Tips from "./Tips.jsx"
import Image from 'react-bootstrap/Image'
//import './App.css';
import Answer from "./Answer"


export default class Game extends Component {
    render() {
        let imagen = this.props.question.author.photo.url;
        return (
            <div>
                <Photo question = {this.props.question}/>
                <Question question = {this.props.question}
                          currentQuestion = {this.props.currentQuestion}
                          />
                <Answer question = {this.props.question}
                        _onChangeAnswer = {(next) => this.props.onQuestionAnswer(next)}/>

                
                <p className = "credits">Created by {this.props.question.author.username}
                    <Image className="fotoCreador" src={imagen} roundedCircle alt ="Avatar del creador de la pregunta"/>
                </p>
                <Tips question = {this.props.question}/>
            </div>
        )
    }
}
