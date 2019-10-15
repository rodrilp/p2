import React, { Component } from 'react'
//import './App.css';

export default class Question extends Component {
    render() {
        return (
            <div>
                <p className = "texto">Question {this.props.currentQuestion + 1}</p>
                <p className = "texto">{this.props.question.question}</p>
            </div>
            
        )
    }
}
