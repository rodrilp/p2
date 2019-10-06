import React, { Component } from 'react'
import './App.css';

export default class Mark extends Component {
    render() {
        return (
            <div>
                Has acertado {this.props.score} preguntas!
            </div>
        )
    }
}