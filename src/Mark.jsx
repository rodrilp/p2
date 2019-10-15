import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import './App.css';

export default class Mark extends Component {
    render() {
        return (
            <div>
                Has acertado {this.props.score} preguntas!
                <p>
                <Button variant="success"
                        onClick = {()=> this.props.onReset()}>Play Again
                </Button>
                </p>
            </div>
        )
    }
}