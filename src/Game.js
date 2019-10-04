import React, { Component } from 'react'
import Question from "./Question"
import './App.css';


export default class Game extends Component {
    render() {
        return (
            <div>
                <Question question = {this.props.question}
                            currentQuestion = {this.props.currentQuestion}/>
                <input  className="caja"
                        type ='text'
                        value={this.props.question.userAnswer || ''}
                        onChange = {(e)=> {this.props.onQuestionAnswer(e.target.value)}}
                />
                
                <a className = "credits">Created by {this.props.question.author.username}</a>
            </div>
        )
    }
}
