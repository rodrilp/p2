import React, { Component } from 'react'
import Question from "./Question"
import Tips from "./Tips"
import Image from 'react-bootstrap/Image'
import './App.css';


export default class Game extends Component {
    render() {
        let imagen = this.props.question.author.photo.url;
        return (
            <div>
                <Question question = {this.props.question}
                          currentQuestion = {this.props.currentQuestion}/>
                <input  className="caja"
                        type ='text'
                        value={this.props.question.userAnswer || ''}
                        title ="Respuesta"
                        onChange = {(e)=> {this.props.onQuestionAnswer(e.target.value)}}
                />
                <p className = "credits">Created by {this.props.question.author.username}
                    <Image className="fotoCreador" src={imagen} roundedCircle alt ="Avatar del creador de la pregunta"/>
                </p>
                <Tips question = {this.props.question}/>
            </div>
        )
    }
}
