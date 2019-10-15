import React, { Component } from 'react'

export default class Answer extends Component {
    render() {
        return (
            <div>
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
