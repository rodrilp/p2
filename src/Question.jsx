import React, { Component } from 'react'
import './App.css';

export default class Question extends Component {
    render() {
        return (
            <div className= 'pregunta'>
                <p className = "texto1">Question {this.props.currentQuestion + 1}</p>
                <p className = "texto2">{this.props.question.question}</p>
            </div>
            
        )
    }
}
