import React, { Component } from 'react'
import imagen from './no-foto.png'
import './App.css';

export default class Question extends Component {
    render() {
        if(this.props.question.attachment !== null ){
            return (
                <div>
                    <img className = "foto" src={this.props.question.attachment.url} alt=''/>
                    <p className = "texto">Question {this.props.currentQuestion + 1}
                    <p>{this.props.question.question}</p></p>
                </div>
            )
        }else{
            return (
            <div>
                <img className = "foto" src={imagen} alt=''/>
                <p className = "texto">Question {this.props.currentQuestion + 1}
                <p>{this.props.question.question}</p></p>
            </div>
            )
        }
        
    }
}
