import React, { Component } from 'react'
import Question from "./Question"
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './App.css';


export default class Game extends Component {
    render() {
        return (
            <div>
                <Question question = {this.props.question}
                            currentQuestion = {this.props.currentQuestion}/>
                <input  className="caja"
                        type ='text'
                        value={this.props.question.userAnswer || ""}
                        onChange = {(e)=> {this.props.onQuestionAnswer(e.target.value)}}
                />
                  <ButtonGroup className = "botonera" aria-label="Basic example">
                    <Button variant="success">Submit</Button>
                    <Button variant="success">Previous</Button>
                    <Button variant="success">Next</Button>
                </ButtonGroup>
                <a className = "credits">Created by {this.props.question.author.username}</a>
            </div>
        )
    }
}
