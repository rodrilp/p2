import React, { Component } from 'react'
import './App.css';

export default class Question extends Component {
    render() {
        return (
            <div>
                {this.props.question.question}
                <input  type ='text'
                        value={this.props.question.userAnswer || ""}
                        onChange = {(e)=> {this.props.onQuestionAnswer(e.target.value)}}
                />
                 <img src={this.props.imagen} width="600px" weigth="600px"/>
            </div>
        )
    }
}
