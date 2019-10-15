import React, { Component } from 'react'
import imagen from './no-foto.png'
//import './App.css';

export default class Question extends Component {
    render() {
        if(this.props.question.attachment !== null ){
            return (
                <div>
                    <img className = "foto" src={this.props.question.attachment.url} alt='Foto de la capital'/>
                    <div>
                        <p className = "texto">Question {this.props.currentQuestion + 1}</p>
                        <p className = "texto">{this.props.question.question}</p>
                    </div>
                </div>
                
            )
        }else{
            return (
            <div>
                <img className = "foto" src={imagen} alt='No existe foto'/>
                <div>
                    <p className = "texto">Question {this.props.currentQuestion + 1}</p>
                    <p className = "texto">{this.props.question.question}</p>
                </div>
            </div>
            )
        }
        
    }
}
