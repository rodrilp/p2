import React, { Component } from 'react'
import "./App.css"

export default class Answer extends Component {
    render() {
        return (
            <div className = "respuesta">
                <input  className="caja"
                        type ='text'
                        value={this.props.question.userAnswer || ''}
                        placeholder='Introduzca su respuesta'
                        title ="Respuesta"
                        onChange = {(e)=> {this.props._onChangeAnswer(e.target.value)}}
                />
            </div>
        )
    }
}
