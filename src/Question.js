import React, { Component } from 'react'
import './App.css';

export default class Question extends Component {
    render() {
        return (
            <div>
                <img className = "foto" src={this.props.question.attachment.url} />
                <p className = "texto">Question {this.props.currentQuestion + 1}
                <p>{this.props.question.question}</p></p>
            </div>
        )
    }
}
