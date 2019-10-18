import React, { Component } from 'react'
import Question from "./Question.jsx"
import Tips from "./Tips.jsx"
import Image from 'react-bootstrap/Image'
import Answer from './Answer'
import Photo from './Photo'
import './App.css'


export default class Game extends Component {
    render() {
        let imagen = this.props.question.author.photo.url;
        return (
            <div className = "content">
                <div className = "game">
                    <Photo question = {this.props.question}/>
                    <div className = "contenedor_game">
                        <div className = "autor">
                            <p className = "credits">Created by {this.props.question.author.username}
                                <Image className= "fotoCreador" src={imagen} roundedCircle alt ="Avatar del creador de la pregunta" width = "30px" height = "30px"/>
                            </p>  
                        </div>

                        <Question className="pregunta" 
                                question = {this.props.question}
                                currentQuestion = {this.props.currentQuestion}
                                />
                        <Answer question = {this.props.question}
                                _onChangeAnswer = {(next) => this.props.onQuestionAnswer(next)}/>  
                    </div>   
                    <Tips question = {this.props.question}/>                 
                </div>
            </div>
        )
    }
}
