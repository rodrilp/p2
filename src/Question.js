import React, { Component } from 'react'
import './App.css';

export default class Question extends Component {
    render() {
        return (
            <div>
                <img src={this.props.question.attachment.url} width="600px" weigth="600px"/>
                Question {this.props.currentQuestion}
                {this.props.question.question}
            </div>
        )
    }
}
